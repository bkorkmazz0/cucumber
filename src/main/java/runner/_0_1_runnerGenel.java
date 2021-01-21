package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(

        features = {"src/test/java"}, // features

        glue = {"stepDefination"}, // adımlar

        dryRun = false // Adımların var olup olmadıgını test ediyor, konsolda cevap veriyor

)

public class _0_1_runnerGenel extends AbstractTestNGCucumberTests {
}
