// 1--------------------------------------------------
// dogs


class Dog{
    constructor(name, species, size){
        this.name = name
        this.species = species
        this.size = size
        this.isGoodPuppy = true
    }
    bark(){
        if (this.size > 60){
            return 'GET THE FUCK OUTA HERE'
        }
        else{
            return '...yip yip?'
        }
    }
}


const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);



// 2----------------------------------------------------
// char inventory

class Character{
    constructor(name, health, strength){
        this.name = name
        this.health = health
        this.strength = strength
        this.xp = 0
        this.gold = 10
        this.keys = 1
    }

    attack(target){
        if (this.health > 0){
            const damage = this.strength
            console.log(`${this.name} attacks ${target.name} and causes ${damage} damage points.`)
            target.health -= damage
            if (target.health > 0){
                console.log(`${target.name} has ${target.health} health remaining`)
            }else{
                target.health = 0
                const bonusXP = 10
                console.log(`${this.name} has defereated ${target.name}, earned ${bonusXP} experience points and ${target.gold} gold, and found ${target.keys} key(s).`)
                this.xp += bonusXP
                this.gold += target.gold
                target.gold = 0
                this.keys += target.keys
                target.keys = 0
            }
        }else{
            console.log(`${this.name} can't attack, as they've already been eliminated`)
        }
    }
    describe(){
        return `${this.name} has ${this.health} HP, ${this.strength} Attack Power, and ${this.xp} Experience Points. Also has ${this.gold} gold and ${this.keys} key(s)`
    }
}

const aurora = new Character("Aurora", 150, 25);
const glacius = new Character("Glacius", 130, 30);

console.log("Welcome to the adventure! Here are our heroes:");
console.log(aurora.describe());
console.log(glacius.describe());

const monster = new Character("Spike", 40, 20);
console.log("A wild monster has appeared: it's named " + monster.name);

monster.attack(aurora);
monster.attack(glacius);
aurora.attack(monster);
glacius.attack(monster);

console.log(aurora.describe());
console.log(glacius.describe());