package thursday

import io.gatling.core.Predef.Simulation
import io.gatling.core.Predef.*
import io.gatling.core.structure.{ChainBuilder, ScenarioBuilder}
import io.gatling.http.Predef.*
import io.gatling.http.protocol.HttpProtocolBuilder


import concurrent.duration.DurationInt

class AdvancedScript extends Simulation{
  val httpProtocol =http
      .baseUrl("http://computer-database.gatling.io")


    val scn: ScenarioBuilder =scenario("Scenario Name")
      .group("home"){exec(http("Home").get("/"))
        .pause(7)
        .exec(http("Computers").get("/computers?f=macbook"))
        .pause(2)
        .exec(http("singleComputer").get("/computers/6"))
        .pause(3)
        .exec(http("request_4").get("/"))
        .pause(2)}


  val search =exec(
      http("Home").get("/")
    )
      .pause(1) // Let's set the pauses to 1 sec for demo purpose
      .exec(http("Search").get("/computers?f=macbook"))
      .pause(1)
      .exec(http("Select").get("/computers/6"))
      .pause(1)


    val browse =exec(http("Home").get("/"))
        .pause(2)
        .exec(http("Page 1").get("/computers?p=1"))
        .pause(670.millis)
        .exec(http("Page 2").get("/computers?p=2"))
        .pause(629.millis)
        .exec(http("Page 3").get("/computers?p=3"))
        .pause(734.millis)
        .exec(http("Page 4").get("/computers?p=4"))
        .pause(5)

      val edit = exec(http("Form").get("/computers/new"))
          .pause(1)
          .exec(
            http("Post")
              .post("/computers")
              .formParam("name", "Beautiful Computer")
              .formParam("introduced", "2012-05-30")
              .formParam("discontinued", "")
              .formParam("company", "37")
          )

  val scn2 = scenario("Scenario Name").exec(search, browse, edit)

  setUp(
    scn.inject(atOnceUsers(1)).protocols(httpProtocol))
  scn2.inject(atOnceUsers(1)).protocols(httpProtocol)



}
