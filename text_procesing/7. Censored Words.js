function solve(text,word) {

// while(text.includes(word)){

//     text = text.replace(word, "*".repeat(word.length))
    
// }

// console.log(text)
let result = '' //let result; the same 
while(text.includes(word)){
let startIndex = text.indexOf(word)
let endIdex = startIndex + word.length
result = text.substring(0,startIndex)
result += "*".repeat(word.length)
result += text.substring(endIdex)
text = result
}

console.log(result)



}solve('A small sentence small with some words',
'small')