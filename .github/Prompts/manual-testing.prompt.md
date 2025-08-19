mode: agent
description: 'Manual testing with Playwright MCP'
tools: [playwright]
model: 'GPT-4.1'
---

Instructions: |

  1. Go to `https://www.saucedemo.com/` in Chrome.
  2. Explore the website and test the login functionality.
  3. Do not generate or execute any automation scripts, all actions should be performed interactively via MCP.
  4. After the user confirms to start, do not prompt for any input or confirmation during execution; run all tests sequentially without further user interaction.
  5. After executing all tests, generate a detailed HTML report including:
     - Scenario name and description
     - Steps executed
     - Expected and actual results
     - Assertions (pass/fail)
     - Screenshots, save the screenshots and add links to them in the report
     - Execution time
     - Place the html report in `manual-testing/exploratory-testing/test-results.html`.
  6. Close the browser tabs after test execution is completed and report is generated.
  7. Update HTML report to use the correct paths for actually saved screenshots