package com.gatling.tests

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class ComputerDatabse extends Simulation {

	val httpProtocol = http
		.baseUrl("https://computer-database.gatling.io")
		.inferHtmlResources(BlackList(""".*\.js""", """.*\.css""", """.*\.gif""", """.*\.jpeg""", """.*\.jpg""", """.*\.ico""", """.*\.woff""", """.*\.woff2""", """.*\.(t|o)tf""", """.*\.png""", """.*detectportal\.firefox\.com.*"""), WhiteList())
		.acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7")
		.acceptEncodingHeader("gzip, deflate")
		.acceptLanguageHeader("en-US,en;q=0.9")
		.upgradeInsecureRequestsHeader("1")
		.userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 Edg/121.0.0.0")





	val scn = scenario("ComputerDatabse")
		.exec(http("ComputersDatabase")
			.get("/computers")
			)
		.pause(2)
		.exec(http("NewComputerPAge")
			.get("/computers/new")
			)
		.pause(2)
		.exec(http("CreateNewComputer")
			.post("/computers")

			.formParam("name", "mycomp1")
			.formParam("introduced", "2010-01-01")
			.formParam("discontinued", "2020-01-01")
			.formParam("company", "19"))
		.pause(2)
		.exec(http("FilterComputerPage")
			.get("/computers?f=comp1")
			)

	setUp(scn.inject(atOnceUsers(1))).protocols(httpProtocol)
}