/* =====================================================
   SEOptiks — Global Head Includes
   Loaded on every page via <script src="/includes/head-includes.js">
   To add/update tracking or consent scripts, edit this file only.
   ===================================================== */

// 1. Cytrio Cookie Consent (loads first, before GA)
var cytrio = document.createElement('script');
cytrio.className = 'cytrio-script';
cytrio.src = 'https://cytriocpmprod.blob.core.windows.net/cytrio-public/cookiescript/5/5/script.js';
document.head.appendChild(cytrio);

// 2. Google Analytics async loader
var gaScript = document.createElement('script');
gaScript.async = true;
gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-K31ZPCGVHL';
document.head.appendChild(gaScript);

// 3. GA initialisation — injected as an inline script tag so it
//    runs in the correct context exactly as Google's snippet intends
var gaInit = document.createElement('script');
gaInit.innerHTML = [
  'window.dataLayer = window.dataLayer || [];',
  'function gtag(){dataLayer.push(arguments);}',
  'gtag("js", new Date());',
  'gtag("config", "G-K31ZPCGVHL");'
].join('\n');
document.head.appendChild(gaInit);
