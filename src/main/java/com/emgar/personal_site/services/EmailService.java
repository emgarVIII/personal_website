package com.emgar.personal_site.services;

import org.springframework.stereotype.Service;
import com.emgar.personal_site.models.EmailData;
import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;

import java.net.Authenticator;
import java.net.PasswordAuthentication;
import java.util.Properties;
import com.google.api.client.googleapis.json.GoogleJsonError;
import com.google.api.client.googleapis.json.GoogleJsonResponseException;
import com.google.api.client.http.HttpRequestInitializer;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.gson.GsonFactory;
import com.google.api.services.gmail.Gmail;
import com.google.api.services.gmail.GmailScopes;
import com.google.api.services.gmail.model.Message;
import com.google.auth.http.HttpCredentialsAdapter;
import com.google.auth.oauth2.GoogleCredentials;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Properties;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import org.apache.commons.codec.binary.Base64;

@Service
public class EmailService {

    private final String host;
    private final String port;
    private final String username;
    private final String password;

    /**
     * Create a MimeMessage using the parameters provided.
     *
     * @param toEmailAddress   email address of the receiver
     * @param fromEmailAddress email address of the sender, the mailbox account
     * @param subject          subject of the email
     * @param bodyText         body text of the email
     * @return the MimeMessage to be used to send email
     * @throws MessagingException - if a wrongly formatted address is encountered.
     */
    @Autowired
    public EmailService(
            @Value("${spring.mail.host}") String host,
            @Value("${spring.mail.port}") String port,
            @Value("${spring.mail.username}") String username,
            @Value("${spring.mail.password}") String password) {
        this.host = host;
        this.port = port;
        this.username = username; // email of sending bot
        this.password = password; // password of sending bot
        System.out.println(host);
        System.out.println(port);
        System.out.println(username);
        System.out.println(password);
    }

    // email data has: the subject line and the message body
    public MimeMessage createEmail(EmailData emailData)
            throws MessagingException {

        //extract 
        String sender = emailData.getFrom();
        String bodyText = emailData.getMessage(); 
        String toEmailAddress = "mgar888@utexas.edu";

        Properties props = new Properties();
        Session session = Session.getDefaultInstance(props, null);

        MimeMessage email = new MimeMessage(session);
        email.setFrom(new InternetAddress(this.username));
        email.addRecipient(javax.mail.Message.RecipientType.TO,
                new InternetAddress(toEmailAddress));
        email.setSubject(subject);
        email.setText(bodyText);
        return email;
    }
    
    // send message
   /* Send an email from the user's mailbox to its recipient.
   *
   * @param fromEmailAddress - Email address to appear in the from: header
   * @param toEmailAddress   - Email address of the recipient
   * @return the sent message, {@code null} otherwise.
   * @throws MessagingException - if a wrongly formatted address is encountered.
   * @throws IOException        - if service account credentials file not found.
   */
    public sendEmail(String fromEmailAddress, String toEmailAdress) throws MessagingException, IOException{
        
    }
}
