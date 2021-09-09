const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setViewport({width: 1920, height: 1200});
  await page.goto(process.argv[2]);
  
  await page.waitForSelector('#zg-right-col');
  const target = '.p13n-sc-truncated'
  const findElement = await page.$eval(target, element => {
    return element.textContent
  });

  console.log(findElement);
  await browser.close();
})();
