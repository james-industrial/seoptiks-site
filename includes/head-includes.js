/* =====================================================
   SEOptiks — Global Head Includes
   Loaded on every page via <script src="/includes/head-includes.js">
   To add/update tracking or consent scripts, edit this file only.
   ===================================================== */

(function () {

  // 1. Cytrio Cookie Consent (must load before GA)
  var cytrio = document.createElement('script');
  cytrio.className = 'cytrio-script';
  cytrio.src = 'https://cytriocpmprod.blob.core.windows.net/cytrio-public/cookiescript/5/5/script.js';
  document.head.appendChild(cytrio);

  // 2. Google Analytics — G-K31ZPCGVHL
  var gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-K31ZPCGVHL';
  document.head.appendChild(gaScript);

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', 'G-K31ZPCGVHL');

})();
