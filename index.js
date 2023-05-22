export const DATA = {};

function fetchHTML(path) {
  return fetch(path).then((doc) => doc.text());
};

export function Component(id, path) {
  fetchHTML(path).then((html) => {
    const htmldoc = (new DOMParser()).parseFromString(html, "text/html"); 
    document.querySelector(id).appendChild(htmldoc.body);
  }); 
};

export function Route(id,paths) {
  const routdiv = document.querySelector(id);
  
  function Routing() {
    const hash = (window.location.hash).slice(1);
    if (Object.keys(paths).includes(hash)) {
      fetchHTML(paths[hash]).then((html) => {
        routdiv.innerHTML = html;
      });
    } else {
      routdiv.innerHTML = '';
    }
  };
  Routing();

  window.addEventListener('hashchange', () => {
    Routing();
  });
};
