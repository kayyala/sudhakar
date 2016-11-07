
import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.concurrent.TimeUnit;

/**
 * Created by skayyala on 01/11/2016.
 */
public class StepDefs {

    WebDriver driver;
    String unqieuValue;


    @Before
    public void openBrowser() throws IOException {
        System.setProperty("webdriver.ie.driver", System.getProperty("user.dir")+"\\src\\test\\resources\\IEDriverServer.exe");
        driver = new InternetExplorerDriver();
       // driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(5000, TimeUnit.SECONDS);
        Date dNow = new Date();
        SimpleDateFormat ft = new SimpleDateFormat("yyMMddhhmmssMs");
        unqieuValue = ft.format(dNow);
    }

    @After
    public void closeBrowser()
    {
        driver.quit();
    }


    @Given("^I am navigate to homepage")
    public void i_navigate_to_home_page() throws Throwable {
        driver.get("http://192.168.99.100:3003/");
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
    }

    @When("^I click on login button$")
    public void iClickOnLoginPage() throws Throwable {
        driver.findElement(By.xpath("html/body/div[1]/nav/div[1]/ul/li[2]/a")).click();
    }

    @And("^I login with user \"(.*?)\" and password \"(.*?)\"$")
    public void iCanProvideUsernameAndPasswordClickOnLogin(String user, String password) throws Throwable {
        driver.findElement(By.xpath("html/body/div[1]/nav/div[2]/div/div/div[2]/p[1]/input")).sendKeys(user);
        driver.findElement(By.xpath("html/body/div[1]/nav/div[2]/div/div/div[2]/p[2]/input")).sendKeys(password);
        driver.findElement(By.xpath("html/body/div[1]/nav/div[2]/div/div/div[3]/button[1]")).click();
    }

    @And("^The admin page is displayed$")
    public void the_admin_page_is_displayed() throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 5);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("navbar-brand")));
        String actual = driver.findElement(By.className("navbar-brand")).getText();
        Assert.assertEquals(actual, "Hotel Management Platform");
    }

    public String getUniqueHotelName(String hotelName) {
        String uniqueHotelName = hotelName;
        if(hotelName.contains("uniqueValue")) {
           uniqueHotelName = hotelName.replace("uniqueValue", unqieuValue);
        }
        return uniqueHotelName;
    }

    @Given("^I create new entry \"(.*?)\",\"(.*?)\",\"(.*?)\",\"(.*?)\" and \"(.*?)\"$")
    public void i_can_enter_all_field_and(String HotelName, String Address, String Owner, String PhoneNumber, String Email) throws Throwable {
        driver.findElement(By.id("hotelName")).sendKeys(getUniqueHotelName(HotelName));
        driver.findElement(By.id("address")).sendKeys(Address);
        driver.findElement(By.id("owner")).sendKeys(Owner);
        driver.findElement(By.id("phone")).sendKeys(PhoneNumber);
        driver.findElement(By.id("email")).sendKeys(Email);
        driver.findElement(By.id("createHotel")).click();
    }

    @Then("^I verify entry \"(.*?)\",\"(.*?)\",\"(.*?)\",\"(.*?)\" and \"(.*?)\" in page$")
    public void i_verify_entry(String HotelName, String Address, String Owner, String PhoneNumber, String Email) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 5);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("detail")));
        List<WebElement> elementList = driver.findElements(By.className("detail"));
        for(WebElement element: elementList) {
            WebElement rowInfoElement = element.findElement(By.className("hotelRow"));
            if(rowInfoElement.getText().equals(getUniqueHotelName(HotelName))) {
                String rowInfo = rowInfoElement.getText();
                Assert.assertTrue(rowInfo.contains(Address));
                Assert.assertTrue(rowInfo.contains(Owner));
                Assert.assertTrue(rowInfo.contains(PhoneNumber));
                Assert.assertTrue(rowInfo.contains(Email));
                return;
            }
        }
    }

    @Then("^I remove entry for \"(.*?)\"$")
    public void i_remove_entry(String HotelName) throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 5);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("detail")));
        List<WebElement> elementList = driver.findElements(By.className("detail"));
        for(WebElement element: elementList) {
            WebElement rowInfoElement = element.findElement(By.className("hotelRow"));
            if(rowInfoElement.getText().contains(getUniqueHotelName(HotelName))) {
                WebElement deleteElement = element.findElement(By.className("hotelDelete"));
                deleteElement.click();
                return;
            }
        }
    }

    @Then("^I logout of console$")
    public void i_logout_of_console() throws Throwable {
        driver.findElement(By.id("logout")).click();
    }
}