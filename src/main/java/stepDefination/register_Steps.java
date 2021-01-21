package stepDefination;

import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import org.openqa.selenium.WebDriver;
import pageObjectModel.registerPage;
import utilities.Driver;

import java.util.concurrent.TimeUnit;

public class register_Steps {

    private WebDriver driver;
    pageObjectModel.registerPage registerPage = new registerPage();

    @Given("^Navigate to Website$")
    public void navigateToWebsite() {

        driver = Driver.getDriver();
        driver.manage().window().maximize();
        driver.get("http://automationpractice.com/index.php");
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);

    }

    @And("^click Sign in button$")
    public void clickSignInButton() {

        registerPage.clickSignInButton();

    }

    @And("^type email \"([^\"]*)\"$")
    public void typeEmail(String email) throws Throwable {

        registerPage.typeEmailTextbox(email);

    }

    @And("^click on Create an Account button$")
    public void clickOnCreateAnAccountButton() {

        registerPage.clickCreateAnAccountButton();

    }

    @And("^choose title$")
    public void chooseTitle() {

        registerPage.clickTitleButton();

    }

    @And("^type firstname \"([^\"]*)\" and lastname \"([^\"]*)\"$")
    public void typeFirstnameAndLastname(String firstname, String lastname) throws Throwable {

        registerPage.typeFirstNameAndLastName(firstname,lastname);

    }

    @And("^type password \"([^\"]*)\"$")
    public void typePassword(String password) throws Throwable {

        registerPage.typePasswordTextbox(password);

    }

    @And("^type Company \"([^\"]*)\"$")
    public void typeCompany(String company) throws Throwable {

        registerPage.typeCompanyTextbox(company);

    }

    @And("^type address \"([^\"]*)\"$")
    public void typeAddress(String address) throws Throwable {

        registerPage.typeAddressTextbox(address);

    }

    @After
    public void quitDriver() throws InterruptedException {

        Thread.sleep(2000);
        Driver.closeDriver();

    }

}
