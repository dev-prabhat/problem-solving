// Given length of a regular hexagon, your function should return area of the hexagon.

const  areaOfHexagon = (side) => ((3*Math.sqrt(3)*side*side)/2).toFixed(2)

// console.log(areaOfHexagon(4))

//  Given an array and an item, your function should return the index at which the item is present.


const getIndex = (arr,item) => {
    for(let i = 0;i<arr.length;i++) {
        if(arr[i] === item) {
            return i
        }
    }
    return -1
}

// console.log(getIndex([1,2,3,4,5,6],7))

//  Given a sentence, return a sentence with first letter of all words as capital.

const getUpperCase = letter => {
    let asciiValue = letter.charCodeAt(0)
    console.log(asciiValue)
    if(asciiValue >= 97 && asciiValue <= 122) asciiValue -= 32
    console.log(asciiValue,String.fromCharCode(asciiValue))
    return String.fromCharCode(asciiValue)
}

const getSentenceCase = (str) => {
    wordArray = str.trim().split(" ")
    wordArray.forEach((word,index) => {
        wordArray[index] = getUpperCase(word[0]) + word.slice(1)
    });
    console.log(wordArray.join(" "))
}


console.log(getSentenceCase('we are neoGrammers'))


// getSentenceCase("  we are developers  ")