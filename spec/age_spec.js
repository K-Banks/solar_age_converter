import {Age} from "./../src/age.js";

describe('Conversion of Earth age to other relative ages', function() {

  it('should convert a provided age(in years) to seconds', function(){
    const userAge = 24;
    const ageCaller = new Age();
    expect(ageCaller.secondConverter(userAge)).toEqual(756864000);
  });

});


// const userAge = new Date(94, 3, 20);
// const currentDate = new Date(2018, 3, 20);
