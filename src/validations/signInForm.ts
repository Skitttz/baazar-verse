import { ERRORS_MESSAGES } from "@/constants/errorMessage";
import { mailRegex } from "@/utils/regex";
import {z} from "zod";

export const schemaSignInForm = z.object({
  email: z
    .string()
    .regex(mailRegex, { message: ERRORS_MESSAGES.EMAIL_INVALID })
    .email({ message: ERRORS_MESSAGES.EMAIL_INVALID }),
  password: z
    .string({ message: ERRORS_MESSAGES.PASSWORD_INVALID })
    .min(1, { message: ERRORS_MESSAGES.PASSWORD_INVALID })
});

export type ISignInFormData = z.infer<typeof schemaSignInForm>;