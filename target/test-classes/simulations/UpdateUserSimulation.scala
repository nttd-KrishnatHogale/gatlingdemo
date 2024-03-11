package simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._
class UpdateUserSimulation extends Simulation  {

  val httpProtocol = http
    .baseUrl("https://reqres.in/api/")

  val CreateUserScenatio = scenario("Create User")
    .exec(
      http("create use request")
        .post("/users")
        .header(name = "content-type", value = "application/json")
        .asJson
        .body(RawFileBody("data/user.json"))
        //        .body(StringBody(
        //          """
        //            |{
        //            |    "name": "morpheus",
        //            |    "job": "leader"
        //            |}
        //            |""".stripMargin))

        .check(status is 201, jsonPath("$.name") is "morpheus")

    )

    .pause(1)
  val UpdateUserScenario = scenario("update user")
    .exec(
      http("update user")
        .put("/users/2")
        .body(RawFileBody("data/user.json")).asJson
        .check(
          status.in(200 to 210),
          jsonPath("$.name") is "morpheus"
        )
    )
    .pause(1)

  val DeleteUser = scenario("Delete User")
    .exec(http("delete user")
      .delete("/users/2")
      .check(status.in(200 to 204)  )
    ).pause(1)

  //setup
  setUp(
    CreateUserScenatio.inject(rampUsers(10).during(10)),
    UpdateUserScenario.inject(rampUsers(10).during(10)),
    DeleteUser.inject(rampUsers(5).during(5))
  ).protocols(httpProtocol)

}
