<!-- >IMPORTAÇÕEES DO JSP-->
<%@page import="ctr.AlunoProcess"%>
<%@page import="vo.Aluno"%>

<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>lista de Alunos Turma</title>
</head>
<body>
<div>
		<a href="cadastro.jsp">Cadastrar Novo</a> <a href="editar.jsp">Alterar
			ou Remover</a>
	</div>
	<table>
		<tr>
			<th>RA</th>
			<th>Nome</th>
			<th>Telefone</th>
			<th>Turma</th>
		</tr>

 <!--CODIGO JSP*-->
<%
AlunoProcess.testes();
out.print("<table style='border:solid 1px'>");
for (Aluno c : AlunoProcess.alunos) {
out.print(c.toHTML());
}
out.print("</table>");

%>
</table>
</body>
</html>