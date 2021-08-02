package br.com.surittec.servico.entidade;

import lombok.*;
import org.hibernate.validator.constraints.br.CPF;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

@Entity
@Data
@Builder
@EqualsAndHashCode(callSuper = false)
@AllArgsConstructor
@NoArgsConstructor
public class Cliente extends Auditar<String>  {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Size(min = 3, max = 100)
    private String nome;

    @CPF(message = "Numero de CPF Inválido")
    @NotNull
    private String cpf;

    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    private Endereco endereco;

    @OneToMany(cascade=CascadeType.ALL,orphanRemoval = true)
    private List<Telefone> telefones;

    @OneToMany(cascade=CascadeType.ALL,orphanRemoval = true)
    private List<Email> emails;

}
