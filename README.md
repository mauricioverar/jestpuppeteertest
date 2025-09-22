# 📚 Jest + Puppeteer Test Suite: Books to Scrape

Este proyecto implementa una suite de pruebas automatizadas utilizando **Jest** y **Puppeteer** para validar la carga, interacción y visualización de la página [Books to Scrape](https://books.toscrape.com/). Además, incluye un script autónomo para generar capturas visuales sin necesidad de ejecutar tests.


## 🚀 Tecnologías utilizadas

- [Jest](https://jestjs.io/) – Framework de testing
- [Puppeteer](https://pptr.dev/) – Automatización de navegador con Chromium
- [jest-puppeteer](https://github.com/smooth-code/jest-puppeteer) – Integración entre Jest y Puppeteer


## 📁 Estructura del proyecto

```
├── screenshots/                   # Capturas visuales generadas por Puppeteer
│   └── homepage.png              # Desde test automatizado
│   └── paginaPrincipal.png      # Desde script autónomo
├── scripts/
│   └── puppeteer.js         # Script Puppeteer standalone
├── tests/
│   └── probando.test.js         # Suite de pruebas con Jest + Puppeteer
├── jest.config.mjs              # Configuración de Jest
├── jest-puppeteer.config.cjs    # Configuración del entorno Puppeteer
├── package.json
└── README.md
```


## ✅ Pruebas automatizadas

### 1. Validación de carga
Verifica que el título de la página principal sea el esperado.

```js
expect(title).toMatch(/Books to Scrape/);
```

### 2. Validación visual
Captura una imagen completa de la homepage y verifica su existencia.

```js
await page.screenshot({ path: 'screenshots/homepage.png', fullPage: true });
```

### 3. Simulación de interacción
Simula clic en el primer libro, navega al detalle y valida el título, precio y disponibilidad.

```js
await page.click(".product_pod h3 a");
```


### 🧩 ¿Cuándo usarlo?
- Validación visual rápida
- Automatización fuera del entorno de pruebas
- Debugging manual de flujos frontend


## 🧪 Ejecución de pruebas

```bash
npm test
```

## ▶️ Ejecución del script manual

```bash
node scripts/puppeteer.js
```


## 📌 Autor

**Mauricio Vera**  
QA Automation Specialist | Frontend Architecture | UX Validation  
Viña del Mar, Chile
