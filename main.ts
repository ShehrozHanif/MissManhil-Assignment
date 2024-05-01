/* Question 1: write a JavaScript function that accepts a string as a parameter and counts the number of vovels within the string */

function vovel2(str:string){
    let vovel2 = ["a","e","i","o","u"]
    let count = 0
    for(const char of str.toLowerCase()){
        if(vovel2.includes(char)){
            count++;
        }
    }
    return count;
}

let input = vovel2("AEIOUPMNLou")


if(input){
    console.log("number of vovels", input)
}else{
    console.log("No vovel found")
}

/* What we did first make a function with the name of vovel2 Passing an Argument with the name of str and give the type string, than make a 
variable with the name of vovel2 in which passing the value of vovels in an Array. Then make another variable with the name of count and it assign 0.
Than use for loop to iterate if vovel2 include so increament in count++ othervise return count*/






/* Question No 2: Write a javascript function that accepts a number as a parameter and check whether its prime number or not using recursion */
function isPrimeNumber(num:number, divisor = 2){
    if(num <=1){
        return false;
    }
    if(divisor === num){
        return true
    }
    // Recursive case
    if(num % divisor === 0){
        return false;
    }
    return isPrimeNumber(num,divisor +1);
    // what we did is that increament by 1 , By default is 2 , if we dont do increament than it show only 2 is prime number and on rest function dont work
}

console.log(isPrimeNumber(5))

/* Conslusion of this function :
We all know that Prime number is divisible by itSelf or 1, So we Apply the condition according them, like the first condition,
if(num<=1) it means if number is less than 1 or equal to 1 return false because every number is divisible by 1 and every number is not prime number.
Then, if(divisor === number) return true , its obvious we tell you prime number are those which is divide by itself so if both are same it means
true. Then we use recursive if(num % divisor === 0) return false, it means if number is divide with divisor and quiotient === 0 it means it's not
a prime number. In the end we return function by increament in the divisor because to meet the conditions     */


// Quesion no 3 : Write a function in JavaScript to find the first non-repeated character of a string.

function firstNonRepeatedCharater(str:string){
    const charcount = new Map<string,number>();

    for(let char of str){
        charcount.set(char,(charcount.get(char)||0)+1)
    }

    for(let char of str){
        if(charcount.get(char)===1) {
            return char;
        }   
    }

    return null;

}

let ch = firstNonRepeatedCharater("my name malo")
console.log(ch)



// Question No 4: Write a function that return the sqaure of a number.

let sqaureFunction = (num:number)=>{
    console.log(num *num)
}

sqaureFunction(5)



// Question No 5: Function displayMessage() print "Hello World" string using console.log function.

function displayMessage(){
    console.log("Hello World")
}

displayMessage()
