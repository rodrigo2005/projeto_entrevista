package br.com.surittec.servico;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class ServicoApplication {

	public static void main(String[] args) {

		SpringApplication.run(ServicoApplication.class, args);
	}

}
