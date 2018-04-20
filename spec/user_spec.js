import {User} from "./../src/user.js";

describe('User information submission', function() {

  it('should instantiate an object with user submitted information', function() {
    const userExample = new User('John Doe', 1973, 3, 14);
    let userName = "John Doe";
    let userYear = 1973;
    let userMonth = 3;
    let userDay = 14;
    let user = new User(userName, userYear, userMonth, userDay);
    expect(user).toEqual(userExample);
  });

});
