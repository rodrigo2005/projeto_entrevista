package br.com.surittec.servico.rest;

import br.com.surittec.servico.dto.ClienteDTO;
import br.com.surittec.servico.service.ClienteService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/cliente")
@AllArgsConstructor
public class ClienteRest {

    private ClienteService clienteService;

    @PostMapping()
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN')")
    public ResponseEntity<ClienteDTO> salvar(@Valid  @RequestBody ClienteDTO clienteDTO){
        clienteService.salvar(clienteDTO);
        return ResponseEntity.ok(clienteDTO);
    }

    @DeleteMapping("/delete/{id}")
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN')")
    public ResponseEntity<Long> delete(@PathVariable Long id){
        clienteService.delete(id);
        return ResponseEntity.ok(id);
    }

    @GetMapping()
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN','ROLE_COMUM')")
    public ResponseEntity<List<ClienteDTO>> lista(){
        return ResponseEntity.ok(clienteService.lista());
    }

    @CrossOrigin
    @GetMapping("/{id}")
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN','ROLE_COMUM')")
    public ResponseEntity<ClienteDTO> buscaPorId(@PathVariable Long id){
        return ResponseEntity.ok(clienteService.buscaPorId(id));
    }



}
