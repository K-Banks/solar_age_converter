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

  planetaryAge(earthAge, conversionFactor) {
    let planetAge = earthAge * conversionFactor;
    planetAge = (planetAge / 60 / 60 / 24 / 365);
    planetAge = planetAge.toFixed(2);
    planetAge = parseFloat(planetAge);
    return planetAge;
  }

}

export {Age};
