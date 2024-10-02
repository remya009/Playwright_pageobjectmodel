
exports.addtocartpage = class addtocartpage{
    constructor(page) {

        this.page = page
        this.menuitem_button=page.getByRole('menuitem', { name: ' Women' })
        this.clothestype_button=page.getByRole('link', { name: 'Bottoms' })
        this.productname_button=page.getByRole('link', { name: 'Ina Compression Short' }).first()
        this.size_button=page.getByLabel('29')
        this.color_button=page.getByLabel('Orange')
        this.addtocart_button=page.getByRole('button', { name: 'Add to Cart' })
        this.shoppingcart_button=page.locator('text=shopping cart')
    }
    async addtocart()
    {
        await this.menuitem_button.click();
        await this.clothestype_button.click()
        await this.productname_button.click()
        await this.size_button.click()
        await this.color_button.click()
        await this.addtocart_button.click()
        await this.shoppingcart_button.click()
    }

}