
import { Button, Column, Flex, Grid, Heading, Input, Row, TagInput, Textarea } from "@/once-ui/components";
import emailjs from '@emailjs/browser';
import exp from "constants";
import React, { useRef, useState } from "react";

const ContactForm = () =>{
    const [tags, setTags] = useState<string[]>(["Frontend", "Backend", "Database", "Others"]);
    
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        emailjs.sendForm(
            'xsarmientoMailJS', 
            'template_dusl517', e.target as HTMLFormElement, {
                publicKey: 'tcXrNK53DtsyZ5ydj',
            }
        ).then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        }
        );
    } 

    return (        
        <form onSubmit={sendEmail}>
            <Grid columns={1} tabletColumns={2} gap="16" padding="12"  >
                <Heading>Contact Us</Heading>
                <Row gap="16">
                        <Input id="name" name="name" label="Name:" type="text" />
                        <Input id="email" name="email" label="E-mail" type="email" />
                </Row>
                <Row>
                    <TagInput
                        id="title"
                        name="title"
                        value={tags}
                        onChange={(newTags: string[]) => {
                            setTags(newTags);
                        }}
                        label="Interests"
                    />
                </Row>
                <Row>
                    <Textarea
                        id="message"
                        name="message"
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

export default ContactForm; 