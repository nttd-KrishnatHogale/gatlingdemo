package simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._
class checkCorrelation extends  Simulation {
  val httpConf = http.baseUrl("https://gorest.co.in/")
    .header("Authorization", "Bearer 2f6d6adfe073a6c6e97a8d01b79eaf355d7c757c269e07e4898b688fe7979703")

  val scn = scenario("check correlation and extract data")
    .exec(http("get all users")
    .get("public/v2/users")
    .check(jsonPath("$[0].id")
      .saveAs("userId")))
    .exec {
      session =>
        println("ID: " + session("userId").as[String])
        session
    }


    .exec(http("get specific User")
      .get("public/v2/users/${userId}")
      .check(jsonPath("$.id").is("6180510"))
      .check(jsonPath("$.name").is("Krishnadas Shah"))
      .check(jsonPath("$.email").is("shah_krishnadas@greenholt.test"))

    )

setUp(scn.inject(atOnceUsers(1)).protocols(httpConf))



}
