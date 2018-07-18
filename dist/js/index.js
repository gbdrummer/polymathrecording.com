'use strict';

NGNX.Loader({
  sync: ['./js/registries/site.js', './js/registries/footer.js', './js/registries/hero.js']
}, function () {});

NGN.DOM.ready(function () {
  return NGN.DOM.svg.update();
});