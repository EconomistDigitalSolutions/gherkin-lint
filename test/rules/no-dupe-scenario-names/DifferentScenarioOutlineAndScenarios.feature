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

  Scenario Outline: DifferentScenarioOutlineAndScenarios5
    Then this is a then step <step>
    Examples:
      | step |
      | 1    |
      | 2    |

  Scenario: DifferentScenarioOutlineAndScenarios6
    Then this is a then step

  Scenario: DifferentScenarioOutlineAndScenarios7
    Then this is a then step

  Scenario: DifferentScenarioOutlineAndScenarios8
    Then this is a then step
