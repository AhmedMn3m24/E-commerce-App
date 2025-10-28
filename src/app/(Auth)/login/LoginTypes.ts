import * as zod from 'zod'
import Loginsehema from './Loginsehema';
export type LoginFormType = zod.infer<typeof Loginsehema>; // ✅ لازم schema موجودة قبلها