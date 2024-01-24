import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, useForm } from 'react-hook-form'
import { FormField } from '@/components/ui/form'


const formSchema = z.object({
    name: z.string().min(3).max(50),
    account: z.string().min(3).max(50),
    badgeNumber: z.number().min(1000),
    dmNmber: z.number().min(1),
    romNumber: z.number().min(1),
    client: z.string().min(3).max(50),
    date: z.date(),
    access: z.string().min(3).max(50),
    internetAccess: z.string().length(2),
    responsableIT: z.string().min(3).max(50),
    responsable: z.string().min(3).max(50),
    typeOfRequest: z.string().min(3).max(50)

})

export default function RquestForm() {
    const responsabil : string = ''
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {}
    })

    return (
            <Form>
            </Form>
        )
}
