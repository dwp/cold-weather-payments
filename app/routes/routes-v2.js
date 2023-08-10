module.exports = function (router) {

    const version = "v2";

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
    // Scenario 3
    const trigDay3 = "Tuesday 10 January 2023"
    const period3 = "3 Jan 2023 to 9 Jan 2023"
    const scan3 = "13 January 2023";
    const pay3 = "18 January";
    const dlaScan3 = "18 January";
    const dlaPay3 = "23 January";
    // TRIGGER WEEK DATA
    // Scenario 4
    const dateRange4 = "10 February 2023 to 16 February 2023"
    const dateShort4 = "10 Feb 2023 to 16 Feb 2023"
    // Scenario 5
    const dateRange5 = "9 December 2022 to 15 December 2022"
    const dateShort5 = "9 Dec 2022 to 15 Dec 2022"


    
    // DAILY VIEWS ----------------------------------------------------------
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

    // Two trigger day plus lists
    router.get('/' + version + "/viewDailyTwoTriggers", function (req, res) {
        res.render(version + "/viewDailyTwoTriggers", {
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

    router.get('/' + version + "/viewDailyListStationsTwoTriggers", function (req, res) {
        res.render(version + "/viewDailyListStationsTwoTriggers", {
            'trigDay1': trigDay1,
            'period1': period1,
        });
    });

    router.get('/' + version + "/viewDailyListPostcodesTwoTriggers", function (req, res) {
        res.render(version + "/viewDailyListPostcodesTwoTriggers", {
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

        if (location == undefined && dateRange == undefined ) {
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
            'postcodeListDay1':"/" + version + "/searchResultDateOnlyListPostcodesDay1",
            'postcodeListDay2':"/" + version + "/searchResultDateOnlyListPostcodesDay2",
            'listStations': "/" + version + "/searchResultDateOnlyListStations",
            'stationListDay1':"/" + version + "/searchResultDateOnlyListStationsDay1",
            'stationListDay2':"/" + version + "/searchResultDateOnlyListStationsDay2",
            'search': "/" + version + "/searchNewDateAndStation",
        });
    });

      // Search by date and weather station
      router.get('/' + version + "/searchNewDateAndStation", function (req, res) {
        res.render(version + "/searchNewDateAndStation", {
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

    router.post('/' + version + "/searchNewDateAndStation", function (req, res) {
        var dateRange = req.session.data['date-range']
        // var startDateDay = req.session.data['start-date-day'];
        // var startDateMonth = req.session.data['start-date-month'];
        // var startDateYear = req.session.data['start-date-year'];
        // var endDateDay = req.session.data['end-date-day'];
        // var endDateMonth = req.session.data['end-date-month'];
        // var endDateYear = req.session.data['end-date-year'];
        var location = req.session.data['location']

        if (location == undefined && dateRange == undefined ) {
            console.log("location= " + location + ", date=" + dateRange);
            res.redirect('/' + version + "/searchNewDateAndStation?errorBoth=true");
        } else if (dateRange == undefined) {
            console.log("location= " + location + ", date=" + dateRange);
            res.redirect('/' + version + "/searchNewDateAndStation?error1=true")
        } else if (location == undefined) {
            console.log("location= " + location + ", date=" + dateRange);
            res.redirect('/' + version + "/searchNewDateAndStation?error2=true")
        } else {
            console.log("location= " + location + ", date=" + dateRange);
            res.redirect('/' + version + "/searchResultDateAndStation")
        }
    });

    router.get('/' + version + "/searchResultDateAndStation", function (req, res) {
        res.render(version + "/searchResultDateAndStation", {
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
            'listPostcodes': "/" + version + "/searchResultDateAndStationListPostcodes",
            'postcodeListDay1':"/" + version + "/searchResultDateOnlyListPostcodesDay1",
            'postcodeListDay2':"/" + version + "/searchResultDateOnlyListPostcodesDay2",
            'listStations': "/" + version + "/searchResultDateAndStationListStations",
            'stationListDay1':"/" + version + "/searchResultDateOnlyListStationsDay1",
            'stationListDay2':"/" + version + "/searchResultDateOnlyListStationsDay2",
            'search': "/" + version + "/searchNewDateAndStation",
        });
    });





        // WEEKLY SUMMARY ----------------------------------------------------------

        router.get('/' + version + "/viewWeeklyTriggers", function (req, res) {
            res.render(version + "/viewWeeklyTriggers", {
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
                'postcodeListDay1':"/" + version + "/searchResultDateOnlyListPostcodesDay1",
                'postcodeListDay2':"/" + version + "/searchResultDateOnlyListPostcodesDay2",
                'listStations': "/" + version + "/searchResultDateOnlyListStations",
                'stationListDay1':"/" + version + "/searchResultDateOnlyListStationsDay1",
                'stationListDay2':"/" + version + "/searchResultDateOnlyListStationsDay2",
                'search': "/" + version + "/searchNewDateOnly",
            });
        });
















};

