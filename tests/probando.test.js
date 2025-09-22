const fs = require("fs")
const path = require("path")

describe("Books to Scrape - Validación de carga", () => {
  beforeAll(async () => {
    await page.goto("https://books.toscrape.com/")
  })

  it("debería mostrar el título esperado", async () => {
    const title = await page.title()
    expect(title).toMatch(/Books to Scrape/)
  })
})

describe("Books to Scrape - Validación visual", () => {
  it("debería capturar una imagen de la homepage", async () => {
    await page.goto("https://books.toscrape.com/", {
      waitUntil: "networkidle0",
    })

    const screenshotPath = path.resolve(
      __dirname,
      "..",
      "screenshots",
      "homepage.png"
    )

    // Asegura que el directorio exista
    fs.mkdirSync(path.dirname(screenshotPath), { recursive: true })

    await page.screenshot({ path: screenshotPath, fullPage: true })

    // Validación básica: el archivo fue creado
    expect(fs.existsSync(screenshotPath)).toBe(true)
  })
})

describe("Books to Scrape - Interacción y navegación", () => {
  it("debería navegar al detalle del primer libro", async () => {
    await page.goto("https://books.toscrape.com/", {
      waitUntil: "networkidle0",
    })

    // Selecciona el primer libro y hace clic
    await page.click(".product_pod h3 a")

    // Espera que el título del libro esté visible
    await page.waitForSelector(".product_main h1")

    const bookTitle = await page.$eval(
      ".product_main h1",
      (el) => el.textContent
    )

    expect(bookTitle.length).toBeGreaterThan(0) // Validación básica
  })
})

/*

npm test
  
*/

