package br.com.surittec.servico.entidade;

import lombok.Data;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
public class Role implements GrantedAuthority {

    @Id
    @Column(name = "NOME_ROLE")
    private String nomeRole;

    @Override
    public String getAuthority() {
        return this.nomeRole;
    }
}
