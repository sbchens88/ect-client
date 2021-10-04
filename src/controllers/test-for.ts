import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { GetRepoPush, GetRepoPushOutput, GetRepoPushInput } from 'src/models/test-for';

const logger = createLogger('controllers/testFor');

export async function getRepoPush(inputs: JSONObject): Promise<GetRepoPushOutput> {
    logger.debug('Calling getRepoPush with args: ', inputs);
    const params: GetRepoPushInput = {};
    return transport.execute(GetRepoPush, params) as Promise<GetRepoPushOutput>;
}
