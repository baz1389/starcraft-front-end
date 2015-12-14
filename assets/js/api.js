'use strict';

// api HTTP requests/responses

var guide_api = {
  url: 'http://localhost:3000',

  ajax: function(config, cb) {
    $.ajaxSetup({
      xhrFields: {
        withCredentials: true
      }
    });
    $.ajax(config).done(function(data, textStatus, jqxhr) {
      cb(null, data);
    }).fail(function(jqxhr, status, error) {
      cb({jqxher: jqxhr, status: status, error: error});
    });
  },

  register: function(credentials, callback) {
    this.ajax({
      method: 'POST',
      url: this.url + '/signup',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(credentials),
    }, callback);
  },

  login: function(credentials, callback) {
    this.ajax({
      method: 'POST',
      url: this.url + '/login',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(credentials),
    }, callback);
  },


  //Authenticated api actions

  // logout function is a stretch goal
  logout: function(id, callback) {
    this.ajax({
      method: 'POST',
      url: this.url + '/logout',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(id),
    }, callback);
  },

  createGuide: function(data, callback) {
    this.ajax({
      method: 'POST',
      url: this.url + '/guides',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(data),
    }, callback);
  },

  showGuide: function(id, callback) {
    this.ajax({
      method: 'GET',
      url: this.url + '/guides/' + id,
    }, callback);
  },

  listGuides: function (callback) {
    this.ajax({
      method: 'GET',
      url: this.url + '/guides/' + id,
      }, callback);
  },


  editGuide: function (id, data, callback) {
    this.ajax({
      method: 'PATCH',
      url: this.url + '/guides/' + id,
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(data),
    }, callback);
  },


  deleteGuide: function (id, callback) {
    this.ajax({
      method: 'DELETE',
      url: this.url + '/guides/' + id,
      contentType: 'application/json'
    }, callback);
  }

};

