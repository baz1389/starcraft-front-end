'use strict'

$(document).ready(function() {


  $('#createNewGuide').on('submit', function(e) {
    e.preventDefault();

    var data = var data = form2object(this);
    console.log('the form will send ' + JSON.stringify(data, null, 4));

    guide_api.createGuide(data, createCb)

  });











}
