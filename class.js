class Fighter {
    name
    father
    age
    gender
    weight
    move(direction) {
        console.log(`${this.name} moved ${direction}`)
    }
    // static methods can be called without creating any instance. i.e. Fighter.retire()
    static retire() {
        console.log('Player retired!')
    }
}

const khabib = new Fighter()

khabib.name = 'Khabib'
khabib.move('forward')
Fighter.retire()