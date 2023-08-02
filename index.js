const o = window.location.origin;

export function Init() {
  window.onload = () => {
    document.querySelectorAll('a').forEach((a) => {
      if (a.hasAttribute('route')) {
        a.onclick = (e) => {
          e.preventDefault(); 
          history.pushState({}, '', a.href.replace(o, ''));
          window.dispatchEvent(new Event('popstate'));
        };
      }
    });
  };
};

export function State(con, data) {
  Object.keys(data).forEach((key) => {
    document.querySelector(con).querySelectorAll(key).forEach((ele) => {
      ele.innerText = data[key];
    });
  });
}

export function Component(id, path) {
  f(path).then((kid) => {
    const ele = document.querySelector(id);
    ele.innerHTML = kid[0];
    ele.append(kid[1]);
  });
};

export function Route(id, paths) {
  const routdiv = document.querySelector(id);
  function Routing() {
    const path = (window.location.href).replace(o, '');
    if (Object.keys(paths).includes(path)) {
      f(paths[path]).then((kid) => {
        routdiv.innerHTML = kid[0];
        routdiv.append(kid[1]);
      });
    } else {
      routdiv.innerHTML = '';
    }
  };
  Routing();
  window.addEventListener('popstate', () => {
    Routing();
  });
};

async function f(path) {
  return fetch(path)
    .then((doc) => doc.text())
    .then((html) => {
      const doc = (new DOMParser()).parseFromString(html, "text/html").body.children;
      const script = document.createElement('script');
      script.innerText = doc[1].innerText;
      script.setAttribute("type", "module");
      script.setAttribute("async", "");
      const htmldoc = html.trim().replace("/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi","");
      return [htmldoc, script];
    });
};
