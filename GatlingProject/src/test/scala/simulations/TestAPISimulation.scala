package simulations

import io.gatling.core.Predef.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class TestAPISimulation extends Simulation {
  val httpConf = http.baseUrl("https://api-ms-staging.funnelbeam.com")
    .header("Accept", value = "application/json")
    .header("content-type",value = "application/json")

  val scn = scenario("get company name")
    .exec(http("get company name in data service")
      .get("/v1/api/company?company_name=google"))


  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)

}
