import { Router } from 'express';
import mountTESTFOR from './testFor';

export default function mountTESTINGTHE(router: Router) {
    const testFor = Router();
    mountTESTFOR(testFor);
    router.use('/testFor', testFor);
}
