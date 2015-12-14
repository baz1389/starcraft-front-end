'use strict'

 var guide = {
  playerRace: null,
  title: null,
  matchup: null,
  author: null
 };

var form2object = function(form) {
    var data = {};
    $(form).find('input').each(function(index, element) {
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
    // $(".user-messages").html("<strong>Error! Poll create fail!</strong>");
    return;
  }



};


