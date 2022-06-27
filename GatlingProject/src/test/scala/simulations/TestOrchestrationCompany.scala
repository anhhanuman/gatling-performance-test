package simulations

import io.gatling.core.Predef.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.core.session

class TestOrchestrationCompany extends Simulation {
  val httpConf = http.baseUrl("https://api-ms-staging.funnelbeam.com")
    .header("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqd3RfdmVyc2lvbiI6IjEiLCJ1c2VyX2lkIjoxLCJjdXN0b21lcl9pZCI6bnVsbCwicm9sZXMiOlt7Im5hbWUiOiJBZG1pbiBGdW5uZWxCZWFtIiwiYWxsb3dhbmNlcyI6bnVsbCwiaWQiOjF9XX0.vfOiwCbSXhwihRzI2dMHfwzxaf8i5h4yEGaltWNiASE")
    .header("content-type", value = "application/json")

  val scn = scenario("get enriched company name")
    .exec(http("get company name")
      .post("/api/v2/sfdc/enrich")
      .body(RawFileBody("./src/test/resources/bodies/company.json"))
      .check(jsonPath("$.enrichments[0].status").saveAs("status")))
    .asLongAs(session => session("status").as[String] == "REQUESTED") {
      exec(http("Call again")
        .get("/api/v2/sfdc/enrich")
        .body(RawFileBody("./src/test/resources/bodies/company.json"))
        .check(status.is(200))
        .check(jsonPath("$.enrichments[0].status").is("COMPLETED")))
    }

  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)
}
