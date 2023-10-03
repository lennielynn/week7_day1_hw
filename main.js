console.log('JavaScript homework day 1')
/* 
QUESTION 1
Write a function that takes a string and an array of strings ( in this example dog_names) 
and checks if one of the list members (dog names) is in the string. Return an array of the 
dog names found in the array
 */ console.log('QUSTION 1')

//ANSWER
const inputString = "Hello, my dog is Max, and they have purple eyes!"   
const dogs = ["Max","Fido","Gizmo","Nala"]
   

  function dogNames(){
    const dogNames = [] 
for(const name of dogs){   
    if(inputString.includes(name)){ 
        dogNames.push(name)
    }
}
    return dogNames;  
}
const result = dogNames(inputString,dogs)   
console.log(result)  






/* 
QUESTION 2
Write a function using a for loop to convert an array of numbers from inches to feet.
*/console.log('QUSTION 2')

//ANSWER
const inches = [66, 64, 60, 52, 72, 80, 51]
const ft = ConvertToft(inches)

function ConvertToft(inches){
    const ft = [] 
    for(let i=0; i<inches.length; i++){ 
        ft.push(inches[i] / 12);
    }
    return ft  
}
console.log(ft)


//ANSWER 2
// const inches = numbers.map(num => num / 12)
// console.log(inches)





/* 
QUESTION 3
create an array that adds ‘is eating pizza’ to every name from the array ‘tmnt’
 that ends with ‘o’ and add ‘is being rude’ to any other name
*/console.log('QUSTION 3')
const tmnt = ["Leonardo", "Michelangelo", "Donatello", "Raphael"]


function ninjaTurtles(){
    for(let i =0; i < tmnt.length; i++){
        if (tmnt[i].slice(length - 1) == 'o'){
            console.log(`${tmnt[i]} is eating pizza`)
        } else{
            console.log(`${tmnt[i]} is being rude`)
        }
}}
ninjaTurtles()
        
const NTurtles = tmnt.map(nt => `${nt} is eating pizza`)
console.log(NTurtles)



/* 
QUESTION 4
Write an arrow function to find the max number in a list. Do not use the Math.max function.
The list will be all positive numbers.
*/console.log('QUSTION 4')

//ANSWER
const largest = () => {
const number = [123, 5436, 45784, 1234, 34, 65, 234125, 645, 3452, 13216, 49]
let num2 = 0
    for(let i = 0; i < number.length; i++){
        if (number[i] > num2) { 
            num2 = number[i]
            console.log(num2)
        }}}
largest()


