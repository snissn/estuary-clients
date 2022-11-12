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

  describe('(package)', function() {
    describe('UtilContentAddIpfsBody', function() {
      beforeEach(function() {
        instance = new EstuaryClient.UtilContentAddIpfsBody();
      });

      it('should create an instance of UtilContentAddIpfsBody', function() {
        // TODO: update the code to test UtilContentAddIpfsBody
        expect(instance).to.be.a(EstuaryClient.UtilContentAddIpfsBody);
      });

      it('should have the property coluuid (base name: "coluuid")', function() {
        // TODO: update the code to test the property coluuid
        expect(instance).to.have.property('coluuid');
        // expect(instance.coluuid).to.be(expectedValueLiteral);
      });

      it('should have the property dir (base name: "dir")', function() {
        // TODO: update the code to test the property dir
        expect(instance).to.have.property('dir');
        // expect(instance.dir).to.be(expectedValueLiteral);
      });

      it('should have the property filename (base name: "filename")', function() {
        // TODO: update the code to test the property filename
        expect(instance).to.have.property('filename');
        // expect(instance.filename).to.be(expectedValueLiteral);
      });

      it('should have the property peers (base name: "peers")', function() {
        // TODO: update the code to test the property peers
        expect(instance).to.have.property('peers');
        // expect(instance.peers).to.be(expectedValueLiteral);
      });

      it('should have the property root (base name: "root")', function() {
        // TODO: update the code to test the property root
        expect(instance).to.have.property('root');
        // expect(instance.root).to.be(expectedValueLiteral);
      });

    });
  });

}));
