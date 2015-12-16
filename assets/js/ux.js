$(document).ready(function() {

  $('#updateGuideContainer').hide();
  $('#createGuideContainer').hide();
  $('#show-all-guides').hide();
  $('.showTable').hide();
  $('.showCreate').hide();
  $('#single-guide').hide();
  $('.logout').hide();

});

var pageController = {
  showGuides: function() {
    $('#show-all-guides').show();
    $('#showAllGuidesTable').show();
    $('#single-guide').hide();
    $('#createGuideContainer').hide();
    $('#updateGuideContainer').hide();
  },

  showVisualButtons: function() {
    $('.showTable').show();
    $('.showCreate').show();
    $('.logout').show();
  }

};

