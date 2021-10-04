import { Router } from 'express';
import mountTESTINGGITFEAT from './testingGitFeat';

export default function mountAPITEST(router: Router) {
    const testingGitFeat = Router();
    mountTESTINGGITFEAT(testingGitFeat);
    router.use('/testingGitFeat', testingGitFeat);
}
