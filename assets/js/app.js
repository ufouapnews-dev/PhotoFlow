const app = document.getElementById("app");

function renderApp() {
  const page = AppState.navigation.currentPage;

  if (page === "home") renderHome();
  if (page === "sections") renderSections();
}

function renderHome() {
  app.innerHTML = `
    <main class="app-shell">
      <section class="hero">
        <div class="top-bar">
          <span class="badge">Evento privado</span>
          <span class="brand-mini">📸 ${AppState.app.name}</span>
        </div>

        <div class="hero-title">
          <h1>${AppState.app.name}</h1>
          <p>${AppState.event.slogan}</p>
        </div>
      </section>

      <section class="content">
        <div class="event-card">
          <h2>${AppState.event.name}</h2>
          <div class="date">${AppState.event.date}</div>

          <p>
            Gracias por acompañarnos. Comparte aquí las fotos y videos
            que captures durante esta celebración.
          </p>

          <div class="actions">
            <button class="btn btn-primary" onclick="goTo('sections')">
              Subir fotos o videos
            </button>

            <button class="btn btn-secondary">
              Ver galería
            </button>
          </div>
        </div>

        <div class="status">
          <div class="status-box">
            <strong>0</strong>
            <span>Recuerdos</span>
          </div>

          <div class="status-box">
            <strong>6</strong>
            <span>Momentos</span>
          </div>
        </div>

        <div class="footer">
          ${AppState.app.name} · Versión Fundación · v${AppState.app.version}
        </div>
      </section>
    </main>
  `;
}

function renderSections() {
  const sections = [
    ["Preparativos", "✨"],
    ["Misa de Agradecimiento", "⛪"],
    ["Cocktail de Bienvenida", "🍸"],
    ["Cena", "🍽️"],
    ["Vals", "👑"],
    ["Fiesta", "🎉"],
    ["After Party", "🌙"],
    ["Carpeta General", "📁"]
  ];

  app.innerHTML = `
    <main class="app-shell white-shell">
      <section class="sections-header">
        <button class="icon-back" onclick="goTo('home')">←</button>
        <h1>Secciones</h1>
      </section>

      <section class="sections-grid">
        ${sections.map(([name, icon], index) => `
          <button class="section-tile tile-${index + 1}" onclick="selectSection('${name}')">
            <span class="tile-overlay"></span>
            <span class="tile-icon">${icon}</span>
            <span class="tile-name">${name}</span>
          </button>
        `).join("")}
      </section>
    </main>
  `;
}

function selectSection(sectionName) {
  AppState.upload.section = sectionName;
  alert("Seleccionaste: " + sectionName);
}

renderApp();
