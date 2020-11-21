// Code your solution here!

printString = string => {
    console.log(string[0])
    if (string.length === 1) return string
    return  printString(string.substring(1, string.length))
}

reverseString = string => {
    if (string.length === 1) return string
    return string[string.length-1] + reverseString(string.slice(0, -1))
} 

isPalindrome = string => {
    if (string.length === 1) return true
    if (string[0] === string[string.length-1]) {
        return isPalindrome(string.slice(1,-1))
    } else return false
}

addUpTo = (array, index) => {
    if (index === 0) return array[0]
    return array[index] + addUpTo(array, --index)
}

maxOf = array => {
    if(array.length < 2) return array
    return Math.max(array.pop(), maxOf(array))
}

includesNumber = (array, number) => {
    if (number === array[0]) return true
    else if (array.length === 0) return false
    else return includesNumber(array.slice(1), number)
}
