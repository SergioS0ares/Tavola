package TavolaSoftware.TavolaApp.tools;

import jakarta.persistence.Embeddable;

@Embeddable
public class Endereco {

	private String country;
	private String state;
	private String city;
	private String district;
	private String street;
	private String number;
	private String misc;

	
	public String getCountry() { return country; }
	public void setCountry(String country) { this.country = country; }

	public String getState() { return state; }
	public void setState(String state) { this.state = state; }

	public String getCity() { return city; }
	public void setCity(String city) { this.city = city; }

	public String getDistrict() { return district; }
	public void setDistrict(String district) { this.district = district; }

	public String getStreet() { return street; }
	public void setStreet(String street) { this.street = street; }

	public String getNumber() { return number; }
	public void setNumber(String number) { this.number = number; }

	public String getMisc() { return misc; }
	public void setMisc(String misc) { this.misc = misc; }
}
