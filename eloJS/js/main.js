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

// override derived properties------------------------------------------

Rabbit.prototype.teeth = 'small'
console.log(killerRabbit.teeth)


killerRabbit.teeth = 'wolf-like'
console.log(killerRabbit.teeth)

console.log(new Rabbit('basicBitch').teeth)
console.log(Rabbit.prototype.teeth)

console.log(Array.prototype.toString)
console.log(Object.prototype.toString)
console.log(Object.prototype.toString == Array.prototype.toString)


console.log(Object.prototype.toString.call([1,2]))

// Maps---------------------------------------------------------------

let ages = {
    Boris: 39,
    Liang: 22,
    Júlia: 62
}

console.log(`Júlia is ${ages['Júlia']}`)
console.log(`is jacks age known?`, 'Jack' in ages)
console.log(`is toString's age known?`, 'toString' in ages)
// ???reason for using map??? ^^ get keys directly on obj, not prototype?

console.log('toString' in Object.create(null))

let aged = new Map()
for (let key in ages){
    aged.set(key, ages[key])
}


console.log(aged)

console.log(`Júlia is ${aged.get('Júlia')}`)
console.log(`is jacks age known`, aged.has('jack'))
console.log(aged.has('toString'))

// polymorphism-----------------------------------------------------

Rabbit.prototype.toString = function(){
    return `a ${this.type} rabbit`
}

console.log(String(killerRabbit))

// getters, setters, static------------------------------------------

let varyingSize = {
    get size(){
        return Math.floor(Math.random() * 100)
    }
}

console.log(varyingSize.size)
console.log(varyingSize.size)


class Temperature{
    constructor(celsius){
        this.celsius = celsius
    }
    get fahrenheit(){
        return this.celsius * (9/5) + 32
    }
    set fahrenheit(value){
        this.celsius = (value - 32) / (9/5)
    }
    static fromFahreneheit(value){
        return new Temperature((value - 32) / (9/5))
    }
}

let temp = new Temperature(22)

console.log(temp.celsius)
console.log(temp.fahrenheit)

temp.fahrenheit = 91
console.log(temp.celsius)

let boil = Temperature.fromFahreneheit(212)
console.log(boil.celsius)

// symbols-------------------------------------------------------

let sym = Symbol('name')

console.log(sym == Symbol('name'))


Rabbit.prototype[sym] = 55
console.log(killerRabbit[sym])

const length = Symbol('length')
Array.prototype[length] = 0

console.log([1,2].length)
console.log([1,2][length])

let myTrip = {
    length: 2,
    0: 'uganda',
    1: 'bahama',
    [length]: 'a lot of miles'
}

console.log(myTrip[length])
console.log(myTrip.length)

// iterator interface-------------------------------------------------

