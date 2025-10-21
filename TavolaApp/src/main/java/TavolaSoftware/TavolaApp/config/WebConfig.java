package TavolaSoftware.TavolaApp.config;

import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.context.annotation.Configuration;

@Configuration
public class WebConfig implements WebMvcConfigurer {

 @Override
 public void addResourceHandlers(ResourceHandlerRegistry registry) {
     // Mapeia /upl/usuarios/** para a pasta física upl/usuarios/
     registry.addResourceHandler("/upl/usuarios/**")
             .addResourceLocations("file:./upl/usuarios/");

     // Mapeia /upl/restaurantes/** para a pasta física upl/restaurantes/
     registry.addResourceHandler("/upl/restaurantes/**")
             .addResourceLocations("file:./upl/restaurantes/");

     // Mapeia /upl/cardapios/** para a pasta física upl/cardapios/
     registry.addResourceHandler("/upl/cardapios/**")
             .addResourceLocations("file:./upl/cardapios/");
 }
}