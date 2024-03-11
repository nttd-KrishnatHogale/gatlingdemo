var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "220",
        "ok": "220",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "118",
        "ok": "118",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "21131",
        "ok": "21131",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3835",
        "ok": "3835",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "3557",
        "ok": "3557",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2541",
        "ok": "2541",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5378",
        "ok": "5378",
        "ko": "-"
    },
    "percentiles3": {
        "total": "9638",
        "ok": "9638",
        "ko": "-"
    },
    "percentiles4": {
        "total": "12995",
        "ok": "12995",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 34,
    "percentage": 15
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 26,
    "percentage": 12
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 160,
    "percentage": 73
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.286",
        "ok": "6.286",
        "ko": "-"
    }
},
contents: {
"req_github-home-1d8ce": {
        type: "REQUEST",
        name: "GitHub Home",
path: "GitHub Home",
pathFormatted: "req_github-home-1d8ce",
stats: {
    "name": "GitHub Home",
    "numberOfRequests": {
        "total": "110",
        "ok": "110",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "220",
        "ok": "220",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "13143",
        "ok": "13143",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5536",
        "ok": "5536",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "3758",
        "ok": "3758",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5026",
        "ok": "5026",
        "ko": "-"
    },
    "percentiles2": {
        "total": "9060",
        "ok": "9060",
        "ko": "-"
    },
    "percentiles3": {
        "total": "12313",
        "ok": "12313",
        "ko": "-"
    },
    "percentiles4": {
        "total": "13009",
        "ok": "13009",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 17,
    "percentage": 15
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 5,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 88,
    "percentage": 80
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.143",
        "ok": "3.143",
        "ko": "-"
    }
}
    },"req_github-search-6add5": {
        type: "REQUEST",
        name: "GitHub Search",
path: "GitHub Search",
pathFormatted: "req_github-search-6add5",
stats: {
    "name": "GitHub Search",
    "numberOfRequests": {
        "total": "110",
        "ok": "110",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "118",
        "ok": "118",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "21131",
        "ok": "21131",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2135",
        "ok": "2135",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2321",
        "ok": "2321",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1678",
        "ok": "1678",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2516",
        "ok": "2516",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4052",
        "ok": "4052",
        "ko": "-"
    },
    "percentiles4": {
        "total": "8514",
        "ok": "8514",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 17,
    "percentage": 15
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 21,
    "percentage": 19
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 72,
    "percentage": 65
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.143",
        "ok": "3.143",
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
