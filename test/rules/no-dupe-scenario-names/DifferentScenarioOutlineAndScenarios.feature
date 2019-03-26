Feature: Feature with different scenario outline

  Scenario Outline: <Scenario>
    Then this is a then step
    Examples:
      | Scenario                              |
      | DifferentScenarioOutlineAndScenarios1 |
      | DifferentScenarioOutlineAndScenarios2 |

  Scenario Outline: <Scenario>
    Then this is a then step
    Examples:
      | Scenario                              |
      | DifferentScenarioOutlineAndScenarios3 |
      | DifferentScenarioOutlineAndScenarios4 |

  Scenario: DifferentScenarioOutlineAndScenarios5
    Then this is a then step

  Scenario: DifferentScenarioOutlineAndScenarios6
    Then this is a then step
