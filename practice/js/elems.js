class Elem {
    constructor(id, img, state, styles, parentBlock) {
        this.id = id
        this.img = img
        this.state = state
        this.styles = styles
        this.initElem()
    }

    initElem() {
        $('.img-body').append(`<img class="elem" id=${this.id} src=${this.img[this.state]}>`)
        $(`#${this.id}`).css(this.styles)
    }


    setState(state) {
        this.state = state
        $(`#${this.id}`).attr("src", this.img[this.state])
    }

}