import { injectable } from 'tsyringe';
import { GET, Path } from 'typescript-rest';

import { version } from '../../package.json';

interface ApiManifest {
  status: string;
  version: string;
}

/**
 * @swagger
 * components:
 *  schemas:
 *    ApiManifest:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          description: the server health status
 *        version:
 *          type: string
 *          description: the version of the API
 *      required:
 *        - status
 *        - version
 *      example:
 *        status: ok
 *        version: 1.0.0
 */

/**
 * @swagger
 * tags:
 *  name: Home
 *  description: Home endpoint
 */
@injectable()
@Path('/')
export class HomeController {
  /**
   * @swagger
   * /:
   *  get:
   *    summary: Returns the API spec
   *    tags: [Home]
   *    responses:
   *      200:
   *        description: The API manifest
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/ApiManifest'
   */
  @GET
  index(): ApiManifest {
    return {
      status: 'ok',
      version: version,
    };
  }
}
