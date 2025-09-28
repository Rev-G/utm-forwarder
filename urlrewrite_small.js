const urlParams = new URLSearchParams(window.location.search);
let utmParameters = {};
for (const [key, value] of urlParams) {
  if (key.startsWith('utm_')) {
    utmParameters[key] = value;
  }
}
const links = document.querySelectorAll('a[href$="?uf=1"]');
links.forEach(link => {
  const href = link.href;
  const url = new URL(href);
  const linkParams = new URLSearchParams(url.search);
  for (const [key] of linkParams) {
    if (key.startsWith('utm_')) {
      return;
    }
  }
  for (const key in utmParameters) {
    linkParams.append(key, utmParameters[key]);
  }
  url.search = linkParams.toString();
  link.href = url.toString();
});