function train(input) {

let wagons = input[0].split(" ")
let wagonsCount = wagons.map(Number)


for (let index = 2; index < input.length; index++) {
    let wagonCapacity = Number (input[1])
  let commnad = input[index].split(" ")
  
if(commnad[0] === "Add"){
    wagonsCount.push(commnad[1])

}else{
    let people = Number (commnad[0])
    for (let i = 0; i < wagonsCount.length; i++) {
       
        if (wagonCapacity - wagonsCount[i] >= people) {
            wagonsCount[i] += people
            break;
        }
        
    }
}



}

console.log(wagonsCount.join(" "))

}train(["32 54 21 12 4 0 23", 
"75", 
"Add 10", 
"Add 0", 
"30", 
"10", 
"75"]);