package stepDefinitions;

import static org.junit.Assert.assertEquals;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDefinition {
	
	WebDriver driver;
	
	@Given("^User is already present on login page$")
	public void User_alread_on_Login_page() {		
		System.setProperty("webdriver.chrome.driver","C:\\Users\\praveen.das\\eclipse-workspace\\FreeCrmBddFramework\\src\\chromedriver.exe");
		driver= new ChromeDriver();
		driver.get("https://ui.freecrm.com/"); 
	}
	
	//@SuppressWarnings("deprecation")
	@When("^title of login page is Free CRM$")
	public void Title_check_on_LoginPage() { 
		String title= driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Cogmento CRM", title);
	}

	@Then("^user enters username and password$")
	public void Enter_UN_and_PWD() {
		driver.findElement(By.xpath("//input[@name=\"email\"]")).sendKeys("eckpraveen@gmail.com");
		driver.findElement(By.xpath("//input[@name=\"password\"]")).sendKeys("Pdv@1992");		
	}
		
	
	@Then("^user clicks on Login button$")
	public void Click_on_Login() throws InterruptedException {
		Thread.sleep(5000);
		WebElement loginButton= driver.findElement(By.xpath("//div[@class=\"ui fluid large blue submit button\"]"));	
		//loginButton.click();
	    JavascriptExecutor js=(JavascriptExecutor) driver;
		js.executeScript("arguments[0].click();", loginButton);
		
	}

	
	@And("^user is on Homepage$")
	public void User_is_on_homePage() {
		String title=driver.getTitle();
		Assert.assertEquals("Cogmento CRM", title);
	}
	
}
