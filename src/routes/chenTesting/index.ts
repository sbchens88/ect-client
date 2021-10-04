import { Router } from 'express';
import mountGITTEST from './gitTest';

export default function mountCHENTESTING(router: Router) {
    const gitTest = Router();
    mountGITTEST(gitTest);
    router.use('/gitTest', gitTest);
}
