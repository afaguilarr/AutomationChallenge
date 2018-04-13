#features/visualize.feature
Feature: Topic visualization
	As a collaborator of the platform
	I should be able to see the topics I know from my "topics to guide" and the details of each topic
	In order to access the information I had previously created
	
	Scenario: Visualize topics test
		Given I go to "https://praxis-frontend.herokuapp.com"
		Then I should see the topics to guide table with name, description, expertice, addition date, link, edit button and remove button
		Then I should see the topics to guide title
		Then I should see my name above the table
		When I click add topic
		When I fill in the name blank
		When I click in the experience blank
		When I add the experience
		When I try to add the new topic
		When I click in the experience blank again
		When I add the experience again
		When I fill in the description blank
		When I try to add the new topic again
		And I wait for some seconds
		Then I can see it on the table