import { Router } from 'express';
import mountGITCONTROLLER from "./gitController";

        export default function mountTESTINGGIT(router: Router) {

                        const gitController = Router();
                        mountGITCONTROLLER(gitController);
                        router.use('/gitController', gitController);
                    
          
        }
        