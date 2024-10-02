
import { test, expect } from '@playwright/test';
exports.logoutpage=class logout{
    
    constructor(page){
         
        this.page=page;
        this.signout_button0=page.getByRole('banner').getByText('Welcome, Devi Remya Mohandhas!')
        this.signout_button1=page.getByRole('banner').locator('button').filter({ hasText: 'Change' })
        this.signout_button2=page.getByRole('link', { name: 'Sign Out' })

    }

    async signout()
    {
        await expect(this.signout_button0).toBeVisible({timeout: 30000});
        this.signout_button0.click()
        await expect(this.signout_button1).toBeVisible({timeout: 30000});
        this.signout_button1.click()
        await expect(this.signout_button2).toBeVisible({timeout: 30000});
        await this.page.waitForTimeout(3000);
        await this.signout_button2.click()

    }

    

}

