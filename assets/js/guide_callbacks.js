'use strict'

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
  }
  $('.API-login').slideUp();
  $('.API-register').hide();
  console.log("Logged in!");
  // guide_api.readAll(readAllCb);
};

var createCb = function(error, data) {
  if (error) {
    console.error(error);
    $(".user-messages").html("<strong>Error! Guide creation failed!</strong>");
    return;
  }
  console.log('successful create, data is ' + JSON.stringify(data, null, 4));
  guide_api.readAll(readAllCb);
  pageController.showGuides();
};

var readAllCb = function(error, data) {
  if (error) {
    console.error(error);
    $(".user-messages").html("<strong>Error! Trouble loading table!</strong>");
    return;
  }
  $("#showAllGuides").empty();
  var template = Handlebars.compile($('#allGuidesHandlebars').html());
  // console.log("result is " + JSON.stringify(data, null, 4));
  var newHTML = template({guides: data});
  $('#showAllGuides').show;
  $('#show-all-guides').show;
  $('#showAllGuidesTable').show;
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
  var newHTML = template(data[0]);

  $("#single-guide").show();
  $("#single-guide").html(newHTML);
  $('#single-guide > p').html(data[0].description.replace(/\n/g, '<br />'));

};

var updateCb = function(error, data) {
  if (error) {
    console.error(error);
    $(".user-messages").html("<strong>Error! Guide could not be updated!</strong>");
    return;
  }
  debugger;
  guide_api.readAll(readAllCb);
  pageController.showGuides();
};

var deleteCb = function(error, data) {
  if (error) {
    console.error(error);
    $(".user-messages").html("<strong>Error! Guide could not be deleted!</strong>");
    return;
  }
  $("single-guide").empty().hide();
  guide_api.readAll(readAllCb);
  pageController.showGuides();
};
