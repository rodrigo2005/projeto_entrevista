package br.com.surittec.servico.config;

import br.com.surittec.servico.client.CepClient;
import feign.Feign;
import feign.httpclient.ApacheHttpClient;
import feign.jackson.JacksonDecoder;
import feign.jackson.JacksonEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration
public class FeignConfiguration {

    /**
     * Set the Feign specific log level to log client REST requests
     */
    @Bean
    static feign.Logger.Level feignLoggerLevelApp() {
        return feign.Logger.Level.BASIC;
    }

    @Autowired
    private FeignProperties properties;

    @Bean
    public CepClient cepClient() {
        return createClient(CepClient.class, properties.getServicoCep());
    }

    protected static <T> T createClient(Class<T> type, String uri) {
        return Feign.builder()
                .decode404()
                .client(new ApacheHttpClient())
                .encoder(new JacksonEncoder())
                .decoder(new JacksonDecoder())
                .logLevel(feignLoggerLevelApp())
                .target(type, uri);
    }


}
