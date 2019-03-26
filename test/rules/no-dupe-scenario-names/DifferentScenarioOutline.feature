Feature: Feature with different scenario outline

  Scenario Outline: <Scenario>
    Then this is a then step
    Examples:
      | Scenario                  |
      | DifferentScenarioOutline1 |
      | DifferentScenarioOutline2 |

  Scenario Outline: <Scenario>
    Then this is a then step
    Examples:
      | Scenario                  |
      | DifferentScenarioOutline3 |
      | DifferentScenarioOutline4 |

  Scenario Outline: DifferentScenarioOutline5
    Then this is a then step <step>
    Examples:
      | step |
      | 1    |
      | 2    |
