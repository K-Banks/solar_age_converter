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
    expect(ageCaller.planetaryAge(earthAgeSeconds, convertName)).toEqual(5.76);
  });

  it('should return age in Venus solar years', function() {
    const userBirth = new Date(1994, 3, 20);
    const convertName = 'Venus';
    let earthAgeSeconds = ageCaller.dateDifference(currentDate, userBirth);
    expect(ageCaller.planetaryAge(earthAgeSeconds, convertName)).toEqual(14.89);
  });

  it('should return age in Mars solar years', function() {
    const userBirth = new Date(1994, 3, 20);
    const convertName = 'Mars';
    let earthAgeSeconds = ageCaller.dateDifference(currentDate, userBirth);
    expect(ageCaller.planetaryAge(earthAgeSeconds, convertName)).toEqual(45.15);
  });

  it('should return age in Jupiter solar years', function() {
    const userBirth = new Date(1994, 3, 20);
    const convertName = 'Jupiter';
    let earthAgeSeconds = ageCaller.dateDifference(currentDate, userBirth);
    expect(ageCaller.planetaryAge(earthAgeSeconds, convertName)).toEqual(284.83);
  });

});
