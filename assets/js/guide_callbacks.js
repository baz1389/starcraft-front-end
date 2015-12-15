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

};
