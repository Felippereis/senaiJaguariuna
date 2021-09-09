package ctr;

import java.util.ArrayList;

import vo.Produto;
import vo.DAO.ProdutoDAO;


public class ProdutoProcess {
	
	public static ArrayList<Produto> produtos;
	public static ProdutoDAO ld = new ProdutoDAO();
	
	public static void testes() {
		produtos = new ArrayList<>();
		produtos.add(new Produto("1","Mouse","Sem fio","28.99","10"));
		produtos.add(new Produto("2","Teclado","Com fio","39.99","15"));
		produtos.add(new Produto("3","Gabinete Multilaser","Escritorio","100.00","5"));
	}
	
	public static void abrir() {
		produtos = ld.ler();
	}
	
	public static void salvar() {
		ld.escrever(produtos);
	}

}
