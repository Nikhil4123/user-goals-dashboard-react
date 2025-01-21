package com.zoro.authservice.controller;

import com.zoro.authservice.dto.SignUpRequest;
import com.zoro.authservice.dto.SignInRequest;
import com.zoro.authservice.dto.ForgotPasswordRequest;
import com.zoro.authservice.dto.ResetPasswordRequest;
import com.zoro.authservice.dto.PasswordResetResponse;
import com.zoro.authservice.model.User;
import com.zoro.authservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {
    
    @Autowired
    private UserService userService;
    
    @PostMapping("/signup")
    public ResponseEntity<User> signUp(@RequestBody SignUpRequest request) {
        try {
            User user = userService.signUp(request);
            return ResponseEntity.ok(user);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
    
    @PostMapping("/signin")
    public ResponseEntity<User> signIn(@RequestBody SignInRequest request) {
        try {
            User user = userService.signIn(request);
            return ResponseEntity.ok(user);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
    
    @PostMapping("/forgot-password")
    public ResponseEntity<PasswordResetResponse> forgotPassword(@RequestBody ResetPasswordRequest request) {
        try {
            userService.forgotPassword(request);
            PasswordResetResponse response = new PasswordResetResponse();
            response.setMessage("If the email exists, a password reset link will be sent");
            response.setStatus("SUCCESS");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            PasswordResetResponse response = new PasswordResetResponse();
            response.setMessage("Error processing request");
            response.setStatus("ERROR");
            return ResponseEntity.badRequest().body(response);
        }
    }

    @PostMapping("/reset-password")
    public ResponseEntity<PasswordResetResponse> resetPassword(@RequestBody ResetPasswordRequest request) {
        try {
            userService.forgotPassword(request);
            PasswordResetResponse response = new PasswordResetResponse();
            response.setMessage("Password successfully reset");
            response.setStatus("SUCCESS");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            PasswordResetResponse response = new PasswordResetResponse();
            response.setMessage("Error resetting password");
            response.setStatus("ERROR");
            return ResponseEntity.badRequest().body(response);
        }
    }
}