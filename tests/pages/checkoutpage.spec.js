

exports.checkoutpage=class checkoutpage {

    constructor(page)
    {
        this.page=page
        this.checkout_button = page.getByRole('button', { name: 'Proceed to Checkout' })
        this.rate_checkbox = page.getByLabel('Fixed')
        this.next_button = page.getByRole('button', { name: 'Next' })
        this.placeorder_button = page.getByRole('button', { name: 'Place Order' })
    



    }

    async checkout(){
        
        await this.page.waitForTimeout(3000);
        await this.checkout_button.click()
        await this.rate_checkbox.check()
        await this.next_button.click()
        await this.placeorder_button.click()

    }

    
}