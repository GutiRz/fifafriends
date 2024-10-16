package com.fifafriends.service;

import com.fifafriends.dto.AuthRequestDTO;
import com.fifafriends.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private CustomUserDetailsService customUserDetailsService;

    // Autenticar al usuario y generar el token JWT
    public String login(AuthRequestDTO request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword())
        );

        UserDetails userDetails = customUserDetailsService.loadUserByUsername(request.getUsername());

        return jwtUtil.generateToken(userDetails.getUsername());
    }

    // Validar el token actual y generar uno nuevo si es necesario (refresh)
    public String refreshToken(String oldToken) throws Exception {
        if (jwtUtil.isTokenExpired(oldToken)) {
            String username = jwtUtil.extractUsername(oldToken);
            UserDetails userDetails = customUserDetailsService.loadUserByUsername(username);
            return jwtUtil.generateToken(userDetails.getUsername());
        } else {
            throw new Exception("Token is still valid, no need for refresh");
        }
    }
}
