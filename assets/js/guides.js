'use strict'

$(document).ready(function() {

  $.ajaxSetup({
    xhrFields: {
      withCredentials: true
    }
  });

  var data;

  $('.login').on('click', function(e) {
    e.preventDefault();
    $('#updateGuideContainer').hide();
    $('#createGuideContainer').hide();
    $('#show-all-guides').hide();
    $('#showAllGuidesTable').hide();
    $('#showAllGuides').hide();
    $('#single-guide').hide();
    $('.API-login').show();
  });

  $('.register-a2').on('click', function(e) {
    e.preventDefault();
    $('.API-register').show();
    $('.API-login').hide();
  });

  $('.login-a2').on('click', function(e) {
    e.preventDefault();
    $('.API-register').hide();
    $('.API-login').show();
  });

  // REGISTER
  $('#register').on('submit', function(e) {
    e.preventDefault();
    var credentials = form2object(this);
    guide_api.register(credentials, regCb);
    console.log("successful register!");

    $('.API-register').slideUp();
    $('.API-login').fadeIn('fast');

    $('.user-messages').html('<p>Successfully registered as ' + credentials.username + '!</p>');
  });

  // LOGIN
  $('#login').on('submit', function(e) {
    e.preventDefault();
    var credentials = form2object(this);
    var user = credentials.username;

    var loginCb = function (error, data) {

      if (error) {
        console.error(error);
        $(".user-messages").html("<strong>Error! Login failed!</strong>");
        return;
      }

      $('.user-messages').html('<p>Welcome, ' + user + '!</p>');
      $('.API-login').slideUp();
      $('.API-register').hide();
      console.log("Logged in!");
      pageController.showGuides();
    };

    $('.user-messages').text('Logging in. Please wait.');
    $('.user-messages').fadeIn();
    $('#show-all-guides').show();
    guide_api.login(credentials, loginCb);

  });

  //LOGOUT
  $('.logout').on('click', function(e) {
    e.preventDefault();
    guide_api.logout(function(error, data){
      if(error){
        console.error(error);
      }

      $('.user-messages').html("Logged out!");

    });
  });


  // shows table with all guides
  $('.showTable').on('click', function(e) {
    $('.API-register').hide();
    $('.API-login').hide();
    pageController.showGuides();
    guide_api.readAll(readAllCb);
  });

  // shows create guide form
  $('.showCreate').on('click', function(e) {
    $('#createGuideContainer').show();
    $('#single-guide').hide();
    $('#show-all-guides').hide();
    $('.API-register').hide();
    $('.API-login').hide();
    $('.user-messages').empty();
  });

  // CREATE A GUIDE
  $('#createNewGuide').on('submit', function(e) {
    e.preventDefault();

    var target = e.target;
    var title = target.guideTitle.value;
    var playerRace = target.playerRace.value;
    var matchup = target.matchup.value;
    var description = target.descriptionInput.value;

    data = {
      title: title,
      playerRace: playerRace,
      matchup: matchup,
      description: description
    }

    // console.log('the form will send ' + JSON.stringify(data, null, 4));

    guide_api.createGuide(data, createCb);

  });

  //READ ONE GUIDE
  $("#show-all-guides").on("click", function(e){
    e.preventDefault();
    var id = $(e.target).data("id");
    if(id === undefined){
      return;
    }

    // console.log("guide id is " + id);
    guide_api.readOne(id, readOneCb);
  });

  //Shows UPDATE form
  $("#single-guide").on("click", "#edit-guide", function(e) {

    $('#single-guide').hide();
    $('#updateGuideContainer').show();
    $('#updateGuide').show();

  });


  $("#updateGuide").on("submit", function(e) {
    e.preventDefault();

      var id = $("#edit-guide").data("id");
    // console.log($(this).data("id"));

    var target = e.target;
    var title = target.guideTitle.value;
    var playerRace = target.playerRace.value;
    var matchup = target.matchup.value;
    var description = target.descriptionInput.value;

    data = {
      _id: id,
      title: title,
      playerRace: playerRace,
      matchup: matchup,
      description: description
    }

    guide_api.updateGuide(id, data, updateCb)
  });

  //DELETE A GUIDE
  $("#single-guide").on("click", "#delete-guide", function(e) {
    e.preventDefault();
    var id = $(this).data("id");
    // console.log($(this).data("id"));

    guide_api.deleteGuide(id, deleteCb);
  });

}); //end document ready
