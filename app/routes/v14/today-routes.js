module.exports = function (router) {

    const version = "v14";
    console.log("Today routes");

    // Set default variation ------------------------------
    let todayVariation = "forecasted";
    // Set default nav links ------------------------------
    let navAbout = "/" + version + "/check-cold-weather-payments/about-this-service-A1";
    // let navToday = "/" + version + "/check-cold-weather-payments/todays-trigger-data-D2a";
    let navWeekly = "/" + version + "/check-cold-weather-payments/weekly-summary-W2";
    let navSearch = "/" + version + "/check-cold-weather-payments/what-do-you-want-to-do";


    //---------------------------------------------------------------------------------------------------------------
    // D1 no trigger
    router.get('/' + version + "/check-cold-weather-payments/todays-trigger-data-D1", function (req, res) {
        todayVariation = "no trigger";
        // Set active navigation tab
        dailyActive = true;
        res.render(version + "/check-cold-weather-payments/todays-trigger-data", {
            'version': version,
            'todayVariation': todayVariation,
            // Navigation settings
            'dailyActive': dailyActive,
            'about': navAbout,
            'daily': '/' + version + "/check-cold-weather-payments/todays-trigger-data-D1",
            'weekly': navWeekly,
            'search': navSearch,
            // Country toggle
            'NI': false,
            'toggle': '/' + version + "/check-cold-weather-payments/todays-trigger-data-NI-D1",
        });
    });

    router.get('/' + version + "/check-cold-weather-payments/todays-trigger-data-NI-D1", function (req, res) {
        todayVariation = "no trigger";
        // Set active navigation tab
        dailyActive = true;
        res.render(version + "/check-cold-weather-payments/todays-trigger-data", {
            'version': version,
            'todayVariation': todayVariation,
            // Navigation settings
            'dailyActive': dailyActive,
            'about': navAbout,
            'daily': '/' + version + "/check-cold-weather-payments/todays-trigger-data-NI-D1",
            'weekly': navWeekly,
            'search': navSearch,
            // Country toggle
            'NI': true,
            'toggle': '/' + version + "/check-cold-weather-payments/todays-trigger-data-D1",
        });
    });


    //---------------------------------------------------------------------------------------------------------------
    // D2a forecasted
    router.get('/' + version + "/check-cold-weather-payments/todays-trigger-data-D2a", function (req, res) {
        todayVariation = "forecasted";
        // Set active navigation tab
        dailyActive = true;
        res.render(version + "/check-cold-weather-payments/todays-trigger-data", {
            'version': version,
            'todayVariation': todayVariation,
            // Navigation settings
            'dailyActive': dailyActive,
            'about': navAbout,
            'daily': '/' + version + "/check-cold-weather-payments/todays-trigger-data-D2a",
            'weekly': navWeekly,
            'search': navSearch,
            // Country toggle
            'NI': false,
            'toggle': '/' + version + "/check-cold-weather-payments/todays-trigger-data-NI-D2a",
            // Page links
            'listStations': "/" + version + "/check-cold-weather-payments/view-triggered-weather-stations-on-14-02-2023F",
            'listPostcodes': "/" + version + "/check-cold-weather-payments/view-affected-postcodes-on-14-02-2023F",
        });
    });

                    router.get('/' + version + "/check-cold-weather-payments/view-triggered-weather-stations-on-14-02-2023F", function (req, res) {
                        listType = "14-02-2023F";
                        res.render(version + "/check-cold-weather-payments/view-triggered-weather-stations-on", {
                            'version': version,
                            'about': navAbout,
                            'daily': '/' + version + "/check-cold-weather-payments/todays-trigger-data-D2a",
                            'weekly': navWeekly,
                            'search': navSearch,
                            'listType': listType,
                        });
                    });

                    router.get('/' + version + "/check-cold-weather-payments/view-affected-postcodes-on-14-02-2023F", function (req, res) {
                        listType = "14-02-2023F";
                        res.render(version + "/check-cold-weather-payments/view-affected-postcodes-on", {
                            'version': version,
                            'about': navAbout,
                            'daily': '/' + version + "/check-cold-weather-payments/todays-trigger-data-D2a",
                            'weekly': navWeekly,
                            'search': navSearch,
                            'listType': listType,
                        });
                    });

    router.get('/' + version + "/check-cold-weather-payments/todays-trigger-data-NI-D2a", function (req, res) {
        todayVariation = "forecasted";
        // Set active navigation tab
        dailyActive = true;
        res.render(version + "/check-cold-weather-payments/todays-trigger-data", {
            'version': version,
            'todayVariation': todayVariation,
            // Navigation settings
            'dailyActive': dailyActive,
            'about': navAbout,
            'daily': '/' + version + "/check-cold-weather-payments/todays-trigger-data-NI-D2a",
            'weekly': navWeekly,
            'search': navSearch,
            // Country toggle
            'NI': true,
            'toggle': '/' + version + "/check-cold-weather-payments/todays-trigger-data-D2a",
            // Page links
            'listStations': "/" + version + "/check-cold-weather-payments/view-triggered-weather-stations-on-14-02-2023F-NI",
            'listPostcodes': "/" + version + "/check-cold-weather-payments/view-affected-postcodes-on-14-02-2023F-NI",
        });
    });

                    router.get('/' + version + "/check-cold-weather-payments/view-triggered-weather-stations-on-14-02-2023F-NI", function (req, res) {
                        listType = "14-02-2023F";
                        res.render(version + "/check-cold-weather-payments/view-triggered-weather-stations-on", {
                            'version': version,
                            'about': navAbout,
                            'daily': '/' + version + "/check-cold-weather-payments/todays-trigger-data-D2a",
                            'weekly': navWeekly,
                            'search': navSearch,
                            'listType': listType,
                            'NI': true,
                        });
                    });

                    router.get('/' + version + "/check-cold-weather-payments/view-affected-postcodes-on-14-02-2023F-NI", function (req, res) {
                        listType = "14-02-2023F";
                        res.render(version + "/check-cold-weather-payments/view-affected-postcodes-on", {
                            'version': version,
                            'about': navAbout,
                            'daily': '/' + version + "/check-cold-weather-payments/todays-trigger-data-D2a",
                            'weekly': navWeekly,
                            'search': navSearch,
                            'listType': listType,
                            'NI': true,
                        });
                    });


    //---------------------------------------------------------------------------------------------------------------
    // D2b forecasted and recorded
    router.get('/' + version + "/check-cold-weather-payments/todays-trigger-data-D2b", function (req, res) {
        todayVariation = "both";
        // Set active navigation tab
        dailyActive = true;
        res.render(version + "/check-cold-weather-payments/todays-trigger-data", {
            'version': version,
            'todayVariation': todayVariation,
            // Navigation settings
            'dailyActive': dailyActive,
            'about': navAbout,
            'daily': '/' + version + "/check-cold-weather-payments/todays-trigger-data-D2b",
            'weekly': navWeekly,
            'search': navSearch,
            // Country toggle
            'NI': false,
            'toggle': '/' + version + "/check-cold-weather-payments/todays-trigger-data-NI-D2b",
            // Page links
            'listStations': "/" + version + "/check-cold-weather-payments/view-triggered-weather-stations-on-14-02-2023FR",
            'listPostcodes': "/" + version + "/check-cold-weather-payments/view-affected-postcodes-on-14-02-2023FR",
        });
    });

                    router.get('/' + version + "/check-cold-weather-payments/view-triggered-weather-stations-on-14-02-2023FR", function (req, res) {
                        listType = "14-02-2023FR";
                        res.render(version + "/check-cold-weather-payments/view-triggered-weather-stations-on", {
                            'version': version,
                            'about': navAbout,
                            'daily': '/' + version + "/check-cold-weather-payments/todays-trigger-data-D2b",
                            'weekly': navWeekly,
                            'search': navSearch,
                            'listType': listType,
                        });
                    });

                    router.get('/' + version + "/check-cold-weather-payments/view-affected-postcodes-on-14-02-2023FR", function (req, res) {
                        listType = "14-02-2023FR";
                        res.render(version + "/check-cold-weather-payments/view-affected-postcodes-on", {
                            'version': version,
                            'about': navAbout,
                            'daily': '/' + version + "/check-cold-weather-payments/todays-trigger-data-D2a",
                            'weekly': navWeekly,
                            'search': navSearch,
                            'listType': listType,
                        });
                    });


    router.get('/' + version + "/check-cold-weather-payments/todays-trigger-data-NI-D2b", function (req, res) {
        todayVariation = "both";
        // Set active navigation tab
        dailyActive = true;
        res.render(version + "/check-cold-weather-payments/todays-trigger-data", {
            'version': version,
            'todayVariation': todayVariation,
            // Navigation settings
            'dailyActive': dailyActive,
            'about': navAbout,
            'daily': '/' + version + "/check-cold-weather-payments/todays-trigger-data-NI-D2b",
            'weekly': navWeekly,
            'search': navSearch,
            // Country toggle
            'NI': true,
            'toggle': '/' + version + "/check-cold-weather-payments/todays-trigger-data-D2b",
            // Page links
            'listStations': "/" + version + "/check-cold-weather-payments/view-triggered-weather-stations-on-14-02-2023FR-NI",
            'listPostcodes': "/" + version + "/check-cold-weather-payments/view-affected-postcodes-on-14-02-2023FR-NI",
        });
    });

                        router.get('/' + version + "/check-cold-weather-payments/view-triggered-weather-stations-on-14-02-2023FR-NI", function (req, res) {
                            listType = "14-02-2023FR";
                            res.render(version + "/check-cold-weather-payments/view-triggered-weather-stations-on", {
                                'version': version,
                                'about': navAbout,
                                'daily': '/' + version + "/check-cold-weather-payments/todays-trigger-data-D2b",
                                'weekly': navWeekly,
                                'search': navSearch,
                                'listType': listType,
                                'NI': true,
                            });
                        });

                        router.get('/' + version + "/check-cold-weather-payments/view-affected-postcodes-on-14-02-2023FR-NI", function (req, res) {
                            todayVariation = "forecasted";
                            listType = "14-02-2023FR";
                            res.render(version + "/check-cold-weather-payments/view-affected-postcodes-on", {
                                'about': navAbout,
                                'daily': '/' + version + "/check-cold-weather-payments/todays-trigger-data-D2a",
                                'weekly': navWeekly,
                                'search': navSearch,
                                'listType': listType,
                                'NI': true,
                            });
                        });


    //---------------------------------------------------------------------------------------------------------------
    // D3 Non-working
    router.get('/' + version + "/check-cold-weather-payments/todays-trigger-data-D3", function (req, res) {
        todayVariation = "non working";
        // Set active navigation tab
        dailyActive = true;
        res.render(version + "/check-cold-weather-payments/todays-trigger-data", {
            'version': version,
            'todayVariation': todayVariation,
            // Navigation settings
            'dailyActive': dailyActive,
            'about': navAbout,
            'daily': '/' + version + "/check-cold-weather-payments/todays-trigger-data-D3",
            'weekly': navWeekly,
            'search': navSearch,
            // Country toggle
            'NI': false,
            'toggle': '/' + version + "/check-cold-weather-payments/todays-trigger-data-NI-D3",
        });
    });

    router.get('/' + version + "/check-cold-weather-payments/todays-trigger-data-NI-D3", function (req, res) {
        todayVariation = "non working";
        // Set active navigation tab
        dailyActive = true;
        res.render(version + "/check-cold-weather-payments/todays-trigger-data", {
            'version': version,
            'todayVariation': todayVariation,
            // Navigation settings
            'dailyActive': dailyActive,
            'about': navAbout,
            'daily': '/' + version + "/check-cold-weather-payments/todays-trigger-data-NI-D3",
            'weekly': navWeekly,
            'search': navSearch,
            // Country toggle
            'NI': true,
            'toggle': '/' + version + "/check-cold-weather-payments/todays-trigger-data-D3",
        });
    });


    //---------------------------------------------------------------------------------------------------------------
    // D4 Next working day
    router.get('/' + version + "/check-cold-weather-payments/todays-trigger-data-D4", function (req, res) {
        todayVariation = "next working";
        // Set active navigation tab
        dailyActive = true;
        res.render(version + "/check-cold-weather-payments/todays-trigger-data", {
            'version': version,
            'todayVariation': todayVariation,
            // Navigation settings
            'dailyActive': dailyActive,
            'about': navAbout,
            'daily': '/' + version + "/check-cold-weather-payments/todays-trigger-data-D4",
            'weekly': navWeekly,
            'search': navSearch,
            // Country toggle
            'NI': false,
            'toggle': '/' + version + "/check-cold-weather-payments/todays-trigger-data-NI-D4",
        });
    });

    router.get('/' + version + "/check-cold-weather-payments/todays-trigger-data-NI-D4", function (req, res) {
        todayVariation = "next working";
        // Set active navigation tab
        dailyActive = true;
        res.render(version + "/check-cold-weather-payments/todays-trigger-data", {
            'version': version,
            'todayVariation': todayVariation,
            // Navigation settings
            'dailyActive': dailyActive,
            'about': navAbout,
            'daily': '/' + version + "/check-cold-weather-payments/todays-trigger-data-NI-D4",
            'weekly': navWeekly,
            'search': navSearch,
            // Country toggle
            'NI': true,
            'toggle': '/' + version + "/check-cold-weather-payments/todays-trigger-data-D4",
        });
    });

    //---------------------------------------------------------------------------------------------------------------
    // D5 Data not ready
    router.get('/' + version + "/check-cold-weather-payments/todays-trigger-data-D5", function (req, res) {
        todayVariation = "not ready";
        // Set active navigation tab
        dailyActive = true;
        res.render(version + "/check-cold-weather-payments/todays-trigger-data", {
            'version': version,
            'todayVariation': todayVariation,
            // Navigation settings
            'dailyActive': dailyActive,
            'about': navAbout,
            'daily': '/' + version + "/check-cold-weather-payments/todays-trigger-data-D5",
            'weekly': navWeekly,
            'search': navSearch,
            // Country toggle
            'NI': false,
            'toggle': '/' + version + "/check-cold-weather-payments/todays-trigger-data-NI-D5",
        });
    });

    router.get('/' + version + "/check-cold-weather-payments/todays-trigger-data-NI-D5", function (req, res) {
        todayVariation = "not ready";
        // Set active navigation tab
        dailyActive = true;
        res.render(version + "/check-cold-weather-payments/todays-trigger-data", {
            'version': version,
            'todayVariation': todayVariation,
            // Navigation settings
            'dailyActive': dailyActive,
            'about': navAbout,
            'daily': '/' + version + "/check-cold-weather-payments/todays-trigger-data-NI-D5",
            'weekly': navWeekly,
            'search': navSearch,
            // Country toggle
            'NI': true,
            'toggle': '/' + version + "/check-cold-weather-payments/todays-trigger-data-D5",
        });
    });

    //---------------------------------------------------------------------------------------------------------------
    // DW6 Season has ended
    router.get('/' + version + "/check-cold-weather-payments/the-season-has-ended-DW6", function (req, res) {
        todayVariation = "season ended";
        // Set active navigation tab
        dailyActive = true;
        res.render(version + "/check-cold-weather-payments/the-season-has-ended-DW6", {
            'version': version,
            'todayVariation': todayVariation,
            // Navigation settings
            'dailyActive': dailyActive,
            'about': navAbout,
            'daily': '/' + version + "/check-cold-weather-payments/the-season-has-ended-DW6",
            'weekly': '/' + version + "/check-cold-weather-payments/the-season-has-ended-DW6-weekly",
            'search': navSearch,
        });
    });

    router.get('/' + version + "/check-cold-weather-payments/the-season-has-ended-DW6-weekly", function (req, res) {
        todayVariation = "season ended";
        // Set active navigation tab
        weeklyActive = true;
        res.render(version + "/check-cold-weather-payments/the-season-has-ended-DW6", {
            'version': version,
            'todayVariation': todayVariation,
            // Navigation settings
            'weeklyActive': weeklyActive,
            'about': navAbout,
            'daily': '/' + version + "/check-cold-weather-payments/the-season-has-ended-DW6",
            'weekly': '/' + version + "/check-cold-weather-payments/the-season-has-ended-DW6-weekly",
            'search': navSearch,
        });
    });



















};

