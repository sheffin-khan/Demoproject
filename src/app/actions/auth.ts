import { SignupFormSchema, FormState } from '@/app/lib/definitions'

export async function signup( state:FormState, formData:FormData) {

    const ValidatedFields = SignupFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),

    })
    if (!ValidatedFields.success){
        return {
            errors:ValidatedFields.error.flatten().fieldErrors,
        }
    }
}