var ruleTestBase = require('../rule-test-base');
var rule = require('../../../src/rules/no-dupe-scenario-names');
var runTest = ruleTestBase.createRuleTest(rule, 'Scenario name is already used in: no-dupe-scenario-names/<%= scenarioName %>.feature:<%= line %>');

describe('No Duplicate Scenario Name Rule', function() {
  it('doesn\'t raise errors when simple scenarios have different names', function() {
    runTest('no-dupe-scenario-names/DifferentScenarios.feature', {}, []);
  });

  it('doesn\'t raise errors when scenario outlines have different names', function() {
    runTest('no-dupe-scenario-names/DifferentScenarioOutline.feature', {}, []);
  });

  it('doesn\'t raise errors when simple scenarios and scenario outlines have different names', function() {
    runTest('no-dupe-scenario-names/DifferentScenarioOutlineAndScenarios.feature', {}, []);
  });

  it('raise errors when simple scenarios have same names', function() {
    runTest('no-dupe-scenario-names/DuplicatedScenarios.feature', {}, [{
      messageElements: {scenarioName: 'DuplicatedScenarios', line: 3},
      line: 6
    }]);
  });

  it('raise errors when scenario outlines have same names', function() {
    runTest('no-dupe-scenario-names/DuplicatedScenarioOutline.feature', {}, [{
      messageElements: {scenarioName: 'DuplicatedScenarioOutline', line: 3},
      line: 10
    },
    {
      messageElements: {scenarioName: 'DuplicatedScenarioOutline', line: 3},
      line: 17
    }]);
  });

  it('raise errors when simple scenarios and scenario outlines have same names', function() {
    runTest('no-dupe-scenario-names/DuplicatedScenarioOutlineAndScenarios.feature', {}, [{
      messageElements: {scenarioName: 'DuplicatedScenarioOutlineAndScenarios', line: 3},
      line: 24
    },
    {
      messageElements: {scenarioName: 'DuplicatedScenarioOutlineAndScenarios', line: 10},
      line: 27
    },
    {
      messageElements: {scenarioName: 'DuplicatedScenarioOutlineAndScenarios', line: 17},
      line: 30
    }]);
  });

});
