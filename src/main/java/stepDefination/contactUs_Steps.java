package stepDefination;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import pageObjectModel.contacUsPage;
import utilities.Driver;

import java.util.concurrent.TimeUnit;

public class contactUs_Steps {

    private WebDriver driver;
    pageObjectModel.contacUsPage contacUsPage = new contacUsPage();

    @Given("^navigate to website$")
    public void navigate_to_website() throws Throwable {

        driver= Driver.getDriver();
        driver.manage().window().maximize();
        driver.get("http://automationpractice.com/index.php");
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);

    }

    @Given("^click on contact us button$")
    public void click_on_contact_us_button() throws Throwable {

        contacUsPage.clickContactUsButton();

    }

    @Given("^select Subject Heading$")
    public void select_Subject_Heading() throws Throwable {

        contacUsPage.selectFromDropdown();

    }

    @Given("^type Email$")
    public void type_Email() throws Throwable {

        contacUsPage.fillToEmailTextbox();

    }

    @Given("^type Order reference$")
    public void type_Order_reference() throws Throwable {

        contacUsPage.fillToOrderTextbox();

    }

    @Given("^type a message$")
    public void type_a_message() throws Throwable {

        contacUsPage.fillToMessageTextbox();

    }

    @When("^click on send button$")
    public void click_on_send_button() throws Throwable {

        contacUsPage.clickButtonSend();

    }

    @Then("^verify success message$")
    public void verify_success_message() throws Throwable {

        contacUsPage.assertMyMessage();
        Driver.closeDriver();

    }

}
