import { test, expect } from '@playwright/test';
import { loginpage } from '..//tests//pages/loginpage.spec.js'
import { addtocartpage } from './pages/addtocartpage.spec.js';
import { checkoutpage } from './pages/checkoutpage.spec.js';
import { logoutpage } from './pages/logoutpage.spec.js';

test('test1', async ({ page }) => {

    const login1 = new loginpage(page);
    const addtocart1= new addtocartpage(page);
    const checkout1= new checkoutpage(page);
    const logout1= new logoutpage(page)


    await login1.gotologin();
    await login1.login('remyamohandhas21@gmail.com', 'Shiva@12345');
    await addtocart1.addtocart();
    await checkout1.checkout();
    await logout1.signout();
    

    //await page.getByRole('link', { name: 'Sign In' }).click();
    //   await page.getByLabel('Email', { exact: true }).fill('remyamohandhas21@gmail.com');
    //   await page.getByLabel('Password').click();
    //   await page.getByLabel('Password').fill('Shiva@12345');
    // await page.getByRole('button', { name: 'Sign In' }).click();
    //await page.getByRole('banner').getByText('Welcome, Devi Remya Mohandhas!').click();
    //await page.getByRole('banner').locator('button').filter({ hasText: 'Change' }).click();
    //await page.getByRole('link', { name: 'Sign Out' }).click();
});