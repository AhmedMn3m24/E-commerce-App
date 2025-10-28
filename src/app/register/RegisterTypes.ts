import * as zod from 'zod'
import fromsehema from './fromsehema';
export type RegisterFromType = zod.infer<typeof fromsehema>; // ✅ لازم schema موجودة قبلها