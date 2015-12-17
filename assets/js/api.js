'use strict';

var guide_api = {
  url: 'http://localhost:3000',

  ajax: function(config, cb) {
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

  logout: function(callback) {
    this.ajax({
      method: 'POST',
      url: this.url + '/logout',
      contentType: 'application/json; charset=utf-8',
    }, callback);
  },

  createGuide: function(data, callback) {
    this.ajax({
      method: 'POST',
      url: this.url + '/guides',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(data)
    }, callback);
  },

  readAll: function(callback) {
    this.ajax({
      method: 'GET',
      url: this.url + '/guides',
      dataType: "json"
    }, callback);
  },

  readOne: function (id, callback) {
    this.ajax({
      method: 'GET',
      url: this.url + '/guides/' + id,
      dataType: "json"
      }, callback);
  },


  updateGuide: function (id, data, callback) {
    this.ajax({
      method: 'PATCH',
      url: this.url + '/guides/' + id,
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(data),
      dataType: "json"
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

