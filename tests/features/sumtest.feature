Feature: Simple test feature to create simple jest example
Scenario: Simple scenario
	Given sum of 1 and 2 is equal 3
	
Scenario Outline: Simple scenario2
	Given sum of <first> and <second> is equal <expRes>
Examples:
	| first | second | expRes |
	| 1     | 2      | 3      |
	| 3     | 2      | 5      |