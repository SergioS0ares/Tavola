package TavolaSoftware.TavolaApp.tools;

public class Mesas {

	private String image;
	
	private String description;
	
	private String name;
	
	private boolean avaible;
	
	// Gets e Sets
	
	public boolean getViability() {
		return avaible;
	}
	
	public void setViability(boolean bool) {
		this.avaible = bool;
	}
	
	public String getDescription() {
		return description;
	}
	
	public void setDescription(String text) {
		this.description = text;
	}
	
	public String getImage() {
		return image;
	}
	
	public void setImage(String image) {
		this.image = image;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
}
