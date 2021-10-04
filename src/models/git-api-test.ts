import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const GetRandData = new eradaniConnect.run.Sql(` select * from QGPL.APPLICATIONS`);
export interface GetRandDataInput {}
export type GetRandDataOutputRecord = JSONObject;
export interface GetRandDataOutput extends Array<GetRandDataOutputRecord> {}
