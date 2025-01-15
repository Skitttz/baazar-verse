import { ERRORS_MESSAGES } from "@/constants/errorMessage";
import { mailRegex, phoneRegex } from "@/utils/regex";
import { z } from "zod";

export const schemaSignUpForm = z
  .object({
    email: z
      .string()
      .regex(mailRegex, { message: ERRORS_MESSAGES.EMAIL_INVALID })
      .email({ message: ERRORS_MESSAGES.EMAIL_INVALID }),
    password: z
      .string({ message: ERRORS_MESSAGES.PASSWORD_INVALID })
      .min(1, { message: ERRORS_MESSAGES.PASSWORD_INVALID }),
    phone: z
      .string()
      .regex(phoneRegex, { message: ERRORS_MESSAGES.PHONE_INVALID })
      .min(15, { message: ERRORS_MESSAGES.PHONE_INVALID })
      .max(15, { message: ERRORS_MESSAGES.PHONE_INVALID }),
    passwordConfirmation: z.string(),
    name: z
      .string({ message: ERRORS_MESSAGES.NAME_INVALID })
      .min(3, { message: ERRORS_MESSAGES.NAME_INVALID }),
    fileAvatar: z.instanceof(File).nullish(),
    avatarId: z.string().optional()
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    path: ["passwordConfirmation"],
    message: ERRORS_MESSAGES.CONFIRM_PASSWORD_INVALID
  });

export type ISignUpFormData = z.infer<typeof schemaSignUpForm>;