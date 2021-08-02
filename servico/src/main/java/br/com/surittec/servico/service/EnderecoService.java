package br.com.surittec.servico.service;

import br.com.surittec.servico.client.CepClient;
import br.com.surittec.servico.dto.EnderecoDTO;
import br.com.surittec.servico.entidade.Endereco;
import br.com.surittec.servico.repository.EnderecoRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class EnderecoService {

    private CepClient cepClient;
    private EnderecoRepository enderecoRepository;

    public EnderecoDTO getEnderecoByCep(String cep){
        return cepClient.buscaEnderecoPor(cep);
    }

}
