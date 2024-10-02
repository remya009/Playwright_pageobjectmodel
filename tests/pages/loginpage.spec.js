exports.loginpage = class loginpage {

    constructor(page) {

        this.page = page
        this.username_textbox = page.getByLabel('Email')
        this.password_textbox = page.getByLabel('Password')
        this.signin_link = page.getByRole('link', { name: 'Sign In' })
        this.signin_button =page.getByRole('button', { name: 'Sign In' })
        this.signout_button = page.getByRole('link', { name: 'Sign Out' })

    }
    async gotologin()
    {
        await this.page.goto('https://magento.softwaretestingboard.com/')
        await this.signin_link.click()
    }
    async login(username, password) {
        
        await this.username_textbox.fill(username)
        await this.password_textbox.fill(password)
        await  this.signin_button.click()
        

    }

}