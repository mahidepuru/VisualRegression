let expect = require('chai').expect;

function expectGoodThings(results) {
    results.forEach((result) => expect(result.isExactSameImage).to.be.true);


}

describe('homepage', function () {
    beforeEach(function () {
        browser.url('/');
    });
    it('should look good', function () {
       // let report = browser.checkElement('.standard_logo');
        //expectGoodThings(report);

        browser
            .click('#skycom-shop')
           // .pause(1000)
            .click('.pricePod')
            .click('#section-1 > div.skycom_container.clearfix.hasTxAndTandCs.padded > div:nth-child(4) > div.pricePod > a')

            .click('#section-1 > div.skycom_container.clearfix.hasTxAndTandCs.padded > div.skycom-6.alpha.default > div.pricePod > a')
            .getText('.newprice')

            .getText('.supportive clearfix').should.be.equal('Includes line rental & Sky Talk + one off £9.95 set-up fee');






    });
})