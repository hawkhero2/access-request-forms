'use client'

import * as React from 'react'
import * as z from 'zod'
import { format } from 'date-fns'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from "@/components/ui/button"
import { Calendar as CalendarIcon } from 'lucide-react'
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from "@/components/ui/popover"

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
    const [date, setDate] = React.useState<Date>()
    
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
         TODO submit data to database after validation
        */
        console.log(data)
    }

    return (
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                    <FormField 
                    control={form.control}
                    name='name'
                    render={ ({field}) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <Input {...field} />
                            <FormDescription>Enter your name</FormDescription>
                        </FormItem>
                    )}
                    >
                    </FormField>
                    
                    <FormField
                    control={form.control}
                    name='account'
                    render={ ({field}) => (
                        <FormItem>
                            <FormLabel>Account</FormLabel>
                            <Input {...field} />
                            <FormDescription>Enter your account</FormDescription>
                        </FormItem>
                    )}
                    >
                    </FormField>

                    <FormField
                    control={form.control}
                    name='badgeNumber'
                    render={ ({field}) =>(
                        <FormItem>
                            <FormLabel>Badge Number</FormLabel>
                            <Input {...field} />
                            <FormDescription>Enter your badge number</FormDescription>
                        </FormItem>
                    )}
                    >
                    </FormField>

                    <FormField
                    control={form.control}
                    name='dmNmber'
                    render={ ({field}) => (
                        <FormItem>
                            <FormLabel>DM</FormLabel>
                            <Input {...field} />
                            <FormDescription>Enter DM number</FormDescription>
                        </FormItem>
                    )}
                    >
                    </FormField>

                    <FormField
                    control={form.control}
                    name='romNumber'
                    render={ ({field}) => (
                        <FormItem>
                            <FormLabel>ROM</FormLabel>
                            <Input {...field} />
                            <FormDescription>Enter ROM number</FormDescription>
                        </FormItem>
                    )}
                    >
                    </FormField>

                    <FormField
                    control={form.control}
                    name='client'
                    render={ ({field}) => (
                        <FormItem>
                            <FormLabel>Client</FormLabel>
                            <Input {...field} />
                            <FormDescription>Enter client name</FormDescription>
                        </FormItem>
                    )}
                    >
                    </FormField>

                    {/* TODO Work on  date picker */}
                    <FormField
                    control={form.control}
                    name='date'
                    render={ ({field}) => (
                        <FormItem className='flex flex-col'>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                        variant={'outline'}
                                        className={cn(
                                            'w-[240px] pl-3 text-left font-normal',
                                            !date && 'text-muted-foreground'
                                            )}
                                        >
                                            { field.value ? ( 
                                            format(field.value, "PPP")) : 
                                            (<span>Pick date</span>)
                                            }
                                            <CalendarIcon className='mr-2 h4 w-4'/>
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className='w-auto p-0' align='start'>
                                    <Calendar
                                    mode='single'
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    disabled={(date) =>
                                        date > new Date() || date < new Date("1900-01-01")
                                    }
                                    initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </FormItem>
                    )}
                    >
                    </FormField>

                    <FormField
                    control={form.control}
                    name='access'
                    render={ ({field}) => (
                        <FormItem>
                            <FormLabel>Access</FormLabel>
                            <Input {...field} />
                            <FormDescription>Enter access</FormDescription>
                        </FormItem>
                    )}
                    >
                    </FormField>

                    <Button type='submit'>Submit</Button>
                </form>
            </Form>
        )
}
