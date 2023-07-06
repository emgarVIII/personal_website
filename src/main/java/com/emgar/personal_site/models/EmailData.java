package com.emgar.personal_site.models;

public class EmailData {
    private String from;
    private String message;

    // constructor
    public EmailData(String from, String message){
        this.from = from;
        this.message = message;
    }

    public void setFrom(String from){
        this.from = from;
    }

    public void setMessage(String message){
        this.message = message;
    }

    public String getFrom(){
        return from;
    }

    public String getMessage(){
        return message;
    }
}
