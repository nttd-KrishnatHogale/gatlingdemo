package Friday

import io.gatling.core.Predef.Simulation
import io.gatling.core.Predef.*
import io.gatling.core.structure.ScenarioBuilder
import io.gatling.http.Predef.*
import io.gatling.http.protocol.HttpProtocolBuilder
import concurrent.duration.DurationInt

class firstScript extends Simulation{
  //http
  val httpConf = http.baseUrl("https://fakerestapi.azurewebsites.net")
    .contentTypeHeader("application/json")



  val scn = scenario("ActivityAPI")
    .group("Get Activity"){
    exec(http("Get All Activities").get("/api/v1/Activities").check(status is 200))
    }
    .group("POSt ACtivity"){
      exec(http("Create Acivity").post("/api/v1/Activities")
        .formParam("id", 0)
        .formParam("title","string")
        .header("accept","text/plain; v=1.0")
        .header("Content-Type","application/json; v=1.0")
//        .formParam("dueDate","2024-02-16T06:55:53.454Z")
        .formParam("completed","true").check(status is 200))
    }

  setUp(scn.inject(atOnceUsers(1)).protocols(httpConf))


}
