# automated-testing-with-mocha

In BDD, tests are written in a specific syntax known as "Given-When-Then" (GWT) format, which is designed to be more human-readable and easily understandable by non-technical stakeholders. The GWT format consists of three parts:

    Given: This section sets up the initial context or preconditions for the test. It describes the initial state of the system before the test scenario is executed.

    When: This section specifies the action or event that triggers the behavior being tested.

    Then: This section defines the expected outcomes or results of the test scenario.

Example of a GWT scenario:

Assume we have a function called sumNumbers that takes an array of numbers as input and returns their sum.

Given: We have an array of numbers [1, 2, 3, 4].

When: We call the sumNumbers function with the array as input.

Then: The function should return 10, which is the sum of all the numbers in the array.

Goal: Understand how Behavorial Driven Development(BDD) is achieved by utilizing Mocha, Chai and how to approach the testing.

1. First write tests
2. Fail the tests
3. Implement the spec
4. Pass the tests
