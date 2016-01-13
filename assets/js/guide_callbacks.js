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

var createCb = function(error, data) {
  if (error) {
    console.error(error);
    $(".user-messages").html("<strong>Error! Guide creation failed!</strong>");
    return;
  }
  // console.log('successful create, data is ' + JSON.stringify(data, null, 4));
  guide_api.readAll(readAllCb);
  pageController.showGuides();
  $('.user-messages').html("Guide created!");
};

var readAllCb = function(error, data) {
  if (error) {
    console.error(error);
    $(".user-messages").html("<strong>Error! Trouble loading table!</strong>");
    return;
  }
  $("#showAllGuides").empty();
  var template = Handlebars.compile($('#allGuidesHandlebars').html());
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

  guide_api.readAll(readAllCb);
  pageController.showGuides();
  $('.user-messages').html("Guide updated!");
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
  $('.user-messages').html("Guide deleted!");
};
