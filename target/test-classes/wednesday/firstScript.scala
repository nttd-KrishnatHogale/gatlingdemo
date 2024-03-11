package wednesday

import io.gatling.core.Predef.Simulation
import io.gatling.core.Predef.*
import io.gatling.core.structure.ScenarioBuilder
import io.gatling.http.Predef.*
import io.gatling.http.protocol.HttpProtocolBuilder
import concurrent.duration.DurationInt
class firstScript extends  Simulation{

  //http
  val httpConf: HttpProtocolBuilder = http
    .baseUrl("https://fakerestapi.azurewebsites.net")
    .contentTypeHeader("application/json")
  //scn
  var scn: ScenarioBuilder = scenario("first script")
    .exec(http("get all authers")
      .get("/api/v1/Authors")
      .check(status is 200)
    .check(status in (100 to 300))
    .check(status not 400)
    )
    .pause(5)
    .exec(http("get all authers 2")
      .get("/api/v1/Authors")
      .check(status is 200)
      .check(status in (100 to 300))
      .check(status not 400)
    )
    .pause(10,20)
    .pause(500.milliseconds)
  //setup
  setUp(
    scn.inject(atOnceUsers(1)).protocols(httpConf))

}
