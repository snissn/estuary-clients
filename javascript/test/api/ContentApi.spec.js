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
    instance = new EstuaryClient.ContentApi();
  });

  describe('(package)', function() {
    describe('ContentApi', function() {
      describe('contentAddCarPost', function() {
        it('should call contentAddCarPost successfully', function(done) {
          // TODO: uncomment, update parameter values for contentAddCarPost call and complete the assertions
          /*
          var body = "body_example";
          var opts = {};
          opts.ignoreDupes = "ignoreDupes_example";
          opts.filename = "filename_example";

          instance.contentAddCarPost(body, opts, function(error, data, response) {
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
      describe('contentAddIpfsPost', function() {
        it('should call contentAddIpfsPost successfully', function(done) {
          // TODO: uncomment, update parameter values for contentAddIpfsPost call and complete the assertions
          /*
          var body = new EstuaryClient.UtilContentAddIpfsBody();
          body.coluuid = "";
          body.dir = "";
          body.filename = "";
          body.peers = [""];
          body.root = "";
          var opts = {};
          opts.ignoreDupes = "ignoreDupes_example";

          instance.contentAddIpfsPost(body, opts, function(error, data, response) {
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
      describe('contentAddPost', function() {
        it('should call contentAddPost successfully', function(done) {
          // TODO: uncomment, update parameter values for contentAddPost call and complete the assertions
          /*
          var data = "/path/to/file.txt";
          var opts = {};
          opts.filename = "filename_example";
          opts.coluuid = "coluuid_example";
          opts.replication = 56;
          opts.ignoreDupes = "ignoreDupes_example";
          opts.lazyProvide = "lazyProvide_example";
          opts.dir = "dir_example";

          instance.contentAddPost(data, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(EstuaryClient.UtilContentAddResponse);
            expect(data.cid).to.be.a('string');
            expect(data.cid).to.be("");
            expect(data.estuaryId).to.be.a('number');
            expect(data.estuaryId).to.be(0);
            {
              let dataCtr = data.providers;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            expect(data.retrievalUrl).to.be.a('string');
            expect(data.retrievalUrl).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('contentAggregatedContentGet', function() {
        it('should call contentAggregatedContentGet successfully', function(done) {
          // TODO: uncomment, update parameter values for contentAggregatedContentGet call and complete the assertions
          /*
          var content = "content_example";

          instance.contentAggregatedContentGet(content, function(error, data, response) {
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
      describe('contentAllDealsGet', function() {
        it('should call contentAllDealsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for contentAllDealsGet call and complete the assertions
          /*
          var begin = "begin_example";
          var duration = "duration_example";
          var all = "all_example";

          instance.contentAllDealsGet(begin, duration, all, function(error, data, response) {
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
      describe('contentBwUsageContentGet', function() {
        it('should call contentBwUsageContentGet successfully', function(done) {
          // TODO: uncomment, update parameter values for contentBwUsageContentGet call and complete the assertions
          /*
          var content = "content_example";

          instance.contentBwUsageContentGet(content, function(error, data, response) {
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
      describe('contentCreatePost', function() {
        it('should call contentCreatePost successfully', function(done) {
          // TODO: uncomment, update parameter values for contentCreatePost call and complete the assertions
          /*
          var req = new EstuaryClient.UtilContentCreateBody();
          req.coluuid = "";
          req.dir = "";
          req.location = "";
          req.name = "";
          req.root = "";
          req.type = 0;
          var opts = {};
          opts.ignoreDupes = "ignoreDupes_example";

          instance.contentCreatePost(req, opts, function(error, data, response) {
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
      describe('contentDealsGet', function() {
        it('should call contentDealsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for contentDealsGet call and complete the assertions
          /*
          var opts = {};
          opts.limit = 56;
          opts.offset = 56;

          instance.contentDealsGet(opts, function(error, data, response) {
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
      describe('contentEnsureReplicationDatacidGet', function() {
        it('should call contentEnsureReplicationDatacidGet successfully', function(done) {
          // TODO: uncomment, update parameter values for contentEnsureReplicationDatacidGet call and complete the assertions
          /*
          var datacid = "datacid_example";

          instance.contentEnsureReplicationDatacidGet(datacid, function(error, data, response) {
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
      describe('contentFailuresContentGet', function() {
        it('should call contentFailuresContentGet successfully', function(done) {
          // TODO: uncomment, update parameter values for contentFailuresContentGet call and complete the assertions
          /*
          var content = "content_example";

          instance.contentFailuresContentGet(content, function(error, data, response) {
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
      describe('contentIdGet', function() {
        it('should call contentIdGet successfully', function(done) {
          // TODO: uncomment, update parameter values for contentIdGet call and complete the assertions
          /*
          var id = 56;

          instance.contentIdGet(id, function(error, data, response) {
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
      describe('contentImportdealPost', function() {
        it('should call contentImportdealPost successfully', function(done) {
          // TODO: uncomment, update parameter values for contentImportdealPost call and complete the assertions
          /*
          var body = new EstuaryClient.MainImportDealBody();
          body.coluuid = "";
          body.dealIDs = [0];
          body.dir = "";
          body.name = "";

          instance.contentImportdealPost(body, function(error, data, response) {
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
      describe('contentListGet', function() {
        it('should call contentListGet successfully', function(done) {
          // TODO: uncomment contentListGet call and complete the assertions
          /*

          instance.contentListGet(function(error, data, response) {
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
      describe('contentReadContGet', function() {
        it('should call contentReadContGet successfully', function(done) {
          // TODO: uncomment, update parameter values for contentReadContGet call and complete the assertions
          /*
          var cont = "cont_example";

          instance.contentReadContGet(cont, function(error, data, response) {
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
      describe('contentStagingZonesGet', function() {
        it('should call contentStagingZonesGet successfully', function(done) {
          // TODO: uncomment contentStagingZonesGet call and complete the assertions
          /*

          instance.contentStagingZonesGet(function(error, data, response) {
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
      describe('contentStatsGet', function() {
        it('should call contentStatsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for contentStatsGet call and complete the assertions
          /*
          var limit = "limit_example";
          var offset = "offset_example";

          instance.contentStatsGet(limit, offset, function(error, data, response) {
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
      describe('contentStatusIdGet', function() {
        it('should call contentStatusIdGet successfully', function(done) {
          // TODO: uncomment, update parameter values for contentStatusIdGet call and complete the assertions
          /*
          var id = 56;

          instance.contentStatusIdGet(id, function(error, data, response) {
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
