// features/step_definitions/visualizeSteps.js

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 15; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

var randomTopic = makeid();

module.exports = function() {
	
	this.Given(/^I go to "([^"]*)"$/, function (website, callback) {
		// Write code here that turns the phrase above into concrete actions
		browser.get(website)
		.then(callback);
	});
	
	this.Then(/^I should see the topics to guide table with name, description, expertice, addition date, link, edit button and remove button$/, function () {
	// Write code here that turns the phrase above into concrete actions
	let header1 = element(by.xpath('/html/body/app-root/app-topic/div/div/div[2]/mat-table/mat-header-row/mat-header-cell[1]/strong'));
	let header2 = element(by.xpath('/html/body/app-root/app-topic/div/div/div[2]/mat-table/mat-header-row/mat-header-cell[2]/strong'));
	let header3 = element(by.xpath('/html/body/app-root/app-topic/div/div/div[2]/mat-table/mat-header-row/mat-header-cell[3]/strong'));
	let header4 = element(by.xpath('/html/body/app-root/app-topic/div/div/div[2]/mat-table/mat-header-row/mat-header-cell[4]/strong'));
	let header5 = element(by.xpath('/html/body/app-root/app-topic/div/div/div[2]/mat-table/mat-header-row/mat-header-cell[5]/strong'));
	let header6 = element(by.xpath('/html/body/app-root/app-topic/div/div/div[2]/mat-table/mat-header-row/mat-header-cell[6]/strong'));
	let header7 = element(by.xpath('/html/body/app-root/app-topic/div/div/div[2]/mat-table/mat-header-row/mat-header-cell[7]/strong'));
	return (expect(header1.getText()).to.eventually.contain("Nombre")
	&& expect(header2.getText()).to.eventually.contain("Descripción")
	&& expect(header3.getText()).to.eventually.contain("Experiencia")
	&& expect(header4.getText()).to.eventually.contain("Creación")
	&& expect(header5.getText()).to.eventually.contain("Link")
	&& expect(header6.getText()).to.eventually.contain("Editar Tema")
	&& expect(header7.getText()).to.eventually.contain("Borrar Tema"));
	});
	
	this.Then(/^I should see the topics to guide title$/, function ()
	{// Write code here that turns the phrase above into concrete actions
		let title = element(by.xpath('/html/body/app-root/nav/ul/li/a/span'));
		return (expect(title.getText()).to.eventually.contain("Temas para Enseñar"));
    });
	
	this.Then(/^I should see my name above the table$/, function ()
	{// Write code here that turns the phrase above into concrete actions
		let nameAbove = element(by.xpath('/html/body/app-root/app-topic/section/h1'));
		return (expect(nameAbove.getText()).to.eventually.contain("Colaborador: "));
    });
	
	this.When(/^I click add topic$/, function () {
	  // Write code here that turns the phrase above into concrete actions
	  let addButton = element(by.xpath('/html/body/app-root/app-topic/div/div/div[3]/button/span'));
	  return addButton.click();
	});
	
	this.When(/^I fill in the name blank$/, function () {
	  // Write code here that turns the phrase above into concrete actions
	  let name = element(by.id('mat-input-1'));
	  return name.sendKeys(randomTopic);
	});
	
	this.When(/^I click in the experience blank$/, function () {
	  // Write code here that turns the phrase above into concrete actions
	  let experience = element(by.css('#mat-select-0 > div > div.mat-select-value > span'));
	  return experience.click();
	});
	
	this.When(/^I add the experience$/, function () {
	  // Write code here that turns the phrase above into concrete actions
	  let twoStars = element(by.css('#mat-option-0 > span'));
	  return twoStars.click();
	});
	
	this.When(/^I try to add the new topic$/, function () {
	  // Write code here that turns the phrase above into concrete actions
	  let addButton = element(by.css('#mat-dialog-0 > app-add-detail > form > div > div > button.btn.btn-success.mat-button > span'));
	  return addButton.click();
	});
	
	this.When(/^I click in the experience blank again$/, function () {
	  // Write code here that turns the phrase above into concrete actions
	  let experience = element(by.css('#mat-select-1 > div > div.mat-select-value'));
	  return experience.click();
	});
	
	this.When(/^I add the experience again$/, function () {
	  // Write code here that turns the phrase above into concrete actions
	  let twoStars = element(by.css('#mat-option-2 > span'));
	  return twoStars.click();
	});
	
	this.When(/^I fill in the description blank$/, function () {
	  // Write code here that turns the phrase above into concrete actions
	  let description = element(by.id('mat-input-4'));
	  return description.sendKeys("TemaTest description");
	});
	
	this.When(/^I try to add the new topic again$/, function () {
	  // Write code here that turns the phrase above into concrete actions
	  let addButton = element(by.css('#mat-dialog-0 > app-add-detail > form > div.ng-star-inserted.ng-touched.ng-dirty.ng-valid > div > button.btn.btn-success.mat-raised-button'));
	  return addButton.click();
	});
	
	this.Then(/^I can see it on the table$/, function () {
	  let elem = element.all(by.css('body > app-root > app-topic > div > div > div.example-container.mat-elevation-z2 > mat-table > mat-row > mat-cell.mat-cell.cdk-column-name.mat-column-name.ng-star-inserted'));
	  let length;
	  return length = elem.count().then(function(count){
		  let cell = elem.get(count-1);
		  return expect(cell.getText()).to.eventually.contain(randomTopic);
	  });
	});
}