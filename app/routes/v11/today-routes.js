
module.exports = function (router) {

    const version = "v11";
    console.log("Today routes");



    // Nav default statuses -----------------------------------
    let aboutActive = false;
    let dailyActive = false;
    let weeklyActive = false;
    let searchActive = false;
    let triggerType = "forecasted";
    // Nav  default links ------------------------------
    let navAbout = "/" + version + "/check-cold-weather-payments/about-this-service-A1";
    let navToday = "/" + version + "/check-cold-weather-payments/todays-trigger-data-D2a";
    let navWeekly = "/" + version + "/weekly-views/w1-weekly-no-triggers";
    let navSearch = "/" + version + "/search/S-search-journey-select";


    //---------------------------------------------------------------------------------------------------------------
    // D1 no trigger
    router.get('/' + version + "/check-cold-weather-payments/todays-trigger-data-D1", function (req, res) {
        triggerType = "no trigger";
        // Set active navigation tab
        aboutActive = false;
        dailyActive = true;
        weeklyActive = false;
        searchActive = false;
        res.render(version + "/check-cold-weather-payments/todays-trigger-data", {
            'version': version,
            'triggerType': triggerType,
            // Navigation settings
            'aboutActive': aboutActive,
            'dailyActive': dailyActive,
            'weeklyActive': weeklyActive,
            'searchActive': searchActive,
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
        triggerType = "no trigger";
        // Set active navigation tab
        aboutActive = false;
        dailyActive = true;
        weeklyActive = false;
        searchActive = false;
        res.render(version + "/check-cold-weather-payments/todays-trigger-data", {
            'version': version,
            'triggerType': triggerType,
            // Navigation settings
            'aboutActive': aboutActive,
            'dailyActive': dailyActive,
            'weeklyActive': weeklyActive,
            'searchActive': searchActive,
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
        triggerType = "forecasted";
        // Set active navigation tab
        aboutActive = false;
        dailyActive = true;
        weeklyActive = false;
        searchActive = false;
        res.render(version + "/check-cold-weather-payments/todays-trigger-data", {
            'version': version,
            'triggerType': triggerType,
            // Navigation settings
            'aboutActive': aboutActive,
            'dailyActive': dailyActive,
            'weeklyActive': weeklyActive,
            'searchActive': searchActive,
            'about': navAbout,
            'daily': '/' + version + "/check-cold-weather-payments/todays-trigger-data-D2a",
            'weekly': navWeekly,
            'search': navSearch,
            // Country toggle
            'NI': false,
            'toggle': '/' + version + "/check-cold-weather-payments/todays-trigger-data-NI-D2a",
            // Page links
            'listStations': "/" + version + "/check-cold-weather-payments/view-triggered-weather-stations-date-14-02-2023F",
            'listPostcodes': "/" + version + "/check-cold-weather-payments/",
        });
    });

                    router.get('/' + version + "/check-cold-weather-payments/view-triggered-weather-stations-date-14-02-2023F", function (req, res) {
                        triggerType = "forecasted";
                        listType = "14-02-2023F";
                        res.render(version + "/check-cold-weather-payments/view-triggered-weather-stations", {
                            'version': version,
                            'triggerType': triggerType,
                            'about': navAbout,
                            'daily': '/' + version + "/check-cold-weather-payments/todays-trigger-data-D2a",
                            'weekly': navWeekly,
                            'search': navSearch,
                            'listType': listType,
                        });
                    });

    router.get('/' + version + "/check-cold-weather-payments/todays-trigger-data-NI-D2a", function (req, res) {
        triggerType = "forecasted";
        // Set active navigation tab
        aboutActive = false;
        dailyActive = true;
        weeklyActive = false;
        searchActive = false;
        res.render(version + "/check-cold-weather-payments/todays-trigger-data", {
            'version': version,
            'triggerType': triggerType,
            // Navigation settings
            'aboutActive': aboutActive,
            'dailyActive': dailyActive,
            'weeklyActive': weeklyActive,
            'searchActive': searchActive,
            'about': navAbout,
            'daily': '/' + version + "/check-cold-weather-payments/todays-trigger-data-NI-D2a",
            'weekly': navWeekly,
            'search': navSearch,
            // Country toggle
            'NI': true,
            'toggle': '/' + version + "/check-cold-weather-payments/todays-trigger-data-D2a",
            // Page links
            'listStations': "/" + version + "/check-cold-weather-payments/view-triggered-weather-stations-date-14-02-2023F-NI",
            'listPostcodes': "/" + version + "/check-cold-weather-payments/",
        });
    });

                    router.get('/' + version + "/check-cold-weather-payments/view-triggered-weather-stations-date-14-02-2023F-NI", function (req, res) {
                        triggerType = "forecasted";
                        listType = "14-02-2023F";
                        res.render(version + "/check-cold-weather-payments/view-triggered-weather-stations", {
                            'version': version,
                            'triggerType': triggerType,
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
        triggerType = "both";
        // Set active navigation tab
        aboutActive = false;
        dailyActive = true;
        weeklyActive = false;
        searchActive = false;
        res.render(version + "/check-cold-weather-payments/todays-trigger-data", {
            'version': version,
            'triggerType': triggerType,
            // Navigation settings
            'aboutActive': aboutActive,
            'dailyActive': dailyActive,
            'weeklyActive': weeklyActive,
            'searchActive': searchActive,
            'about': navAbout,
            'daily': '/' + version + "/check-cold-weather-payments/todays-trigger-data-D2b",
            'weekly': navWeekly,
            'search': navSearch,
            // Country toggle
            'NI': false,
            'toggle': '/' + version + "/check-cold-weather-payments/todays-trigger-data-NI-D2b",
        });
    });

    router.get('/' + version + "/check-cold-weather-payments/todays-trigger-data-NI-D2b", function (req, res) {
        triggerType = "both";
        // Set active navigation tab
        aboutActive = false;
        dailyActive = true;
        weeklyActive = false;
        searchActive = false;
        res.render(version + "/check-cold-weather-payments/todays-trigger-data", {
            'version': version,
            'triggerType': triggerType,
            // Navigation settings
            'aboutActive': aboutActive,
            'dailyActive': dailyActive,
            'weeklyActive': weeklyActive,
            'searchActive': searchActive,
            'about': navAbout,
            'daily': '/' + version + "/check-cold-weather-payments/todays-trigger-data-NI-D2b",
            'weekly': navWeekly,
            'search': navSearch,
            // Country toggle
            'NI': true,
            'toggle': '/' + version + "/check-cold-weather-payments/todays-trigger-data-D2b",
        });
    });


    //---------------------------------------------------------------------------------------------------------------
    // D3 Non-working
    router.get('/' + version + "/check-cold-weather-payments/todays-trigger-data-D3", function (req, res) {
        triggerType = "non working";
        // Set active navigation tab
        aboutActive = false;
        dailyActive = true;
        weeklyActive = false;
        searchActive = false;
        res.render(version + "/check-cold-weather-payments/todays-trigger-data", {
            'version': version,
            'triggerType': triggerType,
            // Navigation settings
            'aboutActive': aboutActive,
            'dailyActive': dailyActive,
            'weeklyActive': weeklyActive,
            'searchActive': searchActive,
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
        triggerType = "non working";
        // Set active navigation tab
        aboutActive = false;
        dailyActive = true;
        weeklyActive = false;
        searchActive = false;
        res.render(version + "/check-cold-weather-payments/todays-trigger-data", {
            'version': version,
            'triggerType': triggerType,
            // Navigation settings
            'aboutActive': aboutActive,
            'dailyActive': dailyActive,
            'weeklyActive': weeklyActive,
            'searchActive': searchActive,
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
        triggerType = "next working";
        // Set active navigation tab
        aboutActive = false;
        dailyActive = true;
        weeklyActive = false;
        searchActive = false;
        res.render(version + "/check-cold-weather-payments/todays-trigger-data", {
            'version': version,
            'triggerType': triggerType,
            // Navigation settings
            'aboutActive': aboutActive,
            'dailyActive': dailyActive,
            'weeklyActive': weeklyActive,
            'searchActive': searchActive,
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
        triggerType = "next working";
        // Set active navigation tab
        aboutActive = false;
        dailyActive = true;
        weeklyActive = false;
        searchActive = false;
        res.render(version + "/check-cold-weather-payments/todays-trigger-data", {
            'version': version,
            'triggerType': triggerType,
            // Navigation settings
            'aboutActive': aboutActive,
            'dailyActive': dailyActive,
            'weeklyActive': weeklyActive,
            'searchActive': searchActive,
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
        triggerType = "not ready";
        // Set active navigation tab
        aboutActive = false;
        dailyActive = true;
        weeklyActive = false;
        searchActive = false;
        res.render(version + "/check-cold-weather-payments/todays-trigger-data", {
            'version': version,
            'triggerType': triggerType,
            // Navigation settings
            'aboutActive': aboutActive,
            'dailyActive': dailyActive,
            'weeklyActive': weeklyActive,
            'searchActive': searchActive,
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
        triggerType = "not ready";
        // Set active navigation tab
        aboutActive = false;
        dailyActive = true;
        weeklyActive = false;
        searchActive = false;
        res.render(version + "/check-cold-weather-payments/todays-trigger-data", {
            'version': version,
            'triggerType': triggerType,
            // Navigation settings
            'aboutActive': aboutActive,
            'dailyActive': dailyActive,
            'weeklyActive': weeklyActive,
            'searchActive': searchActive,
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
        triggerType = "season ended";
        // Set active navigation tab
        aboutActive = false;
        dailyActive = true;
        weeklyActive = false;
        searchActive = false;
        res.render(version + "/check-cold-weather-payments/the-season-has-ended-DW6", {
            'version': version,
            'triggerType': triggerType,
            // Navigation settings
            'aboutActive': aboutActive,
            'dailyActive': dailyActive,
            'weeklyActive': weeklyActive,
            'searchActive': searchActive,
            'about': navAbout,
            'daily': '/' + version + "/check-cold-weather-payments/the-season-has-ended-DW6",
            'weekly': '/' + version + "/check-cold-weather-payments/the-season-has-ended-DW6-weekly",
            'search': navSearch,
        });
    });

    router.get('/' + version + "/check-cold-weather-payments/the-season-has-ended-DW6-weekly", function (req, res) {
        triggerType = "season ended";
        // Set active navigation tab
        aboutActive = false;
        dailyActive = false;
        weeklyActive = true;
        searchActive = false;
        res.render(version + "/check-cold-weather-payments/the-season-has-ended-DW6", {
            'version': version,
            'triggerType': triggerType,
            // Navigation settings
            'aboutActive': aboutActive,
            'dailyActive': dailyActive,
            'weeklyActive': weeklyActive,
            'searchActive': searchActive,
            'about': navAbout,
            'daily': '/' + version + "/check-cold-weather-payments/the-season-has-ended-DW6",
            'weekly': '/' + version + "/check-cold-weather-payments/the-season-has-ended-DW6-weekly",
            'search': navSearch,
        });
    });



















};

