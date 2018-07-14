const Footer = new NGNX.VIEW.Registry({
  parent: Site,
  selector: 'main > footer',
  namespace: 'footer.',

  references: {
    copyright: '.copyright',
    copyrightYear: '#copyright_year'
  },

  init () {
    this.on({
      'copyright-year': {
        set: (year = (new Date()).getFullYear()) => {
          this.ref.copyrightYear.innerHTML = year
        }
      }
    })

    this.emit('copyright-year.set')
  }
})
