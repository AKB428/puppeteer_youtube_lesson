const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setViewport({width: 1920, height: 5000});
  await page.goto(process.argv[2]);
  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();
