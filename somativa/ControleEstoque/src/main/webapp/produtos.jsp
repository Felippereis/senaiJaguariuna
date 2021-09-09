<!--  importacoes --> 
<%@page import="vo.Produto"%>
<%@page import="ctr.ProdutoProcess"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Cadastro de Produtos</title>

</head>
<body>
	<%
	//Recebendo os dados (request)
	String id = request.getParameter("id");
	String nome = request.getParameter("nome");
	String descricao = request.getParameter("descricao");
	String valor = request.getParameter("valor");
	String quantidade = request.getParameter("quantidade");
	
	
	ProdutoProcess.abrir();
	%>
	<!-- formulario cadastro produtos -->
	<form>
		<label>Id</label><input type="number" name="id" required/>
		<label>Produto</label><input type="text" name="nome" required/>
		<label>Descrição</label><input type="text"	name="descricao" required/>
		<label>Valor</label><input type="number" step="any" name="valor" required/>
		<label>Quantidade</label><input type="number" step="any" name="quantidade" required/>
		<button type="submit">Enviar</button>
	</form>
	
		<%
		//Validando se chagaram todos os dados nos campos
		if (id != null && nome != null && descricao != null && valor != null && quantidade != null) {
			Produto produto = new Produto(id,nome,descricao,valor,quantidade);			//Preenche um novo modelo
			if(ProdutoProcess.produtos.contains(produto)){			//Verifica se não é duplicado
				out.print("Id duplicado"); 					
			}else{											//Se não for duplicado
				ProdutoProcess.produtos.add(produto); 				//Adicona o ptoduto na lista
				ProdutoProcess.salvar();						//Salva a lista no arquivo
				response.sendRedirect("produtos.jsp");				//Redireciona limpando o verbo GET
			}
		} else {
			if(id != null){
				ProdutoProcess.produtos.remove(new Produto(id)); //Remove da lista
				ProdutoProcess.salvar();						 //Salva a lista 
				response.sendRedirect("produtos.jsp");
			}else{
				out.print("Aguardando requisições");
			}
		}
		%>
	
	<table>
		<tr>
			<th>Id</th>
			<th>Nome</th>
			<th>Descrição</th>
			<th>Valor</th>
			<th>Quantidade</th>
		</tr>
		<%
		//Listar todos
		for (Produto l : ProdutoProcess.produtos) {
			out.print("<tr>");
			out.print("<form>");
			out.print(l.toHTML());
			out.print("<td>");
			out.print("<input type='hidden' name='id' value='"+l.getId()+"'/>");
			out.print("<button type='submit'>Excluir</button>");
			out.print("<button type='submit'>Alterar</button>");
	//	<a href="alterar.jsp">Alterar ou Excluir</a>
			out.print("</td>");
			out.print("</form>");
			out.print("</tr>");
		}
		%>
	</table>
</body>
</html>