const pronoun=str=>{
    let words=str.split(/(\s+)/)
    let res={}
    words.forEach((word,i)=>{
        if(confirmPronoun(word)){
            if (!res[word]){
                res[word]={words:[],count:0}
            }
            if (i !== words.length - 1 && !confirmPronoun(words[i + 1])){
                res[word].word.push(words[index + 1])
            }
            res[word].count++
        }
    })
}

const confirmPronoun=str=>{
    const pronouns=['i','you','he','she', 'it',' they','we']
    if (pronouns.indexOf(str)!==-1) return true
    return false
}