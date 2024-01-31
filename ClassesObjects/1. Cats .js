function solve(arr) {
    
class Cat {

constructor(name, age){
    this.name = name 
    this.age = age 
}
meow(){
    console.log(`${this.name}, age ${this.age} says Meow`)
    }
}
for (const cat of arr) {
    let [name, age] = cat.split(" ")
    let tempCat = new Cat(name, age)
    tempCat.meow()
}



}solve(['Mellow 2', 'Tom 5'])