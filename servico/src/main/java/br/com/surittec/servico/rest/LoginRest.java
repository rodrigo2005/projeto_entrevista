package br.com.surittec.servico.rest;

import br.com.surittec.servico.security.UserDetailService;
import br.com.surittec.servico.security.model.AuthenticationRequest;
import br.com.surittec.servico.security.model.AuthenticationResponse;
import br.com.surittec.servico.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/login")
public class LoginRest {

    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UserDetailService userDetailService;
    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/autenticar")
    public ResponseEntity<?> autenticar(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {
      try {
          authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword()));
      } catch (BadCredentialsException b){
          throw new Exception("Usuário ou Senha incorreto",b);
      }
        final UserDetails userDetails = userDetailService.loadUserByUsername(authenticationRequest.getUsername());
        final String jwt = jwtUtil.generateToken(userDetails);
        return ResponseEntity.ok(new AuthenticationResponse(jwt));
      }
}
