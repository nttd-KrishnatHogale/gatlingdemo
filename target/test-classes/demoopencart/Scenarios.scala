package demoopencart

import io.gatling.core.Predef.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class Scenarios extends  Simulation{
  //http
  val httpConf = http.baseUrl("https://demo.opencart.com")
  //scenario
  val scn = scenario("demoOpenCart")
    .group("HomePage"){
      exec(
        http("Home")
          .get("/")
          .check(status is 200))
        .pause(2)
    }
    .group("RegisterPage"){
      exec(
        http("RegisterInitial")
          .get("/index.php")
          .queryParam("route","account/register")
          .queryParam("language","en-gb")
          .check(status is 200)
      )
        .pause(2)
        .exec(http("Register")
          .post("/index.php")
          .queryParam("route","account/register")
          .queryParam("language","en-gb")
          .queryParam("register_token", "04de834a87272225c0f757a231")
          .formParam("customer_group_id", "1")
          .formParam("firstname", "new")
          .formParam("lastname","nME")
          .formParam("email","admin@gmail.com")
          .formParam("password","123")
          .formParam("newsletter","0")
          .check(status is 200)
        )
        .group("Login"){
          exec(http("loginInitial").get("/index.php")
          .queryParam("route","account/login")
          .queryParam("language","en-gb")
          .check(status  is 200)

          )
            .pause(2)
            .exec(http("Login").get("/index.php")
              .queryParam("route","account/login|login")
              .queryParam("language","en-gb")
              .queryParam("login_token","93eaaa73bd439ede65bdaeda17")
              .formParam("email","admin@gmail.com")
              .formParam("password","123")
              .check(status is 200)
            )
        }

    }

  //setup

  setUp(scn.inject(atOnceUsers(1)).protocols(httpConf))

}
