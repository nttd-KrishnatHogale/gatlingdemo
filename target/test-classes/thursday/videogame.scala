package thursday

import io.gatling.core.Predef.Simulation
import io.gatling.core.Predef.*
import io.gatling.core.structure.{ChainBuilder, ScenarioBuilder}
import io.gatling.http.Predef.*
import io.gatling.http.protocol.HttpProtocolBuilder

import scala.language.postfixOps
class videogame extends Simulation{

  val httpConf: HttpProtocolBuilder =  http
    .baseUrl("https://videogamedb.uk/api")
    .contentTypeHeader("application/json")

  var scn: ScenarioBuilder = scenario("Video Game DB")
    .exec(http("Get All Games").get(""))


}
