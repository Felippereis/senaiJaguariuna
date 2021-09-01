package control;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.util.ArrayList;

import model.Funcionario;

public class FuncionarioControl {
	public boolean cadastrar(Funcionario func) {
		try {
			FileWriter cad = new FileWriter("d://felipe reis/dbs/cad.txt",true);
			BufferedWriter bw = new BufferedWriter(cad);
			
			String linha =  func.getNome() + ";" +
							func.getNascimento() + ";" +
							func.getDoc() + ";" +
							func.getReg() + "\r\n";
			
			bw.write(linha);
			// fecha o bw e o cad que e o arquivo
			bw.close();
			cad.close();
			return true;
		}catch(Exception e){		
		System.out.println(e);
		}
	return  false;
	}
	public ArrayList<String> Lista(){
		ArrayList<String> data = new ArrayList<String>();
		
		try {
			FileReader fr = new FileReader("d://felipe reis/dbs/cad.txt");
			BufferedReader br = new BufferedReader(fr);
			
			String Linha = "";
			while((Linha = br.readLine()) != null);{
				data.add(Linha);
			}
			
			br.close();
			fr.close();
		}catch (Exception e){
			System.out.println (e);
		}
		return data;
	}
}
	
