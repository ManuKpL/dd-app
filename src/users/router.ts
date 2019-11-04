import { Router } from 'express';

import requestAdapter from '../server/adapter';
import { getUsers } from './controllers';

const router = Router({ caseSensitive: true, mergeParams: false, strict: true });

router.route('/').get(requestAdapter(getUsers));

export default router;
