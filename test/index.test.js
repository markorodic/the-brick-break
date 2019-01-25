let client
describe('Breakout-JS', () => {
  beforeEach(async () => {
    client = await page.target().createCDPSession()
    await client.send('Performance.enable')
    await page.goto('http://localhost:5000');
  });

  // it(`should display 'SWITCH'`, async () => {
  //   const text = await page.evaluate(() => document.body.textContent)
  //   expect(text).toContain('SWITCH');
  // })

  // it(`should have first meaningful paint of less than 1s`, async () => {
  //   let firstMeaningfulPaint = 0
  //   let performanceMetrics
  //   while(firstMeaningfulPaint === 0) {
  //     performanceMetrics = await client.send('Performance.getMetrics')
  //     firstMeaningfulPaint = performanceMetrics.metrics.find(metric =>
  //     metric.name === 'FirstMeaningfulPaint').value * 1000
  //   }
  //
  //   expect(firstMeaningfulPaint).toBeLessThan(1)
  // })

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
  // console.log("\n==== page.coverage() ===\n");
  // console.log(JSON.stringify(jsCov))


})
