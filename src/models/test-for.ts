import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const GetRepoPush = new eradaniConnect.run.Sql(` select * from QGPL.APPLICATIONS`);
export interface GetRepoPushInput {}
export type GetRepoPushOutputRecord = JSONObject;
export interface GetRepoPushOutput extends Array<GetRepoPushOutputRecord> {}
