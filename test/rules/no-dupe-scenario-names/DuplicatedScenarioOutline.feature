Feature: Feature with duplicated scenario outline

  Scenario Outline: <Scenario>
    Then this is a then step
    Examples:
      | Scenario                   |
      | DuplicatedScenarioOutline1 |
      | DuplicatedScenarioOutline2 |

  Scenario Outline: <Scenario>
    Then this is a then step
    Examples:
      | Scenario                   |
      | DuplicatedScenarioOutline3 |
      | DuplicatedScenarioOutline2 |
