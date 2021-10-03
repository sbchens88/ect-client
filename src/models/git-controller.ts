
        import eradaniConnect from '@eradani-inc/eradani-connect';
        import { JSONObject } from 'src/types';

        export const GitEndpoint = new eradaniConnect.run.Sql(
            ` select * from QGPL.APPLICATIONS`
        );
        export interface GitEndpointInput {
            
        }
        export type GitEndpointOutputRecord = JSONObject;
        export interface GitEndpointOutput extends Array<GitEndpointOutputRecord> {}
        