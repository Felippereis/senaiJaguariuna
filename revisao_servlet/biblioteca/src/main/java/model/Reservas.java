package model;

public class Reservas {
	
	//Atributos
	private int id;
	private String nome_livro;
	private String nome_pessoa;
	private String datadevolucao;
	
	//Metodos Acessores
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNome_livro() {
		return nome_livro;
	}
	public void setNome_livro(String nome_livro) {
		this.nome_livro = nome_livro;
	}
	public String getNome_pessoa() {
		return nome_pessoa;
	}
	public void setNome_pessoa(String nome_pessoa) {
		this.nome_pessoa = nome_pessoa;
	}
	public String getDatadevolucao() {
		return datadevolucao;
	}
	public void setDatadevolucao(String datadevolucao) {
		this.datadevolucao = datadevolucao;
	}

}
