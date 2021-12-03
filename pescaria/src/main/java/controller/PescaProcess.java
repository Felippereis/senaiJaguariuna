package controller;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.sql.ResultSet;

import model.Pescamodelo;

public class PescaProcess {
	
	PreparedStatement ps;
	Connection con;
	ResultSet rs;
	
	public PescaProcess() {
		this.con = ConnectionDB.getConnection();
		
	}
public boolean create (Pescamodelo pesca) {
		
		String query = "INSERT INTO pescadores VALUES(DEFAULT, ?, ?)";
		
		try {
			ps = con.prepareStatement(query);
		
			ps.setString(1, pesca.getCidade());			
			ps.setString(2, pesca.getQuantidade());
		
			if(ps.executeUpdate() > 0) {
				rs = ps.getGeneratedKeys();
				rs.next();
				int id = rs.getInt(1);
				pesca.setId(id);
				ps.close();
				return true;
				}
			} catch (SQLException e) {
			e.printStackTrace();		
		}
		return false;
	}
public JSONArray read(String cidade,String quantidade) {
	JSONArray arr = new JSONArray();
	
	String query = "SELECT * FROM pescadores ";
	
	// compara��o se tiver campos nao nulos
	
	if(cidade != null && quantidade != null){
			query += "WHERE cidade = ? AND quantidade = ?";
	}else if(cidade != null || quantidade != null) {
		String part = (cidade != null) ? "cidade" : "quantidade";
		query += "WHERE" + part + " = ?";
	}
	 System.out.println(query);  // teste para verificar o que esta mandando
	
	//if(cidade == pedreira && quantidade => 10){
	// query += "WHERE 
// }
	
	try {
		ps = con.prepareStatement(query);
		
		// compara�ao se tiver campos nao nulos
		if(cidade != null && quantidade != null) {
			ps.setString(1, cidade);
			ps.setString(2, quantidade);
		}else if(cidade != null || quantidade != null) {
			String busca = (cidade != null) ? cidade : quantidade;
			ps.setString(1, busca);
		}
		
		rs = ps.executeQuery();
		
		while(rs.next()) {
			JSONObject obj = new JSONObject();
			obj.put("cidade", rs.getString("cidade"));
			
			obj.put("quantidade", rs.getString("quantidade"));
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
public boolean update(Pescamodelo pesca) {
	
	String query = "UPDATE pescadores SET cidade = ?, quantidade = ?, WHERE id = ?";
	try {
		ps = con.prepareStatement(query);
		
		ps.setString(1, pesca.getCidade());
		
		ps.setString(2, pesca.getQuantidade());
		ps.setInt(3, pesca.getId());
	
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
	
	String query = "DELETE FROM pescadores WHERE id = ?";
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
