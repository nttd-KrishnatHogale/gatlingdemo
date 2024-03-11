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
        "total": "252",
        "ok": "252",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "833",
        "ok": "833",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "543",
        "ok": "543",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "291",
        "ok": "291",
        "ko": "-"
    },
    "percentiles1": {
        "total": "543",
        "ok": "543",
        "ko": "-"
    },
    "percentiles2": {
        "total": "688",
        "ok": "688",
        "ko": "-"
    },
    "percentiles3": {
        "total": "804",
        "ok": "804",
        "ko": "-"
    },
    "percentiles4": {
        "total": "827",
        "ok": "827",
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
        "total": "0.087",
        "ok": "0.087",
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
        "total": "833",
        "ok": "833",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "833",
        "ok": "833",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "833",
        "ok": "833",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "833",
        "ok": "833",
        "ko": "-"
    },
    "percentiles2": {
        "total": "833",
        "ok": "833",
        "ko": "-"
    },
    "percentiles3": {
        "total": "833",
        "ok": "833",
        "ko": "-"
    },
    "percentiles4": {
        "total": "833",
        "ok": "833",
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
        "total": "0.043",
        "ok": "0.043",
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
        "total": "252",
        "ok": "252",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "252",
        "ok": "252",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "252",
        "ok": "252",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "252",
        "ok": "252",
        "ko": "-"
    },
    "percentiles2": {
        "total": "252",
        "ok": "252",
        "ko": "-"
    },
    "percentiles3": {
        "total": "252",
        "ok": "252",
        "ko": "-"
    },
    "percentiles4": {
        "total": "252",
        "ok": "252",
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
        "total": "0.043",
        "ok": "0.043",
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
