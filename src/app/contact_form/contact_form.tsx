import { Button, Column, Flex, Grid, Heading, Input, Row, Textarea } from "@/once-ui/components";
import emailjs from '@emailjs/browser';
import React, { useRef } from "react";

export default function ContactForm() {

    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        emailjs.sendForm(
            'xsarmientoMailJS', 
            'template_2g3v0gq', form.current!, {
                publicKey: 'tcXrNK53DtsyZ5ydj'
            }
        ).then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        }
        );
    } 

    return (        
        <form ref={form} onSubmit={sendEmail}>
            <Grid columns={1} tabletColumns={2} gap="16" padding="12"  >
                <Heading>Contact Us</Heading>
                <Row>
                    <Column >
                        <Input id="name" label="Name:" type="text" />
                    </Column>
                    <Column>
                        <Input id="email" label="E-mail" type="email" />
                    </Column>
                </Row>
                <Row>
                    <Textarea
                        id="example-textarea"
                        label="Message"
                        lines={3}
                        description=""
                        resize="vertical"
                    />
                </Row>
                <Button type="submit">Submit</Button>
            </Grid>
        </form>
    );
}
