<%@page import="control.FuncionarioControl"%>
<%@page import="model.Funcionario"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Aula01</title>
</head>
<body>
<%
		String nome = request.getParameter("nome");
		String doc = request.getParameter("documento");
		String nasc = request.getParameter("nascimento");
		String reg = request.getParameter("registro");
		
		System.out.println(nome);
		System.out.println(doc);
		System.out.println(nasc);
		System.out.println(reg);

			if(nome != null && 
				doc != null && 
				nasc != null &&
				reg != null){
				Funcionario f = new Funcionario();
				f.setNome(nome);
				f.setNascimento(Integer.parseInt (nasc));
				f.setDoc(doc);
				f.setReg(Integer.parseInt (reg));
				
				
				FuncionarioControl fc = new FuncionarioControl();
				fc.cadastrar(f);
				
			}
%>
	<form action="index.jsp" method="POST">
	
	<label>Digite seu nome:</label><br>
	<input type="text" name="nome" placeholder="Digite seu nome..."><br><br>
	<label>Digite seu documento:</label><br>
	<input type="text" name="documento" placeholder="Digite seu documento..."><br><br>
	<label>Digite seu nascimento:</label><br>
	<input type="text" name="nascimento" placeholder="Digite ano nascimento..."><br><br>
	<label>Digite seu registro:</label><br>
	<input type="text" name="registro" placeholder="Digite seu registro..."><br><br>
	<input type="submit" value="Cadastrar">
	
	</form>
	
	
</body>
</html>