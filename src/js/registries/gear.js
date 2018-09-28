const Gear = new NGNX.VIEW.Registry({
  parent: Site,
  selector: 'main section.gear',
  namespace: 'gear.',

  references: {
    sections: 'section.collapsible'
  },

  init () {
    this.on({
      sections: {
        'collapse-all': () => this.ref.sections.eachClassList.remove('open')
      },

      'open-section': {
        set: section => {
          this.emit('sections.collapse-all')
          section.classList.add('open')
        }
      }
    })

    let { sections } = this.ref

    Site.gear = this.self.element

    sections.each(section => {
      let header = section.querySelector('h3')
      header.addEventListener('click', () => {
        if (section.classList.contains('open')) {
          return this.emit('sections.collapse-all')
        }

        this.emit('open-section.set', section)
      })
    })
  }
})
