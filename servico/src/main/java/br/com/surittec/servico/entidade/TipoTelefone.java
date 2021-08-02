package br.com.surittec.servico.entidade;

public enum TipoTelefone {

    RE("RE", "Residencial"), CO("CO", "Comercial"), X("CE", "Celular");

    private String valor;
    private String descricao;

    private TipoTelefone(String valor, String descricao) {
        this.valor = valor;
        this.descricao = descricao;
    }

    public String getValor() {
        return valor;
    }

    public void setValor(String valor) {
        this.valor = valor;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public static TipoTelefone getByValor(String valor) {

        if(valor == null) {
            return null;
        }
        for (TipoTelefone item : TipoTelefone.values()) {
            if(item.getValor().equals(valor)) {
                return item;
            }
        }
        throw new IllegalArgumentException("Problema ao converter valor \""+valor +"\" %s para TipoTelefone");
    }



}
