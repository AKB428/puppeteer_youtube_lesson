const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const device = puppeteer.devices['iPad'];
  await page.emulate(device); 
  await page.goto(process.argv[2]);
  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();
