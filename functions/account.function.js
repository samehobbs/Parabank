const { faker } = require('@faker-js/faker');

export async function registerUser(page, credential){

    // create credentials seperately and then provide it to this function  
     
   // Capture details on Register page using faker
   await page.getByRole('link', { name: 'Register' }).click();
   await page.locator('[id="customer\\.firstName"]').fill(faker.person.firstName());
   await page.locator('[id="customer\\.lastName"]').fill(faker.person.lastName());
   await page.locator('[id="customer\\.address\\.street"]').fill(faker.location.streetAddress());
   await page.locator('[id="customer\\.address\\.city"]').fill(faker.location.city());
   await page.locator('[id="customer\\.address\\.state"]').fill(faker.location.state());
   await page.locator('[id="customer\\.address\\.zipCode"]').fill(faker.location.zipCode());
   await page.locator('[id="customer\\.phoneNumber"]').fill(faker.phone.number('084#######'));
   await page.locator('[id="customer\\.ssn"]').fill(faker.string.numeric(10)); // 
   await page.locator('[id="customer\\.username"]').fill(credential.username);
   await page.locator('[id="customer\\.password"]').fill(credential.password);
   await page.locator('#repeatedPassword').fill(credential.password);
   await page.getByRole('button', { name: 'Register' }).click();
 
   return credential; // if you want it displayed
 
 }