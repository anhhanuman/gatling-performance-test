package simulations

import io.gatling.core.Predef.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.core.session

class TestOrchestrationCompanies extends Simulation {
  val httpConf = http.baseUrl("https://api-ms-staging.funnelbeam.com")
    .header("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqd3RfdmVyc2lvbiI6IjEiLCJ1c2VyX2lkIjoxLCJjdXN0b21lcl9pZCI6bnVsbCwicm9sZXMiOlt7Im5hbWUiOiJBZG1pbiBGdW5uZWxCZWFtIiwiYWxsb3dhbmNlcyI6bnVsbCwiaWQiOjF9XX0.vfOiwCbSXhwihRzI2dMHfwzxaf8i5h4yEGaltWNiASE")
    .header("content-type", value = "application/json")

  val fileFeeder = jsonFile("./bodies/100_accounts.json").circular

  def postCompanyName() = {
    repeat(2){
      feed(fileFeeder)
      exec(http("get company name")
        .post("/api/v2/sfdc/enrich")
        .body(StringBody(
          """{
     "enrichments": [
      {
        "id": "#{id}",
        "company_name": "#{company_name}"
      }
    ]
  }"""
        )).asJson)
    }
  }

  val scn = scenario("get enriched companies")
    .repeat(100){
      feed(fileFeeder)
        .exec(http("get company name")
          .post("/api/v2/sfdc/enrich")
          .body(StringBody(
            """{
     "enrichments": [
      {
        "id": "#{id}",
        "company_name": "#{company_name}"
      }
    ]
  }"""
          )).asJson
          .check(jsonPath("$.enrichments[0].status").saveAs("status")))
    }

  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)

}
