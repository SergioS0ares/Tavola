package TavolaSoftware.TavolaApp.config;

// import org.springframework.beans.factory.annotation.Value; // Importar se for usar @Value
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    // Esta é a configuração que você sugeriu na conversa anterior para ser portável
    // e consistente com app.upload.dir=./upl
    private final String uploadPath = "./upl/"; // Ou injete de application.properties se preferir

	@Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry
          .addResourceHandler("/upl/**") // Manipulador para URLs que começam com /upl/
          // Localização correta: aponta para a pasta 'upl' relativa ao diretório de execução
          .addResourceLocations("file:" + uploadPath) 
          .setCachePeriod(3600); // Define um período de cache para os recursos
    }
}