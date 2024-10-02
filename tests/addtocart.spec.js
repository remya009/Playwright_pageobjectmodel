import { test, expect } from '@playwright/test';


test('test2', async ({ page }) => {


    await page.goto('https://magento.softwaretestingboard.com/');
    await page.getByRole('link', { name: 'Sign In' }).click();
    await page.getByLabel('Email', { exact: true }).fill('remyamohandhas21@gmail.com');
    await page.getByLabel('Password').fill('Shiva@12345');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('menuitem', { name: ' Women' }).click();
    await page.getByRole('link', { name: 'Bottoms' }).click();
    await page.getByRole('link', { name: 'Ina Compression Short' }).first().click();
    await page.getByLabel('29').click();
    await page.getByLabel('Orange').click();
    await page.getByRole('button', { name: 'Add to Cart' }).click();
    await page.locator('text=shopping cart').click();
    await page.pause();
    //await page.getByRole('link', { name: ' My Cart 19 19 items' }).click();
    await page.getByRole('button', { name: 'Proceed to Checkout' }).click();
   // await page.pause();

   await page.getByLabel('Fixed').check();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  await page.pause();
  await page.getByRole('banner').getByText('Welcome, Devi Remya Mohandhas!').click();
  await page.getByText('Skip to Content Welcome, Devi').click();
  await page.getByRole('banner').locator('button').filter({ hasText: 'Change' }).click();
  await page.getByRole('link', { name: 'Sign Out' }).click();
 
   /*  await page.getByRole('link', { name: 'Check Out with Multiple' }).click();
    //await page.pause();
    const newaddress= page.getByRole('button', { name: 'Enter a New Address' })
    await newaddress.scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);
    await newaddress.click();
    await page.getByLabel('Company').click();
    await page.getByLabel('Company').fill('Capemart');
    await page.getByLabel('Phone Number').click();
    await page.getByLabel('Phone Number').fill('456789234');
    await page.getByLabel('Street Address: Line 1').click();
    await page.getByLabel('Street Address: Line 1').fill('street1');
    await page.getByLabel('Street Address: Line 2').click();
    await page.getByLabel('Street Address: Line 2').fill('street2');
    await page.getByLabel('Street Address: Line 3').click();
    await page.getByLabel('City').click();
    await page.getByLabel('City').fill('remote');
    await page.getByLabel('State/Province').selectOption('13');
    await page.getByLabel('Zip/Postal Code').click();
    await page.getByLabel('Zip/Postal Code').fill('56345');
    await page.getByLabel('Use as my default billing').check();
    await page.locator('#form-validate div').filter({ hasText: 'Use as my default shipping' }).click();
    await page.getByLabel('Use as my default shipping').check();
    await page.getByRole('button', { name: 'Save Address' }).click();
    const shippinginfo= page.getByRole('button', { name: 'Enter a New Address' })
    await shippinginfo.scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);
    await shippinginfo.click();
    await page.pause();
    //await page.getByRole('button', { name: 'Continue to Billing' }).click();
    //await page.getByRole('link', { name: 'Back to Select Addresses' }).click();
    //await page.getByRole('button', { name: 'Go to Shipping Information' }).click();
    //await page.getByRole('button', { name: 'Continue to Billing' }).click();
    await page.getByLabel('Table Rate $').check();
    await page.getByRole('button', { name: 'Continue to Billing' }).click();
    await page.getByRole('button', { name: 'Go to Review Your Order' }).click();
    await page.getByRole('button', { name: 'Place Order' }).click();
    await page.getByRole('banner').getByText('Welcome, Devi Remya Mohandhas!').click();
    await page.getByRole('banner').getByText('Welcome, Devi Remya Mohandhas!').click();
    await page.getByRole('banner').locator('button').filter({ hasText: 'Change' }).click();
    await page.getByRole('link', { name: 'Sign Out' }).click(); */
});



