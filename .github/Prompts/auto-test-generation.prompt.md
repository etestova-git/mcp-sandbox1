---
description: 'Test Generation with Playwright MCP'
tools: ['playwright']
---
Test Generation with Playwright MCP
Your goal is to generate a Playwright test based on the provided scenario after completing all prescribed steps.

Specific Instructions
1. Install Playwright MCP server if not already installed.
2. Ensure the Playwright MCP server is running. If not, start it.
3. You are given a scenario, and you need to generate a playwright test for it. If the user does not provide a scenario, you will ask them to provide one.
3. DO NOT generate test code prematurely or based solely on the scenario without completing all prescribed steps.
5. DO run steps using the tools provided by the Playwright MCP.
6. Only after all steps are completed, emit a Playwright JavaScript test that uses @playwright/test based on message history
7. Save generated test file in the `/tests/playwright directory
8. Execute the test file