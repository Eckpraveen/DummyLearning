//package stepDefinitions;
//
//import java.util.List;
//import java.util.concurrent.TimeUnit;
//
//import org.openqa.selenium.By;
//import org.openqa.selenium.JavascriptExecutor;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.WebElement;
//import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.support.ui.ExpectedConditions;
//import org.openqa.selenium.support.ui.WebDriverWait;
//
//import cucumber.api.DataTable;
//import cucumber.api.java.en.And;
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;
//import junit.framework.Assert;
//
//public class Deal_StepDefinition {
//	WebDriver driver;
//	JavascriptExecutor js;
//
//	
//	
//	@Given("^User is already present on login page$")
//	public void User_alread_on_Login_page() {		
//		System.setProperty("webdriver.chrome.driver","C:\\Users\\praveen.das\\eclipse-workspace\\FreeCrmBddFramework\\src\\chromedriver.exe");
//		driver= new ChromeDriver();
//		driver.get("https://ui.freecrm.com/");
//		driver.manage().window().maximize();
//	}
//	
//	@SuppressWarnings("deprecation")
//	@When("^title of login page is Free CRM$")
//	public void Title_check_on_LoginPage() { 
//		String title= driver.getTitle();
//		System.out.println(title);
//		Assert.assertEquals("Cogmento CRM", title);
//	}
//
//	
//	@Then("^user enters username and password$")
//	public void Enter_UN_and_PWD(DataTable credentials) {
//		List<List<String>> data = credentials.raw(); //from java.util
//		driver.findElement(By.xpath("//input[@name=\"email\"]")).sendKeys(data.get(0).get(0));
//		driver.findElement(By.xpath("//input[@name=\"password\"]")).sendKeys(data.get(0).get(1));	
//	}
//	
//	@Then("^user clicks on Login button$")
//	public void Click_on_Login() throws InterruptedException {
//		Thread.sleep(5000);
//		WebElement loginButton= driver.findElement(By.xpath("//div[@class=\"ui fluid large blue submit button\"]"));	
//		//loginButton.click();
//	    JavascriptExecutor js=(JavascriptExecutor) driver;
//		js.executeScript("arguments[0].click();", loginButton);		
//	}
//
//	@And("^user is on Homepage$")
//	public void User_is_on_homePage() {
//		String title=driver.getTitle();
//		Assert.assertEquals("Cogmento CRM", title);
//	}
//	
//	@SuppressWarnings("deprecation")
//	@Then("^user moves to new deal page$")
//	public void Move_on_New_DealPage() throws InterruptedException {
//		driver.manage().timeouts().implicitlyWait(10000, TimeUnit.SECONDS);				
//		driver.findElement(By.xpath("//*[@class='ui fluid container']/div/a[5]")).click();
//		Thread.sleep(10000);
//		driver.findElement(By.xpath("//*[text()='New']")).click();
//		//Thread.sleep(5000);
//		String CreateNewDealText= driver.findElement(By.xpath("//*[text()='Create new Deal']")).getText();
//		Assert.assertEquals("Create new Deal", CreateNewDealText);
//		//Thread.sleep(7000);
//	}
//	
//	@Then("^user enters deal details- Title and Company and Probability and Amount and Commission and Stage$")
//	public void User_enters_deal_deatils(DataTable dealData) throws InterruptedException {
//		List<List<String>> dealValues = dealData.raw();
//		
//		driver.manage().timeouts().implicitlyWait(10000, TimeUnit.SECONDS);				
//		WebDriverWait wait = new WebDriverWait(driver, 15000);
//
//		driver.findElement(By.name("title")).sendKeys(dealValues.get(0).get(0));
//		
//		//wait.until(ExpectedConditions.elementToBeClickable(By.name("company")));
//		//driver.findElement(By.name("company")).sendKeys(dealValues.get(0).get(1));
//		//*[@name='company']/div[2] probability amount commission 
//		driver.findElement(By.xpath("//div[@name='company']//input[@class='search']")).sendKeys(dealValues.get(0).get(1));
//		driver.findElement(By.name("probability")).sendKeys(dealValues.get(0).get(2));
//		driver.findElement(By.name("amount")).sendKeys(dealValues.get(0).get(3));
//		driver.findElement(By.name("commission")).sendKeys(dealValues.get(0).get(4));
//		driver.findElement(By.name("stage")).sendKeys(dealValues.get(0).get(5));
//		driver.findElement(By.xpath("//button[text()='Save']")).click();
//		Thread.sleep(5000);		
//	}
//	
//	@Then("^user close the browser$")
//	public void TearDown() {
//		driver.close();
//	}
//}
