import * as zod from 'zod'
const schema = zod.object({
  name: zod.string().min(2, "Name must be at least 2 characters long"),
  email: zod.string().email("Invalid email address"),
  password: zod.string()
    .nonempty("Password is required")
    .min(6, "Password must be at least 6 characters long"),
  rePassword: zod.string()
    .min(6, "Confirm Password must be at least 6 characters long"),
  phone: zod.string().min(10, "Phone number must be at least 10 digits long"),
}).refine((data) => data.password === data.rePassword, {
  message: "Passwords do not match",
  path: ["rePassword"],
});
export default schema;

