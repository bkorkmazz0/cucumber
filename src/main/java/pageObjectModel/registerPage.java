package pageObjectModel;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class registerPage extends abstractClass {

    private WebDriver driver;

    public registerPage() {

        driver = Driver.getDriver();
        PageFactory.initElements(driver,this);

    }

    @FindBy(xpath = "//a[contains(text(),'Sign in')]")
    private WebElement singInButton;

    public void clickSignInButton(){

        clickFunction(singInButton);

    }

    @FindBy(id="email_create")
    private WebElement emailTextbox;

    public void typeEmailTextbox(String email){

        sendKeysFunction(emailTextbox,email);

    }

    @FindBy(xpath = "//i[@class=\"icon-user left\"]")
    private WebElement createAnAccountButton;

    public void clickCreateAnAccountButton(){

        clickFunction(createAnAccountButton);

    }

    @FindBy(id="id_gender1")
    private WebElement titleRadioButton;

    public void clickTitleButton(){

        clickFunction(titleRadioButton);

    }

    @FindBy(name="customer_firstname")
    private WebElement firstNameTextbox;

    @FindBy(name="customer_lastname")
    private WebElement lastNameTextbox;

    public void typeFirstNameAndLastName(String firstname, String lastname){

        sendKeysFunction(firstNameTextbox,firstname);
        sendKeysFunction(lastNameTextbox,lastname);

    }

    @FindBy(xpath = "//input[@id='passwd']")
    private WebElement passwordTextbox;

    public void typePasswordTextbox(String password){

        sendKeysFunction(passwordTextbox,password);

    }

    @FindBy(xpath = "//input[@id='company']")
    private WebElement companyTextbox;

    public void typeCompanyTextbox(String company){

        sendKeysFunction(companyTextbox,company);

    }

    @FindBy(css = "#address1")
    private WebElement addressTextbox;

    public void typeAddressTextbox(String address){

        sendKeysFunction(addressTextbox,address);

    }

}
