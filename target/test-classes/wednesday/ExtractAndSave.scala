package wednesday

import io.gatling.core.Predef.Simulation
import io.gatling.core.Predef.*
import io.gatling.core.structure.{ChainBuilder, ScenarioBuilder}
import io.gatling.http.Predef.*
import io.gatling.http.protocol.HttpProtocolBuilder

class ExtractAndSave extends  Simulation{

  //http
  val httpConf: HttpProtocolBuilder = http
    .baseUrl("https://fakerestapi.azurewebsites.net")
    .contentTypeHeader("application/json")
  //methods
  def getAllAuthers():ChainBuilder  ={
     exec(
      http("Get All Authers").get("/api/v1/Authors")
        .check(jsonPath("$[1].firstName").saveAs("firstName"))
        )
    }

//  def getAutherByID(authId:String):ChainBuilder ={
//      exec(
//        http("Get Auther - ${authId}").get("/api/v1/Authors/${authId}")
//        .check(jsonPath("$.firstName") is "${firstName}")
//        .check(bodyString.saveAs("responseBody"))
//        )
//    }

  val scn: ScenarioBuilder = scenario("Extract Valuse and Save")
        repeat(5){exec(getAllAuthers())}

    .exec {
      session =>
        println("FIRSTANME: " + session("firstName").as[String])
        session
    }
    .pause(5)

//    .exec(getAutherByID("${authId}"))

//    .exec {
//      session =>
//        println("RESPONSEBODY: " + session("responseBody").as[String])
//        session
//    }

  setUp(scn.inject(atOnceUsers(1)).protocols(httpConf))

}
