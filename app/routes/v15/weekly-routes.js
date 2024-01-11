module.exports = function (router) {

    const version = "v15";


    // Set default variation ------------------------------
    let weeklyVariation = "triggers";
    // Set default nav links ------------------------------
    let navAbout = "/" + version + "/check-cold-weather-payments/about-this-service-A1";
    let navToday = "/" + version + "/check-cold-weather-payments/todays-trigger-data-D2a";
    // let navWeekly = "/" + version + "/check-cold-weather-payments/weekly-summary-W2";
    let navSearch = "/" + version + "/check-cold-weather-payments/what-do-you-want-to-do";
    let navSettings = "/" + version + "/notifications/N5-enter-email-address";
    
    //---------------------------------------------------------------------------------------------------------------
    // W1 no triggers
    router.get('/' + version + "/check-cold-weather-payments/weekly-summary-W1", function (req, res) {
        weeklyVariation = "no trigger";
        // Set active navigation tab
        weeklyActive = true;
        res.render(version + "/check-cold-weather-payments/weekly-summary", {
            'version': version,
            'weeklyVariation': weeklyVariation,
            // Navigation settings
           'weeklyActive': weeklyActive,
            'about': navAbout,
            'daily': navToday,
            'weekly': '/' + version + "/check-cold-weather-payments/weekly-summary-W1",
             'search': navSearch,
            'settings': navSettings,
            // Country toggle
            'NI': false,
            'toggle': '/' + version + "/check-cold-weather-payments/weekly-summary-NI-W1",
        });

    });

    router.get('/' + version + "/check-cold-weather-payments/weekly-summary-NI-W1", function (req, res) {
        weeklyVariation = "no trigger";
        // Set active navigation tab
        weeklyActive = true;
        res.render(version + "/check-cold-weather-payments/weekly-summary", {
            'version': version,
            'weeklyVariation': weeklyVariation,
            // Navigation settings
            'weeklyActive': weeklyActive,
            'about': navAbout,
            'daily': navToday,
            'weekly': '/' + version + "/check-cold-weather-payments/weekly-summary-NI-W1",
             'search': navSearch,
            'settings': navSettings,
            // Country toggle
            'NI': true,
            'toggle': '/' + version + "/check-cold-weather-payments/weekly-summary-W1",
        });

    });


    //---------------------------------------------------------------------------------------------------------------
    // W2 with triggers
    router.get('/' + version + "/check-cold-weather-payments/weekly-summary-W2", function (req, res) {
        weeklyVariation = "triggers";
        // Set active navigation tab
        weeklyActive = true;
        res.render(version + "/check-cold-weather-payments/weekly-summary", {
            'version': version,
            'weeklyVariation': weeklyVariation,
            // Navigation settings
           'weeklyActive': weeklyActive,
            'about': navAbout,
            'daily': navToday,
            'weekly': '/' + version + "/check-cold-weather-payments/weekly-summary-W2",
             'search': navSearch,
            'settings': navSettings,
            // Country toggle
            'NI': false,
            'toggle': '/' + version + "/check-cold-weather-payments/weekly-summary-NI-W2",
             // Page links
             'listStationsAll': "/" + version + "/check-cold-weather-payments/view-triggered-weather-stations-between-03-02-2023-and-09-02-2023",
             'listPostcodesAll': "/" + version + "/check-cold-weather-payments/view-affected-postcodes-between-03-02-2023-and-09-02-2023",
             'listStations1': "/" + version + "/check-cold-weather-payments/view-triggered-weather-stations-on-09-02-2023",
             'listPostcodes1': "/" + version + "/check-cold-weather-payments/view-affected-postcodes-on-09-02-2023",
             'listStations2': "/" + version + "/check-cold-weather-payments/view-triggered-weather-stations-on-08-02-2023",
             'listPostcodes2': "/" + version + "/check-cold-weather-payments/view-affected-postcodes-on-08-02-2023",
             'listStations3': "/" + version + "/check-cold-weather-payments/view-triggered-weather-stations-on-06-02-2023",
             'listPostcodes3': "/" + version + "/check-cold-weather-payments/view-affected-postcodes-on-06-02-2023",
        });

    });

                        router.get('/' + version + "/check-cold-weather-payments/view-triggered-weather-stations-between-03-02-2023-and-09-02-2023", function (req, res) {
                            listType = "weekly";
                            res.render(version + "/check-cold-weather-payments/view-triggered-weather-stations-between", {
                                'version': version,
                                'about': navAbout,
                                'daily': navToday,
                                'weekly': '/' + version + "/check-cold-weather-payments/weekly-summary-W2",
                                 'search': navSearch,
            'settings': navSettings,
                                'listType': listType,
                            });
                        });

                        router.get('/' + version + "/check-cold-weather-payments/view-affected-postcodes-between-03-02-2023-and-09-02-2023", function (req, res) {
                            listType = "weekly";
                            res.render(version + "/check-cold-weather-payments/view-affected-postcodes-between", {
                                'version': version,
                                'about': navAbout,
                                'daily': navToday,
                                'weekly': '/' + version + "/check-cold-weather-payments/weekly-summary-W2",
                                 'search': navSearch,
            'settings': navSettings,
                                'listType': listType,
                            });
                        });

                                // listStations1
                                router.get('/' + version + "/check-cold-weather-payments/view-triggered-weather-stations-on-09-02-2023", function (req, res) {
                                    listType = "09-02-2023";
                                    res.render(version + "/check-cold-weather-payments/view-triggered-weather-stations-on", {
                                        'version': version,
                                        'about': navAbout,
                                        'daily': navToday,
                                        'weekly': '/' + version + "/check-cold-weather-payments/weekly-summary-W2",
                                         'search': navSearch,
            'settings': navSettings,
                                        'listType': listType,
                                    });
                                });
                                // listStations2
                                router.get('/' + version + "/check-cold-weather-payments/view-triggered-weather-stations-on-08-02-2023", function (req, res) {
                                    listType = "08-02-2023";
                                    res.render(version + "/check-cold-weather-payments/view-triggered-weather-stations-on", {
                                        'version': version,
                                        'about': navAbout,
                                        'daily': navToday,
                                        'weekly': '/' + version + "/check-cold-weather-payments/weekly-summary-W2",
                                         'search': navSearch,
            'settings': navSettings,
                                        'listType': listType,
                                    });
                                });
                                // listStations3
                                router.get('/' + version + "/check-cold-weather-payments/view-triggered-weather-stations-on-06-02-2023", function (req, res) {
                                    listType = "06-02-2023";
                                    res.render(version + "/check-cold-weather-payments/view-triggered-weather-stations-on", {
                                        'version': version,
                                        'about': navAbout,
                                        'daily': navToday,
                                        'weekly': '/' + version + "/check-cold-weather-payments/weekly-summary-W2",
                                         'search': navSearch,
            'settings': navSettings,
                                        'listType': listType,
                                    });
                                });
                                // listPostcodes1
                                router.get('/' + version + "/check-cold-weather-payments/view-affected-postcodes-on-09-02-2023", function (req, res) {
                                    listType = "09-02-2023";
                                    res.render(version + "/check-cold-weather-payments/view-affected-postcodes-on", {
                                        'version': version,
                                        'about': navAbout,
                                        'daily': navToday,
                                        'weekly': '/' + version + "/check-cold-weather-payments/weekly-summary-W2",
                                         'search': navSearch,
            'settings': navSettings,
                                        'listType': listType,
                                    });
                                });
                                // listPostcodes2
                                router.get('/' + version + "/check-cold-weather-payments/view-affected-postcodes-on-08-02-2023", function (req, res) {
                                    listType = "08-02-2023";
                                    res.render(version + "/check-cold-weather-payments/view-affected-postcodes-on", {
                                        'version': version,
                                        'about': navAbout,
                                        'daily': navToday,
                                        'weekly': '/' + version + "/check-cold-weather-payments/weekly-summary-W2",
                                         'search': navSearch,
            'settings': navSettings,
                                        'listType': listType,
                                    });
                                });
                                // listPostcodes3
                                router.get('/' + version + "/check-cold-weather-payments/view-affected-postcodes-on-06-02-2023", function (req, res) {
                                    listType = "06-02-2023";
                                    res.render(version + "/check-cold-weather-payments/view-affected-postcodes-on", {
                                        'version': version,
                                        'about': navAbout,
                                        'daily': navToday,
                                        'weekly': '/' + version + "/check-cold-weather-payments/weekly-summary-W2",
                                         'search': navSearch,
            'settings': navSettings,
                                        'listType': listType,
                                    });
                                });

                        // Example long list
                        router.get('/' + version + "/check-cold-weather-payments/view-affected-postcodes-all", function (req, res) {
                            listType = "all";
                            res.render(version + "/check-cold-weather-payments/view-affected-postcodes-between", {
                                'version': version,
                                'about': navAbout,
                                'daily': navToday,
                                'weekly': '/' + version + "/check-cold-weather-payments/weekly-summary-W2",
                                 'search': navSearch,
            'settings': navSettings,
                                'listType': listType,
                            });
                        });


    router.get('/' + version + "/check-cold-weather-payments/weekly-summary-NI-W2", function (req, res) {
        weeklyVariation = "triggers";
        // Set active navigation tab
        weeklyActive = true;
        res.render(version + "/check-cold-weather-payments/weekly-summary", {
            'version': version,
            'weeklyVariation': weeklyVariation,
            // Navigation settings
           'weeklyActive': weeklyActive,
            'about': navAbout,
            'daily': navToday,
            'weekly': '/' + version + "/check-cold-weather-payments/weekly-summary-NI-W2",
             'search': navSearch,
            'settings': navSettings,
            // Country toggle
            'NI': true,
            'toggle': '/' + version + "/check-cold-weather-payments/weekly-summary-W2",
            // Page links
            'listStationsAll': "/" + version + "/check-cold-weather-payments/view-triggered-weather-stations-between-03-02-2023-and-09-02-2023-NI",
            'listPostcodesAll': "/" + version + "/check-cold-weather-payments/view-affected-postcodes-between-03-02-2023-and-09-02-2023-NI",
            'listStations1': "/" + version + "/check-cold-weather-payments/view-triggered-weather-stations-on-08-02-2023-NI",
            'listPostcodes1': "/" + version + "/check-cold-weather-payments/view-affected-postcodes-on-08-02-2023-NI",
        });

    });

                        router.get('/' + version + "/check-cold-weather-payments/view-triggered-weather-stations-between-03-02-2023-and-09-02-2023-NI", function (req, res) {
                            listType = "weekly";
                            res.render(version + "/check-cold-weather-payments/view-triggered-weather-stations-between", {
                                'version': version,
                                'about': navAbout,
                                'daily': navToday,
                                'weekly': '/' + version + "/check-cold-weather-payments/weekly-summary-W2",
                                 'search': navSearch,
            'settings': navSettings,
                                'listType': listType,
                                'NI': true,
                            });
                        });

                        router.get('/' + version + "/check-cold-weather-payments/view-affected-postcodes-between-03-02-2023-and-09-02-2023-NI", function (req, res) {
                            listType = "weekly";
                            res.render(version + "/check-cold-weather-payments/view-affected-postcodes-between", {
                                'version': version,
                                'about': navAbout,
                                'daily': navToday,
                                'weekly': '/' + version + "/check-cold-weather-payments/weekly-summary-W2",
                                 'search': navSearch,
            'settings': navSettings,
                                'listType': listType,
                                'NI': true,
                            });
                        });

                                // listStations1
                                router.get('/' + version + "/check-cold-weather-payments/view-triggered-weather-stations-on-08-02-2023-NI", function (req, res) {
                                    listType = "08-02-2023";
                                    res.render(version + "/check-cold-weather-payments/view-triggered-weather-stations-on", {
                                        'version': version,
                                        'about': navAbout,
                                        'daily': navToday,
                                        'weekly': '/' + version + "/check-cold-weather-payments/weekly-summary-W2",
                                         'search': navSearch,
            'settings': navSettings,
                                        'listType': listType,
                                        'NI': true,
                                    });
                                });

                                // listPostcodes1
                                router.get('/' + version + "/check-cold-weather-payments/view-affected-postcodes-on-08-02-2023-NI", function (req, res) {
                                    listType = "08-02-2023";
                                    res.render(version + "/check-cold-weather-payments/view-affected-postcodes-on", {
                                        'version': version,
                                        'about': navAbout,
                                        'daily': navToday,
                                        'weekly': '/' + version + "/check-cold-weather-payments/weekly-summary-W2",
                                         'search': navSearch,
            'settings': navSettings,
                                        'listType': listType,
                                        'NI': true,
                                    });
                                });


    //---------------------------------------------------------------------------------------------------------------
    // W3 start of season
    router.get('/' + version + "/check-cold-weather-payments/weekly-summary-W3", function (req, res) {
        weeklyVariation = "start of season";
        // Set active navigation tab
        weeklyActive = true;
        res.render(version + "/check-cold-weather-payments/weekly-summary", {
            'version': version,
            'weeklyVariation': weeklyVariation,
            // Navigation settings
           'weeklyActive': weeklyActive,
            'about': navAbout,
            'daily': navToday,
            'weekly': '/' + version + "/check-cold-weather-payments/weekly-summary-W3",
             'search': navSearch,
            'settings': navSettings,
            // Country toggle
            'NI': false,
            'toggle': '/' + version + "/check-cold-weather-payments/weekly-summary-NI-W3",
        });

    });

    router.get('/' + version + "/check-cold-weather-payments/weekly-summary-NI-W3", function (req, res) {
        weeklyVariation = "start of season";
        // Set active navigation tab
        weeklyActive = true;
        res.render(version + "/check-cold-weather-payments/weekly-summary", {
            'version': version,
            'weeklyVariation': weeklyVariation,
            // Navigation settings
           'weeklyActive': weeklyActive,
            'about': navAbout,
            'daily': navToday,
            'weekly': '/' + version + "/check-cold-weather-payments/weekly-summary-NI-W3",
             'search': navSearch,
            'settings': navSettings,
            // Country toggle
            'NI': true,
            'toggle': '/' + version + "/check-cold-weather-payments/weekly-summary-W3",
        });

    });

















};
