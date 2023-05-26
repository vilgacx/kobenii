export function State(eles, data) {
  eles.forEach((i) => {
    const main = document.querySelector(i);
    let formated = main.innerHTML;
    Object.keys(data).forEach((key) => {
      formated = formated.replace(new RegExp(`<${key}>(.*?)</${key}>`, 'g'), `<${key}>${data[key]}</${key}>`);
    });
    main.innerHTML = formated;
  });
}
export function Component(id, path) {
  f(path).then((kid) => {
    document.querySelector(id).append(kid[0], kid[1]);
  });
};

export function Route(id, paths) {
  const routdiv = document.querySelector(id);
  function Routing() {
    const hash = (window.location.hash).slice(1);
    if (Object.keys(paths).includes(hash)) {
      f(paths[hash]).then((kid) => {
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

function f(path) {
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
