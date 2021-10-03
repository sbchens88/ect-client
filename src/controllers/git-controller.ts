import createLogger from 'src/services/logger';
     import transport from 'src/services/connection';
     import { JSONObject } from "src/types";
import { GitEndpoint,GitEndpointOutput,GitEndpointInput } from "src/models/git-controller";

     const logger = createLogger('controllers/gitController');

            export async function gitEndpoint(inputs: JSONObject): Promise<GitEndpointOutput> {
                logger.debug('Calling gitEndpoint with args: ', inputs);
                const params: GitEndpointInput = {
                    
                };
                return transport.execute(GitEndpoint, params) as Promise<GitEndpointOutput>;
            }

        