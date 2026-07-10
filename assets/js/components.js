const UI = {
  button({
    text,
    variant = "primary",
    onClick = "",
    icon = ""
  }) {
    const iconMarkup = icon
      ? `<span class="button-icon">${icon}</span>`
      : "";

    return `
      <button
        class="btn btn-${variant}"
        ${onClick ? `onclick="${onClick}"` : ""}
      >
        ${iconMarkup}
        <span>${text}</span>
      </button>
    `;
  },

  backButton(targetPage = "home") {
    return `
      <button
        class="icon-back"
        onclick="goTo('${targetPage}')"
        aria-label="Regresar"
      >
        ←
      </button>
    `;
  },

  sectionCard({ name, icon, index }) {
    return `
      <button
        class="section-tile tile-${index}"
        onclick="selectSection('${name}')"
      >
        <span class="tile-overlay"></span>
        <span class="tile-icon">${icon}</span>
        <span class="tile-name">${name}</span>
      </button>
    `;
  },

  statusBox({ value, label }) {
    return `
      <div class="status-box">
        <strong>${value}</strong>
        <span>${label}</span>
      </div>
    `;
  }
};
