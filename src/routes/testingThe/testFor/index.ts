import { Router } from 'express';
import * as testForController from 'src/controllers/test-for';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountTESTFOR(router: Router) {
    router.get(
        '/gitRepoPush',
        validate(validators.getRepoPush),
        respond((req: any) => testForController.getRepoPush(req.query))
    );
}
