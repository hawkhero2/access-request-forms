import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


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

export default function RequestForm() {
    const responsabil : string = ''
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            account: '',
            badgeNumber: 0,
            dmNmber: 0,
            romNumber: 0,
            client: '',
            date: new Date(),
            access: '',
            internetAccess: '',
            responsableIT: '',
            responsable: '',
            typeOfRequest: ''
        }
    })

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        /*
         submit data to database after validation
        */
        console.log(data)
    }

    return (
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                    <FormField 
                    control={form.control}
                    name='name'
                    render={ ({field, formState}) => ( 
                        <FormControl>
                            <FormLabel htmlFor='name'>Name</FormLabel>
                            <Input {...field} id='name' placeholder='Name' />
                            {formState.errors.name && <FormMessage>{formState.errors.name.message}</FormMessage>}
                        </FormControl>
                    )}
                    >

                    </FormField>
                </form>
            </Form>
        )
}
