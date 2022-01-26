xdescribe('Watches Page', () => {
    it('Should show the banner container', () => {
        browser.url(
            'https://www.ebay.com/b/Watches-Parts-Accessories/260324/bn_2408535'
        );
        const promoBanner = $('#mainContent > section.b-module.b-promobanner.clearfix._FCF2BD5C1B05.d1img70');
        expect(promoBanner).toBeDisplayed();
    });   

    it('Should show the banner title', () => {        
        const infoTitle = $('#mainContent > section.b-module.b-promobanner.clearfix._FCF2BD5C1B05.d1img70 > div.b-promobanner__info > h2');
        const infoTitleText = infoTitle.getText();

        expect(infoTitle).toHaveTextContaining('Up to', 'off Rolex');
        chaiExpect(infoTitleText).to.not.be.empty;
        infoTitleText.should.not.be.empty;
        assert.isNotEmpty(infoTitleText);
    });

    it('Should contain link on banner button and verify it is clickable', () => {
        const shopButton = $('#mainContent > section.b-module.b-promobanner.clearfix._FCF2BD5C1B05.d1img70 > div.b-promobanner__info > a');
        const tag = shopButton.getTagName();

        expect(shopButton).toHaveLinkContaining('/fashion/');
        expect(shopButton).toBeClickable();
        chaiExpect(tag).to.equal('a');
        tag.should.be.equal('a');
    });

    it('Should click on the shop button and verify the new url', () => {
        const shopButton = $('#mainContent > section.b-module.b-promobanner.clearfix._FCF2BD5C1B05.d1img70 > div.b-promobanner__info > a');
        shopButton.click();

        const url = browser.getUrl();
        chaiExpect(url).to.include('/fashion/');
    });
});
