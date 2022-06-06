function dogYears(planetName,dogAge){
    const Planets={
        'earth':1,
        'mercury':0.2408467,
        'venus':0.61519726,
        'mars':1.8808158,
        'jupiter':11.862615,
        'saturn':29.447498,
        'uranus':84.016846,
        'neptune':164.79132,
    };
    const sec=31557600;
let year=dogAge/sec;
let newYear=year/Planets[planetName];
let newDogYear=newYear*7;
return Number(newDogYear.toFixed(2));
}
console.log(dogYears('mercury', 2134835688))