package br.com.surittec.servico.dto;

import br.com.surittec.servico.entidade.TipoTelefone;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TelefoneDTO {

    private Long id;

    private String numero;

    private TipoTelefone tipoTelefone;
}
