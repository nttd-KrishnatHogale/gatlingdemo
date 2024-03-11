package com.gatling.tests.Api

//import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._


class APITest1 extends  Simulation{

  val httpProtocol  = http.baseUrl("https://reqres.in/api/users")

  val scn = scenario("GetAPIREqDemo")
    .exec(
      http("get single user")
        .get("/2")
        .check(
          status.is(200),
          jsonPath("$.data.first_name").is("Janet"))

    )
    .pause(1)

  setUp(
    scn.inject(rampUsers(10).during(5))
      .protocols(httpProtocol)
  )
}
