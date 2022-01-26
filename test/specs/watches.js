import WatchesPage from '../pages/watches.page';
import resources from '../resources';
import { waitAndClick } from '../utilities/helper';

describe('Watches Page', () => {
    before(() => {
        WatchesPage.open();
        WatchesPage.fashionLink.moveTo();
        waitAndClick(WatchesPage.watchesLink, 5000);
        WatchesPage.watchesHeader.waitForDisplayed({ timeout: 2000 });
    });

    it('Should verify the watches category list', () => {
        const watchesCategoryList = WatchesPage.getWatchesCategoryListText();
        chaiExpect(watchesCategoryList).to.deep.equal(
            resources.watchesCategoryList
        );            
    });

    it('Should show the banner container', () => {        
        expect(WatchesPage.promoBanner).toBeDisplayed();
    });   

    it('Should show the banner title', () => {        
        expect(WatchesPage.infoTitle).toHaveTextContaining('Up to', 'off Rolex');
    });

    it('Should contain link on banner button and verify it is clickable', () => {
        expect(WatchesPage.shopButton).toHaveLinkContaining('/fashion/');
        expect(WatchesPage.shopButton).toBeClickable;
    });

    it('Should click on the shop button and verify the new url', () => {
        WatchesPage.shopButton.click();
            const url = browser.getUrl();
            chaiExpect(url).to.include('/fashion/');
    });
});
