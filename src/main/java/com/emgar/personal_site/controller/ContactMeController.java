package com.emgar.personal_site.controller;

import javax.mail.MessagingException;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.emgar.personal_site.services.EmailService;
import com.emgar.personal_site.models.EmailData;

@RestController
public class ContactMeController {

    private final EmailService emailService;

    // constructor injection
    public ContactMeController(EmailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping("/submitForm")
    public void submitForm(@RequestBody EmailData emailData)  {
        try{

            // Send the email using the email service AND obtained email data

            emailService.sendEmail(emailData);
        }catch (MessagingException e){
            System.err.println("Fed to send email: " + e.getMessage());
        }
        
    }
}
