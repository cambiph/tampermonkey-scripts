// ==UserScript==
// @name     Bamboo wallboard custom style
// @include  https://www.milieuinfo.be/bamboo/telemetry.action*
// @grant    GM_addStyle
// @run-at   document-start
// ==/UserScript==

Array.from(document.getElementsByClassName('plan-name')).forEach(function(element) {
    let sanitized = element.text.replace(/\(all\)/gi, '');
    element.text = sanitized;
});

GM_addStyle ( `
  .build {
    width: 250px !important;
    height: 50% !important;
    padding: 0px 0px 0px !important;
    margin-bottom: 0px;
    width: 100% !important;
  }

  .build .result {
    height: 100% !important;
    padding: 0px !important;
    margin: 2px 2px 2px !important;
  }

  .build .plan-name {
    padding: 0px !important;
    font-size: 73px !important;
    background: none !important;
    box-shadow: none;
  }

  .build-details {
    display: none !important;
  }

  .build .Successful .plan-name:before {
    content: none !important;
  }

  .build .Failed .plan-name:before {
    content: none !important;
  }

  .details-ext {
    display: none !important;
  }

  .reason {
    display: none !important;
  }
` );
