import {test,expect} from '@playwright/test';


[
    {username:"12",errorMessage:"username is too short(minimum is3 characters)",isErrorDisplayed:true},
    {username:"123",errorMessage:"username", isErrorDisplayed:false},
     {username:"12384637846846",errorMessage:"username", isErrorDisplayed:false},
]

test('Error message test',async ({page})=>{

    await page.goto('https://conduit.bondaracademy.com/');
    await page.getByRole('link',{name:'Sign up'}).click();
    await page.getByRole('textbox',{name:'Username'}).fill('12');
    await page.getByRole('textbox',{name:'Email'}).fill('12');
    await page.getByRole('textbox',{name:'Password'}).fill('HelloWorld');
    await page.getByRole('button',{name:'Sign up'}).click();
    await expect(page.locator('.error-messages')).toContainText('username is too short(minimum is 3 characters)')

});