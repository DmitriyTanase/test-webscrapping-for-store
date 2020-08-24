const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");
const writeStream = fs.createWriteStream('catalogHiTech.json');

(async () => {

    // Extract partners on the page, recursively check the next page in the URL pattern
    const extractPartners = async url => {

        // Scrape the data we want
        const page = await browser.newPage();
        await page.goto(url);
        const partnersOnPage = await page.evaluate(() =>
            Array.from(document.querySelectorAll("div.product-item")).map(compact => ({
                title: compact.querySelector(".title-5").innerText.trim(),
                logo: compact.querySelector(".hoverBorderWrapper img").src,
                price: compact.querySelector('.product-price').innerText.trim()
            }))
        );
        await page.close();

        // Recursively scrape the next page
        if (partnersOnPage.length < 1) {
            // Terminate if no partners exist
            return partnersOnPage
        } else {
            // Go fetch the next page ?page=X+1
            const nextPageNumber = parseInt(url.match(/page=(\d+)$/)[1], 10) + 1;
            const nextUrl = `https://hi-tech.md/catalog/televizory?page=${nextPageNumber}`;
            console.log(`Working on ${nextUrl}`);

            return partnersOnPage.concat(await extractPartners(nextUrl))
        }
    };

    const browser = await puppeteer.launch();
    const firstUrl =
        "https://hi-tech.md/catalog/televizory?page=1";
    const partners = await extractPartners(firstUrl);

    // Todo: Update database with partners
    const writtenData = JSON.stringify(partners);
    writeStream.write(`${writtenData}`);
    console.log(partners);

    await browser.close();
})();