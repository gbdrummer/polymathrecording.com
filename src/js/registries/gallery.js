const Gallery = new NGNX.VIEW.Registry({
  parent: Site,
  selector: 'main section.gallery',
  namespace: 'gallery.',

  references: {
    slider: '.slider',
    previousButton: 'button.previous',
    nextButton: 'button.next'
  },

  init () {
    let {
      slider,
      previousButton,
      nextButton
    } = this.ref

    Site.gallery = this.self.element

    previousButton.on('click', evt => slider.element.previous())
    nextButton.on('click', evt => slider.element.next())
  }
})
