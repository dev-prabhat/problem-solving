// Q-1 Given a and b, your function should return the value of a^b

function getExponent(a,b){
    if(b < 0 ) return
    if(b === 0) return 1
    return a * getExponent(a,b-1)
}

// console.log(getExponent(2,4))
// console.log(getExponent(2,0))
// console.log(getExponent(2,1))
// console.log(getExponent(2,2))
// console.log(getExponent(2,-2))

// Q-2 Q. Given an array, your function should return the length of the array.

let arr = [1,2,4,6,7,9,23,100]


Array.prototype.getLength = function(){
   let i = 0 
   while(this[i] !== undefined) i++
   return i
}

function getLength(arr){
   let i=0
   while(arr[i] !== undefined) i++
   return i
}

// console.log(arr.getLength())

// Q-3 Write a function that generates a secret code from a given string, by shifting characters of the alphabet by N places. Example:
// Input: encodeString("neogcamp", 2) ––> Output: pgqiecor


let str = "abc"

// console.log(str.charCodeAt(0))
// console.log(str.charCodeAt(1))
// console.log(str.charCodeAt(2))

function encodeString(str,place){
    let encodeString = ""
    for(let ele of str){
        let asciiValue = ele.charCodeAt(0)
        let encodeCode = asciiValue + (place)%26
        // if asciiValue is small letter
        if(asciiValue >= 97 && asciiValue <= 122){
            // made changes in encodeCode accordingly
            if(encodeCode > 122) encodeCode -= 26
        }
        // if asciiValue is Capital letter
        else if(asciiValue >= 90 && asciiValue <= 65){
            // made changes in encodeCode accordingly
            if(encodeCode > 90) encodeCode -= 26
        }
        encodeString += String.fromCharCode(encodeCode)
    }
    return encodeString
}

// console.log(encodeString("neogcamp",3))

// for(let e of str){
//     console.log(e.charCodeAt(0))
// }