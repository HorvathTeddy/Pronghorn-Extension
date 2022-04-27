const puppeteer = require('puppeteer');

var myUrl = "https://cas.humboldt.edu/cas/login?service=https%3A%2F%2Fmy.humboldt.edu%2Fkurogo_login%2Freturn%2Flogin%2Fcas";

// launches the browser 
async function Browser()
{
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(myUrl);
    await page.waitFor(2000);
    return page;
}

// clicks on the username and fills it in
async function fillUser(page)
{
    await page.waitFor(100);
    const input = await page.$("input[name='username']");
    await input.click({clickCount: 1});
    await input.type('username');
    const input2 = await page.$("input[name='password']");
    await input.click({clickCount: 1});
    await input2.type('password');
  

    //await page.$eval("button[")
    //await page.waitFor(2000);
    
}

async function checkout()
{
    const page = await Browser();
    await fillUser(page);
}

checkout();