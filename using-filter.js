function filterShortStateName(arr){
    return arr.filter(element=>element.length<7)
}

function filterStartVowel(arr){
    return arr.filter(element=>/^[aeiou]/i.test(element))
}

const filter5Vowels = arr => arr.filter(word => word.match(/[aeiou]/gi).length >= 5)

const filter1DistinctVowel = array => array.filter(word => {
    let arr = word.match(/[aeiou]/gi)// this returns an array contain just the vowels contained within the string
    return arr.every(v => v.toLowerCase() === arr[0].toLowerCase())//if the slice of vowels only contains the vowel present in arr[0] return the word
})

const multiFilter = array => array.filter(obj=>{
    return obj.capital.length>=8 && /^[b-df-hj-np-tv-z]/gi.test(obj.name) && ((/[aeiouAEIOU]/g).test(obj.tag)==true) && obj.region!='South'
  })



