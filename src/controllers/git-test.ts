import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { EpGitdata, EpGitdataOutput, EpGitdataInput } from 'src/models/git-test';

const logger = createLogger('controllers/gitTest');

export async function epGitdata(inputs: JSONObject): Promise<EpGitdataOutput> {
    logger.debug('Calling epGitdata with args: ', inputs);
    const params: EpGitdataInput = {};
    return transport.execute(EpGitdata, params) as Promise<EpGitdataOutput>;
}
