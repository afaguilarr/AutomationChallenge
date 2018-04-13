// protractor.conf.js
exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',
	
	getPageTimeout: 60000,
	allScriptsTimeout: 500000,
	
	SELENIUM_PROMISE_MANAGER: false,
	
    specs: ['features/*.feature'],

    framework: 'custom',

    frameworkPath: require.resolve('protractor-cucumber-framework'), // Here it is
  
	baseURL: 'https://praxis-frontend.herokuapp.com',
  
  cucumberOpts: {
        //format: './node_modules/pretty',
        //require: './step_definitions/*.js', // This is where we'll be writing our actual tests
		require: ['features/env.js', 'features/step_definitions/*.js'],
		tags: false,
		format: 'pretty',
		profile: false,
		'no-source': true,
		//keepAlive: false
	},

    /*params: {
        env: {
            hostname: 'https://praxis-frontend.herokuapp.com' // Whatever the address of your app is

        }*/

    //}
}