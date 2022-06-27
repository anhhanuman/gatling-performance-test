var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "661",
        "ok": "661",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3892",
        "ok": "3892",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "737",
        "ok": "737",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "320",
        "ok": "320",
        "ko": "-"
    },
    "percentiles1": {
        "total": "695",
        "ok": "695",
        "ko": "-"
    },
    "percentiles2": {
        "total": "712",
        "ok": "712",
        "ko": "-"
    },
    "percentiles3": {
        "total": "746",
        "ok": "746",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1027",
        "ok": "1027",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 96,
    "percentage": 96
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.333",
        "ok": "1.333",
        "ko": "-"
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
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "661",
        "ok": "661",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3892",
        "ok": "3892",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "737",
        "ok": "737",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "320",
        "ok": "320",
        "ko": "-"
    },
    "percentiles1": {
        "total": "695",
        "ok": "695",
        "ko": "-"
    },
    "percentiles2": {
        "total": "712",
        "ok": "712",
        "ko": "-"
    },
    "percentiles3": {
        "total": "746",
        "ok": "746",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1027",
        "ok": "1027",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 96,
    "percentage": 96
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.333",
        "ok": "1.333",
        "ko": "-"
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
