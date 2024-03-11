package git

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class GitHubSearchSimulation extends Simulation {

  val baseUrl = "https://github.com"
  val searchEndpoint = "/search"
  val searchTerm = "gatling"

  val httpProtocol = http
    .baseUrl(baseUrl)
    .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
    .doNotTrackHeader("1")
    .acceptLanguageHeader("en-US,en;q=0.5")

  val scn = scenario("GitHub Search")
    .exec(http("GitHub Home")
      .get("/")
      .check(status.is(200)))
    .pause(2)
    .exec(http("GitHub Search")
      .get(s"$searchEndpoint?q=$searchTerm")
      .check(status.is(200)))

  setUp(
    scn.inject(
      rampUsers(10) during (5),
      constantUsersPerSec(10) during (10)
    )
  ).protocols(httpProtocol)
}