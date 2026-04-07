import * as zod from "zod";
const schema = zod
  .object({
    name: zod.string().min(2, "Name must be at least 2 characters long"),
    email: zod.string().email("Invalid email address"),
    password: zod
      .string()
      .nonempty("Password is required")
      .min(6, "Password must be at least 6 characters long"),
    rePassword: zod
      .string()
      .min(6, "Confirm Password must be at least 6 characters long"),
    phone: zod
      .string()
      .length(11, "Phone must be exactly 11 digits")
      .regex(/^[0-9]+$/, "Phone must contain numbers only"),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Passwords do not match",
    path: ["rePassword"],
  });
export default schema;
