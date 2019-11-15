const pngLama = {
        props: ['options'],
        data: () => ({
                loaded: false,
        }),
        methods: {
            getStyle(){
                if(this.loaded) {
                    let gradient = ''
                    switch (this.options.mode) {
                        case 'image':
                            return `background: url('${this.options.image}') no-repeat center; background-size: cover;`
                        case 'color':
                            return `background-color: ${this.options.color};`
                        case 'gradient':
                            gradient = `background-image: linear-gradient(to ${this.options.gradient.direction}`
                            for (const color of this.options.gradient.colors) {
                                gradient += `, ${color}`
                            }
                            gradient += ');'
                            return gradient
                    }
                }
            }
    }
}

export default pngLama