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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CreateDomainModelDnsRecords'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CreateDomainModelDnsRecords'));
  } else {
    // Browser globals (root is window)
    if (!root.BrevoNode) {
      root.BrevoNode = {};
    }
    root.BrevoNode.GetDomainConfigurationModel = factory(root.BrevoNode.ApiClient, root.BrevoNode.CreateDomainModelDnsRecords);
  }
}(this, function(ApiClient, CreateDomainModelDnsRecords) {
  'use strict';

  /**
   * The GetDomainConfigurationModel model module.
   * @module model/GetDomainConfigurationModel
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>GetDomainConfigurationModel</code>.
   * @alias module:model/GetDomainConfigurationModel
   * @class
   * @param domain {String} Domain
   * @param verified {Boolean} Status of domain verification (true=verified, false=non verified)
   * @param authenticated {Boolean} Status of domain authentication (true=authenticated, false=non authenticated)
   * @param dnsRecords {module:model/CreateDomainModelDnsRecords} 
   */
  var exports = function(domain, verified, authenticated, dnsRecords) {
    this.domain = domain;
    this.verified = verified;
    this.authenticated = authenticated;
    this.dnsRecords = dnsRecords;
  };

  /**
   * Constructs a <code>GetDomainConfigurationModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetDomainConfigurationModel} obj Optional instance to populate.
   * @return {module:model/GetDomainConfigurationModel} The populated <code>GetDomainConfigurationModel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('domain'))
        obj.domain = ApiClient.convertToType(data['domain'], 'String');
      if (data.hasOwnProperty('verified'))
        obj.verified = ApiClient.convertToType(data['verified'], 'Boolean');
      if (data.hasOwnProperty('authenticated'))
        obj.authenticated = ApiClient.convertToType(data['authenticated'], 'Boolean');
      if (data.hasOwnProperty('dns_records'))
        obj.dnsRecords = CreateDomainModelDnsRecords.constructFromObject(data['dns_records']);
    }
    return obj;
  }

  /**
   * Domain
   * @member {String} domain
   */
  exports.prototype.domain = undefined;

  /**
   * Status of domain verification (true=verified, false=non verified)
   * @member {Boolean} verified
   */
  exports.prototype.verified = undefined;

  /**
   * Status of domain authentication (true=authenticated, false=non authenticated)
   * @member {Boolean} authenticated
   */
  exports.prototype.authenticated = undefined;

  /**
   * @member {module:model/CreateDomainModelDnsRecords} dnsRecords
   */
  exports.prototype.dnsRecords = undefined;


  return exports;

}));