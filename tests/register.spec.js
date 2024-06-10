// @ts-check
const { test, expect } = require('@playwright/test');

// @ts-check
const { faker } = require('@faker-js/faker'); // get from https://www.npmjs.com/package/@faker-js/faker; similar to using playwright
import { createAccount, registerUser} from '../functions/account.function.js'; // import from functions folder
//const { registerUser } = require('../functions/account.function');  // OR use this by clicking on regiserUser function and Add import from.. 

test.beforeEach(async ({ page }) => {
  await page.goto('/');

   // Store Username and password from faker
   const credential = {username: faker.internet.userName(), password: faker.internet.password()};

  await registerUser(page, credential); // Call register function

  await expect(page.getByText('Your account was created')).toBeVisible(); // Assert user has been registered, NB: Keep the assert outside of the function

});

test('Create an account', async ({ page }) => {
  //Navigate to account page
  await page.goto('/parabank/openaccount.htm');

  await createAccount(page); // Create account (ToDo:  verify account number on creation)
});

