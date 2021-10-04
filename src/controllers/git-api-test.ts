import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { GetRandData, GetRandDataOutput, GetRandDataInput } from 'src/models/git-api-test';

const logger = createLogger('controllers/gitApiTest');

export async function getRandData(inputs: JSONObject): Promise<GetRandDataOutput> {
    logger.debug('Calling getRandData with args: ', inputs);
    const params: GetRandDataInput = {};
    return transport.execute(GetRandData, params) as Promise<GetRandDataOutput>;
}
