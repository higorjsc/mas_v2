matrizMaker(index) {
    const dirValue = (key) => {
        const objeto = this.cardozoValues[index].find(item => item.id === key)
        return key[0] === key[1] ? objeto.value : "1"
    }
    const invValue = (key) => {
        const objeto = this.cardozoValues[index].find(item => item.id === key)
        return `1/${(objeto.value)}`
    }
    const matriz = [
    // Poço
        [dirValue("11"), dirValue("12"), dirValue("13"), dirValue("14"), dirValue("15")],
        // Rampa Diesel
        [invValue("12"), dirValue("22"), dirValue("23"), dirValue("24"), dirValue("25")],
        // Rampa Elétrico
        [invValue("13"), invValue("23"), dirValue("33"), dirValue("34"), dirValue("35")],
        // Correia Transportadora
        [invValue("14"), invValue("24"), invValue("34"), dirValue("44"), dirValue("45")]
    ]
},
