package com.zoro.authservice.dto;

import lombok.Data;

@Data
public class ResetPasswordRequest {
    private String token;
    private String newPassword;
    public String getEmail() {
            throw new UnsupportedOperationException("Unimplemented method 'getEmail'");
    }
}
