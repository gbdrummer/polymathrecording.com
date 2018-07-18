const Hero = new NGNX.VIEW.Registry({
  parent: Site,
  selector: 'main > section.hero',
  namespace: 'hero.',

  references: {
    header: '> header',
    headerNavLinks: '> header nav a'
  },

  init () {
    // let { headerNavLinks } = this.ref
    //
    // if ((headerNavLinks.length / 2) % 1 === 0) {
    //   headerNavLinks.elements[(headerNavLinks.length / 2) - 1].classList.add('center', 'left')
    //   headerNavLinks.elements[headerNavLinks.length / 2].classList.add('center', 'right')
    // } else {
    //   console.log('odd number!');
    //   headerNavLinks.each((link, index) => {
    //     let position = index + 1
    //
    //     console.log(position);
    //
    //     // console.log((headerNavLinks.length / position) % 1 === 0)
    //
    //     // if (headerNavLinks.length % position !== 1) {
    //     //   return
    //     // }
    //     //
    //     // if (position === headerNavLinks.length / 2) {
    //     //   link.classList.add('center-left')
    //     //   headerNavLinks[position].element.classList.add('center-right')
    //     //   return
    //     // }
    //   })
    // }
  }
})
