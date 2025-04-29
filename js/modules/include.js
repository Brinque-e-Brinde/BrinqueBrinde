//usar essa função no head do HTML de alguma página (ex: home) para puxar da pasta components os componentes desenvolvidos, para usar eles em outra página.
export async function includeHTML(selector, url) {
    const container = document.querySelector(selector);
    if (!container) return;
    const res = await fetch(url);
    container.innerHTML = await res.text();
  }
  