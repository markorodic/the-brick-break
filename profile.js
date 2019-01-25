/*
 *
 *
 * 1. start game server
 * 2. pass in url of game server to puppeteer
 * 3. output metrics to cli
 */

// const server = require('./server')

const puppeteer = require('puppeteer')

async function run () {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.coverage.startJSCoverage()
  await page.goto('http://localhost:3000');
  const jsCov = await page.coverage.stopJSCoverage()

  // console.log("\n==== performance.getEntries() ====\n");
  // console.log( await page.evaluate( () => JSON.stringify(performance.getEntries(), null, "  ") ) );
  //
  // console.log("\n==== performance.toJSON() ====\n");
  // console.log( await page.evaluate( () => JSON.stringify(performance.toJSON(), null, "  ") ) );
  //
  // console.log("\n==== page.metrics() ====\n");
  // const perf = await page.metrics();
  // console.log( JSON.stringify(perf, null, "  ") );
  //
  console.log("\n==== page.coverage() ===\n");
  console.log(JSON.stringify(jsCov))


  // browser.close();
}

run()

