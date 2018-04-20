class Age {

  secondConverter(age) {
    let ageInSeconds = 0;
    ageInSeconds = (age * 365 * 24 * 60 * 60);
    return ageInSeconds;
  }

  dateDifference(date1, date2) {
    const date1FixedDifference = date1.getTime();
    const date2FixedDifference = date2.getTime();
    const datesDifference = (date1FixedDifference - date2FixedDifference)/1000;
    return datesDifference;
  }

  planetaryAge(earthAge, convertName) {
    const planets = ['mercury', 'venus', 'mars', 'jupiter'];
    let conversionFactor = 0;
    let planetAge = 0;

    convertName = convertName.toLowerCase();

    if (convertName === planets[0]) {
      conversionFactor = 0.24;
    } else if (convertName === planets[1]) {
      conversionFactor = 0.62;
    } else if (convertName === planets[2]) {
      conversionFactor = 1.88;
    } else if (convertName === planets[3]) {
      conversionFactor = 11.86;
    } else {
      conversionFactor = 1;
    }

    planetAge = earthAge / conversionFactor;
    planetAge = (planetAge / 60 / 60 / 24 / 365);
    planetAge = planetAge.toFixed(2);
    planetAge = parseFloat(planetAge);

    return planetAge;
  }

  remainingCalculator(earthAgeSeconds, lifeExpectancy) {
    const conversions = [1, 0.24, 0.62, 1.88, 11.86];
    let returnArray = [];
    let remainingLife = lifeExpectancy - earthAgeSeconds;
    if (remainingLife > 0) {
      conversions.forEach(function(conversion){
        let planetRemainingLife = 0;
        planetRemainingLife = remainingLife / conversion;
        planetRemainingLife = (planetRemainingLife / 60 / 60 / 24 / 365);
        planetRemainingLife = planetRemainingLife.toFixed(2);
        planetRemainingLife = parseFloat(planetRemainingLife);
        returnArray.push(planetRemainingLife);
      });
    } else if (remainingLife <= 0) {
      conversions.forEach(function(conversion){
        let planetRemainingLife = 0;
        planetRemainingLife = remainingLife / conversion;
        planetRemainingLife = (planetRemainingLife / 60 / 60 / 24 / 365);
        planetRemainingLife = planetRemainingLife.toFixed(2);
        planetRemainingLife = parseFloat(planetRemainingLife);
        planetRemainingLife = planetRemainingLife * -1;
        returnArray.push(planetRemainingLife);
      });
    } else {
      console.log('Remaining life error alert');
    }
    return returnArray;
  }

}

export {Age};
