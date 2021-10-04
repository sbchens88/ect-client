import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { GitEndpointRes, GitEndpointResOutput, GitEndpointResInput } from 'src/models/testing-git-feat';

const logger = createLogger('controllers/testingGitFeat');

export async function gitEndpointRes(inputs: JSONObject): Promise<GitEndpointResOutput> {
    logger.debug('Calling gitEndpointRes with args: ', inputs);
    const params: GitEndpointResInput = {};
    return transport.execute(GitEndpointRes, params) as Promise<GitEndpointResOutput>;
}
