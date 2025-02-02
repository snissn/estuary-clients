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
    describe('MainImportDealBody', function() {
      beforeEach(function() {
        instance = new EstuaryClient.MainImportDealBody();
      });

      it('should create an instance of MainImportDealBody', function() {
        // TODO: update the code to test MainImportDealBody
        expect(instance).to.be.a(EstuaryClient.MainImportDealBody);
      });

      it('should have the property coluuid (base name: "coluuid")', function() {
        // TODO: update the code to test the property coluuid
        expect(instance).to.have.property('coluuid');
        // expect(instance.coluuid).to.be(expectedValueLiteral);
      });

      it('should have the property dealIDs (base name: "dealIDs")', function() {
        // TODO: update the code to test the property dealIDs
        expect(instance).to.have.property('dealIDs');
        // expect(instance.dealIDs).to.be(expectedValueLiteral);
      });

      it('should have the property dir (base name: "dir")', function() {
        // TODO: update the code to test the property dir
        expect(instance).to.have.property('dir');
        // expect(instance.dir).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

    });
  });

}));
