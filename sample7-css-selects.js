const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setViewport({width: 1920, height: 1200});
  await page.goto(process.argv[2]);
  
  await page.waitForSelector('#zg-right-col');
  const oneProductBlock = '.zg-item-immersion'
  const productRanking = '.zg-badge-text'
  const productName = '.p13n-sc-truncated'
  const prodcutPrice = '.p13n-sc-price'
  const productUrl = '.a-link-normal'

  const products = []
  const findElements = await page.$$(oneProductBlock)

  for(const oneProduct of findElements) {
    const ranking = await oneProduct.$eval(productRanking, element => {
      return element.textContent
    });
    const name = await oneProduct.$eval(productName, element => {
      return element.textContent
    });
    const price = await oneProduct.$eval(prodcutPrice, element => {
      return element.textContent
    });
    const url = await oneProduct.$eval(productUrl, element => {
      return element.href
    });

    products.push({ranking: ranking, name: name, price: price, url: url })
  }

  console.log(products);
  await browser.close();
})();
