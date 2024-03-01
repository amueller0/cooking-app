import { z } from "zod";

function checkFileType(file: File) {
    return ["png", "jpg", "jpeg"].includes(file.name.split(".").pop() || "");
}

export const CreateRecipeSchema = z.object({
    image: z
        .any()
        .refine((file: File) => file.size < 4_500_000, "Max size is 5MB.")
        .refine((file: File) => checkFileType(file), "Unsupported file type."),
    title: z.string().min(1, "Required").max(64, "Too long"),
    ingredients: z
        .string()
        .min(1, "Required")
        .max(2 ** 12, "Too long"),
    instructions: z
        .string()
        .min(1, "Required")
        .max(2 ** 16, "Too long")
});
