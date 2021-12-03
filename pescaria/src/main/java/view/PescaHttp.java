package view;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.stream.Collectors;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import controller.PescaProcess;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import model.Pescamodelo;

@WebServlet("/pescadores")
public class PescaHttp extends HttpServlet {

	private PrintWriter pw;
	
	// responsavel postar
		protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
			pw = resp.getWriter();
			String body = req.getReader().lines().collect(Collectors.joining(System.lineSeparator()));
			
			try {
			JSONObject obj = new JSONObject(body);
			
			String cidade = obj.getString("cidade");
			
			String quantidade = obj.getString("quantidade");
			
			Pescamodelo pesca =  new Pescamodelo();
			
			
			pesca.setCidade(cidade);
			
			pesca.setQuantidade(quantidade);
			
			PescaProcess rp = new PescaProcess();
			
			if (rp.create(pesca)) {
				obj.put("id", pesca.getId());
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
			PescaProcess rp = new PescaProcess();
			pw = resp.getWriter();
			
			String cidade = req.getParameter("cidade");
			
			String quantidade = req.getParameter("quantidade");
			
			JSONArray arr = rp.read(cidade, quantidade);
			
			pw.write(arr.toString());
		}
		// responsavel por alterar
		protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
			pw = resp.getWriter();
			PescaProcess rp = new PescaProcess();
			
			String body = req.getReader().lines().collect(Collectors.joining(System.lineSeparator()));
			try {
				JSONObject obj = new JSONObject(body);
				
				String cidade = obj.getString("cidade");
				
				String quantidade = obj.getString("quantidade");
				int id = obj.getInt("id");
				
				Pescamodelo pesca = new Pescamodelo();
				
				pesca.setId(id);
				
				pesca.setCidade(cidade);
				
				pesca.setQuantidade(quantidade);
				
				if(rp.update(pesca) == true) {
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
			PescaProcess rp = new PescaProcess();
			
			String tempId = req.getParameter("id");
			int id = Integer.parseInt(tempId);
			
			if(rp.delete(id) == false) {
				resp.setStatus(401);
			}
		}
	}
