
// make sure service worker is supported
// if ('serviceWorker' in navigator) {
//   console.log('Service Worker Supported');

//   window.addEventListener('load', () => {
//     navigator.serviceWorker
//       .register('../sw_cached_pages.js')
//       .then(reg => console.log('Service Worker: Registered'))
//       .catch(err => console.log(`Service Worker: Error: ${err}`));
//   })

// }

// Make sure sw are supported
if ('serviceWorker' in navigator) {
  console.log('Service Worker Supported - Site Caching');
  window.addEventListener('load', () => {
    navigator.serviceWorker
      // .register('sw_cached_pages.js')
      .register('./sw_cached_site.js')
      .then(reg => console.log('Service Worker: Registered (Pages)'))
      .catch(err => console.log(`Service Worker: Error: ${err}`));
  });
}

console.log('Done.  1111')