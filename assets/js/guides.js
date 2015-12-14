'use strict'

$(document).ready(function() {

  // register event handler
  $('#register').on('submit', function(e) {
    e.preventDefault();
    console.log("click");
    var credentials = form2object(this);
    guide_api.register(credentials, regCb);
    console.log("successful register!");
     // hide register container
    // $('.API-register').slideUp();
  });

  // login event handler
  $('#login').on('submit', function(e) {
    e.preventDefault();
    console.log("click");
    var credentials = form2object(this);
    console.log(credentials);
    guide_api.login(credentials, loginCb);

    // hide login container
    $('.API-login').slideUp();

    // fade up user-messages and create-poll button
    // $('.user-messages').fadeIn();
    $('.user-messages').html('<p>Welcome, ' + credentials.username + '</p>');

    // add user feedback
    $('.messages-container h4').html('Welcome, ' + credentials.username);
  });






  // $('#createNewGuide').on('submit', function(e) {
  //   e.preventDefault();

  //   var data = form2object(this);


  //   console.log('the form will send ' + JSON.stringify(data, null, 4));

  //   guide_api.createGuide(data, function(event) {

  //   })

  // });


  //   $("#create-blog").on("submit", function(event){
  //   event.preventDefault();
  //   var credentials = formDataToObject(this);
  //   blogRequest.create(credentials, function(error, data){
  //   blogRequest.getAll(function(error, data){
  //     $("#showAllBlogTableBody").empty();
  //     $("#display-blogs-table").show();
  //     $("#one-blog").hide();
  //     var template = Handlebars.compile($("#showAllBlogHandlebar").html());
  //     $('#result').val(JSON.stringify(data, null, 4)); //logs to test box
  //     var newHTML = template({blogs: data.blogs});
  //     $("#showAllBlogTableBody").html(newHTML);
  //     });
  //   });
  // });








});
