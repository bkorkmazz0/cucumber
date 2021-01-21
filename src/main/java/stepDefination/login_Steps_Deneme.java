package stepDefination;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class login_Steps_Deneme {

    @Given("^Amazon sitesine git$")
    public void amazon_sitesine_git() throws Throwable {

        System.out.println("Siteye gidildi");

    }

    @Given("^Login butonuna tıkla$")
    public void login_butonuna_tıkla() throws Throwable {

        System.out.println("login butonuna tıklandı");

    }

    @Given("^Isim gir$")
    public void isim_gir() throws Throwable {

        System.out.println("isim girildi");

    }

    @Given("^Sifre gir$")
    public void sifre_gir() throws Throwable {

        System.out.println("sifre girildi");

    }

    @When("^Submit butonuna tıkladığımda$")
    public void submit_butonuna_tıkladığımda() throws Throwable {

        System.out.println("submit butonuna tıklandı");

    }

    @Then("^Success mesajını dogrula$")
    public void success_mesajını_dogrula() throws Throwable {

        System.out.println("mesaj doğrulandı");

    }

}
