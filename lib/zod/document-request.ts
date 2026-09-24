import { documentRequestValidIds } from "@/db/schema";
import { z } from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export const documentRequestSchema = z.object({
  purpose: z.string().min(1, "Purpose is required"),
  remarks: z.string().optional(),
  validIdType: z.enum(documentRequestValidIds.enumValues).optional(),
  validIdImage: z
    .instanceof(File, { error: 'Please upload an image' })
    .refine(f => f.size <= MAX_FILE_SIZE, 'Max image size is 5MB')
    .refine(f => ACCEPTED_IMAGE_TYPES.includes(f.type), 'File type not supported')
    .optional()
    .or(z.literal(''))
    .or(z.null()),
});

export type DocumentRequest = z.infer<typeof documentRequestSchema>;
