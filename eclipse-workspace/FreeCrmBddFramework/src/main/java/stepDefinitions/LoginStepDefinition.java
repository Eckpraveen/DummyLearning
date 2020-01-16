package stepDefinitions;

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
	JavascriptExecutor js;
	
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

	/*
	@Then("^user enters username and password$")
	public void Enter_UN_and_PWD() {
		driver.findElement(By.xpath("//input[@name=\"email\"]")).sendKeys("eckpraveen@gmail.com");
		driver.findElement(By.xpath("//input[@name=\"password\"]")).sendKeys("Pdv@1992");		
	}
	*/
    // for data driven see below
	// Regular Exp:
	// 1.  \"(.*)\"  
	// 2.  \"([^\"]*)\"
	@Then("^user enters \"(.*)\" and \"([^\"]*)\"$")
	public void Enter_UN_and_PWD(String username, String password) {
		driver.findElement(By.xpath("//input[@name=\"email\"]")).sendKeys(username);
		driver.findElement(By.xpath("//input[@name=\"password\"]")).sendKeys(password);		
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
	
	@Then("^user click on Contacts and Create new contacts$")
	public void Move_on_create_contact() throws Exception {
		Thread.sleep(4000);
		driver.findElement(By.xpath("//*[@class='ui fluid container']/div/a[3]")).click();
		driver.findElement(By.xpath("//button[text()=\"New\"]")).click();
		String newContactText= driver.findElement(By.xpath("//div[text()=\"Create New Contact\"]")).getText();
		Assert.assertEquals("Create New Contact", newContactText);
		System.out.println("Actual Result : "+newContactText);
	}
	 
	@Then("^user enter \"(.*)\" and \"(.*)\" and \"(.*)\" and \"(.*)\" and \"(.*)\"$")
	public void Enter_User_deatils(String firstname, String lastname, String company, String email, String city) throws InterruptedException {
	   js = (JavascriptExecutor) driver;
	   Thread.sleep(5000);
	   driver.findElement(By.name("first_name")).sendKeys(firstname);
	   System.out.println("**********1**********");
	   driver.findElement(By.name("last_name")).sendKeys(lastname);
	   System.out.println("**********2**********");
	   driver.findElement(By.xpath("//*[@id=\"ui\"]/div/div[2]/div[2]/div/div[2]/form/div[2]/div[2]/div/div/input")).sendKeys(company);
	   System.out.println("**********3**********");
	   driver.findElement(By.xpath("//input[@placeholder=\"Email address\"]")).sendKeys(email);
	   System.out.println("**********4**********");
	   driver.findElement(By.name("city")).sendKeys(city);
	   System.out.println("**********5**********");
	   driver.findElement(By.xpath("//button[text()=\"Save\"]")).sendKeys(city);
	   driver.findElement(By.xpath("//button[text()='Save']")).click();
	   Thread.sleep(10000);
	}
	
	@Then("^user close the browser$")
	public void TearDown() {
		driver.close();
	}
	
}
