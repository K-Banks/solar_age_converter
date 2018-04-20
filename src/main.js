import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {User} from './user.js';
import {Age} from './age.js';

$(document).ready(function() {
  $("form#userSubmit").submit(function(event) {
    event.preventDefault();
    let userName = $("input#userName").val();
    let userYear = $("input#userYear").val();
    let userMonth = $("select#userMonth").val();
    let userDay = $("input#userDay").val();
    let newUser = new User(userName, userYear, userMonth, userDay);
  });
});
