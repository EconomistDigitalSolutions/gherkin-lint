var rule = 'no-dupe-scenario-names';
var scenarios = [];

function noDuplicateScenarioNames(feature, file) {
  if(feature.children) {
    var errors = [];
    feature.children.forEach(function(scenario) {
      if (scenario.name) {
        let allScenarios = [];
        if (scenario.type === 'ScenarioOutline') {
          scenario.examples.forEach(function (example) {
            example.tableBody.forEach(function (row) {
              let scenarioName = scenario.name;
              example.tableHeader.cells.forEach(function(header, index) {
                scenarioName = scenarioName.replace(`<${header.value}>`, row.cells[index].value);
              });
              allScenarios.push(scenarioName);
            });
          });
        } else {
          allScenarios.push(scenario.name);
        }
        allScenarios.forEach(function (scenarioName) {
          if (scenarioName in scenarios) {
            var dupes = getFileLinePairsAsStr(scenarios[scenarioName].locations);
            scenarios[scenarioName].locations.push({file: file.name, line: scenario.location.line});
            errors.push({
              message: 'Scenario name is already used in: ' + dupes,
              rule: rule,
              line: scenario.location.line
            });
          } else {
            scenarios[scenarioName] = {locations: [{file: file.name, line: scenario.location.line}]};
          }
        });
      }
    });
    return errors;
  }
}

function getFileLinePairsAsStr(objects) {
  var strings = [];
  objects.forEach(function(object) {
    strings.push(object.file + ':' + object.line);
  });
  return strings.join(', ');
}

module.exports = {
  name: rule,
  run: noDuplicateScenarioNames
};
