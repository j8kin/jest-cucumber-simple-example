# jest-cucumber-simple-example
Simple example of test with jest and cucumber

This package simple example of is using npm jest-cucumber framwork.
Disclamer: 
	From jest-cucumber framwork description it is not clear that
	  each scenario from feature file should be identified as one jest 
	  scenario. It means that each step such as "given", "when" etc 
	  should be defined in each scenario (see all.steps.ts).
	It means that with this framework it is not possible to create 
	  independent steps outside the jest-scenarios. 

Usages:	  
```
	npm run test
```
