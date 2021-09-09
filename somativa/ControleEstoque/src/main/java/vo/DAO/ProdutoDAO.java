package vo.DAO;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

import vo.Produto;

public class ProdutoDAO {

	private BufferedReader br;
	private BufferedWriter bw;
	private String arquivo = "d://felipe reis/somativa/dbs/produtos.csv";
	private ArrayList<Produto> produtos; // lista de modelos
	private Produto produto; // modelo

	public void escrever(ArrayList<Produto> produtos) {
		try {
			bw = new BufferedWriter(new FileWriter(arquivo, false));
			for (Produto l : produtos) {
				bw.write(l.toCSV());
			}
			bw.close();
		} catch (IOException e) {
			System.out.println("Erro ao salvar: " + e);
		}
	}

	public ArrayList<Produto> ler() {
		produtos = new ArrayList<>();
		try {
			br = new BufferedReader(new FileReader(arquivo));
			String linha = "";
			while ((linha = br.readLine()) != null) {
				produto = new Produto(linha.split(";"));
				produtos.add(produto);
			}
			br.close();
		} catch (FileNotFoundException e) {
			System.out.println("Arquivo não encontrado: " + e);
		} catch (IOException e) {
			System.out.println("Erro ao abrir: " + e);
		}
		return produtos;
	}

}