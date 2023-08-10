module.exports = function (router) {

    const version = "v4";

    // TRIGGER DAY DATA
    // Scenario 1
    const trigDay1 = "Tuesday 14 February 2023"
    const period1 = "14 Feb 2023 to 20 Feb 2023"
    const scan1 = "17 February 2023";
    const pay1 = "22 February";
    const dlaScan1 = "22 February";
    const dlaPay1 = "27 February";
    // Scenario 2
    const trigDay2 = "Tuesday 14 February 2023"
    const period2 = "14 Feb 2023 to 20 Feb 2023"
    const scan2 = "17 February 2023";
    const pay2 = "22 February";
    const dlaScan2 = "22 February";
    const dlaPay2 = "27 February";
 



    // ROUND 3 VIEWS
    // Daily view
    router.get('/' + version + "/daily/viewDailyTwoTriggers", function (req, res) {
        res.render(version + "/daily/viewDailyTwoTriggers", {
            'version': version,
            'daily': "/" + version + "/daily/viewDailyTwoTriggers",
            'weekly': "/" + version + "/weekly/viewWeeklyTriggers",
            'search': "/" + version + "/search/searchNewDateAndLocation",
            'listPostcodes': "/" + version + "/daily/viewDailyListPostcodesTwoTriggers",
            'listStations': "/" + version + "/daily/viewDailyListStationsTwoTriggers",
        });
    });
    router.get('/' + version + "/daily/viewDailyListStationsTwoTriggers", function (req, res) {
        res.render(version + "/daily/viewDailyListStationsTwoTriggers", {
            'version': version,
            'daily': "/" + version + "/daily/viewDailyTwoTriggers",
            'weekly': "/" + version + "/weekly/viewWeeklyTriggers",
            'search': "/" + version + "/search/searchNewDateAndLocation",
        });
    });
    router.get('/' + version + "/daily/viewDailyListPostcodesTwoTriggers", function (req, res) {
        res.render(version + "/daily/viewDailyListPostcodesTwoTriggers", {
            'version': version,
            'daily': "/" + version + "/daily/viewDailyTwoTriggers",
            'weekly': "/" + version + "/weekly/viewWeeklyTriggers",
            'search': "/" + version + "/search/searchNewDateAndLocation",
        });
    });

    
    // Weekly view
    router.get('/' + version + "/weekly/viewWeeklyTriggers", function (req, res) {
        res.render(version + "/weekly/viewWeeklyTriggers", {
            'version': version,
            'daily': "/" + version + "/daily/viewDailyTwoTriggers",
            'weekly': "/" + version + "/weekly/viewWeeklyTriggers",
            'search': "/" + version + "/search/searchNewDateAndLocation",
            'listStationsAll': "/" + version + "/weekly/viewWeeklyListStationsAll",
            'listPostcodesAll': "/" + version + "/weekly/viewWeeklyListPostcodesAll",
            'listStations1': "/" + version + "/weekly/viewWeeklyListStations1",
            'listPostcodes1': "/" + version + "/weekly/viewWeeklyListPostcodes1",
            'listStations2': "/" + version + "/weekly/viewWeeklyListStations2",
            'listPostcodes2': "/" + version + "/weekly/viewWeeklyListPostcodes2",
            'listStations3': "/" + version + "/weekly/viewWeeklyListStations3",
            'listPostcodes3': "/" + version + "/weekly/viewWeeklyListPostcodes3",
        });
    });

    // Search 1 (Date and station)
    router.get('/' + version + "/search/searchNewDateAndLocation", function (req, res) {
        res.render(version + "/search/searchNewDateAndLocation", {
            'errorBoth': req.query.errorBoth,
            'error1': req.query.error1,
            'error2': req.query.error2,
            'version': version,
            'daily': "/" + version + "/daily/viewDailyTwoTriggers",
            'weekly': "/" + version + "/weekly/viewWeeklyTriggers",
            'search': "/" + version + "/search/searchNewDateAndLocation",
        });
    });

    router.post('/' + version + "/search/searchNewDateAndLocation", function (req, res) {
        var dateRange = req.session.data['date-range']
        var location = req.session.data['location']

        if (location == undefined && dateRange == undefined) {
            console.log("location= " + location + ", date=" + dateRange);
            res.redirect('/' + version + "/search/searchNewDateAndLocation?errorBoth=true");
        } else if (dateRange == undefined) {
            console.log("location= " + location + ", date=" + dateRange);
            res.redirect('/' + version + "/search/searchNewDateAndLocation?error1=true")
        } else if (location == undefined) {
            console.log("location= " + location + ", date=" + dateRange);
            res.redirect('/' + version + "/search/searchNewDateAndLocation?error2=true")
        } else if (location == "weatherStation"){
            console.log("weather station");
            res.redirect('/' + version + "/search/searchResultDateAndLocation-STATION")
        } else if (location == "postcode"){
            console.log("postcode");
            res.redirect('/' + version + "/search/searchResultDateAndLocation-POSTCODE")
        } else if (location == "everywhere"){
            console.log("all locations");
            res.redirect('/' + version + "/aqd/aqd-search-result-single-day")
        } else {
            console.log("location= " + location + ", date=" + dateRange);
            res.redirect('/' + version + "/search/searchResultDateAndLocation")
        }
    });

    router.get('/' + version + "/search/searchResultDateAndLocation-STATION", function (req, res) {
        res.render(version + "/search/searchResultDateAndLocation-STATION", {
            'version': version,
            'daily': "/" + version + "/daily/viewDailyTwoTriggers",
            'weekly': "/" + version + "/weekly/viewWeeklyTriggers",
            'search': "/" + version + "/search/searchNewDateAndLocation",
            'listPostcodes': "/" + version + "/search/STATION/listPostcodes"
        });
    });

    router.get('/' + version + "/search/STATION/listPostcodes", function (req, res) {
        res.render(version + "/search/STATION/listPostcodes", {
            'version': version,
            'daily': "/" + version + "/daily/viewDailyTwoTriggers",
            'weekly': "/" + version + "/weekly/viewWeeklyTriggers",
            'search': "/" + version + "/search/searchNewDateAndLocation",
        });
    });



    router.get('/' + version + "/search/searchResultDateAndLocation-POSTCODE", function (req, res) {
        res.render(version + "/search/searchResultDateAndLocation-POSTCODE", {
            'version': version,
            'daily': "/" + version + "/daily/viewDailyTwoTriggers",
            'weekly': "/" + version + "/weekly/viewWeeklyTriggers",
            'search': "/" + version + "/search/searchNewDateAndLocation",
        });
    });

    router.get('/' + version + "/search/searchResultDate-ALL", function (req, res) {
        res.render(version + "/search/searchResultDate-ALL", {
            'version': version,
            'daily': "/" + version + "/daily/viewDailyTwoTriggers",
            'weekly': "/" + version + "/weekly/viewWeeklyTriggers",
            'search': "/" + version + "/search/searchNewDateAndLocation",
        });
    });



   // Additional qualifying days

   router.get('/' + version + "/aqd/aqd-search-result-single-day", function (req, res) {
    res.render(version + "/aqd/aqd-search-result-single-day", {
        'version': version,
        'daily': "/" + version + "/daily/viewDailyTwoTriggers",
        'weekly': "/" + version + "/weekly/viewWeeklyTriggers",
        'search': "/" + version + "/search/searchNewDateAndLocation",
        'listPostcodes': "/" + version + "/aqd/viewDailyListPostcodesTwoTriggers",
        'listStations': "/" + version + "/aqd/viewDailyListStationsTwoTriggers",
        'aqd': "/" + version + "/aqd/aqd-summary"
    });
});

router.get('/' + version + "/aqd/aqd-summary", function (req, res) {
    res.render(version + "/aqd/aqd-summary", {
        'version': version,
        'daily': "/" + version + "/daily/viewDailyTwoTriggers",
        'weekly': "/" + version + "/weekly/viewWeeklyTriggers",
        'search': "/" + version + "/search/searchNewDateAndLocation",
        'listPostcodes': "/" + version + "/aqd/adq-list-postcodes-1",
        'listStations': "/" + version + "/aqd/adq-list-stations-1",
    });
});













    //----------------------------


    // One trigger day plus lists
    router.get('/' + version + "/viewDailyOneTrigger", function (req, res) {
        res.render(version + "/viewDailyOneTrigger", {
            'version': version,
            'trigDay1': trigDay1,
            'period1': period1,
            'scan1': scan1,
            'pay1': pay1,
            'dlaScan1': dlaScan1,
            'dlaPay1': dlaPay1,
            'listPostcodes': "/" + version + "/viewDailyListPostcodesOneTrigger",
            'listStations': "/" + version + "/viewDailyListStationsOneTrigger",
            'search': "/" + version + "/searchBlank",
        });
    });

    router.get('/' + version + "/viewDailyListStationsOneTrigger", function (req, res) {
        res.render(version + "/viewDailyListStationsOneTrigger", {
            'trigDay1': trigDay1,
            'period1': period1,
        });
    });

    router.get('/' + version + "/viewDailyListPostcodesOneTrigger", function (req, res) {
        res.render(version + "/viewDailyListPostcodesOneTrigger", {
            'trigDay1': trigDay1,
        });
    });



    // No trigger
    router.get('/' + version + "/viewDailyNoTrigger", function (req, res) {
        res.render(version + "/viewDailyNoTrigger", {
            'version': version,
            'trigDay1': trigDay1,
            'period1': period1,
            'scan1': scan1,
            'pay1': pay1,
            'dlaScan1': dlaScan1,
            'dlaPay1': dlaPay1,
            'listPostcodes': "/" + version + "/viewDailyListPostcodesOneTrigger",
            'listStations': "/" + version + "/viewDailyListStationsOneTrigger",
            'search': "/" + version + "/searchBlank",
        });
    });

    // Trigger not ready
    router.get('/' + version + "/viewDailyNotReady", function (req, res) {
        res.render(version + "/viewDailyNotReady", {
            'version': version,
            'trigDay1': trigDay1,
            'period1': period1,
            'scan1': scan1,
            'pay1': pay1,
            'dlaScan1': dlaScan1,
            'dlaPay1': dlaPay1,
            'listPostcodes': "/" + version + "/viewDailyListPostcodesOneTrigger",
            'listStations': "/" + version + "/viewDailyListStationsOneTrigger",
            'search': "/" + version + "/searchBlank",
        });
    });

    // SEARCH VIEWS ----------------------------------------------------------
    // Search by date
    router.get('/' + version + "/searchNewDateOnly", function (req, res) {
        res.render(version + "/searchNewDateOnly", {
            'errorBoth': req.query.errorBoth,
            'error1': req.query.error1,
            'error2': req.query.error2,
            'version': version,
            'trigDay1': trigDay1,
            'period1': period1,
            'period2': period2,
            'scan1': scan1,
            'pay1': pay1,
            'dlaScan1': dlaScan1,
            'dlaPay1': dlaPay1,
            'listPostcodes': "/" + version + "/viewDailyListPostcodesTwoTriggers",
            'listStations': "/" + version + "/viewDailyListStationsTwoTriggers",
            'search': "/" + version + "/searchBlank",
        });
    });

    router.post('/' + version + "/searchNewDateOnly", function (req, res) {
        var dateRange = req.session.data['date-range']
        // var startDateDay = req.session.data['start-date-day'];
        // var startDateMonth = req.session.data['start-date-month'];
        // var startDateYear = req.session.data['start-date-year'];
        // var endDateDay = req.session.data['end-date-day'];
        // var endDateMonth = req.session.data['end-date-month'];
        // var endDateYear = req.session.data['end-date-year'];
        var location = req.session.data['location']

        if (location == undefined && dateRange == undefined) {
            console.log("location= " + location + ", date=" + dateRange);
            res.redirect('/' + version + "/searchNewDateOnly?errorBoth=true");
        } else if (dateRange == undefined) {
            console.log("location= " + location + ", date=" + dateRange);
            res.redirect('/' + version + "/searchNewDateOnly?error1=true")
        } else if (location == undefined) {
            console.log("location= " + location + ", date=" + dateRange);
            res.redirect('/' + version + "/searchNewDateOnly?error2=true")
        } else {
            console.log("location= " + location + ", date=" + dateRange);
            res.redirect('/' + version + "/searchResultDateOnly")
        }
    });

    router.get('/' + version + "/searchResultDateOnly", function (req, res) {
        res.render(version + "/searchResultDateOnly", {
            'version': version,
            'trigDay1': trigDay1,
            'trigDay2': trigDay2,
            'period1': period1,
            'period2': period2,
            'scan1': scan1,
            'scan2': scan2,
            'pay1': pay1,
            'pay2': pay2,
            'dlaScan1': dlaScan1,
            'dlaScan2': dlaScan2,
            'dlaPay1': dlaPay1,
            'dlaPay2': dlaPay2,
            'listPostcodes': "/" + version + "/searchResultDateOnlyListPostcodes",
            'postcodeListDay1': "/" + version + "/searchResultDateOnlyListPostcodesDay1",
            'postcodeListDay2': "/" + version + "/searchResultDateOnlyListPostcodesDay2",
            'listStations': "/" + version + "/searchResultDateOnlyListStations",
            'stationListDay1': "/" + version + "/searchResultDateOnlyListStationsDay1",
            'stationListDay2': "/" + version + "/searchResultDateOnlyListStationsDay2",
            'search': "/" + version + "/searchNewDateAndStation",
        });
    });

    // Search by date and weather station
    
    router.get('/' + version + "/searchBlank", function (req, res) {
        res.render(version + "/searchBlank", {
            'version': version,
            'daily': "/" + version + "/viewDailyTwoTriggers",
            'weekly': "/" + version + "/viewWeeklyTriggers",
            'search': "/" + version + "/searchBlank",

        });
    });





 
















};

