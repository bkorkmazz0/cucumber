package pageObjectModel;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class contacUsPage extends abstractClass{

    WebDriver driver;

    public contacUsPage(){

        driver= Driver.getDriver();
        PageFactory.initElements(driver,this);

    }

    @FindBy(xpath = "//div[@id='contact-link']/a[@title='Contact Us']")
    private WebElement contactUsButton;

    public void clickContactUsButton(){

        clickFunction(contactUsButton);

    }

    @FindBy(xpath = "/html//select[@id='id_contact']")
    private WebElement subjectHeadingDropdown;

    public void selectFromDropdown(){

        selectElementFromDropdown(subjectHeadingDropdown,"Webmaster");

    }

    @FindBy(xpath = "/html//input[@id='email']")
    private WebElement emailTextbox;

    public void fillToEmailTextbox() {

        sendKeysFunction(emailTextbox, "abc@gmail.com");

    }

    @FindBy(xpath = "/html//input[@id='id_order']")
    private WebElement orderTextbox;

    public void fillToOrderTextbox() {

        sendKeysFunction(orderTextbox, "asd123");

    }

    @FindBy(xpath = "/html//textarea[@id='message']")
    private WebElement messageTextbox;

    public void fillToMessageTextbox() {

        sendKeysFunction(messageTextbox, "Berkan aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" +
                "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" +
                "aaaaaaaaaaaasdasdasdasd " +
                "asdasdasdsad");

    }

    @FindBy(xpath = "//button[@id='submitMessage']/span")
    private WebElement sendButton;

    public void clickButtonSend() {

        clickFunction(sendButton);

    }

    @FindBy(xpath = "//div[@id='center_column']/p[@class='alert alert-success']")
    private WebElement successMessage;

    public void assertMyMessage() {

        assertion(successMessage,"Your message has been successfully sent to our team.");
    }

}
