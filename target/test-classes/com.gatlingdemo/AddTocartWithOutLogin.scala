package com.gatlingdemo

import io.gatling.core.Predef._
import io.gatling.http.Predef._
class AddTocartWithOutLogin extends Simulation {

  val httpConf = http.baseUrl("https://demostore.gatling.io")


  val scn=scenario("Addtocartwithouthome").group("Home"){
    exec(http("HomePage").get("/").check(status is 200))
  }
    .pause(2)
    .group("AllProducts"){
      exec(http("ViewAllProduct").get("/category/all").check(status is 200)
        .check(regex("""data-id="(.*)"""").saveAs("dataid")))
        .exec {
          session =>
            println("DATAID:" + session("dataid").as[String])
            session
        }
        .pause(2)


    }
    .group("ADDToCart") {
      exec(http("Addtocart").get("/cart/add/${dataid}").check(status is 200))
    }
    .group("View"){
    exec(http("view").get("/cart/view").check(status is 302)
      .check(headerRegex("Location","(.*)").saveAs("nextUrl")).disableFollowRedirect )
    }
  group("rediredtetoLogin"){
    exec(http("Login").get("${nextURl}").check(status is 200))
  }

  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)

}
