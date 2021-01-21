package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(

        tags = {"@RegressionTest"}, // @RegressionTest tagini istedigin featuren ustune yapistir ve test yap

        features = {"src/test/java"},

        glue ={"stepDefination"},

        plugin = {"pretty",
                "html:target/site/cucumber-pretty",
                "json:target/cucumber.json",
                "html:target/cucumber-html-report",
                "usage:target/cucumber-usage.json",
                "" + "junit:target/cucumber-results.xml"},

        dryRun = false

)

public class _0_4_regressionTest extends AbstractTestNGCucumberTests {
}