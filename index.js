function fetchHTML(path) {
  return fetch(path)
    .then((doc) => doc.text())
    .then((html) => {
      const doc = (new DOMParser()).parseFromString(html, "text/html").body.children;

      const script = document.createElement('script');
      script.setAttribute("type", "module");
      script.setAttribute("async", "");
      script.innerText = doc[1].innerText;

      return [doc[0], script];
    });
};

export function State(data) {
  const main = document.querySelector('main');
  let formated = main.innerHTML;

  Object.keys(data).forEach((key) => {
    formated = formated.replace(new RegExp(`{${key}}`, "g"), data[key]);
  });
  main.innerHTML = formated;
}

export function Component(id, path) {
  fetchHTML(path).then((kid) => {
    document.querySelector(id).append(kid[0], kid[1]);
  });
};

export function Route(id, paths) {
  const routdiv = document.querySelector(id);

  function Routing() {
    const hash = (window.location.hash).slice(1);
    if (Object.keys(paths).includes(hash)) {
      fetchHTML(paths[hash]).then((kid) => {
        routdiv.innerHTML = '';
        routdiv.append(kid[0], kid[1]);
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
