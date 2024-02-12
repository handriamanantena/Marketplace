import {useForm} from "react-hook-form"

import {Button} from "components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel, FormMessage,
} from "components/ui/form"
import {Input} from "components/ui/input"
import {EditableFiveStars} from "@components/rating/EditableFiveStars";
import React from "react";
import {Textarea} from "./ui/textarea";
import {useRouter} from "next/router";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"


export function AddReviewForm({itemId} : {itemId: number}) {

    const router = useRouter();

    const formSchema = z.object({
        email: z.string().includes("@", {
            message: "please provide valid email",
        }),
        comment: z.string(),
        rating: z.number()
    });

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            rating: 0,
        },
    });

    const setRating = (value: number) => {
        form.setValue('rating', value);
    };

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        const body = JSON.stringify(values);
        console.log(values);
        await fetch(`http://localhost:3000/api/item/${itemId}/review`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body : body
        });
        router.reload();
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="email"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField control={form.control} name="rating"
                    render={({field}) => (
                    <FormItem>
                        <FormLabel>Rating</FormLabel>
                        <FormControl>
                            <EditableFiveStars setRating={setRating}/>
                        </FormControl>
                    </FormItem>
                )}/>
                <FormField
                    control={form.control}
                    name="comment"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Comment</FormLabel>
                            <FormControl>
                                <Textarea {...field}/>
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}