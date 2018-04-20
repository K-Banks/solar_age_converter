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
    let earthAgeSeconds = ageCaller.dateDifference(currentDate, userBirth);
    expect(ageCaller.mercuryDate(earthAgeSeconds)).toEqual(5.76);
  });

});


// const userAge = new Date(94, 3, 20);
// const currentDate = new Date(2018, 3, 20);
