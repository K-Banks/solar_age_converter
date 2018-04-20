import {Age} from "./../src/age.js";

describe('Conversion of Earth age to other relative ages', function() {

  const ageCaller = new Age;

  it('should convert a provided age in years to seconds', function(){
    const userAge = 24;
    expect(ageCaller.secondConverter(userAge)).toEqual(756864000);
  });

  it('should determine difference in seconds between two dates', function(){
    const currentDate = new Date(2018, 3, 20);
    const userBirth = new Date(2015, 3, 20);
    expect(ageCaller.dateDifference(currentDate, userBirth)).toEqual(94694400);
  });

  it('should return age in Mercury solar years', function() {

  });

});


// const userAge = new Date(94, 3, 20);
// const currentDate = new Date(2018, 3, 20);
