with cucumber.js:

0-0]  Error:  ⨯ Unable to compile TypeScript:
features/step-definitions/the-internet.steps.ts(3,7): error TS2451: Cannot redeclare block-scoped variable 'cucumber_1'.
features/step-definitions/the-internet.steps.ts(4,7): error TS2451: Cannot redeclare block-scoped variable 'core_1'.




comment out cucumber.js:
 Error: function timed out, ensure the promise resolves within 5000 milliseconds


-0]     Alice get weather forecast using city San%20Francisco
[0-0]       ✗ Alice sends a GET request to '/climate/month?q=San%20Francisco' (5ms)
[0-0]         TestCompromisedError: The API call has failed
[0-0]   ⇢ Then she should see that authentication has failed
[0-0] 
[0-0] ✗ Execution compromised (4s 941ms)
[0-0] 
[0
