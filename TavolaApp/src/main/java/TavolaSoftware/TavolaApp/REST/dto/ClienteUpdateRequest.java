package TavolaSoftware.TavolaApp.REST.dto;

import TavolaSoftware.TavolaApp.tools.Endereco;

// Este DTO é para a atualização do Cliente (e seu Usuario associado)
public class ClienteUpdateRequest {
    private String nome; // Novo nome do usuário
    private String email; // Novo email do usuário (opcional, pode exigir validação extra)
    private String senha; // Nova senha (opcional, se fornecida, deve ser criptografada)
    private Endereco endereco; // Novo endereço
    private String imagemPerfilBase64; // Imagem de perfil em Base64 para upload/atualização
    private String imagemBackgroundBase64; // Imagem de background em Base64 para upload/atualização

    // Getters
    public String getNome() {
        return nome;
    }

    public String getEmail() {
        return email;
    }

    public String getSenha() {
        return senha;
    }

    public Endereco getEndereco() {
        return endereco;
    }

    public String getImagemPerfilBase64() {
        return imagemPerfilBase64;
    }

    public String getImagemBackgroundBase64() {
        return imagemBackgroundBase64;
    }

    // Setters
    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public void setEndereco(Endereco endereco) {
        this.endereco = endereco;
    }

    public void setImagemPerfilBase64(String imagemPerfilBase64) {
        this.imagemPerfilBase64 = imagemPerfilBase64;
    }

    public void setImagemBackgroundBase64(String imagemBackgroundBase64) {
        this.imagemBackgroundBase64 = imagemBackgroundBase64;
    }
}