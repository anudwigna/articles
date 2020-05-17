/**
 * @fileoverview gRPC-Web generated client stub for city
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.city = require('./city_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.city.CityClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.city.CityPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.city.CityRequest,
 *   !proto.city.CityResponse>}
 */
const methodDescriptor_City_GetAllCities = new grpc.web.MethodDescriptor(
  '/city.City/GetAllCities',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.city.CityRequest,
  proto.city.CityResponse,
  /**
   * @param {!proto.city.CityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.city.CityResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.city.CityRequest,
 *   !proto.city.CityResponse>}
 */
const methodInfo_City_GetAllCities = new grpc.web.AbstractClientBase.MethodInfo(
  proto.city.CityResponse,
  /**
   * @param {!proto.city.CityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.city.CityResponse.deserializeBinary
);


/**
 * @param {!proto.city.CityRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.city.CityResponse>}
 *     The XHR Node Readable Stream
 */
proto.city.CityClient.prototype.getAllCities =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/city.City/GetAllCities',
      request,
      metadata || {},
      methodDescriptor_City_GetAllCities);
};


/**
 * @param {!proto.city.CityRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.city.CityResponse>}
 *     The XHR Node Readable Stream
 */
proto.city.CityPromiseClient.prototype.getAllCities =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/city.City/GetAllCities',
      request,
      metadata || {},
      methodDescriptor_City_GetAllCities);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.city.CityRequest,
 *   !proto.city.CityResponse>}
 */
const methodDescriptor_City_GetCityById = new grpc.web.MethodDescriptor(
  '/city.City/GetCityById',
  grpc.web.MethodType.UNARY,
  proto.city.CityRequest,
  proto.city.CityResponse,
  /**
   * @param {!proto.city.CityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.city.CityResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.city.CityRequest,
 *   !proto.city.CityResponse>}
 */
const methodInfo_City_GetCityById = new grpc.web.AbstractClientBase.MethodInfo(
  proto.city.CityResponse,
  /**
   * @param {!proto.city.CityRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.city.CityResponse.deserializeBinary
);


/**
 * @param {!proto.city.CityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.city.CityResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.city.CityResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.city.CityClient.prototype.getCityById =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/city.City/GetCityById',
      request,
      metadata || {},
      methodDescriptor_City_GetCityById,
      callback);
};


/**
 * @param {!proto.city.CityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.city.CityResponse>}
 *     A native promise that resolves to the response
 */
proto.city.CityPromiseClient.prototype.getCityById =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/city.City/GetCityById',
      request,
      metadata || {},
      methodDescriptor_City_GetCityById);
};


module.exports = proto.city;

