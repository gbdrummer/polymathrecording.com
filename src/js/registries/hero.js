const Hero = new NGNX.VIEW.Registry({
  parent: Site,
  selector: 'main > .splash section.hero',
  namespace: 'hero.',

  references: {
    slider: '> .slider'
  },

  init () {
    Site.hero = this.self.element

    setInterval(() => this.ref.slider.element.next(), 6180)
  }
})
