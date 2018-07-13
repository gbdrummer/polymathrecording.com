'use strict';

NGNX.Loader({
  sync: ['./js/registries/main.js', './js/registries/footer.js']
}, function () {});

NGN.DOM.ready(function () {
  return NGN.DOM.svg.update();
});