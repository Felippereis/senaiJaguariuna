package vo;

import java.util.Objects;

public class Aluno {
	private String ra;
	private String nome;
	private String telefone;
	private String turma;
	
	
	public Aluno() {
		
	}
	public Aluno(String ra, String nome, String telefone, String turma) {
		super();
		this.ra = ra;
		this.nome = nome;
		this.telefone = telefone;
		this.turma = turma;
	}
	public Aluno(String[] csv) {
		this.ra = csv[0];
		this.nome = csv[1];
		this.telefone = csv[2];
		this.turma = csv[3];
	}
	// gerado Getters && Setters
	public String getRa() {
		return ra;
	}
	public void setRa(String ra) {
		this.ra = ra;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getTelefone() {
		return telefone;
	}
	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}
	public String getTurma() {
		return turma;
	}
	public void setTurma(String turma) {
		this.turma = turma;
	}
	@Override
	public int hashCode() {
		return Objects.hash(ra);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Aluno other = (Aluno) obj;
		return Objects.equals(ra, other.ra);
	}
	@Override
	public String toString() {
		return ra + "\t"  + nome + "\t" + telefone + "\t" +  turma + "\n";
	}
	public String toCSV() {
		return ra + ";"  + nome + ";" + telefone + ";" +  turma + "\n";
	}
	public String toHTML() {
		return "<tr><td>" + ra + "</td><td>"  + nome + "</td><td>" + telefone + "</td><td>" +  turma + "</td></tr>";
	}
}
