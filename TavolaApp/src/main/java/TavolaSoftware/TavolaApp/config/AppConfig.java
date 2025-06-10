package TavolaSoftware.TavolaApp.config; // Ou outro pacote de configuração

import TavolaSoftware.TavolaApp.REST.model.Servico;
import TavolaSoftware.TavolaApp.REST.service.ServicoService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {

    @Bean
    CommandLineRunner initDatabase(ServicoService servicoService) {
        return args -> {
            // Adicione apenas os serviços relevantes para reservas
            servicoService.getOrCreateServico("WI_FI_GRATIS", "Wi-Fi Grátis disponível para clientes.");
            servicoService.getOrCreateServico("ESTACIONAMENTO", "Estacionamento próprio ou convênio.");
            servicoService.getOrCreateServico("AREA_INFANTIL", "Área de lazer dedicada para crianças.");
            servicoService.getOrCreateServico("ACESSIVEL_CADEIRANTES", "Instalações adaptadas para cadeirantes.");
            servicoService.getOrCreateServico("PERMITE_ANIMAIS", "Permite animais de estimação em áreas específicas.");
            servicoService.getOrCreateServico("OPCOES_VEGETARIANAS", "Oferece pratos vegetarianos no cardápio.");
            servicoService.getOrCreateServico("OPCOES_VEGANAS", "Oferece pratos veganos no cardápio.");
            servicoService.getOrCreateServico("MUSICA_AO_VIVO", "Apresentações musicais ao vivo em determinados dias/horários.");
            // Não adicione "ENTREGA" ou "RETIRADA_NO_LOCAL"
        };
    }
}