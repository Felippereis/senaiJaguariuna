package view;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.stream.Collectors;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import controller.ApostaProcess;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import model.Apostas;

@WebServlet("/jogos")
public class ApostaHttp extends HttpServlet {
	
	private PrintWriter pw;
	// responsavel postar
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
	
		pw = resp.getWriter();
		
		String body = req.getReader().lines().collect(Collectors.joining(System.lineSeparator()));
		
		try {
		JSONObject obj = new JSONObject(body);
		
		String nome_bicho = obj.getString("nome_bicho");
		
		String data = obj.getString("data_sorteio");
		
		Apostas aposta =  new Apostas();
		
		//parei aqui
		aposta.setnomeBicho(nome_bicho);
		
		aposta.setDataSorteio(data);
		
		ApostaProcess rp = new ApostaProcess();
		
		if(rp.create(reserva)) {
			obj.put("id", reserva.getId());
			pw.write(obj.toString());
						
		} else {
			resp.setStatus(402);
		}
		
		} catch (JSONException e) {
			e.printStackTrace();
		}
	}
	 //responsavel listar 
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		ApostaProcess rp = new ApostaProcess();
		pw = resp.getWriter();
		
		String nomePessoa = req.getParameter("nome_pessoa");
		String nomeLivro = req.getParameter("nome_livro");
		
		JSONArray arr = rp.read(nomePessoa, nomeLivro);
		
		pw.write(arr.toString());
	}
	 
	// responsavel por alterar
	protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		pw = resp.getWriter();
		ApostaProcess rp = new ApostaProcess();
		
		String body = req.getReader().lines().collect(Collectors.joining(System.lineSeparator()));
		try {
			JSONObject obj = new JSONObject(body);
			
			String nomePessoa = obj.getString("nome_pessoa");
			String nomeLivro = obj.getString("nome_livro");	
			String data = obj.getString("data_devolucao");
			int id = obj.getInt("id");
			
			Apostas reserva = new Apostas();
			reserva.setId(id);
			reserva.setNome_pessoa(nomePessoa);
			reserva.setNome_livro(nomeLivro);
			reserva.setDatadevolucao(data);
			
			if(rp.update(reserva) == true) {
				pw.write(obj.toString());
			}else {
				resp.setStatus(401);
			}
		} catch(JSONException e) {
			e.printStackTrace();
		}			
	}
	//responsavel por alterar 
	protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		pw = resp.getWriter();
		ApostaProcess rp = new ApostaProcess();
		
		String tempId = req.getParameter("id");
		int id = Integer.parseInt(tempId);
		
		if(rp.delete(id) == false) {
			resp.setStatus(401);
		}
	}
}