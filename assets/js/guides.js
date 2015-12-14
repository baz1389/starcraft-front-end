'use strict'

$(document).ready(function() {


  $('#createNewGuide').on('submit', function(e) {
    e.preventDefault();

    var data = form2object(this);


    console.log('the form will send ' + JSON.stringify(data, null, 4));

    guide_api.createGuide(data, function(event) {

    })

  });


    $("#create-blog").on("submit", function(event){
    event.preventDefault();
    var credentials = formDataToObject(this);
    blogRequest.create(credentials, function(error, data){
    blogRequest.getAll(function(error, data){
      $("#showAllBlogTableBody").empty();
      $("#display-blogs-table").show();
      $("#one-blog").hide();
      var template = Handlebars.compile($("#showAllBlogHandlebar").html());
      $('#result').val(JSON.stringify(data, null, 4)); //logs to test box
      var newHTML = template({blogs: data.blogs});
      $("#showAllBlogTableBody").html(newHTML);
      });
    });
  });








});
