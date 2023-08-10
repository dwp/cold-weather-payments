module.exports = function (router) {

    const version = "v1";

    // periodDates1 
    const notificationDate1 = "Tuesday 14 February 2023";
    const titlePeriodDates1 = "14 Feb 2023 to 20 Feb 2023";
    const scanPeriodDates1 = "17 February 2023";
    const payPeriodDates1 = "22 February";
    const dlaScanDates1 = "22 February";
    const dlaPayDates1 = "27 February";

    // periodDates2 Notification date 14 Feb
    const notificationDate2 = "Tuesday 14 February 2023";
    const titlePeriodDates2 = "7 Feb 2023 to 13 Feb 2023";
    const scanPeriodDates2 = "17 February 2023";
    const payPeriodDates2 = "22 February";
    const dlaScanDates2 = "22 February";
    const dlaPayDates2 = "27 February";

    // periodDates3 Notification date 10 Jan
    const notificationDate3 = "Tuesday 10 January 2023";
    const titlePeriodDates3 = "3 Jan 2023 to 9 Jan 2023";
    const scanPeriodDates3 = "13 January 2023";
    const payPeriodDates3 = "18 January";
    const dlaScanDates3 = "18 January";
    const dlaPayDates3 = "23 January";


    router.get('/' + version + "/viewDaily-option1", function (req, res) {
        res.render(version + "/viewDaily-option1", {
            'version': version,
            'viewPostcodes': "/" + version + "/view-list-postcodes",
            'viewWeatherStations': "/" + version + "/view-list-weather-stations",
            'previousData': "/" + version + "/previous-data",
            'notificationDate1': notificationDate1,
            'titlePeriodDates1': titlePeriodDates1,
            'scanPeriodDates1': scanPeriodDates1,
            'payPeriodDates1': payPeriodDates1,
            'dlaScanDates1': dlaScanDates1,
            'dlaPayDates1': dlaPayDates1,
            'notificationDate2': notificationDate2,
            'titlePeriodDates2': titlePeriodDates2,
            'scanPeriodDates2': scanPeriodDates2,
            'payPeriodDates2': payPeriodDates2,
            'dlaScanDates2': dlaScanDates2,
            'dlaPayDates2': dlaPayDates2,
        });
    });

    router.get('/' + version + "/viewDaily-option2", function (req, res) {
        res.render(version + "/viewDaily-option2", {
            'viewPostcodes': "/" + version + "/view-list-postcodes",
            'viewWeatherStations': "/" + version + "/view-list-weather-stations",
            'previousData': "/" + version + "/previous-data",
            'notificationDate1': notificationDate1,
            'titlePeriodDates1': titlePeriodDates1,
            'scanPeriodDates1': scanPeriodDates1,
            'payPeriodDates1': payPeriodDates1,
            'dlaScanDates1': dlaScanDates1,
            'dlaPayDates1': dlaPayDates1,
            'notificationDate2': notificationDate2,
            'titlePeriodDates2': titlePeriodDates2,
            'scanPeriodDates2': scanPeriodDates2,
            'payPeriodDates2': payPeriodDates2,
            'dlaScanDates2': dlaScanDates2,
            'dlaPayDates2': dlaPayDates2,
        });
    });

    router.get('/' + version + "/viewDaily-option3", function (req, res) {
        res.render(version + "/viewDaily-option3", {
            'viewPostcodes': "/" + version + "/view-list-postcodes",
            'viewWeatherStations': "/" + version + "/view-list-weather-stations-option3",
            'previousData': "/" + version + "/previous-data",
            'notificationDate1': notificationDate1,
            'titlePeriodDates1': titlePeriodDates1,
            'scanPeriodDates1': scanPeriodDates1,
            'payPeriodDates1': payPeriodDates1,
            'dlaScanDates1': dlaScanDates1,
            'dlaPayDates1': dlaPayDates1,
            'notificationDate2': notificationDate2,
            'titlePeriodDates2': titlePeriodDates2,
            'scanPeriodDates2': scanPeriodDates2,
            'payPeriodDates2': payPeriodDates2,
            'dlaScanDates2': dlaScanDates2,
            'dlaPayDates2': dlaPayDates2,
        });
    });

    router.get('/' + version + "/viewDaily-noTrigger", function (req, res) {
        res.render(version + "/viewDaily-noTrigger", {
            'previousData': "/" + version + "/previous-data",
            'previousDataFiltered': "/" + version + "/previous-data-filtered"
        });
    });

    router.get('/' + version + "/viewDaily-notReady", function (req, res) {
        res.render(version + "/viewDaily-notReady", {
            'previousData': "/" + version + "/previous-data",
            'previousDataFiltered': "/" + version + "/previous-data-filtered"
        });
    });

    router.get('/' + version + "/previous-data", function (req, res) {
        res.render(version + "/previous-data", {
            'statusToday': "/" + version + "/viewDaily-option1",
            'viewPostcodes': "/" + version + "/view-list-postcodes",
            'viewWeatherStations': "/" + version + "/view-list-weather-stations",
            'notificationDate1': notificationDate1,
            'titlePeriodDates1': titlePeriodDates1,
            'scanPeriodDates1': scanPeriodDates1,
            'payPeriodDates1': payPeriodDates1,
            'dlaScanDates1': dlaScanDates1,
            'dlaPayDates1': dlaPayDates1,
            'notificationDate2': notificationDate2,
            'titlePeriodDates2': titlePeriodDates2,
            'scanPeriodDates2': scanPeriodDates2,
            'payPeriodDates2': payPeriodDates2,
            'dlaScanDates2': dlaScanDates2,
            'dlaPayDates2': dlaPayDates2,
            'notificationDate3': notificationDate3,
            'titlePeriodDates3': titlePeriodDates3,
            'scanPeriodDates3': scanPeriodDates3,
            'payPeriodDates3': payPeriodDates3,
            'dlaScanDates3': dlaScanDates3,
            'dlaPayDates3': dlaPayDates3,
        });
    });

    router.get('/' + version + "/previous-data-filtered", function (req, res) {
        res.render(version + "/previous-data-filtered", {
            'statusToday': "/" + version + "/viewDaily-option1",
            'viewPostcodes': "/" + version + "/view-list-postcodes",
            'viewWeatherStations': "/" + version + "/view-list-weather-stations",
            'notificationDate1': notificationDate1,
            'titlePeriodDates1': titlePeriodDates1,
            'scanPeriodDates1': scanPeriodDates1,
            'payPeriodDates1': payPeriodDates1,
            'dlaScanDates1': dlaScanDates1,
            'dlaPayDates1': dlaPayDates1,
        });
    });

    router.get('/' + version + "/view-list-weather-stations", function (req, res) {
        res.render(version + "/view-list-weather-stations", {
            'notificationDate1': notificationDate1,
            'titlePeriodDates1': titlePeriodDates1,
        });
    });

    router.get('/' + version + "/view-list-weather-stations-option3", function (req, res) {
        res.render(version + "/view-list-weather-stations-option3", {
            'notificationDate1': notificationDate1,
            'titlePeriodDates1': titlePeriodDates1,
        });
    });

    router.get('/' + version + "/view-list-postcodes", function (req, res) {
        res.render(version + "/view-list-postcodes", {
            'notificationDate1': notificationDate1,
            'titlePeriodDates1': titlePeriodDates1,
        });
    });



    



    // router.post('/' + version + repaymentsService + "/overclaim/changeYN", function (req, res) {
    //     var change = req.session.data['changeYN'];
    //     if (change == 'Yes') {
    //         res.redirect('/' + version + repaymentsService + "/overclaim/whenOC");
    //     } else if (change == 'No') {
    //         res.redirect('/' + version + repaymentsService + "/overclaim/checkDisclosureOC-single");
    //     } else if (change == undefined) {
    //         res.redirect('/' + version + repaymentsService + "/overclaim/changeYN?error=true");
    //     }
    // });

     // router.get('/' + version + repaymentsService + "/overclaim/changeYN", function (req, res) {
    //     res.render(version + repaymentsService + "/overclaim/changeYN", {
    //         'error': req.query.error,
    //     });
    // });

    // router.post('/' + version + repaymentsService + "/overclaim/changeYN", function (req, res) {
    //     var change = req.session.data['changeYN'];
    //     if (change == 'Yes') {
    //         res.redirect('/' + version + repaymentsService + "/overclaim/whenOC");
    //     } else if (change == 'No') {
    //         res.redirect('/' + version + repaymentsService + "/overclaim/checkDisclosureOC-single");
    //     } else if (change == undefined) {
    //         res.redirect('/' + version + repaymentsService + "/overclaim/changeYN?error=true");
    //     }
    // });





    //close module.exports
};

