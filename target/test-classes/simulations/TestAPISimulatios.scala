package simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._
class TestAPISimulatios extends Simulation  {

  //http
  val httpConf = http.baseUrl("https://reqres.in")
    .header("Accept","application/json")
    .header("content-type","application/json")
  //scenario
  val scn =scenario("get user")
    .exec(
      http("get sijngl use")
        .get("/api/users/2")
        .check(status is 200)
    )
  //setup
setUp(scn.inject(atOnceUsers(100))).protocols(httpConf)
}
