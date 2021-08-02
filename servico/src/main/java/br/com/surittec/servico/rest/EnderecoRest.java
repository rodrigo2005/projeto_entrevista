package br.com.surittec.servico.rest;

import br.com.surittec.servico.dto.EnderecoDTO;
import br.com.surittec.servico.service.EnderecoService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/endereco")
@AllArgsConstructor
public class EnderecoRest {

    private EnderecoService enderecoService;

    @GetMapping("/cep/{cep}")
    public ResponseEntity<EnderecoDTO> getEnderecoByCep(@PathVariable String cep){
        return ResponseEntity.ok(enderecoService.getEnderecoByCep(cep));
    }


}
