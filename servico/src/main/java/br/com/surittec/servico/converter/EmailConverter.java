package br.com.surittec.servico.converter;

import br.com.surittec.servico.dto.ClienteDTO;
import br.com.surittec.servico.dto.EmailDTO;
import br.com.surittec.servico.entidade.Cliente;
import br.com.surittec.servico.entidade.Email;
import org.springframework.stereotype.Component;

@Component
public class EmailConverter extends AbstractEntityMapper<EmailDTO, Email> {

    @Override
    public Email toEntity(EmailDTO dto) {
        return Email.builder()
                .id(dto.getId())
                .descricao(dto.getDescricao())
                .build();
    }

    @Override
    public EmailDTO toDto(Email entity) {
        return EmailDTO.builder()
                .id(entity.getId())
                .descricao(entity.getDescricao())
                .build();
    }
}
