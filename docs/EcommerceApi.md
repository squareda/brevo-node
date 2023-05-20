# BrevoNode.EcommerceApi

All URIs are relative to *https://api.brevo.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBatchOrder**](EcommerceApi.md#createBatchOrder) | **POST** /orders/status/batch | Create orders in batch
[**createOrder**](EcommerceApi.md#createOrder) | **POST** /orders/status | Managing the status of the order
[**createUpdateBatchCategory**](EcommerceApi.md#createUpdateBatchCategory) | **POST** /categories/batch | Create categories in batch
[**createUpdateBatchProducts**](EcommerceApi.md#createUpdateBatchProducts) | **POST** /products/batch | Create products in batch
[**createUpdateCategory**](EcommerceApi.md#createUpdateCategory) | **POST** /categories | Create/Update a category
[**createUpdateProduct**](EcommerceApi.md#createUpdateProduct) | **POST** /products | Create/Update a product
[**ecommerceActivatePost**](EcommerceApi.md#ecommerceActivatePost) | **POST** /ecommerce/activate | Activate the eCommerce app
[**getCategories**](EcommerceApi.md#getCategories) | **GET** /categories | Return all your categories
[**getCategoryInfo**](EcommerceApi.md#getCategoryInfo) | **GET** /categories/{id} | Get a category details
[**getProductInfo**](EcommerceApi.md#getProductInfo) | **GET** /products/{id} | Get a product's details
[**getProducts**](EcommerceApi.md#getProducts) | **GET** /products | Return all your products


<a name="createBatchOrder"></a>
# **createBatchOrder**
> createBatchOrder(orderBatch)

Create orders in batch

Create multiple orders at one time instead of one order at a time

### Example
```javascript
var BrevoNode = require('brevo-node');
var defaultClient = BrevoNode.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

// Configure API key authorization: partner-key
var partner-key = defaultClient.authentications['partner-key'];
partner-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//partner-key.apiKeyPrefix = 'Token';

var apiInstance = new BrevoNode.EcommerceApi();

var orderBatch = new BrevoNode.OrderBatch(); // OrderBatch | 

apiInstance.createBatchOrder(orderBatch).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderBatch** | [**OrderBatch**](OrderBatch.md)|  | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createOrder"></a>
# **createOrder**
> createOrder(order)

Managing the status of the order

Manages the transactional status of the order

### Example
```javascript
var BrevoNode = require('brevo-node');
var defaultClient = BrevoNode.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

// Configure API key authorization: partner-key
var partner-key = defaultClient.authentications['partner-key'];
partner-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//partner-key.apiKeyPrefix = 'Token';

var apiInstance = new BrevoNode.EcommerceApi();

var order = new BrevoNode.Order(); // Order | 

apiInstance.createOrder(order).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order** | [**Order**](Order.md)|  | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createUpdateBatchCategory"></a>
# **createUpdateBatchCategory**
> CreateUpdateBatchCategoryModel createUpdateBatchCategory(createUpdateBatchCategory)

Create categories in batch

### Example
```javascript
var BrevoNode = require('brevo-node');
var defaultClient = BrevoNode.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

// Configure API key authorization: partner-key
var partner-key = defaultClient.authentications['partner-key'];
partner-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//partner-key.apiKeyPrefix = 'Token';

var apiInstance = new BrevoNode.EcommerceApi();

var createUpdateBatchCategory = new BrevoNode.CreateUpdateBatchCategory(); // CreateUpdateBatchCategory | Values to create a batch of categories

apiInstance.createUpdateBatchCategory(createUpdateBatchCategory).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createUpdateBatchCategory** | [**CreateUpdateBatchCategory**](CreateUpdateBatchCategory.md)| Values to create a batch of categories | 

### Return type

[**CreateUpdateBatchCategoryModel**](CreateUpdateBatchCategoryModel.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createUpdateBatchProducts"></a>
# **createUpdateBatchProducts**
> CreateUpdateBatchProductsModel createUpdateBatchProducts(createUpdateBatchProducts)

Create products in batch

### Example
```javascript
var BrevoNode = require('brevo-node');
var defaultClient = BrevoNode.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

// Configure API key authorization: partner-key
var partner-key = defaultClient.authentications['partner-key'];
partner-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//partner-key.apiKeyPrefix = 'Token';

var apiInstance = new BrevoNode.EcommerceApi();

var createUpdateBatchProducts = new BrevoNode.CreateUpdateBatchProducts(); // CreateUpdateBatchProducts | Values to create a batch of products

apiInstance.createUpdateBatchProducts(createUpdateBatchProducts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createUpdateBatchProducts** | [**CreateUpdateBatchProducts**](CreateUpdateBatchProducts.md)| Values to create a batch of products | 

### Return type

[**CreateUpdateBatchProductsModel**](CreateUpdateBatchProductsModel.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createUpdateCategory"></a>
# **createUpdateCategory**
> CreateCategoryModel createUpdateCategory(createUpdateCategory)

Create/Update a category

### Example
```javascript
var BrevoNode = require('brevo-node');
var defaultClient = BrevoNode.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

// Configure API key authorization: partner-key
var partner-key = defaultClient.authentications['partner-key'];
partner-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//partner-key.apiKeyPrefix = 'Token';

var apiInstance = new BrevoNode.EcommerceApi();

var createUpdateCategory = new BrevoNode.CreateUpdateCategory(); // CreateUpdateCategory | Values to create/update a category

apiInstance.createUpdateCategory(createUpdateCategory).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createUpdateCategory** | [**CreateUpdateCategory**](CreateUpdateCategory.md)| Values to create/update a category | 

### Return type

[**CreateCategoryModel**](CreateCategoryModel.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createUpdateProduct"></a>
# **createUpdateProduct**
> CreateProductModel createUpdateProduct(createUpdateProduct)

Create/Update a product

### Example
```javascript
var BrevoNode = require('brevo-node');
var defaultClient = BrevoNode.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

// Configure API key authorization: partner-key
var partner-key = defaultClient.authentications['partner-key'];
partner-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//partner-key.apiKeyPrefix = 'Token';

var apiInstance = new BrevoNode.EcommerceApi();

var createUpdateProduct = new BrevoNode.CreateUpdateProduct(); // CreateUpdateProduct | Values to create/update a product

apiInstance.createUpdateProduct(createUpdateProduct).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createUpdateProduct** | [**CreateUpdateProduct**](CreateUpdateProduct.md)| Values to create/update a product | 

### Return type

[**CreateProductModel**](CreateProductModel.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="ecommerceActivatePost"></a>
# **ecommerceActivatePost**
> ecommerceActivatePost()

Activate the eCommerce app

Getting access to Brevo eCommerce.

### Example
```javascript
var BrevoNode = require('brevo-node');
var defaultClient = BrevoNode.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

// Configure API key authorization: partner-key
var partner-key = defaultClient.authentications['partner-key'];
partner-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//partner-key.apiKeyPrefix = 'Token';

var apiInstance = new BrevoNode.EcommerceApi();
apiInstance.ecommerceActivatePost().then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCategories"></a>
# **getCategories**
> GetCategories getCategories(opts)

Return all your categories

### Example
```javascript
var BrevoNode = require('brevo-node');
var defaultClient = BrevoNode.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

// Configure API key authorization: partner-key
var partner-key = defaultClient.authentications['partner-key'];
partner-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//partner-key.apiKeyPrefix = 'Token';

var apiInstance = new BrevoNode.EcommerceApi();

var opts = { 
  'limit': 50, // Number | Number of documents per page
  'offset': 0, // Number | Index of the first document in the page
  'sort': "desc", // String | Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
  'ids': ["ids_example"], // [String] | Filter by category ids
  'name': "name_example" // String | Filter by category name
};
apiInstance.getCategories(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Number of documents per page | [optional] [default to 50]
 **offset** | **Number**| Index of the first document in the page | [optional] [default to 0]
 **sort** | **String**| Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed | [optional] [default to desc]
 **ids** | [**[String]**](String.md)| Filter by category ids | [optional] 
 **name** | **String**| Filter by category name | [optional] 

### Return type

[**GetCategories**](GetCategories.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCategoryInfo"></a>
# **getCategoryInfo**
> GetCategoryDetails getCategoryInfo(id)

Get a category details

### Example
```javascript
var BrevoNode = require('brevo-node');
var defaultClient = BrevoNode.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

// Configure API key authorization: partner-key
var partner-key = defaultClient.authentications['partner-key'];
partner-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//partner-key.apiKeyPrefix = 'Token';

var apiInstance = new BrevoNode.EcommerceApi();

var id = "id_example"; // String | Category ID

apiInstance.getCategoryInfo(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Category ID | 

### Return type

[**GetCategoryDetails**](GetCategoryDetails.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProductInfo"></a>
# **getProductInfo**
> GetProductDetails getProductInfo(id)

Get a product's details

### Example
```javascript
var BrevoNode = require('brevo-node');
var defaultClient = BrevoNode.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

// Configure API key authorization: partner-key
var partner-key = defaultClient.authentications['partner-key'];
partner-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//partner-key.apiKeyPrefix = 'Token';

var apiInstance = new BrevoNode.EcommerceApi();

var id = "id_example"; // String | Product ID

apiInstance.getProductInfo(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Product ID | 

### Return type

[**GetProductDetails**](GetProductDetails.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProducts"></a>
# **getProducts**
> GetProducts getProducts(opts)

Return all your products

### Example
```javascript
var BrevoNode = require('brevo-node');
var defaultClient = BrevoNode.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

// Configure API key authorization: partner-key
var partner-key = defaultClient.authentications['partner-key'];
partner-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//partner-key.apiKeyPrefix = 'Token';

var apiInstance = new BrevoNode.EcommerceApi();

var opts = { 
  'limit': 50, // Number | Number of documents per page
  'offset': 0, // Number | Index of the first document in the page
  'sort': "desc", // String | Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
  'ids': ["ids_example"], // [String] | Filter by product ids
  'name': "name_example", // String | Filter by product name, minimum 3 characters should be present for search
  'priceLte': 8.14, // Number | Price filter for products less than and equals to particular amount
  'priceGte': 8.14, // Number | Price filter for products greater than and equals to particular amount
  'priceLt': 8.14, // Number | Price filter for products less than particular amount
  'priceGt': 8.14, // Number | Price filter for products greater than particular amount
  'priceEq': 8.14, // Number | Price filter for products equals to particular amount
  'priceNe': 8.14, // Number | Price filter for products not equals to particular amount
  'categories': ["categories_example"] // [String] | Filter by category ids
};
apiInstance.getProducts(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Number of documents per page | [optional] [default to 50]
 **offset** | **Number**| Index of the first document in the page | [optional] [default to 0]
 **sort** | **String**| Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed | [optional] [default to desc]
 **ids** | [**[String]**](String.md)| Filter by product ids | [optional] 
 **name** | **String**| Filter by product name, minimum 3 characters should be present for search | [optional] 
 **priceLte** | **Number**| Price filter for products less than and equals to particular amount | [optional] 
 **priceGte** | **Number**| Price filter for products greater than and equals to particular amount | [optional] 
 **priceLt** | **Number**| Price filter for products less than particular amount | [optional] 
 **priceGt** | **Number**| Price filter for products greater than particular amount | [optional] 
 **priceEq** | **Number**| Price filter for products equals to particular amount | [optional] 
 **priceNe** | **Number**| Price filter for products not equals to particular amount | [optional] 
 **categories** | [**[String]**](String.md)| Filter by category ids | [optional] 

### Return type

[**GetProducts**](GetProducts.md)

### Authorization

[api-key](../README.md#api-key), [partner-key](../README.md#partner-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
