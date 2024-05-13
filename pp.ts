import chalk from "chalk"

//Question 1: Write a function in JavaScript which count each repeated character

function repeatedCharater(str:string){
    let charcount = new Map()
    let repeatedChar:any=[]
  
   // count occurence of each charater
    for(let char of str.toLowerCase()){
        charcount.set(char,(charcount.get(char)||0)+1);
    } 

    //Find repeated characters
  charcount.forEach((count,char)=>{ 
    if(count>1){
    repeatedChar.push({char:char,count:count});
    }
   })
  return repeatedChar

}

let check = repeatedCharater("helloh")
console.log(check)


//Question 2: write a function in JavaScript which repeated character

function repeatedCharater2(str:string){
    let charCount = new Map()
    for(let char of str){
        charCount.set(char,(charCount.get(char)||0)+1)
    }
    return Object.fromEntries(charCount)  // To hide Map which is written in Output
}

let result = repeatedCharater2("hello")
console.log(result)


//Question no 3: Write a function in which you can check the words are available in the written Paragraph

function findParagraph(Paragraph:string, word:string){
    return Paragraph.toLowerCase().includes(word.toLowerCase())
}

let Paragraph = "I love Imran khan and he is the bravest person in the world among which i've seen so far"
let word = "IMRAN KHAN"
let seeTheResult= findParagraph(Paragraph,word)
if(seeTheResult){
    console.log(`The word ${chalk.green(word)} is available in the Paragragh`)
}else{
    console.log(`The word ${chalk.red(word)} is not available in the Paragragh`)
}
