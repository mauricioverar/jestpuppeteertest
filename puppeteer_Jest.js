import puppeteer from "puppeteer"


;(async () => {
  try {
    console.log("Abriendo el navegador......")
    const browser = await puppeteer.launch({
      headless: "new"
    })

    const page = await browser.newPage()
    await page.goto("https://books.toscrape.com/")
    
    await browser.close()
  } catch (error) {
    console.log("No se pudo crear una instancia del navegador => : ", error)
    return
  }
})()

/*

npm test
  
*/
