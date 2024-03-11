package wednesday

import io.gatling.core.Predef.Simulation
import io.gatling.core.Predef.*
import io.gatling.http.Predef.*
import io.gatling.http.protocol.HttpProtocolBuilder

class VerifyDataFromResponse extends Simulation{
  val httpConf: HttpProtocolBuilder = http
    .baseUrl("https://fakerestapi.azurewebsites.net")
    .contentTypeHeader("application/json")


   val scn= scenario("verify response body")
     .exec(http("Get Auther By Id").get("/api/v1/Authors/24").check(status is 200)
     .check(jsonPath("$.firstName") is "First Name 24")
       .check(jsonPath("$.lastName") is "Last Name 24"))

   setUp(scn.inject(atOnceUsers(1)).protocols(httpConf))
}
