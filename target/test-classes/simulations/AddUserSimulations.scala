package simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._
class AddUserSimulations  extends Simulation{
  //http
  val httpConf = http.baseUrl("https://reqres.in")
    .header("Accept","application/json")
    .header("content-type","application/json")
  //scenario
  val scn =scenario("Add user scenario")
    .exec(
      http("Add user request")
        .post("/api/users").body(RawFileBody("data/user.json")).asJson
        .header("content-type","applicatin/json")
        .check(status is 201)
    )
    .pause(2)
    .exec(http("get User Request").get("/api/user/2").check(status is 200))
  //setup
  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)
}


