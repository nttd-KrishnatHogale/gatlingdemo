var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2",
        "ok": "2",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "269",
        "ok": "269",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1756",
        "ok": "1756",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1013",
        "ok": "1013",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "744",
        "ok": "744",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1013",
        "ok": "1013",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1384",
        "ok": "1384",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1682",
        "ok": "1682",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1741",
        "ok": "1741",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 50
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.071",
        "ok": "0.071",
        "ko": "-"
    }
},
contents: {
"req_get-all-authers-55f91": {
        type: "REQUEST",
        name: "get all authers",
path: "get all authers",
pathFormatted: "req_get-all-authers-55f91",
stats: {
    "name": "get all authers",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1756",
        "ok": "1756",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1756",
        "ok": "1756",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1756",
        "ok": "1756",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1756",
        "ok": "1756",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1756",
        "ok": "1756",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1756",
        "ok": "1756",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1756",
        "ok": "1756",
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
        "total": "0.036",
        "ok": "0.036",
        "ko": "-"
    }
}
    },"req_get-all-authers-60ef5": {
        type: "REQUEST",
        name: "get all authers 2",
path: "get all authers 2",
pathFormatted: "req_get-all-authers-60ef5",
stats: {
    "name": "get all authers 2",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "269",
        "ok": "269",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "269",
        "ok": "269",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "269",
        "ok": "269",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "269",
        "ok": "269",
        "ko": "-"
    },
    "percentiles2": {
        "total": "269",
        "ok": "269",
        "ko": "-"
    },
    "percentiles3": {
        "total": "269",
        "ok": "269",
        "ko": "-"
    },
    "percentiles4": {
        "total": "269",
        "ok": "269",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 100
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
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.036",
        "ok": "0.036",
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
