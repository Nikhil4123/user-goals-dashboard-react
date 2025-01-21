package com.zoro.authservice.dto;

import lombok.Data;

@Data
public class PasswordResetResponse {
    private String message;
    private String status;
}