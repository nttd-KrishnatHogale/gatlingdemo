//package thursday
//
//import io.gatling.core.Predef.Simulation
//import io.gatling.core.Predef.*
//import io.gatling.core.structure.{ChainBuilder, ScenarioBuilder}
//import io.gatling.http.Predef.*
//import io.gatling.http.protocol.HttpProtocolBuilder
//
//
//class methods extends Simulation{
//
//  val httpConf: HttpProtocolBuilder = http
//    .baseUrl("https://fakerestapi.azurewebsites.net")
//    .contentTypeHeader("application/json")
//
//  def getAllUsers(): ChainBuilder = {
//    exec(http("get all Users")
//      .get("/api/v1/Users")
//      .check(status is 200)
//      .check(status in (100 to 300))
//      .check(status not 400))
//  }
//
//}
