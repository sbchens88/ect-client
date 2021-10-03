import { Router } from 'express';
        import * as gitControllerController from 'src/controllers/git-controller';
        import validate from 'src/middlewares/validate';
        import respond from 'src/middlewares/respond';
        import * as validators from './validators';
        export default function mountGITCONTROLLER(router: Router) {
            router.get(
                        '/gitEndpoint',
                        validate(validators.gitEndpoint),
                        respond((req: any) => gitControllerController.gitEndpoint(req.query))
                    );
          
        }
        