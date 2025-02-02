/*
 * Estuary API
 * This is the API for the Estuary application.
 *
 * OpenAPI spec version: 0.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.28
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

  describe('(package)', function() {
    describe('MainEstimateDealBody', function() {
      beforeEach(function() {
        instance = new EstuaryClient.MainEstimateDealBody();
      });

      it('should create an instance of MainEstimateDealBody', function() {
        // TODO: update the code to test MainEstimateDealBody
        expect(instance).to.be.a(EstuaryClient.MainEstimateDealBody);
      });

      it('should have the property durationBlks (base name: "durationBlks")', function() {
        // TODO: update the code to test the property durationBlks
        expect(instance).to.have.property('durationBlks');
        // expect(instance.durationBlks).to.be(expectedValueLiteral);
      });

      it('should have the property replication (base name: "replication")', function() {
        // TODO: update the code to test the property replication
        expect(instance).to.have.property('replication');
        // expect(instance.replication).to.be(expectedValueLiteral);
      });

      it('should have the property size (base name: "size")', function() {
        // TODO: update the code to test the property size
        expect(instance).to.have.property('size');
        // expect(instance.size).to.be(expectedValueLiteral);
      });

      it('should have the property verified (base name: "verified")', function() {
        // TODO: update the code to test the property verified
        expect(instance).to.have.property('verified');
        // expect(instance.verified).to.be(expectedValueLiteral);
      });

    });
  });

}));
