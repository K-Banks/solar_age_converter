class User {

  constructor(name, birthYear, birthMonth, birthDay) {
    this.name = name;
    this.birthYear = birthYear;
    this.birthMonth = birthMonth;
    this.birthDay = birthDay;
    this.date = new Date(this.birthYear, this.birthMonth, this.birthDay);
  }

}

export {User};
