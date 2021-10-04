import express, { Router } from 'express';
import mountAPI from './api';
import mountAuth from './auth';
import respond from 'src/middlewares/respond';
import mountTESTINGGIT from './testingGit';
import mountTESTINGAPI from './testingApi';
import mountCHENTESTING from './chenTesting';
import mountTESTINGTHE from './testingThe';

export default function addRoutes(router: Router) {
    const api = express.Router();
    const auth = express.Router();

    mountAPI(api);
    mountAuth(auth);

    router.get(
        '/',
        respond(() => ({ message: 'Up and running!' }))
    );

    router.use('/api', api);
    router.use('/auth', auth);

    const testingGit = Router();
    mountTESTINGGIT(testingGit);
    router.use('/testingGit', testingGit);

    const testingApi = Router();
    mountTESTINGAPI(testingApi);
    router.use('/testingApi', testingApi);

    const chenTesting = Router();
    mountCHENTESTING(chenTesting);
    router.use('/chenTesting', chenTesting);

    const testingThe = Router();
    mountTESTINGTHE(testingThe);
    router.use('/testingThe', testingThe);
}
