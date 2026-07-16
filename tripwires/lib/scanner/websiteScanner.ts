import { chromium } from "playwright";


export async function scanWebsite(url: string) {


  const browser = await chromium.launch({
    headless: true,
  });



  const page = await browser.newPage();



  try {


    if (!url.startsWith("http")) {
      url = "https://" + url;
    }



    await page.goto(url, {
      waitUntil: "networkidle",
      timeout: 30000,
    });



    const title = await page.title();



    const text = await page
    .locator("body")
    .innerText({
      timeout: 5000
    });

    const cleanedText = text
      .replace(/\s+/g, " ")
      .trim()
      .slice(0,5000);


      const buttons = await page
      .locator("button")
      .evaluateAll((elements) =>
        elements
          .map((el) => el.textContent?.trim())
          .filter((text): text is string => Boolean(text))
      );
  
  
  
      const links = await page
      .locator("a")
      .evaluateAll((elements) =>
        elements
          .map((el) => el.textContent?.trim())
          .filter((text): text is string => Boolean(text))
          .slice(0,50)
      );
    



        const screenshotPath = `/screenshots/${Date.now()}.png`;
    await page.screenshot({
      path: `public${screenshotPath}`,
      fullPage: false,
    });



    await browser.close();



    return {

      url,

      title,

      text: cleanedText,

      buttons,

      links,

      screenshot: screenshotPath,
    };


  } catch(error) {


    await browser.close();

    throw error;

  }

}