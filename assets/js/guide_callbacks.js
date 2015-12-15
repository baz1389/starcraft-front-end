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
  guide_api.readAll(readAllCb);
};

var readAllCb = function(error, data) {
  if (error) {
    console.error(error);
    $(".user-messages").html("<strong>Error! Trouble loading table!</strong>");
    return;
  }
  $("#showAllGuides").empty();
  var template = Handlebars.compile($('#allGuidesHandlebars').html());
  console.log("result is " + JSON.stringify(data, null, 4));
  var newHTML = template({guides: data});
  $('#showAllGuides').show;
  $('#showAllGuides').html(newHTML);

};


  // <div id = "show-all-blog">
  //   <table id="showAllBlogTable" class = "table table-hover">
  //     <thead>
  //       <th> Blog Title </th>
  //       <th> Blog Author </th>
  //       <th> Date </th>
  //     </thead>
  //     <tbody id = "showAllBlogTableBody">
  //     </tbody>
  //   </table>

  //   <script id = "showAllBlogHandlebar" type = "text/x-handlebars-template">
  //     {{#each blogs}}
  //       <tr>
  //         <td>{{title}}</td>
  //         <td>{{author}}</td>
  //         <td>{{date}}</td>
  //         <td><button class="show-blog-button" data-id={{_id}}> Show Blog </button> </td>
  //       </tr>
  //     {{/each}}
  //   </script>


  // $("#create-blog").on("submit", function(event){
  //   event.preventDefault();
  //   var credentials = formDataToObject(this);
  //   blogRequest.create(credentials, function(error, data){
  //   blogRequest.getAll(function(error, data){
  //     $("#showAllBlogTableBody").empty();
  //     $("#display-blogs-table").show();
  //     $("#one-blog").hide();
  //     var template = Handlebars.compile($("#showAllBlogHandlebar").html());
  //     $('#result').val(JSON.stringify(data, null, 4)); //logs to test box
  //     var newHTML = template({blogs: data.blogs});
  //     $("#showAllBlogTableBody").html(newHTML);
  //     });
  //   });
  // });
