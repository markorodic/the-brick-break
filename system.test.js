const puppeteer = require("puppeteer");

jest.setTimeout(60 * 1000);

describe("the system", () => {
  let browser;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false
    });
  });

  afterAll(async () => {
    if (browser) {
      await browser.close();
    }
  });

  it("should produce reports", async () => {
    const page = await browser.newPage();

    await page.exposeFunction("DO_THA_REPORT_PLEASE", async data => {
      console.log("got data", data.length);
      const dataSum = data.reduce((sum, datum, index) => {
        return sum + datum.delta;
      }, 0);
      const dataMean = dataSum / data.length;
      console.log(dataMean);
    });

    const deferred = waitForClose(page);
    await page.goto("http://localhost:3000");
    await deferred;
  });

  it("should produce more reports", async () => {
    const page = await browser.newPage();

    await page.exposeFunction("DO_THA_REPORT_PLEASE", async data => {
      console.log("got data for second test", data.length);
      // testing continues here
    });

    const deferred = waitForClose(page);
    await page.goto("http://localhost:3000");
    await deferred;
  });

  function waitToClose(page) {
    return new Promise((resolve, reject) => {
      page.on("close", resolve);
      page.on("error", reject);
      setTimeout(
        () => reject(new Error("timed out waiting for page to close itself")),
        30 * 1000
      );
    });
  }

  function waitForClose(page) {
    return new Promise((resolve, reject) => {
      //page.on('close', resolve)
      page.exposeFunction("PLEASE_CLOSE_ME", () => {
        resolve();
      });
      page.on("error", reject);
      setTimeout(
        () => reject(new Error("timed out waiting for page to close itself")),
        30 * 1000
      );
    });
  }
});
