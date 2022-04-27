const puppeteer = require('puppeteer');

var myUrl = "https://cas.humboldt.edu/cas/login?service=https%3A%2F%2Fmy.humboldt.edu%2Fkurogo_login%2Freturn%2Flogin%2Fcas";

// launches the browser 
async function Browser()
{
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(myUrl);
    
    return page;
}

// clicks on the username and fills it in
async function fillUser(page)
{
    await page.waitFor(300)
    const input = await page.$("input[name='username']");
    await input.click({clickCount: 1});
    await input.type('username');

    const input2 = await page.$("input[name='password']");
    await input.click({clickCount: 1});
    await input2.type('password');
    await page.waitFor(300);

    const input3 = await page.$("input[name='submit']");
    await input3.click({clickCount: 1});

}

async function duoMobile(page)
{
    await page.waitFor(5000);
    const input4 = document.getElementsByTagName("select");
    await input4.click({clickCount: 1});

    const input5 = document.getElementsByTagName("option")[3];
    await input5.click({clickCount: 1});

    //await input4.click({clickCount: 1});
    
    //await input4.click({clickCount: 1});
    //const input5 = await page.$("option[value='phone4']");
    //await input5.click({clickCount: 1});


    //const input5 = await page.$("")
}

async function checkout()
{
    const page = await Browser();
    await fillUser(page);
    await duoMobile(page);
}

checkout();