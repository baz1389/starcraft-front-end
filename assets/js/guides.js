'use strict'

$(document).ready(function() {

  $.ajaxSetup({
    xhrFields: {
      withCredentials: true
    }
  });

  $('#updateGuideContainer').hide();
  $('#createGuideContainer').hide();
  $('#show-all-guides').hide();
  $('.showTable').hide();
  $('.showCreate').hide();
  $('#single-guide').hide();


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
    // console.log(credentials);
    guide_api.login(credentials, loginCb);

    // hide login container
    $('.API-login').slideUp();
    $('.API-register').hide();


    // fade up user-messages
    $('.user-messages').fadeIn();
    $('.user-messages').html('<p>Welcome, ' + credentials.username + '</p>');
    $('#show-all-guides').show();
    $('.showTable').show();
    $('.showCreate').show();

  });

  // shows table with all guides
  $('.showTable').on('click', function(e) {
    pageController.showGuides();
  });

  // shows create guide form
  $('.showCreate').on('click', function(e) {
    $('#createGuideContainer').show();
    $('#single-guide').hide();
    $('#show-all-guides').hide();
  });

  // CREATE A GUIDE
  $('#createNewGuide').on('submit', function(e) {
    e.preventDefault();

    var target = e.target;
    var title = target.guideTitle.value;
    var playerRace = target.playerRace.value;
    var matchup = target.matchup.value;
    var description = target.descriptionInput.value;

    var data = {
      title: title,
      playerRace: playerRace,
      matchup: matchup,
      description: description
    }

    console.log('the form will send ' + JSON.stringify(data, null, 4));

    guide_api.createGuide(data, createCb);

  });


  $("#show-all-guides").on("click", function(e){
    e.preventDefault();
    console.log("clicked show guide");
    var id = $(e.target).data("id");
    if(id === undefined){
      return;
    }

    console.log("guide id is " + id);
    guide_api.readOne(id, readOneCb);
  });


$("#single-guide").on("click", '#delete-guide', function(e) {
  e.preventDefault();
  debugger;
  var id = $(this).data("id");
  console.log($(this).data("id"));

  guide_api.deleteGuide(id, deleteCb);
});







}); //end document ready
