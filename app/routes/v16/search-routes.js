module.exports = function (router) {

    const version = "v16";


    
    
    // Set default nav links ------------------------------
    let navAbout = "/" + version + "/check-cold-weather-payments/about-this-service-A1";
    let navToday = "/" + version + "/check-cold-weather-payments/todays-trigger-data-D2a";
    let navWeekly = "/" + version + "/check-cold-weather-payments/weekly-summary-W2";
    let navSearch = "/" + version + "/check-cold-weather-payments/what-do-you-want-to-do";
    let navSettings = "/" + version + "/notifications/N5-enter-email-address";


    //---------------------------------------------------------------------------------------------------------------
    // S Start search journey
    router.get('/' + version + "/check-cold-weather-payments/what-do-you-want-to-do", function (req, res) {
        // Set search year
        let year = "thisYear";
        // Set active navigation tab
        aboutActive = false;
        dailyActive = false;
        weeklyActive = false;
        searchActive = true;
        res.render(version + "/check-cold-weather-payments/search/what-do-you-want-to-do-S", {
            'version': version,
            'error': req.query.error,
            // Navigation settings
            'aboutActive': aboutActive,
            'dailyActive': dailyActive,
            'weeklyActive': weeklyActive,
            'searchActive': searchActive,
           'about': navAbout,
            'daily': navToday,
            'weekly': navWeekly,
            'search': navSearch,
            'settings': navSettings,
            'year': year,
        });
    });

                        router.post('/' + version + "/check-cold-weather-payments/what-do-you-want-to-do", function (req, res) {
                            var journey = req.session.data['journey-select'];
                            if (journey == undefined) {
                                res.redirect('/' + version + "/check-cold-weather-payments/what-do-you-want-to-do?error=true")
                            } else if (journey == "agent") {
                                res.redirect('/' + version + "/check-cold-weather-payments/citizen-location")
                            } else if (journey == "previous") {
                                res.redirect('/' + version + "/beta-drafts/select-season")
                            } else {
                                res.redirect('/' + version + "/check-cold-weather-payments/search-by-time-period")
                            }
                        });

    router.get('/' + version + "/check-cold-weather-payments/what-do-you-want-to-do-year-1", function (req, res) {
        // Set search year
        let year = "year1";
        // Set active navigation tab
        aboutActive = false;
        dailyActive = false;
        weeklyActive = false;
        searchActive = true;
        res.render(version + "/check-cold-weather-payments/search/what-do-you-want-to-do-S", {
            'version': version,
            'error': req.query.error,
            // Navigation settings
            'aboutActive': aboutActive,
            'dailyActive': dailyActive,
            'weeklyActive': weeklyActive,
            'searchActive': searchActive,
           'about': navAbout,
            'daily': navToday,
            'weekly': navWeekly,
            'search': navSearch,
            'settings': navSettings,
            'year': year,
        });
    });
                        router.post('/' + version + "/check-cold-weather-payments/what-do-you-want-to-do-year-1", function (req, res) {
                            var journey = req.session.data['journey-select'];
                            if (journey == undefined) {
                                res.redirect('/' + version + "/check-cold-weather-payments/what-do-you-want-to-do?error=true")
                            } else if (journey == "agent") {
                                res.redirect('/' + version + "/check-cold-weather-payments/citizen-location")
                            } else if (journey == "previous-year2") {
                                res.redirect('/' + version + "/check-cold-weather-payments/search-by-time-period")
                            } else {
                                res.redirect('/' + version + "/check-cold-weather-payments/search-by-time-period")
                            }
                        });
    

    router.get('/' + version + "/check-cold-weather-payments/what-do-you-want-to-do-year-2-radios", function (req, res) {
        // Set search year
        let year = "year2";
        // Set active navigation tab
        aboutActive = false;
        dailyActive = false;
        weeklyActive = false;
        searchActive = true;
        res.render(version + "/check-cold-weather-payments/search/what-do-you-want-to-do-S", {
            'version': version,
            'error': req.query.error,
            // Navigation settings
            'aboutActive': aboutActive,
            'dailyActive': dailyActive,
            'weeklyActive': weeklyActive,
            'searchActive': searchActive,
           'about': navAbout,
            'daily': navToday,
            'weekly': navWeekly,
            'search': navSearch,
            'settings': navSettings,
            'year': year,
        });
    });

                        router.post('/' + version + "/check-cold-weather-payments/what-do-you-want-to-do-year-2-radios", function (req, res) {
                            var journey = req.session.data['journey-select'];
                            if (journey == undefined) {
                                res.redirect('/' + version + "/check-cold-weather-payments/what-do-you-want-to-do?error=true")
                            } else if (journey == "agent") {
                                res.redirect('/' + version + "/check-cold-weather-payments/citizen-location")
                            } else if (journey == "previous-year2") {
                                res.redirect('/' + version + "/beta-drafts/select-season")
                            } else {
                                res.redirect('/' + version + "/check-cold-weather-payments/search-by-time-period")
                            }
                        });

    router.get('/' + version + "/check-cold-weather-payments/what-do-you-want-to-do-year-2-input", function (req, res) {
        // Set search year
        let year = "year2";
        // Set active navigation tab
        aboutActive = false;
        dailyActive = false;
        weeklyActive = false;
        searchActive = true;
        res.render(version + "/check-cold-weather-payments/search/what-do-you-want-to-do-S", {
            'version': version,
            'error': req.query.error,
            // Navigation settings
            'aboutActive': aboutActive,
            'dailyActive': dailyActive,
            'weeklyActive': weeklyActive,
            'searchActive': searchActive,
           'about': navAbout,
            'daily': navToday,
            'weekly': navWeekly,
            'search': navSearch,
            'settings': navSettings,
            'year': year,
        });
    });

                        router.post('/' + version + "/check-cold-weather-payments/what-do-you-want-to-do-year-2-input", function (req, res) {
                            var journey = req.session.data['journey-select'];
                            if (journey == undefined) {
                                res.redirect('/' + version + "/check-cold-weather-payments/what-do-you-want-to-do?error=true")
                            } else if (journey == "agent") {
                                res.redirect('/' + version + "/check-cold-weather-payments/citizen-location")
                            } else if (journey == "previous-year2") {
                                res.redirect('/' + version + "/beta-drafts/enter-season")
                            } else {
                                res.redirect('/' + version + "/check-cold-weather-payments/search-by-time-period")
                            }
                        });



    //---------------------------------------------------------------------------------------------------------------
    // S1 + SR1: Agent journey

    router.get('/' + version + "/check-cold-weather-payments/citizen-location", function (req, res) {
        res.render(version + "/check-cold-weather-payments/search/citizen-location-S1", {
            'version': version,
            'error': req.query.error,
            // Navigation settings
           'about': navAbout,
            'daily': navToday,
            'weekly': navWeekly,
            'search': navSearch,
            'settings': navSettings,
        });
    });

                        router.post('/' + version + "/check-cold-weather-payments/citizen-location", function (req, res) {
                            var citizenPostcode = req.session.data['citizen-postcode']
                            if (citizenPostcode === undefined || citizenPostcode === "") {
                                res.redirect('/' + version + "/check-cold-weather-payments/citizen-location?error=true")
                            } else {
                                res.redirect('/' + version + "/check-cold-weather-payments/payment-data-for-postcode")
                            }
                        });
    
    router.get('/' + version + "/check-cold-weather-payments/payment-data-for-postcode", function (req, res) {
        res.render(version + "/check-cold-weather-payments/search/payment-data-for-postcode-SR1", {
            'version': version,
            // Navigation settings
           'about': navAbout,
            'daily': navToday,
            'weekly': navWeekly,
            'search': navSearch,
            'settings': navSettings,
        });
    });


    //---------------------------------------------------------------------------------------------------------------
    // S2a: Search by time period (When)

    router.get('/' + version + "/check-cold-weather-payments/search-by-time-period", function (req, res) {
        let year1 = true;
        let year2 = false;
        let year3plus = false;
        let selectYear = req.session.data["journey-select"];
        console.log(selectYear);
        if (selectYear === "2425") {
            year1 = false;
            year2 = true;
        }
        res.render(version + "/check-cold-weather-payments/search/search-by-time-period-S2a", {
            'version': version,
            'error': req.query.error,
            // Navigation settings
           'about': navAbout,
            'daily': navToday,
            'weekly': navWeekly,
            'search': navSearch,
            'settings': navSettings,
            // Dates
            'year1': year1,
            'year2': year2,
            'year3plus': year3plus,
        });
    });

                        router.post('/' + version + "/check-cold-weather-payments/search-by-time-period", function (req, res) {
                            var dateRange = req.session.data['date-range']

                            if (dateRange == undefined) {
                                res.redirect('/' + version + "/check-cold-weather-payments/search-by-time-period?error=true")
                            } else if (dateRange == "single") {
                                res.redirect('/' + version + "/check-cold-weather-payments/search-by-time-period-single-S2c")
                            } else if (dateRange == "range") {
                                res.redirect('/' + version + "/check-cold-weather-payments/search-by-time-period-range-S2d")
                            } else {
                                res.redirect('/' + version + "/check-cold-weather-payments/search-by-location")
                            }
                        });

    router.get('/' + version + "/check-cold-weather-payments/search/search-by-time-period-range-S2d-error-example", function (req, res) {
        res.render(version + "/check-cold-weather-payments/search/search-by-time-period-range-S2d-error-example", {
            'version': version,
            'error': req.query.error,
            // Navigation settings
           'about': navAbout,
            'daily': navToday,
            'weekly': navWeekly,
            'search': navSearch,
            'settings': navSettings,
        });
    });

    router.get('/' + version + "/check-cold-weather-payments/search/search-by-time-period-S2a-error-example-2", function (req, res) {
        res.render(version + "/check-cold-weather-payments/search/search-by-time-period-S2a-error-example-2", {
            'version': version,
            'error': req.query.error,
            // Navigation settings
           'about': navAbout,
            'daily': navToday,
            'weekly': navWeekly,
            'search': navSearch,
            'settings': navSettings,
        });
    });

    router.get('/' + version + "/check-cold-weather-payments/search-by-time-period-single-S2c", function (req, res) {
        res.render(version + "/check-cold-weather-payments/search/search-by-time-period-single-S2c", {
            'version': version,
            'error': req.query.error,
            // Navigation settings
           'about': navAbout,
            'daily': navToday,
            'weekly': navWeekly,
            'search': navSearch,
            'settings': navSettings,
        });
    });

                        router.post('/' + version + "/check-cold-weather-payments/search-by-time-period-single-S2c", function (req, res) {
                            res.redirect('/' + version + "/check-cold-weather-payments/search-by-location")
                        });

    router.get('/' + version + "/check-cold-weather-payments/search-by-time-period-range-S2d", function (req, res) {
        res.render(version + "/check-cold-weather-payments/search/search-by-time-period-range-S2d", {
            'version': version,
            'error': req.query.error,
            // Navigation settings
           'about': navAbout,
            'daily': navToday,
            'weekly': navWeekly,
            'search': navSearch,
            'settings': navSettings,
        });
    });

                        router.post('/' + version + "/check-cold-weather-payments/search-by-time-period-range-S2d", function (req, res) {
                            res.redirect('/' + version + "/check-cold-weather-payments/search-by-location")
                        });

    //---------------------------------------------------------------------------------------------------------------
    // S2b: Search by location (Where)

    router.get('/' + version + "/check-cold-weather-payments/search-by-location", function (req, res) {
        let range = true
        var dateRange = req.session.data['date-range']
        if (dateRange === 'single') {
            range = false
        };
        res.render(version + "/check-cold-weather-payments/search/search-by-location-S2b", {
            'version': version,
            'error': req.query.error,
            // Navigation settings
           'about': navAbout,
            'daily': navToday,
            'weekly': navWeekly,
            'search': navSearch,
            'settings': navSettings,
            'range' : range
        });
    });

                        router.post('/' + version + "/check-cold-weather-payments/search-by-location", function (req, res) {
                            var location = req.session.data['location']
                            var dateRange = req.session.data['date-range']

                            if (location == undefined) {
                                console.log("location= " + location);
                                res.redirect('/' + version + "/check-cold-weather-payments/search-by-location?error=true")
                                // SR2 Single date, all locations
                            } else if (dateRange == "single") {
                                res.redirect('/' + version + "/check-cold-weather-payments/search-previous-data-results-SR2")
                            } 
                                // SR3a Range, Everywhere in England and Wales
                            else if (dateRange == "range" && location == "everywhere-ENG") {
                                res.redirect('/' + version + "/check-cold-weather-payments/search-previous-data-results-SR3a")
                            } 
                                // SR3a Range, Everywhere in Northern Ireland
                            else if (dateRange == "range" && location == "everywhere-NI") {
                                res.redirect('/' + version + "/check-cold-weather-payments/search-previous-data-results-SR3a-NI")
                            } 
                                // SR3a Whole season, Everywhere in England and Wales
                            else if (dateRange == "whole" && location == "everywhere-ENG") {
                                res.redirect('/' + version + "/check-cold-weather-payments/search-previous-data-results-SR3b")
                            } 
                                // SR3a Whole season, Everywhere in Northern Ireland
                            else if (dateRange == "whole" && location == "everywhere-NI") {
                                res.redirect('/' + version + "/check-cold-weather-payments/search-previous-data-results-SR3b-NI")
                            }
                                // SR4a Range, Weather station
                            else if (dateRange == "range" && location == "weatherStation") {
                                res.redirect('/' + version + "/check-cold-weather-payments/search/search-by-location-weather-station-S2e")
                                // res.redirect('/' + version + "/check-cold-weather-payments/search-previous-data-results-SR4a")
                            } 
                                // SR4b Whole season, Weather station
                            else if (dateRange == "whole" && location == "weatherStation") {
                                res.redirect('/' + version + "/check-cold-weather-payments/search/search-by-location-weather-station-S2e")
                                // res.redirect('/' + version + "/check-cold-weather-payments/search-previous-data-results-SR4b")
                            }
                                // SR5a Range, Postcode   
                            else if (dateRange == "range" && location == "postcode") {
                                res.redirect('/' + version + "/check-cold-weather-payments/search/search-by-location-postcode-S2f")
                                // res.redirect('/' + version + "/check-cold-weather-payments/search-previous-data-results-SR5a")
                            } 
                                // SR5b Whole season, Postcode   
                            else if (dateRange == "whole" && location == "postcode") {
                                res.redirect('/' + version + "/check-cold-weather-payments/search/search-by-location-postcode-S2f")
                                // res.redirect('/' + version + "/check-cold-weather-payments/search-previous-data-results-SR5b")
                            } 
                            else {
                                res.redirect('/' + version + "/search/gone-wrong")
                            }
                        });

    //---------------------------------------------------------------------------------------------------------------
    // S2e: Enter weather station or postcode

    router.get('/' + version + "/check-cold-weather-payments/search/search-by-location-weather-station-S2e", function (req, res) {
        res.render(version + "/check-cold-weather-payments/search/search-by-location-weather-station-S2e", {
            'version': version,
            'error': req.query.error,
            // Navigation settings
           'about': navAbout,
            'daily': navToday,
            'weekly': navWeekly,
            'search': navSearch,
            'settings': navSettings,
        });
    });

                        router.post('/' + version + "/check-cold-weather-payments/search/search-by-location-weather-station-S2e", function (req, res) {
                            var location = req.session.data['location']
                            var dateRange = req.session.data['date-range']
                            // SR4a Range, Weather station
                            if (dateRange == "range" && location == "weatherStation") {
                                res.redirect('/' + version + "/check-cold-weather-payments/search-previous-data-results-SR4a")
                            } 
                                // SR4b Whole season, Weather station
                            // else if (dateRange == "whole" && location == "weatherStation") 
                            else {
                                res.redirect('/' + version + "/check-cold-weather-payments/search-previous-data-results-SR4b")
                            }
                        });

    router.get('/' + version + "/check-cold-weather-payments/search/search-by-location-postcode-S2f", function (req, res) {
        res.render(version + "/check-cold-weather-payments/search/search-by-location-postcode-S2f", {
            'version': version,
            'error': req.query.error,
            // Navigation settings
           'about': navAbout,
            'daily': navToday,
            'weekly': navWeekly,
            'search': navSearch,
            'settings': navSettings,
        });
    });

                        router.post('/' + version + "/check-cold-weather-payments/search/search-by-location-postcode-S2f", function (req, res) {
                            var location = req.session.data['location']
                            var dateRange = req.session.data['date-range']
                            // SR4a Range, Weather station
                            if (dateRange == "range" && location == "postcode") {
                                res.redirect('/' + version + "/check-cold-weather-payments/search-previous-data-results-SR5a")
                            } 
                                // SR4b Whole season, Weather station
                            // else if (dateRange == "whole" && location == "weatherStation") 
                            else {
                                res.redirect('/' + version + "/check-cold-weather-payments/search-previous-data-results-SR5b")
                            }
                        });

    //---------------------------------------------------------------------------------------------------------------
    // SR2: Single day search result

    router.get('/' + version + "/check-cold-weather-payments/search-previous-data-results-SR2", function (req, res) {
        var northernIreland = false
        var location = req.session.data['location']
        if (location == "everywhere-NI") {
            northernIreland = true
        };
        res.render(version + "/check-cold-weather-payments/search/search-previous-data-results-SR2", {
            'version': version,
            // Navigation settings
           'about': navAbout,
            'daily': navToday,
            'weekly': navWeekly,
            'search': navSearch,
            'settings': navSettings,
            // Country toggle
            'NI': northernIreland,
            'toggle': '/' + version + "/check-cold-weather-payments/search-previous-data-results-NI-SR2",
            // Additional Qualifying Days
            'aqd': '/' + version + "/check-cold-weather-payments/aqd-summary-A1",
        });
    });

                        router.get('/' + version + "/check-cold-weather-payments/aqd-summary-A1", function (req, res) {
                            res.render(version + "/check-cold-weather-payments/search/aqd-summary-A1", {
                                'version': version,
                                // Navigation settings
                                'about': navAbout,
                                'daily': navToday,
                                'weekly': navWeekly,
                                'search': navSearch,
                                'originalTriggerDayData': '/' + version + "/check-cold-weather-payments/search-previous-data-results-SR2",
                            });
                        });

    router.get('/' + version + "/check-cold-weather-payments/search-previous-data-results-NI-SR2", function (req, res) {
        res.render(version + "/check-cold-weather-payments/search/search-previous-data-results-SR2", {
            'version': version,
            'error': req.query.error,
            // Navigation settings
           'about': navAbout,
            'daily': navToday,
            'weekly': navWeekly,
            'search': navSearch,
            'settings': navSettings,
            // Country toggle
            'NI': true,
            'toggle': '/' + version + "/check-cold-weather-payments/search-previous-data-results-SR2",
            // Additional Qualifying Days
            'aqd': '/' + version + "/check-cold-weather-payments/aqd-summary-A1-NI",
        });
    });

                        router.get('/' + version + "/check-cold-weather-payments/aqd-summary-A1-NI", function (req, res) {
                            res.render(version + "/check-cold-weather-payments/search/aqd-summary-A1", {
                                'version': version,
                                // Navigation settings
                                'about': navAbout,
                                'daily': navToday,
                                'weekly': navWeekly,
                                'search': navSearch,
                                'originalTriggerDayData': '/' + version + "/check-cold-weather-payments/search-previous-data-results-SR2",
                                'NI': true,
                            });
                        });

    //---------------------------------------------------------------------------------------------------------------
    // SR3a & 3b: Range / Whole season, Everywhere

    router.get('/' + version + "/check-cold-weather-payments/search-previous-data-results-SR3a", function (req, res) {
        res.render(version + "/check-cold-weather-payments/search/search-previous-data-results-SR3a", {
            'version': version,
            // Navigation settings
           'about': navAbout,
            'daily': navToday,
            'weekly': navWeekly,
            'search': navSearch,
            'settings': navSettings,
        });
    });

    router.get('/' + version + "/check-cold-weather-payments/search-previous-data-results-SR3a-NI", function (req, res) {
        res.render(version + "/check-cold-weather-payments/search/search-previous-data-results-SR3a", {
            'version': version,
            // Navigation settings
           'about': navAbout,
            'daily': navToday,
            'weekly': navWeekly,
            'search': navSearch,
            'settings': navSettings,
            'NI': true,
        });
    });

    router.get('/' + version + "/check-cold-weather-payments/search-previous-data-results-SR3b", function (req, res) {
        res.render(version + "/check-cold-weather-payments/search/search-previous-data-results-SR3b", {
            'version': version,
            // Navigation settings
           'about': navAbout,
            'daily': navToday,
            'weekly': navWeekly,
            'search': navSearch,
            'settings': navSettings,
        });
    });

    router.get('/' + version + "/check-cold-weather-payments/search-previous-data-results-SR3b-NI", function (req, res) {
        res.render(version + "/check-cold-weather-payments/search/search-previous-data-results-SR3b", {
            'version': version,
            // Navigation settings
           'about': navAbout,
            'daily': navToday,
            'weekly': navWeekly,
            'search': navSearch,
            'settings': navSettings,
            'NI': true,
        });
    });

    //---------------------------------------------------------------------------------------------------------------
    // SR4a & 4b: Range / Whole season, Weather station

    router.get('/' + version + "/check-cold-weather-payments/search-previous-data-results-SR4a", function (req, res) {
        res.render(version + "/check-cold-weather-payments/search/search-previous-data-results-SR4a", {
            'version': version,
            // Navigation settings
           'about': navAbout,
            'daily': navToday,
            'weekly': navWeekly,
            'search': navSearch,
            'settings': navSettings,
            // Location list
            'listPostcodes': '/' + version + "/location-lists/LP4-postcodes-weather-station-result",
        });
    });

    router.get('/' + version + "/check-cold-weather-payments/search-previous-data-results-SR4b", function (req, res) {
        res.render(version + "/check-cold-weather-payments/search/search-previous-data-results-SR4b", {
            'version': version,
            // Navigation settings
           'about': navAbout,
            'daily': navToday,
            'weekly': navWeekly,
            'search': navSearch,
            'settings': navSettings,
            // Location list
            'listPostcodes': '/' + version + "/location-lists/LP4-postcodes-weather-station-result",
        });
    });

    //---------------------------------------------------------------------------------------------------------------
    // SR5a & 5b: Range / Whole season, Weather station

    router.get('/' + version + "/check-cold-weather-payments/search-previous-data-results-SR5a", function (req, res) {
        res.render(version + "/check-cold-weather-payments/search/search-previous-data-results-SR5a", {
            'version': version,
            // Navigation settings
           'about': navAbout,
            'daily': navToday,
            'weekly': navWeekly,
            'search': navSearch,
            'settings': navSettings,
        });
    });

    router.get('/' + version + "/check-cold-weather-payments/search-previous-data-results-SR5b", function (req, res) {
        res.render(version + "/check-cold-weather-payments/search/search-previous-data-results-SR5b", {
            'version': version,
            // Navigation settings
           'about': navAbout,
            'daily': navToday,
            'weekly': navWeekly,
            'search': navSearch,
            'settings': navSettings,
        });
    });

    //---------------------------------------------------------------------------------------------------------------
    // SR6: No results

    router.get('/' + version + "/check-cold-weather-payments/search-previous-data-results-SR6", function (req, res) {
        res.render(version + "/check-cold-weather-payments/search/search-previous-data-results-SR6", {
            'version': version,
            // Navigation settings
           'about': navAbout,
            'daily': navToday,
            'weekly': navWeekly,
            'search': navSearch,
            'settings': navSettings,
        });
    });

    //---------------------------------------------------------------------------------------------------------------
    // SR7: No results, Agent journey

    router.get('/' + version + "/check-cold-weather-payments/search-previous-data-results-SR7", function (req, res) {
        res.render(version + "/check-cold-weather-payments/search/search-previous-data-results-SR7", {
            'version': version,
            // Navigation settings
           'about': navAbout,
            'daily': navToday,
            'weekly': navWeekly,
            'search': navSearch,
            'settings': navSettings,
        });
    });

        //---------------------------------------------------------------------------------------------------------------
    // SR8: No trigger data

    router.get('/' + version + "/check-cold-weather-payments/search-previous-data-results-SR8", function (req, res) {
        aboutActive = false;
        dailyActive = false;
        weeklyActive = false;
        searchActive = true;
        res.render(version + "/check-cold-weather-payments/search/search-previous-data-results-SR8", {
            'version': version,
            // Navigation settings

            'aboutActive': aboutActive,
            'dailyActive': dailyActive,
            'weeklyActive': weeklyActive,
            'searchActive': searchActive,
           'about': navAbout,
            'daily': navToday,
            'weekly': navWeekly,
            'search': navSearch,
            'settings': navSettings,
        });
    });






};
