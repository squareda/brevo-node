/*
 * Brevo API
 * Brevo provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/brevo  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  |   | 406  | Error. Not Acceptable  | 
 *
 * OpenAPI spec version: 3.0.0
 * Contact: contact@brevo.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.31
 *
 * Do not edit the class manually.
 *
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.BrevoNode);
  }
}(this, function (expect, BrevoNode) {
  'use strict';

  var instance;

  describe('(package)', function () {
    describe('CreateWhatsAppTemplate', function () {
      beforeEach(function () {
        instance = new BrevoNode.CreateWhatsAppTemplate();
      });

      it('should create an instance of CreateWhatsAppTemplate', function () {
        // TODO: update the code to test CreateWhatsAppTemplate
        expect(instance).to.be.a(BrevoNode.CreateWhatsAppTemplate);
      });

      it('should have the property name (base name: "name")', function () {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property language (base name: "language")', function () {
        // TODO: update the code to test the property language
        expect(instance).to.have.property('language');
        // expect(instance.language).to.be(expectedValueLiteral);
      });

      it('should have the property category (base name: "category")', function () {
        // TODO: update the code to test the property category
        expect(instance).to.have.property('category');
        // expect(instance.category).to.be(expectedValueLiteral);
      });

      it('should have the property mediaUrl (base name: "mediaUrl")', function () {
        // TODO: update the code to test the property mediaUrl
        expect(instance).to.have.property('mediaUrl');
        // expect(instance.mediaUrl).to.be(expectedValueLiteral);
      });

      it('should have the property body (base name: "body")', function () {
        // TODO: update the code to test the property body
        // expect(instance).to.have.property('body');
        // expect(instance.body).to.be(expectedValueLiteral);
      });

      it('should have the property headerHtml (base name: "headerHtml")', function () {
        // TODO: update the code to test the property headerHtml
        // expect(instance).to.have.property('headerHtml');
        // expect(instance.headerHtml).to.be(expectedValueLiteral);
      });

      it('should have the property headerType (base name: "headerType")', function () {
        // TODO: update the code to test the property headerType
        // expect(instance).to.have.property('headerType');
        // expect(instance.headerType).to.be(expectedValueLiteral);
      });

    });
  });

}));