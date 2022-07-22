const pronoun=str=>{
    let words=str.split(/\b\s+/)
    let res={}
    words.forEach((word,i)=>{
        if(confirmPronoun(word)){
            if (!res[word]){
                res[word]={words:[],count:0}
            }
            if (i !== words.length - 1 && !confirmPronoun(words[i + 1])){
                res[word].words.push(words[i + 1])
            }
            res[word].count++
        }
    })
    return res
}

const confirmPronoun=str=>{
    const pronouns=['i','you','he','she', 'it','they','we']
    if (pronouns.indexOf(str.toLowerCase())!==-1) return true
    return false
}