package MyRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
	@CucumberOptions(
	     features = "C:\\Users\\praveen.das\\eclipse-workspace\\FreeCrmBddFramework\\src\\main\\java\\Features\\Deals.feature",//path of feature file
	     glue={"stepDefinitions"}, //path of step definition file
	     format={"pretty","html:test-output","json:Json_OP/cucumber.json","junit:Junit_XML/cucumber.xml"}, // In console generate different type of reporting format
	     monochrome=true,  //display the console output in a proper format //generate o/p in very readable format
	     strict=true, //it will check if any step is not defined in step definition file
	     dryRun=false //only check the mapping is proper between feature file and stepDefinition file 
	   )

public class CreateNewDeal {}
