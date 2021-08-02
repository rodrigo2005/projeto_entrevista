package br.com.surittec.servico.config;

import org.springframework.data.domain.AuditorAware;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.Optional;

public class JpaAuditorConfigurationImpl implements AuditorAware<String> {
    @Override
    public Optional<String> getCurrentAuditor() {
       String currentUser = SecurityContextHolder.getContext().getAuthentication().getName();
        return Optional.of(currentUser);
    }
}
