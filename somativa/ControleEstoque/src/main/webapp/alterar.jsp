<%@page import="java.util.Date"%>
<%@page import="vo.Produto"%>
<%@page import="ctr.ProdutoProcess"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">

<title>Alterar ou Excluir </title>
</head>
<body>
	<%
		Produto produto;
		int indice = 0;
		String id = request.getParameter("id");
		String nome = request.getParameter("nome");
		String descricao = request.getParameter("descricao");
		String valor = request.getParameter("valor");
		String quantidade = request.getParameter("quantidade");
		String opcao = request.getParameter("opcao");
		if(id != null && nome != null && descricao != null && valor != null && quantidade != null){
			if(opcao != null){
				switch(opcao){
					case "excluir":
						produto = new Produto(id);
						indice = ProdutoProcess.produtos.indexOf(produto);
						ProdutoProcess.produtos.remove(indice);
						break;
					case "alterar":
						produto = new Produto(id,nome,descricao,valor,quantidade);
						indice = ProdutoProcess.produtos.indexOf(produto);
						ProdutoProcess.produtos.set(indice,produto);
						break;
				}
				out.print(ProdutoProcess.salvar());
				response.sendRedirect("produtos.jsp");
			} else {
				String formulario = "";
				formulario += "<form method='get'>";
				formulario += "<label>ID</label><input type='number' value='"+id+"' name='id' required>";
				formulario += "<label>Nome</label><input type='text' value='"+nome+"' name='nome' required>";
				formulario += "<label>Descrição</label><input type='text' value='"+descricao+"' name='descricao' required>";
				formulario += "<label>Valor</label><input type='text' value='"+valor+"' name='valor' required>";
				formulario += "<label>Quantidade</label><input type='number' value='"+quantidade+"' name='quantidade' required>";
				formulario += "<div><label>Excluir</label><input type='radio' name='opcao' value='excluir'>";
				formulario += "<label>Alterar</label><input type='radio' name='opcao' value='alterar'></div>";
				formulario += "<input type='submit' value='Enviar'>";
				formulario += "</form>";
				out.print(formulario);
			}	
		}else{
			out.print("<p>não chegaram dados para serem alterados ou excluidos</p>");
		}
	%>
</body>
</html>