function speak(line){
    console.log(`the ${this.type} rabbit says '${line}'`)
}

let whiteRabbit = {type: 'white', speak}
let hungryRabbit = {type: 'hungry', speak}

whiteRabbit.speak('SNOW CAMO')
hungryRabbit.speak('LAY OFF ME IM STARVIN!')

speak.call(whiteRabbit, 'still flaging')

let finder = {
    find(arr){
        return arr.some((el) => el === this.value)
    },
    value: 5
}

console.log(finder.find([4,6,8,5]))

let empty = {}

console.log(empty.toString)
console.log(empty.toString())

console.log(Object.getPrototypeOf({}) === Object.prototype)
console.log(Object.getPrototypeOf(Object.prototype))

console.log(Object.getPrototypeOf(Math.max))
console.log(Object.getPrototypeOf([]))


let protoRabbit = {
    speak(line){
        console.log(`the ${this.type} rabbit says '${line}'`)
    }
}
let blackRabbit = Object.create(protoRabbit)
blackRabbit.type = 'black'
blackRabbit.speak('you merely adopted the darkness, i was born in it')



// classes-----------------------------------------------------------
class Rabbit{
    constructor(type){
        this.type = type
        this.hops = true
    }
    speak(line){
        console.log(`the ${this.type} rabbit says '${line}'`)
    }
}


const killerRabbit = new Rabbit('killer')

console.log(Object.getPrototypeOf(killerRabbit))

let obj = new class {getWord() {return 'hello'}}
console.log(obj.getWord())


// private properties-----------------------------------------------

class SecretSquirrel{
    #getSecret(){
        return 'im a giant fatty'
    }
    interrogate(){
        let tooMuchTorture = this.#getSecret()
        return 'never'
    }
}

let moroccoMole = new SecretSquirrel()

class RandomSource{
    #max
    constructor(max){
        this.#max = max
    }
    getNum(){
        return Math.floor(Math.random() * this.#max)
    }
}

let seven = new RandomSource(7)