function RNA(str) {
    let newStr = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'G') {
            newStr += 'C'
        } else if (str[i] === 'C') {
            newStr += 'G'
        } else if (str[i] === 'T') {
            newStr += 'A'
        } else if (str[i] === 'A') {
            newStr += 'U'
        } else if(str === '') {
            return str
        }
    }
    return newStr
}

function DNA(str) {
    let newStr = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'C') {
            newStr += 'G'
        } else if (str[i] === 'G') {
            newStr += 'C'
        } else if (str[i] === 'A') {
            newStr += 'T'
        } else if (str[i] === 'U') {
            newStr += 'A'
        } else if (str === '') {
            return str
        }
    }
    return newStr
}