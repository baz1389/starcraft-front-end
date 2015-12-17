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
  }
};

