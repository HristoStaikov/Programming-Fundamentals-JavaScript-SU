function solve(arrOne, arrTwo) {
let stock ={}

let product = ' '
let quantity = 0

for (let index = 0; index < arrOne.length; index++) {
    
    if(index % 2 === 0){
       product = arrOne[index]
    }else{
        
     quantity = Number (arrOne[index])
    }
    stock[product] = quantity
}

 
for (let index = 0; index < arrTwo.length; index++) {
       product = ' '
       quantity = 0
   

    if(index % 2 === 0){
        product = arrTwo[index]
    }else{
       
     quantity = Number (arrTwo[index])
    }
   
   
    if (stock.hasOwnProperty(product)) {
    stock[product] += quantity;
   }else{
    stock[product] = quantity
   

   }
    
}

console.table(stock)


}solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas','14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7','Tomatoes', '70', 'Bananas', '30'])