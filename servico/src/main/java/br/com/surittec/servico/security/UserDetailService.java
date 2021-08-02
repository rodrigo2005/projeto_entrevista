package br.com.surittec.servico.security;

import br.com.surittec.servico.entidade.Usuario;
import br.com.surittec.servico.repository.UsuarioRepositoy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class UserDetailService implements UserDetailsService {

    @Autowired
    private UsuarioRepositoy usuarioRepositoy;

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        Usuario user = usuarioRepositoy.findByLogin(userName);
        if (user == null) {
            throw new UsernameNotFoundException(userName);
        }
        return user;
    }
}
