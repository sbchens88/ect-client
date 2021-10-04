import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const GitEndpointRes = new eradaniConnect.run.Sql(` select * from QGPL.APPLICATIONS`);
export interface GitEndpointResInput {}
export type GitEndpointResOutputRecord = JSONObject;
export interface GitEndpointResOutput extends Array<GitEndpointResOutputRecord> {}
