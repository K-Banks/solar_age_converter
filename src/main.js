import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {User} from './user.js';
import {Age} from './age.js';

const ageCaller = new Age();

$(document).ready(function() {
  $("form#userSubmit").submit(function(event) {
    event.preventDefault();
    let currentDate = new Date(Date.now());
    let lifeExpectancy = ageCaller.secondConverter(70);
    let userName = $("input#userName").val();
    let userYear = $("input#userYear").val();
    let userMonth = $("select#userMonth").val();
    let userDay = $("input#userDay").val();
    let newUser = new User(userName, userYear, userMonth, userDay);
    let userAgeSeconds = ageCaller.dateDifference(currentDate, newUser.date);
    let mercuryAge = ageCaller.planetaryAge(userAgeSeconds, "mercury");
    let venusAge = ageCaller.planetaryAge(userAgeSeconds, "venus");
    let earthAge = ageCaller.planetaryAge(userAgeSeconds, "earth");
    let marsAge = ageCaller.planetaryAge(userAgeSeconds, "mars");
    let jupiterAge = ageCaller.planetaryAge(userAgeSeconds, "jupiter");

    let lifeRemainingArray = ageCaller.remainingCalculator(userAgeSeconds, lifeExpectancy);
    $("span#mercuryExpectancyOutput").text(lifeRemainingArray[0]);
    $("span#venusExpectancyOutput").text(lifeRemainingArray[1]);
    $("span#earthExpectancyOutput").text(lifeRemainingArray[2]);
    $("span#marsExpectancyOutput").text(lifeRemainingArray[3]);
    $("span#jupiterExpectancyOutput").text(lifeRemainingArray[4]);

    $("span#secondOutput").text(userAgeSeconds);
    $("span#mercuryAgeOutput").text(mercuryAge);
    $("span#venusAgeOutput").text(venusAge);
    $("span#earthAgeOutput").text(earthAge);
    $("span#marsAgeOutput").text(marsAge);
    $("span#jupiterAgeOutput").text(jupiterAge);
    $("span#expectancyOutput").text(lifeExpectancy);
  });
});
