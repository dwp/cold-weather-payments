module.exports = function (router) {

    const version = "v6";

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


    // Journeys

    // Today views

    router.get('/' + version + "/daily-views/D2a-daily-forecasted", function (req, res) {
        res.render(version + "/daily-views/D2a-daily-forecasted", {
            'version': version,
            'daily': "/" + version + "/daily-views/D2a-daily-forecasted",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
            'listStations': "/" + version + "/location-lists/LW1-weather-daily",
            'listPostcodes': "/" + version + "/location-lists/LP1-postcodes-daily",
        });
    });

    router.get('/' + version + "/daily-views/D2b-daily-forecasted-and-recorded", function (req, res) {
        res.render(version + "/daily-views/D2b-daily-forecasted-and-recorded", {
            'version': version,
            'daily': "/" + version + "/daily-views/D2b-daily-forecasted-and-recorded",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
            'listStations': "/" + version + "/location-lists/LW2a-weather-daily-two-triggers",
            'listPostcodes': "/" + version + "/location-lists/LP2-postcodes-daily-two-triggers",
        });
    });

    // Week views

    router.get('/' + version + "/weekly-views/w2-week-with-triggers", function (req, res) {
        res.render(version + "/weekly-views/w2-week-with-triggers", {
            'version': version,
            'daily': "/" + version + "/daily-views/D2b-daily-forecasted-and-recorded",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
            'listStationsAll': "/" + version + "/location-lists/LW3-weather-multiple-days",
            'listPostcodesAll': "/" + version + "/location-lists/LP3-postcodes-multiple-days",
            'listStations1': "/" + version + "/location-lists/for-weekly/weather-daily-9-Feb",
            'listPostcodes1': "/" + version + "/location-lists/for-weekly/postcodes-daily-9-Feb",
            'listStations2': "/" + version + "/location-lists/for-weekly/weather-daily-8-Feb",
            'listPostcodes2': "/" + version + "/location-lists/for-weekly/postcodes-daily-8-Feb",
            'listStations3': "/" + version + "/location-lists/for-weekly/weather-daily-6-Feb",
            'listPostcodes3': "/" + version + "/location-lists/for-weekly/postcodes-daily-6-Feb",
        });
    });

    router.get('/' + version + "/location-lists/for-weekly/weather-daily-9-Feb", function (req, res) {
        res.render(version + "/location-lists/for-weekly/weather-daily-9-Feb", {
            'version': version,
            'daily': "/" + version + "/daily-views/D2b-daily-forecasted-and-recorded",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });

    // Weather station List views

    router.get('/' + version + "/location-lists/LW2-weather-daily", function (req, res) {
        res.render(version + "/location-lists/LW2-weather-daily", {
            'version': version,
            'daily': "/" + version + "/daily-views/D2b-daily-forecasted",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });

    router.get('/' + version + "/location-lists/LW2a-weather-daily-two-triggers", function (req, res) {
        res.render(version + "/location-lists/LW2a-weather-daily-two-triggers", {
            'version': version,
            'daily': "/" + version + "/daily-views/D2b-daily-forecasted-and-recorded",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });

    router.get('/' + version + "/location-lists/LW3-weather-multiple-days", function (req, res) {
        res.render(version + "/location-lists/LW3-weather-multiple-days", {
            'version': version,
            'daily': "/" + version + "/daily-views/D2b-daily-forecasted-and-recorded",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });

    // Postcodes List views

    router.get('/' + version + "/location-lists/LP2-postcodes-daily", function (req, res) {
        res.render(version + "/location-lists/LP2-postcodes-daily", {
            'version': version,
            'daily': "/" + version + "/daily-views/D2b-daily-forecasted",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });

    router.get('/' + version + "/location-lists/LP2-postcodes-daily-two-triggers", function (req, res) {
        res.render(version + "/location-lists/LP2-postcodes-daily-two-triggers", {
            'version': version,
            'daily': "/" + version + "/daily-views/D2b-daily-forecasted-and-recorded",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });


    // Search

    router.get('/' + version + "/search/S-search-journey-select", function (req, res) {
        res.render(version + "/search/S-search-journey-select", {
            'error': req.query.error,
            'version': version,
            'daily': "/" + version + "/daily-views/D2b-daily-forecasted-and-recorded",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });

    router.post('/' + version + "/search/S-search-journey-select", function (req, res) {
        var journey = req.session.data['journey-select'];
        if (journey == undefined) {
            res.redirect('/' + version + "/S-search-journey-select?error=true")
        } else if (journey == "agent") {
            res.redirect('/' + version + "/search/S1-search-postcode")
        } else {
            res.redirect('/' + version + "/search/S2a-search-when")
        }     
    });

    router.get('/' + version + "/search/S1-search-postcode", function (req, res) {
        res.render(version + "/search/S1-search-postcode", {
            'error': req.query.error,
            'version': version,
            'daily': "/" + version + "/daily-views/D2b-daily-forecasted-and-recorded",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });

    router.post('/' + version + "/search/S1-search-postcode", function (req, res) {
        var citizenPostcode = req.session.data['citizen-postcode']

        if (citizenPostcode == undefined) {
            res.redirect('/' + version + "/search/SR8-citizen-postcode")
        } else {
            res.redirect('/' + version + "/search/SR8-citizen-postcode")
        }
    });

    router.get('/' + version + "/search/S2a-search-when", function (req, res) {
        res.render(version + "/search/S2a-search-when", {
            'error1': req.query.error1,
            'version': version,
            'daily': "/" + version + "/daily-views/D2b-daily-forecasted-and-recorded",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });

    router.post('/' + version + "/search/S2a-search-when", function (req, res) {
        var dateRange = req.session.data['date-range']

        if (dateRange == undefined) {
            res.redirect('/' + version + "/search/S1a-search-when?error1=true")
        } else {
            res.redirect('/' + version + "/search/S2b-search-where")
        }
    });

    router.get('/' + version + "/search/S2b-search-where", function (req, res) {
        res.render(version + "/search/S2b-search-where", {
            'error1': req.query.error1,
            'version': version,
            'daily': "/" + version + "/daily-views/D2b-daily-forecasted-and-recorded",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });

    router.post('/' + version + "/search/S2b-search-where", function (req, res) {
        var location = req.session.data['location']
        var dateRange = req.session.data['date-range']
        console.log("location= " + location);
        console.log("Date=" + dateRange);

        if (location == undefined) {
            console.log("location= " + location);
            res.redirect('/' + version + "/search/S2b-search-where?error1=true")
        } else if (dateRange == "single" && location == "everywhere") {
            res.redirect('/' + version + "/search/SR2-single-day-all-locations")
        } else if (dateRange == "single" && location == "postcode") {
            res.redirect('/' + version + "/search/SR3-single-day-postcode")
        } else if (dateRange == "single" && location == "weatherStation") {
            res.redirect('/' + version + "/search/SR4-single-day-weather")
        } else if (dateRange == "range" && location == "everywhere") {
            res.redirect('/' + version + "/search/SR5-range-all-locations")
        } else if (dateRange == "range" && location == "postcode") {
            res.redirect('/' + version + "/search/SR6-range-postcode")
        } else if (dateRange == "range" && location == "weatherStation") {
            res.redirect('/' + version + "/search/SR7-range-weather")
        } else if (dateRange == "whole" && location == "everywhere") {
            res.redirect('/' + version + "/search/not-yet-done")
        } else if (dateRange == "whole" && location == "postcode") {
            res.redirect('/' + version + "/search/not-yet-done")
        } else if (dateRange == "whole" && location == "weatherStation") {
            res.redirect('/' + version + "/search/not-yet-done")
        } else {
            res.redirect('/' + version + "/search/gone-wrong")
        }
    });






    //-- Search result variations

    router.get('/' + version + "/search/SR1-no-results", function (req, res) {
        res.render(version + "/search/SR1-no-results", {
            'version': version,
            'daily': "/" + version + "/daily-views/D2b-daily-forecasted-and-recorded",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
            // 'search-reset': "/" + version + "/search/S2a-search-when",
        });
    });

    router.get('/' + version + "/search/SR2-single-day-all-locations", function (req, res) {
        res.render(version + "/search/SR2-single-day-all-locations", {
            'version': version,
            'daily': "/" + version + "/daily-views/D2b-daily-forecasted-and-recorded",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
            'aqd': "/" + version + "/search/A1-aqd-summary",
            'listStations': "/" + version + "/location-lists/for-aqd/LW2a-weather-daily-two-triggers-with-aqd",
            'listPostcodes': "/" + version + "/location-lists/LP2-postcodes-daily-two-triggers",
        });
    });

    router.get('/' + version + "/search/SR3-single-day-postcode", function (req, res) {
        res.render(version + "/search/SR3-single-day-postcode", {
            'version': version,
            'daily': "/" + version + "/daily-views/D2b-daily-forecasted-and-recorded",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });

    router.get('/' + version + "/search/SR4-single-day-weather", function (req, res) {
        res.render(version + "/search/SR4-single-day-weather", {
            'version': version,
            'daily': "/" + version + "/daily-views/D2b-daily-forecasted-and-recorded",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });


    router.get('/' + version + "/search/SR5-range-all-locations", function (req, res) {
        res.render(version + "/search/SR5-range-all-locations", {
            'version': version,
            'daily': "/" + version + "/daily-views/D2b-daily-forecasted-and-recorded",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
            'aqd': "/" + version + "/search/A1-aqd-summary",
        });
    });

    router.get('/' + version + "/search/SR6-range-postcode", function (req, res) {
        res.render(version + "/search/SR6-range-postcode", {
            'version': version,
            'daily': "/" + version + "/daily-views/D2b-daily-forecasted-and-recorded",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
            'aqd': "/" + version + "/search/A1-aqd-summary-UR2",
        });
    });

    router.get('/' + version + "/search/SR7-range-weather", function (req, res) {
        res.render(version + "/search/SR7-range-weather", {
            'version': version,
            'daily': "/" + version + "/daily-views/D2b-daily-forecasted-and-recorded",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });

    router.get('/' + version + "/search/SR8-citizen-postcode", function (req, res) {
        res.render(version + "/search/SR8-citizen-postcode", {
            'version': version,
            'daily': "/" + version + "/daily-views/D2b-daily-forecasted-and-recorded",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });



    //-------AQD summaries

    router.get('/' + version + "/search/A1-aqd-summary", function (req, res) {
        res.render(version + "/search/A1-aqd-summary", {
            'version': version,
            'daily': "/" + version + "/daily-views/D2b-daily-forecasted-and-recorded",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });

    router.get('/' + version + "/search/A1-aqd-summary-UR", function (req, res) {
        res.render(version + "/search/A1-aqd-summary-UR", {
            'version': version,
            'daily': "/" + version + "/daily-views/D2b-daily-forecasted-and-recorded",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });

    router.get('/' + version + "/search/A1-aqd-summary-UR2", function (req, res) {
        res.render(version + "/search/A1-aqd-summary-UR2", {
            'version': version,
            'daily': "/" + version + "/daily-views/D2b-daily-forecasted-and-recorded",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });













    //----------------------------------------PREVIOUS SPRINTS-------------------------



    router.get('/' + version + "/search/S1-new-search", function (req, res) {
        res.render(version + "/search/S1-new-search", {
            'errorBoth': req.query.errorBoth,
            'error1': req.query.error1,
            'error2': req.query.error2,
            'version': version,
            'daily': "/" + version + "/daily-views/D2b-daily-forecasted-and-recorded",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });

    router.post('/' + version + "/search/S1-new-search", function (req, res) {
        var dateRange = req.session.data['date-range']
        var location = req.session.data['location']

        if (location == undefined && dateRange == undefined) {
            console.log("location= " + location + ", date=" + dateRange);
            res.redirect('/' + version + "/search/S1-new-search?errorBoth=true");
        } else if (dateRange == undefined) {
            console.log("location= " + location + ", date=" + dateRange);
            res.redirect('/' + version + "/search/S1-new-search?error1=true")
        } else if (location == undefined) {
            console.log("location= " + location + ", date=" + dateRange);
            res.redirect('/' + version + "/search/S1-new-search?error2=true")
        } else if (location == "weatherStation") {
            console.log("weather station");
            res.redirect('/' + version + "/search/not-yet-done")
        } else if (location == "postcode") {
            console.log("postcode");
            res.redirect('/' + version + "/search/not-yet-done")
        } else if (location == "everywhere" && dateRange == "single") {
            console.log("all locations, single date");
            res.redirect('/' + version + "/search/SR1-result-single-day")
        } else if (location == "everywhere" && dateRange == "range") {
            console.log("all locations, single date");
            res.redirect('/' + version + "/search/SR2-result-multiple-days")
        } else {
            console.log("location= " + location + ", date=" + dateRange);
            res.redirect('/' + version + "/search/not-yet-done")
        }
    });



    // SR1 Results

    router.get('/' + version + "/search/SR1-result-single-day", function (req, res) {
        res.render(version + "/search/SR1-result-single-day", {
            'version': version,
            'daily': "/" + version + "/daily-views/D2a-daily-forecasted",
            'weekly': "/" + version + "/weekly-views/w1-weekly-no-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
            'listStations': "/" + version + "/location-lists/LW2a-weather-daily-two-triggers",
            'listPostcodes': "/" + version + "/location-lists/LP2-postcodes-daily-two-triggers",
            'aqd': "/" + version + "/search/A1-aqd-summary"
        });
    });

    router.get('/' + version + "/search/SR2-result-multiple-days", function (req, res) {
        res.render(version + "/search/SR2-result-multiple-days", {
            'version': version,
            'daily': "/" + version + "/daily-views/D2a-daily-forecasted",
            'weekly': "/" + version + "/weekly-views/w1-weekly-no-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
            'listStationsDay2': "/" + version + "/location-lists/LW2a-weather-daily-two-triggers",
            'listPostcodesDay2': "/" + version + "/location-lists/LP2-postcodes-daily-two-triggers",
            'aqd': "/" + version + "/search/A1-aqd-summary"
        });
    });

    router.get('/' + version + "/search/A1-aqd-summary", function (req, res) {
        res.render(version + "/search/A1-aqd-summary", {
            'version': version,
            'daily': "/" + version + "/daily-views/D2a-daily-forecasted",
            'weekly': "/" + version + "/weekly-views/w1-weekly-no-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
            'listPostcodes': "/" + version + "/",
            'listStations': "/" + version + "/",
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

