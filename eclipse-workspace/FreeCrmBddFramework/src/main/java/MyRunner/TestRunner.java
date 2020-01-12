package MyRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
     features = "C:\\Users\\praveen.das\\eclipse-workspace\\FreeCrmBddFramework\\src\\main\\java\\Features\\Login.feature",
     glue={"stepDefinitions"},
     format={"pretty","html:test-output"}
   )


public class TestRunner {  }
