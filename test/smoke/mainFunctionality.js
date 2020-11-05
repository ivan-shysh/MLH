const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
describe('Checking the main functionality', function () {

    describe('Happy path', function () {

        it('TC-021 Create button is clickable after 1-4 are filled in', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            const input = $(sel.name).addValue("Bobby");
            const inputGender = $$(sel.gender)[1].click();
            const inputAge = $(sel.age).addValue(123);
            const click = $(sel.storyClick).click();
            const inputStory = $$(sel.storyType)[6].click();
            const create  = $(sel.create).isEnabled();
            browser.pause(3000);
            expect(create).toEqual(true);

        });

    });

});