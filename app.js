/* ==========================================================================
   SOFRE SALSAS ARTESANALES - JAVASCRIPT V2 (GITHUB PAGES ENHANCED)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initSauceDropdown();
  initRecipeAccordions();
});

/* --- Sauce Catalog Data --- */
const sauceDatabase = {
  mixtos: {
    name: 'SOFRE Salsa de Chiles Mixtos',
    tagline: 'Un toque para cada cocina del mundo',
    picor: 4,
    dulzura: 2,
    volumen: '280ml',
    chiles: 'Chile de árbol, guajillo, morita y chipotle',
    ingredientes: 'Chile de árbol, guajillo, chile morita, chipotle, ajo, sal, agua, especias finas.',
    origen: 'Tepatitlán, Jalisco, México',
    maridaje: 'Cortes de carne, pollo asado, tacos de pastor, huevos al gusto y pastas.',
    img: 'assets/images/sofre_chiles_mixtos.png'
  },
  habanero_mango: {
    name: 'SOFRE Habanero & Mango Fuego',
    tagline: 'Fuego tropical agridulce e intenso',
    picor: 5,
    dulzura: 4,
    volumen: '280ml',
    chiles: 'Chile habanero amarillo seleccion',
    ingredientes: 'Chile habanero, pulpa natural de mango de manila, vinagre de manzana, ajo, sal marina.',
    origen: 'Jalisco, México',
    maridaje: 'Camarones al coco, tacos de pescado, tostadas de atún, boneless y ensaladas.',
    img: 'assets/images/sofre_chiles_mixtos.png'
  },
  macha: {
    name: 'SOFRE Macha Pepita & Arándano',
    tagline: 'Crujiente artesanal en aceite de ajonjolí',
    picor: 3,
    dulzura: 3,
    volumen: '280ml',
    chiles: 'Chile de árbol tostado y morita',
    ingredientes: 'Aceite vegetal de canola, chile de árbol, pepitas de calabaza, arándano deshidratado, cacahuate, sal.',
    origen: 'Jalisco, México',
    maridaje: 'Tacos de ribeye, quesos fundidos, sopas, pizza artesanal y carne a la parrilla.',
    img: 'assets/images/sofre_chiles_mixtos.png'
  },
  chipotle_bbq: {
    name: 'SOFRE Chipotle Ahumado BBQ',
    tagline: 'Ahumado artesanal con toque amaderado',
    picor: 3,
    dulzura: 3,
    volumen: '280ml',
    chiles: 'Chile chipotle meco ahumado',
    ingredientes: 'Chile chipotle, jitomate rostizado, piloncillo, cebolla, ajo, tomillo y especias.',
    origen: 'Jalisco, México',
    maridaje: 'Costillas de cerdo, hamburguesas gourmet, alitas de pollo y papas gajo.',
    img: 'assets/images/sofre_chiles_mixtos.png'
  },
  habanero_negro: {
    name: 'SOFRE Habanero Negro Ahumado',
    tagline: 'Intensidad mística a las brasas ancestrales',
    picor: 5,
    dulzura: 1,
    volumen: '280ml',
    chiles: 'Habanero negro tatemado a la ceniza',
    ingredientes: 'Chile habanero tatemado, jugo de limón agrio, cebolla morada, pimienta gorda, sal.',
    origen: 'Jalisco, México',
    maridaje: 'Aguachile negro, pulpo a la parrilla, tacos de corte grueso y mariscos secos.',
    img: 'assets/images/sofre_chiles_mixtos.png'
  }
};

/* --- Interactive Sauce Selector Dropdown --- */
function initSauceDropdown() {
  const select = document.getElementById('sauceDropdown');
  if (!select) return;

  select.addEventListener('change', (e) => {
    const key = e.target.value;
    const data = sauceDatabase[key];
    if (!data) return;

    const infoCard = document.getElementById('sauceInfoDisplay');
    infoCard.style.opacity = '0';

    setTimeout(() => {
      document.getElementById('sauceTitle').innerText = data.name;
      document.getElementById('sauceTagline').innerText = data.tagline;
      document.getElementById('sauceChiles').innerText = data.chiles;
      document.getElementById('sauceIng').innerText = data.ingredientes;
      document.getElementById('saucePairing').innerText = data.maridaje;
      document.getElementById('sauceVol').innerText = data.volumen;

      // Render Fire Dots
      const fireContainer = document.getElementById('sauceFireDots');
      fireContainer.innerHTML = renderDots(data.picor, 'fire');

      // Render Sweet Dots
      const sweetContainer = document.getElementById('sauceSweetDots');
      sweetContainer.innerHTML = renderDots(data.dulzura, 'sweet');

      infoCard.style.opacity = '1';
    }, 200);
  });
}

function renderDots(activeCount, type) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    const activeClass = i <= activeCount ? (type === 'fire' ? 'active-fire' : 'active-sweet') : '';
    html += `<div class="dot ${activeClass}"></div>`;
  }
  return html;
}

/* --- Recipe Accordions (Desplegables de Recetas) --- */
function initRecipeAccordions() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const content = item.querySelector('.accordion-content');

      const isActive = item.classList.contains('active');

      // Close other open accordions for clean accordion UX
      document.querySelectorAll('.accordion-item').forEach(other => {
        other.classList.remove('active');
        const otherContent = other.querySelector('.accordion-content');
        if (otherContent) otherContent.style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
}
