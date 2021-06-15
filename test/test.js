  var request = require('supertest');
  var app = require('../server.js')   

  describe('GET /', function() {   
    it('validates message', function(done) {
      // The line below is the core test of our app.     
      request(app).get('/').expect('Taller Open DevOps', done);
    });
  }); 
