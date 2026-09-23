import { z } from "zod";

// const MAX_FILE_SIZE = 5000000;
// const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export const residentValidIdEnum = z.enum(["National ID", "UMID Card", "Driver's Licenses", "Passport", "Postal ID", "Voter's ID", "RPC ID", "Senior Citizen ID", "PWD ID"])

export const registerResidentSchema = z.object({
  // user
  email: z.email("Enter a valid email"),
  // phone: z.e164("Enter a valid phone number"),
  phone: z.string().min(1, "Mobile number is required").max(100),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters long"),
  confirmPassword: z.string(),

  // resident
  firstname: z.string().min(1, "First name is required").max(100),
  middlename: z.string().min(1, "Middle name is required").max(100),
  lastname: z.string().min(1, "Last name is required").max(100),
  suffix: z.string().max(10).optional(),
  birthdate: z.coerce.date(),
  // address
  address: z.object({
    houseNumber: z.string().min(1, "House number is required").max(100),
    street: z.string().min(1, "Street is required").max(100),
    purok: z.string().min(1, "Purok is required").max(100),
  }),
  validId: residentValidIdEnum,
  // idFront: z
  //   .instanceof(File, { error: 'Please upload an image' })
  //   .refine(f => f.size <= MAX_FILE_SIZE, 'Max image size is 5MB')
  //   .refine(f => ACCEPTED_IMAGE_TYPES.includes(f.type), 'File type not supported'),
  // idBack: z
  //   .instanceof(File, { error: 'Please upload an image' })
  //   .refine(f => f.size <= MAX_FILE_SIZE, 'Max image size is 5MB')
  //   .refine(f => ACCEPTED_IMAGE_TYPES.includes(f.type), 'File type not supported'),
}).refine(data => data.password === data.confirmPassword, {
  error: "Password do not match",
  path: ["confirmPassword"],
});

export const loginResidentSchema = z.object({
  email: z.email("Enter your email"),
  password: z
    .string()
    .min(1, "Enter your password"),
})

export type RegisterResident = z.infer<typeof registerResidentSchema>;
export type ResidentValidId = z.infer<typeof residentValidIdEnum>

export type LoginResident = z.infer<typeof loginResidentSchema>;

