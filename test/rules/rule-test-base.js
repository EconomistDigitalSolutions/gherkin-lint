var assert = require('chai').assert;
var Gherkin = require('gherkin');
var fs = require('fs');
var _ = require('lodash');
require('mocha-sinon');

var parser = new Gherkin.Parser();

function createRuleTest(rule, messageTemplate) {
  return function runTest(featureFile, configuration, expected) {
    var expectedErrors = _.map(expected, function(error) {
      return {
        rule: rule.name,
        message: _.template(messageTemplate)(error.messageElements),
        line: error.line
      };
    });
    var fileContent = fs.readFileSync('test/rules/' + featureFile, 'utf8');
    var parsedFile = parser.parse(fileContent).feature;
    var file = {
      name: featureFile,
      lines: fileContent.split(/\r\n|\r|\n/)
    };
    assert.sameDeepMembers(rule.run(parsedFile, file, configuration), expectedErrors);
  };
}

module.exports = {
  createRuleTest: createRuleTest
};
