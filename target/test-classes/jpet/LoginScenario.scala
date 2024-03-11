//package jpet
//
//import scala.concurrent.duration.*
//import io.gatling.core.Predef.*
//import io.gatling.http.Predef.{http, *}
//import io.gatling.jdbc.Predef.*
//
//class LoginScenario extends Simulation {
//
//  private val httpProtocol = http
//    .baseUrl("https://petstore.octoperf.com")
////    .inferHtmlResources(AllowList(), DenyList(""".*\.js""", """.*\.css""", """.*\.gif""", """.*\.jpeg""", """.*\.jpg""", """.*\.ico""", """.*\.woff""", """.*\.woff2""", """.*\.(t|o)tf""", """.*\.png""", """.*\.svg""", """.*detectportal\.firefox\.com.*"""))
//    .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7")
//    .acceptEncodingHeader("gzip, deflate, br")
//    .acceptLanguageHeader("en-US,en;q=0.9")
//    .upgradeInsecureRequestsHeader("1")
//    .userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36")
//  
//  private val headers_0 = Map(
//  		"Cache-Control" -> "max-age=0",
//  		"If-Modified-Since" -> "Thu, 17 Feb 2022 15:44:48 GMT",
//  		"If-None-Match" -> """W/"1155-1645112688000"""",
//  		"Sec-Fetch-Dest" -> "document",
//  		"Sec-Fetch-Mode" -> "navigate",
//  		"Sec-Fetch-Site" -> "none",
//  		"Sec-Fetch-User" -> "?1",
//  		"sec-ch-ua" -> """Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121""",
//  		"sec-ch-ua-mobile" -> "?0",
//  		"sec-ch-ua-platform" -> "Windows"
//  )
//  
//  private val headers_1 = Map(
//  		"Sec-Fetch-Dest" -> "document",
//  		"Sec-Fetch-Mode" -> "navigate",
//  		"Sec-Fetch-Site" -> "same-origin",
//  		"Sec-Fetch-User" -> "?1",
//  		"sec-ch-ua" -> """Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121""",
//  		"sec-ch-ua-mobile" -> "?0",
//  		"sec-ch-ua-platform" -> "Windows"
//  )
//  
//  private val headers_3 = Map(
//  		"Cache-Control" -> "max-age=0",
//  		"Origin" -> "https://petstore.octoperf.com",
//  		"Sec-Fetch-Dest" -> "document",
//  		"Sec-Fetch-Mode" -> "navigate",
//  		"Sec-Fetch-Site" -> "same-origin",
//  		"Sec-Fetch-User" -> "?1",
//  		"sec-ch-ua" -> """Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121""",
//  		"sec-ch-ua-mobile" -> "?0",
//  		"sec-ch-ua-platform" -> "Windows"
//  )
//
//
//  private val scn = scenario("HomePage")
//    .exec(
//      http("Home")
//        .get("/").check(status is 200))
//	http
//
////			http("request_1").get("/actions/Catalog.action").headers(headers_1)
//
//  setUp(scn.inject(atOnceUsers(1)).protocols(httpProtocol))
//
//	//      http("request_1")
////        .get("/actions/Catalog.action")
////        .headers(headers_1)
////
////      http("request_2")
////        .get("/actions/Account.action?signonForm=")
////        .headers(headers_1)
////
////      http("request_3")
////        .post("/actions/Account.action")
////        .headers(headers_3)
////        .formParam("username", "j2ee")
////        .formParam("password", "j2ee")
////        .formParam("signon", "Login")
////        .formParam("_sourcePage", "3eGXbkKDS9orSwArLpMJ_wqI93riWy0mKrbsksiotefxCUI9PSLguARItW6DP67uqvTPrtQRdhBELDBP8_PUpKR6115FHmJOUG2TwK8BRUA=")
////        .formParam("__fp", "STpUECWnTXM1YDd_qj7CTHWkuI034n6EaE9ywb5ocSFfEzPy1zG1VJ786hOVSIx_")
////    )
//
//
////	setUp(
////		scn.inject(atOnceUsers(1)).protocols(httpProtocol)
////	)
//
//
//
//}
