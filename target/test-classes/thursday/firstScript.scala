package thursday

import io.gatling.core.Predef.Simulation
import io.gatling.core.Predef.*
import io.gatling.core.structure.{ChainBuilder, ScenarioBuilder}
import io.gatling.http.Predef.*
import io.gatling.http.protocol.HttpProtocolBuilder


import concurrent.duration.DurationInt

class firstScript extends Simulation{

//  val methodsInstance= new methods()
  //https
  val httpConf: HttpProtocolBuilder = http
    .baseUrl("https://fakerestapi.azurewebsites.net")
    .contentTypeHeader("application/json")
//GetAllUsers Method

  //scn
  var scn: ScenarioBuilder = scenario("first script")
//      exec(
//        methodsInstance.getAllUsers()
//      )
      .exec(http("get all Users")
        .get("/api/v1/Users")
        .check(status is 200)
        .check(status in (100 to 300))
        .check(status not 400))


    .pause(5)
    .exec(http("get all Users 2")
      .get("/api/v1/Users")
      .check(status is 200)
      .check(status in (100 to 300))
      .check(status not 400)
    )
    .pause(10, 20)
    .pause(500.milliseconds)

  def getUsersByID(): ChainBuilder = {
    exec(http("Get User By Id").get("/api/v1/Users/2").check(status is 200)
      .check(jsonPath("$.userName") is "User 2")
      .check(jsonPath("$.password") is "Password2"))
  }
  val scn2 = scenario("verify response body")
    .exec(getUsersByID())

  //setup
  setUp(
    scn.inject(atOnceUsers(1)).protocols(httpConf))
  scn2.inject(atOnceUsers(1)).protocols(httpConf)

}



