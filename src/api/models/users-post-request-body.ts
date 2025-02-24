/* tslint:disable */
/* eslint-disable */
/**
 * nookpost-backend
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * The request body of a user create request
 * @export
 * @interface UsersPostRequestBody
 */
export interface UsersPostRequestBody {
  /**
   * The username of the user.
   * @type {string}
   * @memberof UsersPostRequestBody
   */
  username?: string | null
  /**
   * User display name
   * @type {string}
   * @memberof UsersPostRequestBody
   */
  displayName?: string | null
  /**
   * User Tagline/Status
   * @type {string}
   * @memberof UsersPostRequestBody
   */
  tagLine?: string | null
  /**
   * User Bio
   * @type {string}
   * @memberof UsersPostRequestBody
   */
  bio?: string | null
  /**
   * Profile picture of the user encoded as b64
   * @type {string}
   * @memberof UsersPostRequestBody
   */
  profilePictureBase64?: string | null
  /**
   * Email of the user (null if user does not provide contact info)
   * @type {string}
   * @memberof UsersPostRequestBody
   */
  email?: string | null
  /**
   * The users password
   * @type {string}
   * @memberof UsersPostRequestBody
   */
  password?: string | null
}
