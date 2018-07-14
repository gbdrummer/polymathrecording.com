NGNX.Loader({
  sync: [
    './js/registries/site.js',
    './js/registries/footer.js'
  ]
}, () => {})

NGN.DOM.ready(() => NGN.DOM.svg.update())
