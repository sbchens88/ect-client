import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const EpGitdata = new eradaniConnect.run.Sql(` select * from QGPL.APPLICATIONS`);
export interface EpGitdataInput {}
export type EpGitdataOutputRecord = JSONObject;
export interface EpGitdataOutput extends Array<EpGitdataOutputRecord> {}
