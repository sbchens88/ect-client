import { Router } from 'express';
import * as gitTestController from 'src/controllers/git-test';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountGITTEST(router: Router) {
    router.get(
        '/epGitData',
        validate(validators.epGitdata),
        respond((req: any) => gitTestController.epGitdata(req.query))
    );
}
