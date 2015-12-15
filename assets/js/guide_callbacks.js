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


// var createCb = function(error, data) {
//   if (error) {
//     console.error(error);
//     $(".user-messages").html("<strong>Error! Guide was not created!</strong>");
//     return;
//   }
//   guide_api.readAll(function(error, data){
//     $("#showAllGuides").empty();
//     $("#createGuideContainer").show();
//     $("#single-guide").hide();
//     var template = Handlebars.compile($("#allGuidesHandlebars").html());
//     console.log('the form will send ' + JSON.stringify(data, null, 4));
//     var newHTML = template({guides: data.guides});
//     $("#showAllGuides").html(newHTML);
//   });
// };

var createCb = function(error, data) {
  if (error) {
    console.error(error);
    $(".user-messages").html("<strong>Error! Poll create fail!</strong>");
    return;
  }
  console.log('successful create, data is ' + JSON.stringify(data, null, 4));

  guide.id = data["_id"];
  guide.playerRace = data.playerRace;
  guide.title = data.title;
  guide.matchup = data.matchup;
  guide.author = data.author;

};
