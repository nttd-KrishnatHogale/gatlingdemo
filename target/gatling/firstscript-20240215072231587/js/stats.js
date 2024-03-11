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
        "total": "214",
        "ok": "214",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "934",
        "ok": "934",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "574",
        "ok": "574",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "360",
        "ok": "360",
        "ko": "-"
    },
    "percentiles1": {
        "total": "574",
        "ok": "574",
        "ko": "-"
    },
    "percentiles2": {
        "total": "754",
        "ok": "754",
        "ko": "-"
    },
    "percentiles3": {
        "total": "898",
        "ok": "898",
        "ko": "-"
    },
    "percentiles4": {
        "total": "927",
        "ok": "927",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 50
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
        "total": "0.08",
        "ok": "0.08",
        "ko": "-"
    }
},
contents: {
"req_get-all-users-ab26d": {
        type: "REQUEST",
        name: "get all Users",
path: "get all Users",
pathFormatted: "req_get-all-users-ab26d",
stats: {
    "name": "get all Users",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "934",
        "ok": "934",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "934",
        "ok": "934",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "934",
        "ok": "934",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "934",
        "ok": "934",
        "ko": "-"
    },
    "percentiles2": {
        "total": "934",
        "ok": "934",
        "ko": "-"
    },
    "percentiles3": {
        "total": "934",
        "ok": "934",
        "ko": "-"
    },
    "percentiles4": {
        "total": "934",
        "ok": "934",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 100
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
        "total": "0.04",
        "ok": "0.04",
        "ko": "-"
    }
}
    },"req_get-all-users-2-28e01": {
        type: "REQUEST",
        name: "get all Users 2",
path: "get all Users 2",
pathFormatted: "req_get-all-users-2-28e01",
stats: {
    "name": "get all Users 2",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "214",
        "ok": "214",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "214",
        "ok": "214",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "214",
        "ok": "214",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "214",
        "ok": "214",
        "ko": "-"
    },
    "percentiles2": {
        "total": "214",
        "ok": "214",
        "ko": "-"
    },
    "percentiles3": {
        "total": "214",
        "ok": "214",
        "ko": "-"
    },
    "percentiles4": {
        "total": "214",
        "ok": "214",
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
        "total": "0.04",
        "ok": "0.04",
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
