import Page from './page';

class WatchesPage extends Page {   
    get promoBanner() {
        return $('#mainContent > section.b-module.b-promobanner.clearfix._FCF2BD5C1B05.d1img70 > div.b-promobanner__info');
    }
    get infoTitle() {
        return $('#mainContent > section.b-module.b-promobanner.clearfix._FCF2BD5C1B05.d1img70 > div.b-promobanner__info > h2');
    }
    get shopButton() {
        return $('#mainContent > section.b-module.b-promobanner.clearfix._FCF2BD5C1B05.d1img70 > div.b-promobanner__info > a');
    }
    get watchesCategoryList() {
        return $$('section[id="s0-16-12-0-1[0]-0-0"] ul li');
    }
    get fashionLink() {
        return $('#mainContent > div.hl-cat-nav > ul > li:nth-child(4) > a');
    }
    get watchesLink() {
        return $('#mainContent > div.hl-cat-nav > ul > li:nth-child(4) > div.hl-cat-nav__flyout > div.hl-cat-nav__sub-cats > nav:nth-child(2) > ul > li:nth-child(1) > a');
    }
    get watchesHeader() {
        return $('body > div.pagecontainer.srp-main--isLarge > div.pagecontainer__top > h1');
    }
    

    open() {
        super.open('/');
    }

    getWatchesCategoryListText() {
        const watchesList = [];
        this.watchesCategoryList.map((element) => 
        watchesList.push(element.getText()));

        return watchesList;
        
    }
}

export default new WatchesPage();
