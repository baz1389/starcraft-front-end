'use strict'

$(document).ready(function() {

  $('#updateGuideContainer').hide();
  $('#createGuideContainer').hide();
  $('#show-all-guides').hide();


  // REGISTER
  $('#register').on('submit', function(e) {
    e.preventDefault();
    var credentials = form2object(this);
    guide_api.register(credentials, regCb);
    console.log("successful register!");
     // hide register container
    $('.API-register').slideUp();

    $('.user-messages').html('<p>Successfully registered as, ' + credentials.username + '</p>');
  });

  // LOGIN
  $('#login').on('submit', function(e) {
    e.preventDefault();
    console.log("click");
    var credentials = form2object(this);
    console.log(credentials);
    guide_api.login(credentials, loginCb);

    // hide login container
    $('.API-login').slideUp();
    $('.API-register').hide();


    // fade up user-messages and create-poll button
    // $('.user-messages').fadeIn();
    $('.user-messages').html('<p>Welcome, ' + credentials.username + '</p>');

  });

  // CREATE A GUIDE
  $('#createNewGuide').on('submit', function(e) {
    e.preventDefault();

    var data = form2object(this);
    console.log('the form will send ' + JSON.stringify(data, null, 4));

    guide_api.createGuide(data, createCb);
  });











});
