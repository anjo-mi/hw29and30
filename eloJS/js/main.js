// function speak(line){
//     console.log(`the ${this.type} rabbit says '${line}'`)
// }

// let whiteRabbit = {type: 'white', speak}
// let hungryRabbit = {type: 'hungry', speak}

// whiteRabbit.speak('SNOW CAMO')
// hungryRabbit.speak('LAY OFF ME IM STARVIN!')

// speak.call(whiteRabbit, 'still flaging')

// let finder = {
//     find(arr){
//         return arr.some((el) => el === this.value)
//     },
//     value: 5
// }

// console.log(finder.find([4,6,8,5]))

// let empty = {}

// console.log(empty.toString)
// console.log(empty.toString())

// console.log(Object.getPrototypeOf({}) === Object.prototype)
// console.log(Object.getPrototypeOf(Object.prototype))

// console.log(Object.getPrototypeOf(Math.max))
// console.log(Object.getPrototypeOf([]))


// let protoRabbit = {
//     speak(line){
//         console.log(`the ${this.type} rabbit says '${line}'`)
//     }
// }
// let blackRabbit = Object.create(protoRabbit)
// blackRabbit.type = 'black'
// blackRabbit.speak('you merely adopted the darkness, i was born in it')



// // classes-----------------------------------------------------------

// class Rabbit{
//     constructor(type){
//         this.type = type
//         this.hops = true
//     }
//     speak(line){
//         console.log(`the ${this.type} rabbit says '${line}'`)
//     }
// }


// const killerRabbit = new Rabbit('killer')

// console.log(Object.getPrototypeOf(killerRabbit))

// let obj = new class {getWord() {return 'hello'}}
// console.log(obj.getWord())


// // private properties-----------------------------------------------

// class SecretSquirrel{
//     #getSecret(){
//         return 'im a giant fatty'
//     }
//     interrogate(){
//         let tooMuchTorture = this.#getSecret()
//         return 'never'
//     }
// }

// let moroccoMole = new SecretSquirrel()

// class RandomSource{
//     #max
//     constructor(max){
//         this.#max = max
//     }
//     getNum(){
//         return Math.floor(Math.random() * this.#max)
//     }
// }

// let seven = new RandomSource(7)

// // override derived properties------------------------------------------

// Rabbit.prototype.teeth = 'small'
// console.log(killerRabbit.teeth)


// killerRabbit.teeth = 'wolf-like'
// console.log(killerRabbit.teeth)

// console.log(new Rabbit('basicBitch').teeth)
// console.log(Rabbit.prototype.teeth)

// console.log(Array.prototype.toString)
// console.log(Object.prototype.toString)
// console.log(Object.prototype.toString == Array.prototype.toString)


// console.log(Object.prototype.toString.call([1,2]))

// // Maps---------------------------------------------------------------

// let ages = {
//     Boris: 39,
//     Liang: 22,
//     Júlia: 62
// }

// console.log(`Júlia is ${ages['Júlia']}`)
// console.log(`is jacks age known?`, 'Jack' in ages)
// console.log(`is toString's age known?`, 'toString' in ages)
// // ???reason for using map??? ^^ get keys directly on obj, not prototype?

// console.log('toString' in Object.create(null))

// let aged = new Map()
// for (let key in ages){
//     aged.set(key, ages[key])
// }


// console.log(aged)

// console.log(`Júlia is ${aged.get('Júlia')}`)
// console.log(`is jacks age known`, aged.has('jack'))
// console.log(aged.has('toString'))

// // polymorphism-----------------------------------------------------

// Rabbit.prototype.toString = function(){
//     return `a ${this.type} rabbit`
// }

// console.log(String(killerRabbit))

// // getters, setters, static------------------------------------------

// let varyingSize = {
//     get size(){
//         return Math.floor(Math.random() * 100)
//     }
// }

// console.log(varyingSize.size)
// console.log(varyingSize.size)


// class Temperature{
//     constructor(celsius){
//         this.celsius = celsius
//     }
//     get fahrenheit(){
//         return this.celsius * (9/5) + 32
//     }
//     set fahrenheit(value){
//         this.celsius = (value - 32) / (9/5)
//     }
//     static fromFahreneheit(value){
//         return new Temperature((value - 32) / (9/5))
//     }
// }

// let temp = new Temperature(22)

// console.log(temp.celsius)
// console.log(temp.fahrenheit)

// temp.fahrenheit = 91
// console.log(temp.celsius)

// let boil = Temperature.fromFahreneheit(212)
// console.log(boil.celsius)

// // symbols-------------------------------------------------------

