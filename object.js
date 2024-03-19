// ***it's better to use regular function rather then arrow function inside an object 

const fighter = {
    name: 'Khabib Nurmadomegov',
    father: 'Abdel Manap',
    age: 31,
    gender: 'Male',
    weight: 209,
    nationality: 'Russian',
    type: 'MMA',
    record: {
        matches: 29, 
        win: 29,
        loss: 0,
        winningStreak: 29
    },
    fight: function(opponent, move) {
        console.log(`Oww! ${this.name} ${move} ${opponent}!`);
    },
    // 'this' can't be used inside an arrow function. so, we're not going to get 'this.name' here. it's going to show 'undefined' instead of the name 
    submit: (opponent) => console.log(`Oh no! ${this.name} submitted to ${opponent}`) 
}

fighter.fight('connor', 'punched')
fighter.submit('ferguson')