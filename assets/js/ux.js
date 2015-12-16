$(document).ready(function() {
  $('.API-register').hide();
  $('.API-login').hide();
  $('#updateGuideContainer').hide();
  $('#createGuideContainer').hide();
  $('#show-all-guides').show();
  $('.showTable').show();
  $('.showCreate').show();
  $('#showAllGuidesTable').show();
  $('#single-guide').hide();
  $('.logout').show();
  guide_api.readAll(readAllCb);

});

var pageController = {
  showGuides: function() {
    $('#show-all-guides').show();
    $('#showAllGuidesTable').show();
    $('#showAllGuides').show();
    $('#single-guide').hide();
    $('#createGuideContainer').hide();
    $('#updateGuideContainer').hide();
    guide_api.readAll(readAllCb);
  },


  // hideForLogin: function() {
  //   $('#updateGuideContainer').hide();
  //   $('#createGuideContainer').hide();
  //   $('#show-all-guides').hide();
  //   $('#showAllGuidesTable').hide();
  //   $('#showAllGuides').hide();
  //   $('#single-guide').hide();
  // },

  showVisualButtons: function() {
    $('.showTable').show();
    $('.showCreate').show();
    $('.logout').show();
  },

};

