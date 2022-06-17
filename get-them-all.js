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
    const active=[...document.querySelectorAll('.classical.active')]
    for (let i=0;i<active.length;i++){
        if (active[i].id!='BonannoPisano'){
            arrBon.push(active[i])
        }
    }
    return [bon,arrBon]
}