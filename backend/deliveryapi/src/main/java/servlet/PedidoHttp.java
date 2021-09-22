package servlet;

import java.io.IOException;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import controllers.PedidoProcess;
import domains.Pedido;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/pedidos")
public class PedidoHttp extends HttpServlet {

	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setCharacterEncoding("utf8"); // Configuraçao de Charset
		resp.setContentType("application/json"); // Configuraçao do tipo resposta

		PedidoProcess.abrir();
		Pedido pedido;
		String id = req.getParameter("id");
		
		String corpo = "";
		String linha;
		while((linha = req.getReader().readLine())!= null) {
			corpo += linha;
		}
		try {
			JSONObject jReq = new JSONObject(corpo);	// Recebe um corpo JSON
			resp.getWriter().print(jReq.getInt("id"));	// Separa cada campo
			resp.getWriter().print(jReq.getInt("user_id"));	// Separa cada campo
			resp.getWriter().print(jReq.getString("nome"));	// Separa cada campo
		}catch (JSONException e) {
			e.printStackTrace();
		}

		
		if (id == null) { // Se não receber nenhum id coloca todos em um vetor e mostra.

			JSONArray vetor = new JSONArray();
			for (Pedido p : PedidoProcess.pedidos) {
				vetor.put(p.toJSON());
			}
			resp.getWriter().print(vetor.toString());
		} else { // Se não cria um novo MODELO pedido configurando somente o id
			pedido = new Pedido(id);
			// resp.getWriter().print(PedidoProcess.pedidos.get(Integer.parseInt(id)).toJSON().toString());
			if (PedidoProcess.pedidos.contains(pedido)) {
				int indice = PedidoProcess.pedidos.indexOf(pedido);
				resp.getWriter().print(PedidoProcess.pedidos.get(indice).toJSON().toString());
			} else {
				// resp.getWriter().print("id não encontrado");
				resp.setStatus(HttpServletResponse.SC_NOT_FOUND);
			}
		}
	}

}