function dogYears(planetName,dogAge){
    const sec=31557600
if (planetName==='earth'){
    return Number(((dogAge*7)/sec).toFixed(2));
}else if (planetName==='mercury'){
    return Number(((dogAge*0.2408467*7)/sec).toFixed(2));
}else if (planetName==='venus'){
    return (Number((dogAge*0.61519726*7)/sec).toFixed(2));
}else if (planetName==='mars'){
    return Number(((dogAge*1.8808158*7)/sec).toFixed(2));
}else if (planetName==='jupiter'){
    return Number(((dogAge*11.862615*7)/sec).toFixed(2));
}else if (planetName=='saturn'){
    return Number(((dogAge*29.447498*7)/sec).toFixed(2));
}else if (planetName==='uranus'){
    return Number(((dogAge*84.016846*7)/sec).toFixed(2));
}else if (planetName==='neptune'){
    return Number(((dogAge*164.79132*7)/sec).toFixed(2));
}else{
    return null
}
}