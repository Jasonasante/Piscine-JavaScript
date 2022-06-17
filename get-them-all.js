export {getArchitects, getActive, getClassical, getBonannoPisano}

function getArchitects(){
    let arrArchi=[]
    arrArchi.push(Array.from(document.getElementsByTagName("a")))
    arrArchi.push(Array.from(document.getElementsByTagName("span")))
    return arrArchi
}

function getActive(){
    let arrActive=[]
    arrActive.push(Array.from(document.querySelectorAll('.classical.active')))
    arrActive.push(Array.from(document.querySelectorAll(".classical:not(.classical.active)")))
    return arrActive
}

function getClassical(){
    let arrClassical=[]
    arrClassical.push(Array.from(document.querySelectorAll(".classical")))
    arrClassical.push(Array.from(document.querySelectorAll(".modern, .baroque")))
    return arrClassical
}

function getBonannoPisano(){
    let arrBon=[]
    let bon=document.getElementById('BonannoPisano')
    arrBon.push(Array.from(document.querySelectorAll('.classical.active')))
    return [bon,arrBon]
}