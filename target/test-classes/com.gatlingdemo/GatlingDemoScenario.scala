package com.gatlingdemo

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.core.structure.ChainBuilder
//import io.gatling.core.session.Expression
class GatlingDemoScenario  extends Simulation{
//  val sessionHeader = Map("Authorization"->"Bearer ${authToken}","Content-Type"->"application/json")

  //http
  val httpConf = http.baseUrl("https://demostore.gatling.io")
//    .header("Content-Type","text/html;charset=UTF-8")

//  val headers= Map("Content-Type"->"application/x-www-form-urlencoded")

  //scenario with grouping
  val scn= scenario("GatlingDemoScenario")
    .group("HomePage"){
      exec(http("Homepage").get("/").check(status is 200)
        .check(regex("""<meta id="_csrf" name="_csrf" content="([^"]+)" />""").saveAs("csrfToken"))
      )
        .exec {
          session =>
            println("ConTent: " + session("csrfToken").as[String])
            session
        }
    }
    .pause(2)
    .group("LoginPage"){
      exec(http("InitialLogin")
        .get("/login")
        .check(status is 200)
        )
        .pause(2)
      .exec(http("Login")
        .post("/login")
        .formParam("_csrf","${csrfToken}")
        .formParam("username","admin")
        .formParam("password","admin")
        .check(status is 200)
      )

    }
    .pause(2)
  group("AllProducts"){
    exec(http("All Products")
      .get("/category/all")
      .check(status is 200)
      .check(regex("""data-id=(.*)""").saveAs("dataid")))
      .exec {
        session =>
          println("DATAID: " + session("dataid").as[String])
          session
      }
      .pause(2)
  }

  group("Add to Cart"){
    exec(http("Add to Cart")
    .post("/cart/add/${dataid}")
    .check(status is 200))
      .pause(2)
  }

  group("View Cart"){
    exec(http("view").get("/cart/view")
    .check(status is 200))
  }
    .pause(2)

  group("CheckOut"){
    exec(http("Checkout").get("/cart/checkoutConfirmation")
    .check(status is 200))
  }



  //setup
  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)


}
