/*
 * Estuary API
 * This is the API for the Estuary application.
 *
 * OpenAPI spec version: 0.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.29
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.EstuaryClient);
  }
}(this, function(expect, EstuaryClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new EstuaryClient.AutoretrieveApi();
  });

  describe('(package)', function() {
    describe('AutoretrieveApi', function() {
      describe('adminAutoretrieveInitPost', function() {
        it('should call adminAutoretrieveInitPost successfully', function(done) {
          // TODO: uncomment, update parameter values for adminAutoretrieveInitPost call and complete the assertions
          /*
          var addresses = "addresses_example";
          var pubKey = "pubKey_example";

          instance.adminAutoretrieveInitPost(addresses, pubKey, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a('string');
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('adminAutoretrieveListGet', function() {
        it('should call adminAutoretrieveListGet successfully', function(done) {
          // TODO: uncomment adminAutoretrieveListGet call and complete the assertions
          /*

          instance.adminAutoretrieveListGet(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a('string');
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('autoretrieveHeartbeatPost', function() {
        it('should call autoretrieveHeartbeatPost successfully', function(done) {
          // TODO: uncomment, update parameter values for autoretrieveHeartbeatPost call and complete the assertions
          /*
          var token = "token_example";

          instance.autoretrieveHeartbeatPost(token, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a('string');
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
