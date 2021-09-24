package servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.stream.Collectors;

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
		// Configurações
		PrintWriter out = resp.getWriter();// Configurar a saida de resto resp
		resp.setContentType("application/json"); // Configura a resposta no formato JSON
		resp.setCharacterEncoding("utf8");// Configura o charset

		// Lendo os dados do BD "CSV"
		PedidoProcess.abrir();

		// Recebendo dados por Parâmetros
		String id = req.getParameter("id"); // Recebe um "parâmetro" via URI "?id=2"
		String cliente = req.getParameter("cliente");

		if (id != null) { // Verifica se chegou o parâmetro "id"
			if (PedidoProcess.pedidos.contains(new Pedido(id))) {
				int indice = PedidoProcess.pedidos.indexOf(new Pedido(id));// Obtem o indice
				out.print(PedidoProcess.pedidos.get(indice).toJSON());
			} else {
				resp.setStatus(HttpServletResponse.SC_NOT_FOUND);
				// out.print("{ \"erro\": \"Id não encontrado\" }");
			}
		} else if (cliente != null) {
			for (Pedido p : PedidoProcess.pedidos) { // percorre a lista
				if (p.getCliente().contains(cliente)) {
					out.print(p.toJSON());
				}
			}
		}

		else {
			JSONArray vetor = new JSONArray(); // Cria um vetor para armazenar cada obj json
			for (Pedido p : PedidoProcess.pedidos) {
				vetor.put(p.toJSON());// Preenche o vetor
			}
			out.print(vetor);// Mostra o vetor
		}
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// Configurações
		PrintWriter out = resp.getWriter();// Configurar a saida de resto resp
		resp.setContentType("application/json"); // Configura a resposta no formato JSON
		resp.setCharacterEncoding("utf8");// Configura o charset

		// Lendo os dados do BD "CSV"
		PedidoProcess.abrir();

		String body = req.getReader().lines().collect(Collectors.joining(System.lineSeparator()));

		try {
			// Decodigica o corpo em JSON
			JSONObject json = new JSONObject(body);

			String cliente = json.getString("cliente"); // Pega o par�metro JSON
			String endereco = json.getString("endereco"); // Pega o par�metro JSON
			String produto = json.getString("produto"); // Pega o par�metro JSON

			// Adiciona a lista
			PedidoProcess.pedidos.add(new Pedido(cliente, endereco, produto));
			PedidoProcess.salvar();// Salva a lista
			resp.setStatus(HttpServletResponse.SC_CREATED);
		} catch (JSONException e) {
			System.out.println("Erro na convers�o para JSON: " + e);
			resp.setStatus(HttpServletResponse.SC_NOT_ACCEPTABLE);
		}

	}

	@Override
	protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// Lendo os dados do BD "CSV"
		PedidoProcess.abrir();
		String id = req.getParameter("id");
		
		if(id != null) {	
			if (PedidoProcess.pedidos.contains(new Pedido(id))) {
				int indice = PedidoProcess.pedidos.indexOf(new Pedido(id));
					PedidoProcess.pedidos.remove(indice);
					PedidoProcess.salvar();  // precisa salvar
			}else {
				resp.setStatus(HttpServletResponse.SC_NOT_FOUND);
				// out.print("{ \"erro\": \"Id não encontrado\" }");
			}
		}
	}
}
