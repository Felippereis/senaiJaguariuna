package controller;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.sql.ResultSet;

import model.Apostas;

public class ApostaProcess {
	
	PreparedStatement ps;
	Connection con;
	ResultSet rs;
	
	public ApostaProcess() {
		this.con = ConnectionDB.getConnection();
		
	}
	
	public boolean create (Apostas aposta) {
		
		String query = "INSERT INTO jogos VALUES(DEFAULT, ?, ?)";
		
		try {
			ps = con.prepareStatement(query);
		
			ps.setString(1, aposta.getNomeBicho());			
			ps.setString(2, aposta.getDataSorteio());
		
			if(ps.executeUpdate() > 0) {
				rs = ps.getGeneratedKeys();
				rs.next();
				int id = rs.getInt(1);
				aposta.setId(id);
				ps.close();
				return true;
				}
			} catch (SQLException e) {
			e.printStackTrace();
		
		}
		return false;
	}
	public JSONArray read(String nomeBicho, String DataSorteio) {
		JSONArray arr = new JSONArray();
		
		String query = "SELECT * FROM jogos ";
		
		// comparação se tiver campos nao nulos
		if(nomeBicho != null && DataSorteio != null) {
			query += "WHERE nome_bicho = ? AND data_sorteio = ?";
		}else if(nomeBicho != null || DataSorteio != null) {
			String part = (nomeBicho != null) ? "nome_bicho" : "data_sorteio";
			query += "WHERE " + part + " = ?";
		}
				
	//	 System.out.println(query);  // teste para verificar o que esta mandando
		
		try {
			ps = con.prepareStatement(query);
			
			// comparaçao se tiver campos nao nulos
			if(nomeBicho != null && DataSorteio != null) {
				ps.setString(1, nomeBicho);
				ps.setString(2, DataSorteio);
			}else if(nomeBicho != null || DataSorteio != null) {
				String busca = (nomeBicho != null) ? nomeBicho : DataSorteio;
				ps.setString(1, busca);
			}
			
			rs = ps.executeQuery();
			
			while(rs.next()) {
				JSONObject obj = new JSONObject();
				obj.put("nome_bicho", rs.getString("nome_bicho"));
				
				obj.put("data_sorteio", rs.getString("data_sorteio"));
				obj.put("id", rs.getInt("id"));
				
				arr.put(obj);
			}
			
				ps.close();
		} catch (SQLException e){
			e.printStackTrace();
		} catch (JSONException e) {
			
			e.printStackTrace();
		}
		
		return arr;
		
	}
	
	public boolean update(Apostas aposta) {
		
		String query = "UPDATE jogos SET nome_bicho = ?, data_sorteio = ?, WHERE id = ?";
		try {
			ps = con.prepareStatement(query);
			
			ps.setString(1, aposta.getNomeBicho());
			
			ps.setString(2, aposta.getDataSorteio());
			ps.setInt(3, aposta.getId());
		
			if(ps.executeUpdate() > 0) {
				ps.close();
				return true;
			}
			ps.close();	
		} catch (SQLException e) {
			e.printStackTrace();
		}
				
		return false;
	}
	
	public boolean delete(int id) {
		
		String query = "DELETE FROM jogos WHERE id = ?";
		try {
			
			ps = con.prepareStatement(query);
			
			ps.setInt(1, id);
			
			if(ps.executeUpdate() > 0) {
				ps.close();
				return true;
			}
			ps.close();
		}catch (SQLException e) {
			e.printStackTrace();
		}
		return false;
		
	}
}