import {Age} from "./../src/age.js";

describe('Conversion of Earth age to other relative ages', function() {

  const ageCaller = new Age;
  const currentDate = new Date(2018, 3, 20);

  it('should convert a provided age in years to seconds', function(){
    const userAge = 24;
    expect(ageCaller.secondConverter(userAge)).toEqual(756864000);
  });

  it('should determine difference in seconds between two dates', function(){
    const userBirth = new Date(2015, 3, 20);
    expect(ageCaller.dateDifference(currentDate, userBirth)).toEqual(94694400);
  });

  it('should return age in Mercury solar years', function() {
    const userBirth = new Date(1994, 3, 20);
    const convertName = 'Mercury';
    let earthAgeSeconds = ageCaller.dateDifference(currentDate, userBirth);
    expect(ageCaller.planetaryAge(earthAgeSeconds, convertName)).toEqual(100.07);
  });

  it('should return age in Venus solar years', function() {
    const userBirth = new Date(1994, 3, 20);
    const convertName = 'Venus';
    let earthAgeSeconds = ageCaller.dateDifference(currentDate, userBirth);
    expect(ageCaller.planetaryAge(earthAgeSeconds, convertName)).toEqual(38.74);
  });

  it('should return age in Mars solar years', function() {
    const userBirth = new Date(1994, 3, 20);
    const convertName = 'Mars';
    let earthAgeSeconds = ageCaller.dateDifference(currentDate, userBirth);
    expect(ageCaller.planetaryAge(earthAgeSeconds, convertName)).toEqual(12.77);
  });

  it('should return age in Jupiter solar years', function() {
    const userBirth = new Date(1994, 3, 20);
    const convertName = 'Jupiter';
    let earthAgeSeconds = ageCaller.dateDifference(currentDate, userBirth);
    expect(ageCaller.planetaryAge(earthAgeSeconds, convertName)).toEqual(2.02);
  });

  it('should return an estimate of remaining life expectancy for each planet', function() {
    const userBirth = new Date(1994, 3, 20);
    const lifeExpectancy = 70;
    expect(ageCaller.remainingCalculator(userBirth, lifeExpectancy)).toEqual([46, 191.66, 74.19, 24.46, 3.87])
  });

});
