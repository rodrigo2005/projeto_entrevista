package br.com.surittec.servico.client;

import br.com.surittec.servico.dto.EnderecoDTO;
import feign.Param;
import feign.RequestLine;

public interface CepClient {

    @RequestLine("GET /{cep}/json")
    EnderecoDTO buscaEnderecoPor(@Param("cep") String cep);
}
