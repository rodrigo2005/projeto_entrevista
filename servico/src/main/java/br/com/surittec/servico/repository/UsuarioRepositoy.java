package br.com.surittec.servico.repository;

import br.com.surittec.servico.entidade.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepositoy extends JpaRepository<Usuario, Long> {

    Usuario findByLogin(String login);

}
