package vo.dao;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

import vo.Aluno;

public class AlunoDAO {
	
	private BufferedReader br;
	private BufferedWriter bw;
	private String arquivo = "d:\\dbs\\alunos.csv";
	private ArrayList<Aluno> alunos;
	private Aluno aluno;

	public boolean salvar(ArrayList<Aluno> alunos) {
		try {
			bw = new BufferedWriter(new FileWriter(arquivo, false));
			for (Aluno c : alunos) {
				bw.write(c.toCSV());
			}
			bw.close();
			return true;
		} catch (IOException e) {
			System.out.println("Erro ao gravar arquivo " + e);
			return false;
		}
	}
	public ArrayList<Aluno> abrir() {
		alunos = new ArrayList<>();
		try {
			br = new BufferedReader(new FileReader(arquivo));
			String linha = null;
			while ((linha = br.readLine()) != null) {
				aluno = new Aluno(linha.split(";"));
				alunos.add(aluno);
			}
			br.close();
		} catch (FileNotFoundException e) {
			System.out.println("Arquivo n�o encontrado " + e);
		} catch (IOException e) {
			System.out.println("Erro ao ler arquivo " + e);
		}
		return alunos;
	}

}
