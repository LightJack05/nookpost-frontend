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
 * Represents a post created by a user
 * @export
 * @interface PostData
 */
export interface PostData {
  /**
   * Title of the post
   * @type {string}
   * @memberof PostData
   */
  title?: string | null
  /**
   * Body/content of the post
   * @type {string}
   * @memberof PostData
   */
  body?: string | null
  /**
   * UUID of the category of the post
   * @type {string}
   * @memberof PostData
   */
  categoryUuid?: string | null
}
