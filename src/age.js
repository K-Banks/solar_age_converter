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

  mercuryDate(earthAge) {
    const mercuryConversionFactor = 0.24;
    let mercuryAge = earthAge * mercuryConversionFactor;
    mercuryAge = (mercuryAge / 60 / 60 / 24 / 365);
    mercuryAge = mercuryAge.toFixed(2);
    mercuryAge = parseFloat(mercuryAge);
    return mercuryAge;
  }

  venusDate(earthAge) {
    const venusConversionFactor = 0.62;
    let venusAge = earthAge * venusConversionFactor;
    venusAge = (venusAge / 60 / 60 / 24 / 365);
    venusAge = venusAge.toFixed(2);
    venusAge = parseFloat(venusAge);
    return venusAge;
  }

}

export {Age};