// let sym = Symbol('name')

// console.log(sym == Symbol('name'))


// Rabbit.prototype[sym] = 55
// console.log(killerRabbit[sym])

// const length = Symbol('length')
// Array.prototype[length] = 0

// console.log([1,2].length)
// console.log([1,2][length])

// let myTrip = {
//     length: 2,
//     0: 'uganda',
//     1: 'bahama',
//     [length]: 'a lot of miles'
// }

// console.log(myTrip[length])
// console.log(myTrip.length)

// // iterator interface-------------------------------------------------

// let okIterator = 'ok'[Symbol.iterator]()

// console.log(okIterator.next())
// console.log(okIterator.next())
// console.log(okIterator.next())
// console.log(okIterator.next().done)



// class List{
//     constructor(value, rest){
//         this.value = value
//         this.rest = rest
//     }
//     get length(){
//         return 1 + (this.rest ? this.rest.length : 0)
//     }
//     static fromArray(array){
//         let result = null
//         for (let i = array.length - 1; i >= 0 ; i--){
//             result = new this(array[i], result)
//         }
//         return result
//     }
//     [Symbol.iterator](){
//         return new ListIterator(this)
//     }
// }

// let myList = List.fromArray([1,2,3,4,5,6])

// console.log(myList)

// class ListIterator{
//     constructor(list){
//         this.list = list
//     }
//     next(){
//         if (this.list == null){
//             return {done: true}
//         }
//         let value = this.list.value
//         this.list = this.list.rest
//         return {value, done: false}
//     }
// }

// // List.prototype[Symbol.iterator] = function(){
// //     return new ListIterator(this)
// // }

// let newList = List.fromArray([1,2,3,4,5,6,7,8,9])
// console.log(newList)
// for (let key of newList){
//     console.log(key)
// }

// let array = [...newList]

// console.log(array)

// // inheritance----------------------------------------------------

// class LengthList extends List{
//     #length
//     constructor(value, rest){
//         super(value,rest)
//         this.#length = super.length
//     }
//     get length(){
//         return this.#length
//     }
// }

// console.log(LengthList.fromArray([2,2,3,4]))
// // LengthList {value : 2, rest: LengthList, #length: 4}


// // instanceOf operator------------------------------------------------

// console.log(new LengthList(1,null) instanceof LengthList)

// console.log(new LengthList(2,null) instanceof List)

// console.log(new List(3,null) instanceof LengthList
// )
// console.log([1] instanceof Array)

// console.log(List.fromArray([1,2,3,4]) instanceof ListIterator)


// ___________________________EXERCISES_______________________________




// vector type------------------------------------------------------
// class Vec{
//     #length
//     constructor(x,y){
//         this.x = x
//         this.y = y
//     }
//     plus(vector){
//         return new Vec(this.x + vector.x, this.y + vector.y)
//     }
//     minus(vector){
//         return new Vec(this.x - vector.x, this.y - vector.y)
//     }
//     get length(){
//         return Math.sqrt(this.x ** 2 + this.y ** 2)
//     }
// }



// console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// // → Vec{x: 3, y: 5}
// console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// // → Vec{x: -1, y: -1}
// console.log(new Vec(3, 4).length);
// // → 5






// groups---------------------------------------------------------

// class Group{
//     constructor(){
//         this.group = []
//     }
//     add(val){
//         if (!this.has(val)){
//             this.group.push(val)
//         }
//     }
//     delete(val){
//         let index = this.group.indexOf(val)
//         if (index !== -1){
//             this.group.splice(index,1)
//         }
//     }
//     has(val){
//         return this.group.includes(val)
//     }
//     static from(arr){
//         const group = new Group()
//         for (let val of arr){
//             group.add(val)
//         }
//         return group
//     }
    
// }


class Group{
        constructor(){
                this.group = []
            }
        add(val){
            if (!this.has(val)){
                this.group.push(val)
            }
        }
    delete(val){
        let index = this.group.indexOf(val)
        if (index !== -1){
            this.group.splice(index,1)
        }
    }
    has(val){
        return this.group.includes(val)
    }
    static from(arr){
        const group = new Group()
        for (let val of arr){
            group.add(val)
        }
        return group
    }
}


//     constructor(value, rest){
//         this.value = value
//         this.rest = rest
//     }

//     static fromArray(array){
//         let result = null
//         for (let i = array.length - 1; i >= 0 ; i--){
//             result = new this(array[i], result)
//         }
//         return result
//     }




let group = Group.from([10, 20]);
console.log(group)
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
console.log(group.group)

// iterable groups---------------------------------------------------
