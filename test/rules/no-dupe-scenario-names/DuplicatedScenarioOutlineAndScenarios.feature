Feature: Feature with different scenario outline

  Scenario Outline: <Scenario>
    Then this is a then step
    Examples:
      | Scenario                               |
      | DuplicatedScenarioOutlineAndScenarios1 |
      | DuplicatedScenarioOutlineAndScenarios2 |

  Scenario Outline: <Scenario>
    Then this is a then step
    Examples:
      | Scenario                               |
      | DuplicatedScenarioOutlineAndScenarios3 |
      | DuplicatedScenarioOutlineAndScenarios4 |

  Scenario Outline: DuplicatedScenarioOutlineAndScenarios5
    Then this is a then step <step>
    Examples:
      | step |
      | 1    |
      | 2    |

  Scenario: DuplicatedScenarioOutlineAndScenarios1
    Then this is a then step

  Scenario: DuplicatedScenarioOutlineAndScenarios3
    Then this is a then step

  Scenario: DuplicatedScenarioOutlineAndScenarios5
    Then this is a then step
