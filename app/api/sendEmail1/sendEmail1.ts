"use server";
import { Resend } from "resend";
import { redirect } from 'next/navigation';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail1 = async (formData: FormData) => {
    const name = formData.get("name"); 
    const message = formData.get("message");


     
        resend.emails.send({
            from: "noreply@ovoxa.beauty", 
            to: "batoul@test0.hadizproductions.com",
            subject: "New message from your website customer",
            text: "Name: " + name + "\n" + "Message: " + message,
        })
    
    redirect('/thank');

}

