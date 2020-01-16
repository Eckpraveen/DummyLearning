package Launch;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Initialisation {
	
	static WebDriver driver;

	public static void main(String[] args) {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\praveen.das\\Documents\\JAVA_JAR\\Selenium\\Drivers\\Chrome79.0.3945.117\\chromedriver.exe");
		driver= new ChromeDriver();

		driver.get("https://ui.freecrm.com/"); 

	}

}
