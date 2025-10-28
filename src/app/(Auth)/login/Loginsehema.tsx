import * as zod from 'zod'
const Loginsehema = zod.object({
  email: zod.string().email("Invalid email address"),
  password: zod.string()
    .nonempty("Password is required")
    .min(6, "Password must be at least 6 characters long"),

})
export default Loginsehema;

