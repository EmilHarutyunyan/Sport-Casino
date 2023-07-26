import { object, string, number, ref, mixed } from "yup";

export const schema_create = object().shape({
  full_name: string().required("Full name is a required field"),
  user_name: string().required("User name is a required field"),
  email: string()
    .email("Email should have correct format")
    .required("Email is a required field"),
  // password: string()
  //   .min(8)
  //   .max(32)
  //   .required("No password provided.")
  //   .min(8, "Password is too short - should be 8 chars minimum.")
  //   .matches(
  //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
  //     "Minimum 8 characters, at least one uppercase letter, one lowercase letter and one number:"
  //   ),
  // sports_shares: number().min(0, "").default(0),
  // casino_shares: number().min(0, "").default(0),
  phone_number: string().required("Phone number is required"),
});
