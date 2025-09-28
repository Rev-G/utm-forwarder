// Get the current URL's search parameters
const urlParams = new URLSearchParams(window.location.search);

// Create an object to store UTM parameters
let utmParameters = {};

// Iterate over the search parameters
for (const [key, value] of urlParams) {
  // Check if the parameter key starts with "utm_"
  if (key.startsWith('utm_')) {
    // Add the parameter to the utmParameters object
    utmParameters[key] = value;
  }
}

// Now, the utmParameters object contains all the UTM parameters found in the URL.
console.log(utmParameters);

// append the UTM parameters to the URL of every href link on the page that starts with https://checkout.deniseanne.com
// Get all the links on the page
const links = document.querySelectorAll('a[href$="?uf=1"]');

// Iterate through the links
links.forEach(link => {
  const href = link.href;
  const url = new URL(href);
  const linkParams = new URLSearchParams(url.search);

  // Check if any utm_ parameter already exists in the link
  for (const [key] of linkParams) {
    if (key.startsWith('utm_')) {
      // If any utm_ parameter exists, skip rewriting this link
      return;
    }
  }

  // Otherwise, append the UTM parameters
  for (const key in utmParameters) {
    linkParams.append(key, utmParameters[key]);
  }
  url.search = linkParams.toString();
  link.href = url.toString();
});