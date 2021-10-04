import { Router } from 'express';
import * as testingGitFeatController from 'src/controllers/testing-git-feat';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountTESTINGGITFEAT(router: Router) {
    router.get(
        '/gitEndpointRes',
        validate(validators.gitEndpointRes),
        respond((req: any) => testingGitFeatController.gitEndpointRes(req.query))
    );
}
