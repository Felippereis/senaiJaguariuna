package ctr;

import java.util.ArrayList;

import vo.Aluno;
import vo.dao.AlunoDAO;

public class AlunoProcess {
	// atributos
	 public static ArrayList<Aluno> alunos;
	 public static AlunoDAO cd = new AlunoDAO();
	// metodo para gerar dados de testes
	 public static void testes() {
		 
		 alunos = new ArrayList<>();
		 
		 alunos.add(new Aluno("111111","Joao Carlos","19.5656-5656","turma A"));
		 alunos.add(new Aluno("111111","Joao Carlos","19.5656-5656","turma b"));
		 alunos.add(new Aluno("111111","Joao Carlos","19.5656-5656","turma c"));
		 alunos.add(new Aluno("111111","Joao Carlos","19.5656-5656","turma d"));
		 
	}
	// metodo que abre o arquivo de texto padrao csv
	
	 public static void abrir() {
		 alunos = cd.abrir();
	 }
	 public static String salvar() {
		 if(cd.salvar(alunos)) {
			 return "<p>Salvo com Sucesso</p>";
		 }else {
			 return "<p	>Erro ao Salvar Arquivo</p>";
		 }
	 }
	
}
