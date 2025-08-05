---
description: 'Test Generation with Playwright MCP'
tools: ['playwright']
---
Test Generation with Playwright MCP
Your goal is to generate a Playwright test based on the provided scenario after completing all prescribed steps.

Specific Instructions
1. You are given a scenario, and you need to generate a playwright test for it. If the user does not provide a scenario, you will ask them to provide one.
2. DO NOT generate test code prematurely or based solely on the scenario without completing all prescribed steps.
3. DO run steps using the tools provided by the Playwright MCP.
4. Only after all steps are completed, emit a Playwright JavaScript test that uses @playwright/test based on message history
5. Save generated test file in the `/tests/playwright directory
6. Execute the test file