const Site = new NGNX.VIEW.Registry({
  selector: '.polymath',
  namespace: 'site.',

  references: {
    smoothScrollLinks: 'a[data-section]'
  },

  init () {
    this.ref.smoothScrollLinks.on('click', evt => {
      evt.preventDefault()
      let link = evt.target

      document.getElementById(link.dataset['section']).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start'
      })
    })
  }
})
