#features/visualize.feature
Feature: Topic removal
	As a collaborator of the platform
	I should be able to remove the topics I know from my "topics to guide"
	In order to keep my information updated
	
	Scenario: Delete topics test
		Given I go to "https://praxis-integrador-frontend.herokuapp.com"
		When I click remove topic
		When I click yes
		Then the topic is removed and I can not see the topic in the table
		When I wait for a while
		When I click add topic button
		When I fill in the name blank with the deleted topic's name
		When I click in the experience blank
		When I add the experience with the deleted topic's experience
		When I try to add the topic again
		Then I can see the topic is added again
		When I click remove topic again
		When I click no
		When I wait for a while again
		Then the process is canceled