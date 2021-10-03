import { Router } from 'express';
        import * as gitApiTestController from 'src/controllers/git-api-test';
        import validate from 'src/middlewares/validate';
        import respond from 'src/middlewares/respond';
        import * as validators from './validators';
        export default function mountGITAPITEST(router: Router) {
            router.get(
                        '/getRandData',
                        validate(validators.getRandData),
                        respond((req: any) => gitApiTestController.getRandData(req.query))
                    );
          
        }
        