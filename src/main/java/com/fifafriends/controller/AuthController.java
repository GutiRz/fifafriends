package com.fifafriends.controller;

import com.fifafriends.dto.AuthRequestDTO;
import com.fifafriends.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // Endpoint para manejar el login
    @PostMapping("/login")
    public String login(@RequestBody AuthRequestDTO authRequestDTO) throws Exception {
        return authService.login(authRequestDTO);
    }

    // Endpoint para manejar la solicitud de refrescar el token
    @PostMapping("/refresh")
    public String refreshToken(@RequestHeader("Authorization") String oldToken) throws Exception {
        // Extraer el token eliminando el prefijo "Bearer "
        String token = oldToken.substring(7);
        return authService.refreshToken(token);
    }
}
