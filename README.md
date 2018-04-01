# AutomationChallenge
Solution to the challenge imposed by @dvillarpsl

1. Create a project with 2 folders, the first one needs to have the UI Automation Tests, and the second needs to have the API Automation Tests (Like a solution with multiple projects)
2. Review your FE / BE project, and select 2 behaviors that you want to test (All of your are a team, then, your should not have duplicated tests)
3. Upload the "Solution" to Github and on the readme, explain what are your testing and how run them.

SUPER BONUS

1. Explain your tests using some business language framework
2. Include your tests on the same folder that you have your FE / BE code
3. Make your tests based on the requirements that you made on the class T2 - Requirements
4. Test your own exposed application (If you have it on heroku or another server)

# EXPLANATION

1. It's done, up there the folders can be seen.
2. I chose the User stories about visualizing a topic and deleting a topic, both of the User stories can be seen [here](https://mercurio.psl.com.co:9443/confluence/pages/viewpage.action?title=US3+-+Visualize+topic+to+guide&spaceKey=EP) and [here](https://mercurio.psl.com.co:9443/confluence/display/EP/US4+-+Remove+topic+to+guide) respectively.
3. Here it is on GitHub, I will explain things clearly.
* My UI tests are testing the acceptance criteria that is in the User stories I shared before, They are testing the visualization of the topics where they make sure the topics can be seen in the right format, an added topic can be seen on the topics table and there is one criteria that can't be tested in this moment on that user story, it's the pagination criteria, the thing is the functionality is not yet implemented, so there is nothing to test in the UI. They are testing also the deletion of the topics where they make sure a topic is in fact deleted from the topics table, a deleted topic can be added again, and the topic deletion process can be cancelled.
* My API tests are testing............................
* To run the UI tests you have to open two command lines in the "UserInterface" folder. In one of them you will execute the following command: (.\node_modules\.bin\webdriver-manager.cmd start), when the console tells you selenium is up and running you will introduce in the second command line the following command: (.\node_modules\.bin\protractor.cmd protractor.conf.js). Like this, all the UI tests will run.
* To run the API tests.......................

#SUPER BONUS EXPLANATION

1. I used protractor-cucumber framework to build the UI tests, this framework is the implementation of the gherkin language plus the protractor framework, in the following [folder, here in this same project](https://github.com/afaguilarr/AutomationChallenge/tree/master/UserInterface/features), you can see the .feature files which describe the User stories showed before.
2. They are already included in the following [folder of our team project]()   PENDIENTE.
3. This is actually pretty blurry, we made so much and at the same time so little on that class, so let's think that all of our User stories were built on that class.
4. All the tests are testing the already shared applications, none of them are testing local environments like localhost or anything like that. Here is the [Front-end application](https://praxis-integrador-frontend.herokuapp.com/) and here is the [Back-end application](https://praxis-integrador-backend.herokuapp.com)

