export const DATA = {};

export function Component(id, path) {
  fetch(path)
    .then((doc) => doc.text())
    .then((html) => {
      const htmldoc = (new DOMParser()).parseFromString(html, "text/html");
      document.querySelector(id).appendChild(htmldoc.body);
    });
};
