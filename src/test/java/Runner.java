import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(format = {"pretty","html:target/cucumber-html-reports",
        "json:target/cucumber-html-reports/Hotel.json"}
)
public class Runner {
}
