'use strict'

 var guide = {
  id: null,
  playerRace: null,
  title: null,
  matchup: null,
  author: null
 };

var form2object = function(form) {
  var data = {};
  $(form).children().each(function(index, element) {
    var type = $(this).attr('type');
    if ($(this).attr('name') && type !== 'submit' && type !== 'hidden') {
      data[$(this).attr('name')] = $(this).val();
    }
  });
  return data;
};

// registration callback
var regCb = function (error, data) {
  if (error) {
    console.error(error);
    $(".user-messages").html("<strong>Error! Registration failed!</strong>");
    return;
  }
  console.log('data is ' + data);
  console.log(JSON.stringify(data, null, 4));
};

// login callback
var loginCb = function (error, data) {

  if (error) {
    console.error(error);
    $(".user-messages").html("<strong>Error! Login failed!</strong>");
    return;
  } else {
    console.log(JSON.stringify(data, null, 4));
    console.log("Logged in!");
  }

};

var createCb = function(error, data) {
  if (error) {
    console.error(error);
    $(".user-messages").html("<strong>Error! Guide creation failed!</strong>");
    return;
  }
  console.log('successful create, data is ' + JSON.stringify(data, null, 4));
  guide_api.readAll(readAllCb);
};

var readAllCb = function(error, data) {
  if (error) {
    console.error(error);
    $(".user-messages").html("<strong>Error! Trouble loading table!</strong>");
    return;
  }
  $("#showAllGuides").empty();
  var template = Handlebars.compile($('#allGuidesHandlebars').html());
  console.log("result is " + JSON.stringify(data, null, 4));
  var newHTML = template({guides: data});
  $('#showAllGuides').show;
  $('#showAllGuides').html(newHTML);

};

var readOneCb = function(error, data) {
  if (error) {
    console.error(error);
    $(".user-messages").html("<strong>Error! Guide could not be loaded!</strong>");
    return;
  }

  $("#single-guide").empty();
  $("#showAllGuidesTable").hide();
  $("#single-guide").show();
  var template = Handlebars.compile($("#show-one-guide").html());
  console.log(JSON.stringify(data, null, 4));
  var newHTML = template(data.blogs);
  $("#single-guide").html(newHTML);

};
