NGNX.Loader({
  sync: [
    './js/registries/main.js',
    './js/registries/footer.js'
  ]
}, () => {})

NGN.DOM.ready(() => NGN.DOM.svg.update())
