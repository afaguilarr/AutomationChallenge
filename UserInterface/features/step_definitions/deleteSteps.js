// features/step_definitions/deleteSteps.js

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

var deletedName;
var deletedExperience;

module.exports = function() {
	
	this.When(/^I click remove topic$/, function () {
	  // Write code here that turns the phrase above into concrete actions
	  deletedName = element(by.xpath('/html/body/app-root/app-topic/div/div/div[2]/mat-table/mat-row[1]/mat-cell[1]')).getText();
	  deletedExperience = element(by.xpath('/html/body/app-root/app-topic/div/div/div[2]/mat-table/mat-row[1]/mat-cell[3]')).getText();
	  let deleteButton = element(by.xpath('/html/body/app-root/app-topic/div/div/div[2]/mat-table/mat-row[1]/mat-cell[7]/a/span/i'));
	  return deleteButton.click();
	});
	
	this.When(/^I click yes$/, function () {
	  // Write code here that turns the phrase above into concrete actions
	  let yesButton = element(by.css('#mat-dialog-0 > app-delete-dialog > div > button.mat-raised-button'));
	  return yesButton.click();
	});
	
	this.Then(/^the topic is removed and I can not see the topic in the table$/, function ()
	{// Write code here that turns the phrase above into concrete actions
		let differentName = element(by.xpath('/html/body/app-root/app-topic/div/div/div[2]/mat-table/mat-row[1]/mat-cell[1]'));
		return (expect(differentName.getText()).to.not.equal(deletedName));
    });
	
	this.When(/^I wait for a while$/, function () {
	  // Write code here that turns the phrase above into concrete actions
	  return browser.sleep(1000);
	});
	
	this.When(/^I click add topic button$/, function () {
	  // Write code here that turns the phrase above into concrete actions
	  let addButton = element(by.xpath('/html/body/app-root/app-topic/div/div/div[3]/button/span'));
	  return addButton.click();
	});
	
	this.When(/^I fill in the name blank with the deleted topic's name$/, function () {
	  // Write code here that turns the phrase above into concrete actions
	  let name = element(by.id('mat-input-1'));
	  return name.sendKeys(deletedName);
	});
	
	this.When(/^I add the experience with the deleted topic's experience$/, function () {
	  // Write code here that turns the phrase above into concrete actions
		  let twoStars = element(by.css('#mat-option-0 > span'));
		  return twoStars.click();
	});
	
	this.When(/^I try to add the topic again$/, function () {
	  // Write code here that turns the phrase above into concrete actions
	  let addButton = element(by.css('#mat-dialog-1 > app-add-detail > form > div > div > button.btn.btn-success.mat-button > span'));
	  return addButton.click();
	});
	
	this.Then(/^I can see the topic is added again$/, function ()
	{// Write code here that turns the phrase above into concrete actions
		let elem = element.all(by.tagName('mat-row'));
		let length = elem.count().then(function(count){
		  let cell = element(by.xpath('/html/body/app-root/app-topic/div/div/div[2]/mat-table/mat-row[' + count + ']/mat-cell[1]'));
		  return expect(cell.getText()).to.eventually.contain(deletedName);
	  });
	});
	
	this.When(/^I click remove topic again$/, function () {
	  // Write code here that turns the phrase above into concrete actions
	  let deleteButton = element(by.xpath('/html/body/app-root/app-topic/div/div/div[2]/mat-table/mat-row[1]/mat-cell[7]/a/span/i'));
	  return deleteButton.click();
	});
	
	this.When(/^I click no$/, function () {
	  // Write code here that turns the phrase above into concrete actions
	  let noButton = element(by.css('#mat-dialog-2 > app-delete-dialog > div > button.mat-button > span'));
	  return noButton.click();
	});
	
	this.When(/^I wait for a while again$/, function () {
	  // Write code here that turns the phrase above into concrete actions
	  return browser.sleep(1000);
	});
	
	this.Then(/^the process is canceled$/, function ()
	{// Write code here that turns the phrase above into concrete actions
		return expect(element(by.css('#mat-dialog-2 > app-delete-dialog > section > h1')).isPresent()).to.eventually.equal(false);
    });
}