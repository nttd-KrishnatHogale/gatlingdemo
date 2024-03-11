package simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration.DurationInt

class CheckpauseTimeandResponse extends Simulation{

  val httpConf = http.baseUrl("https://reqres.in")
    .header("Accept", "application/json")
    .header("content-type", "application/json")


  val scn = scenario("user api calls")
    .exec(http("list all users")
        .get("/api/users?page=2")
      .check(status is 200))
    .pause(2)

    .exec(http("Single User Api")
      .get("/api/users/2")
      .check(status.in(200 to 210)))
    .pause(1,10)

    .exec(http("Single User not found Api")
      .get("/api/users/23")
      .check(status.not(400),status.not(500)))
    .pause(3000.milliseconds)

  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)

}
