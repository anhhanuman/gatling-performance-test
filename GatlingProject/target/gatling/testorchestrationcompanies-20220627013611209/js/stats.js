var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10",
        "ok": "1",
        "ko": "9"
    },
    "minResponseTime": {
        "total": "558",
        "ok": "3826",
        "ko": "558"
    },
    "maxResponseTime": {
        "total": "3826",
        "ok": "3826",
        "ko": "583"
    },
    "meanResponseTime": {
        "total": "898",
        "ok": "3826",
        "ko": "573"
    },
    "standardDeviation": {
        "total": "976",
        "ok": "0",
        "ko": "7"
    },
    "percentiles1": {
        "total": "575",
        "ok": "3826",
        "ko": "573"
    },
    "percentiles2": {
        "total": "579",
        "ok": "3826",
        "ko": "577"
    },
    "percentiles3": {
        "total": "2367",
        "ok": "3826",
        "ko": "581"
    },
    "percentiles4": {
        "total": "3534",
        "ok": "3826",
        "ko": "583"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 10
},
    "group4": {
    "name": "failed",
    "count": 9,
    "percentage": 90
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "0.1",
        "ko": "0.9"
    }
},
contents: {
"req_get-company-nam-9ae7b": {
        type: "REQUEST",
        name: "get company name",
path: "get company name",
pathFormatted: "req_get-company-nam-9ae7b",
stats: {
    "name": "get company name",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "3826",
        "ok": "3826",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3826",
        "ok": "3826",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3826",
        "ok": "3826",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3826",
        "ok": "3826",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3826",
        "ok": "3826",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3826",
        "ok": "3826",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3826",
        "ok": "3826",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.1",
        "ok": "0.1",
        "ko": "-"
    }
}
    },"req_call-again-dd469": {
        type: "REQUEST",
        name: "Call again",
path: "Call again",
pathFormatted: "req_call-again-dd469",
stats: {
    "name": "Call again",
    "numberOfRequests": {
        "total": "9",
        "ok": "0",
        "ko": "9"
    },
    "minResponseTime": {
        "total": "558",
        "ok": "-",
        "ko": "558"
    },
    "maxResponseTime": {
        "total": "583",
        "ok": "-",
        "ko": "583"
    },
    "meanResponseTime": {
        "total": "573",
        "ok": "-",
        "ko": "573"
    },
    "standardDeviation": {
        "total": "7",
        "ok": "-",
        "ko": "7"
    },
    "percentiles1": {
        "total": "573",
        "ok": "-",
        "ko": "573"
    },
    "percentiles2": {
        "total": "577",
        "ok": "-",
        "ko": "577"
    },
    "percentiles3": {
        "total": "581",
        "ok": "-",
        "ko": "581"
    },
    "percentiles4": {
        "total": "583",
        "ok": "-",
        "ko": "583"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 9,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.9",
        "ok": "-",
        "ko": "0.9"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
