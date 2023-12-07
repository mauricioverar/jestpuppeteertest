it('should load', async () => {
  await page.goto("https://books.toscrape.com/") // probar otra pagina
  const title = await page.title()

  expect(title).toBe("All products | Books to Scrape - Sandbox")
});

/* it("should load", async () => {
  await page.goto("https://geekshubsacademy.com/cursos")
  const coursesLength = await page.$$eval('.listItem', (courses) => courses.length,)

  expect(coursesLength).toBe(23)
}) */