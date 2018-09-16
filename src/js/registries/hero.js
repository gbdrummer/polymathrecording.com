const Hero = new NGNX.VIEW.Registry({
  parent: Site,
  selector: 'main > .splash section.hero',
  namespace: 'hero.',

  references: {
    slider: '> .slider'
  },

  init () {
    Site.hero = this.self.element
    Site.slider = this.ref.slider.element
  }
})
