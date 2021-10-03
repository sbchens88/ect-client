import { Router } from 'express';
import mountGITAPITEST from "./gitApiTest";

        export default function mountTESTINGAPI(router: Router) {

                        const gitApiTest = Router();
                        mountGITAPITEST(gitApiTest);
                        router.use('/gitApiTest', gitApiTest);
                    
          
        }
        