module.exports = function (router) {

    const version = "v14";
    console.log("Additional routes");



    // Set default nav links ------------------------------
    let navAbout = "/" + version + "/check-cold-weather-payments/about-this-service-A1";
    let navToday = "/" + version + "/check-cold-weather-payments/todays-trigger-data-D2a";
    let navWeekly = "/" + version + "/check-cold-weather-payments/weekly-summary-W2";
    let navSearch = "/" + version + "/check-cold-weather-payments/what-do-you-want-to-do";

    //------------------
    // Update distribution list (Notifications)

    router.get('/' + version + "/notifications/E1-change-email-download", function (req, res) {
        res.render(version + "/notifications/E1-change-email-download", {
            'error': req.query.error,
            'version': version,
            'about': "/" + version + "/A1-about",
            'daily': "/" + version + "/daily-views/D2a-daily-forecasted",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });

    router.post('/' + version + "/notifications/E1-change-email-download", function (req, res) {
        res.redirect('/' + version + "/notifications/E2-change-email-YN")
    });

    router.get('/' + version + "/notifications/E2-change-email-YN", function (req, res) {
        res.render(version + "/notifications/E2-change-email-YN", {
            'error': req.query.error,
            'version': version,
            'about': "/" + version + "/A1-about",
            'daily': "/" + version + "/daily-views/D2a-daily-forecasted",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });

    router.post('/' + version + "/notifications/E2-change-email-YN", function (req, res) {
        var changeEmails = req.session.data['changeEmails'];
        if (changeEmails === "Yes") {
            res.redirect('/' + version + "/notifications/E3-change-email-upload")
        } else if (changeEmails === "No") {
            res.redirect('/' + version + "/A1-about")
        } else {
            res.redirect('/' + version + "/notifications/E2-change-email-YN?error=true")
        }

    });

    router.get('/' + version + "/notifications/E3-change-email-upload", function (req, res) {
        res.render(version + "/notifications/E3-change-email-upload", {
            'error': req.query.error,
            'version': version,
            'about': "/" + version + "/A1-about",
            'daily': "/" + version + "/daily-views/D2a-daily-forecasted",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });

    router.post('/' + version + "/notifications/E3-change-email-upload", function (req, res) {
        res.redirect('/' + version + "/notifications/E4-change-email-confirm")
    });



    router.get('/' + version + "/notifications/E3-change-email-upload-only", function (req, res) {
        res.render(version + "/notifications/E3-change-email-upload-only", {
            'error': req.query.error,
            'version': version,
            'about': "/" + version + "/A1-about",
            'daily': "/" + version + "/daily-views/D2a-daily-forecasted",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });

    router.post('/' + version + "/notifications/E3-change-email-upload-only", function (req, res) {
        res.redirect('/' + version + "/notifications/E4-change-email-confirm")
    });




    router.get('/' + version + "/notifications/E4-change-email-confirm", function (req, res) {
        res.render(version + "/notifications/E4-change-email-confirm", {
            'error': req.query.error,
            'version': version,
            'about': "/" + version + "/A1-about",
            'daily': "/" + version + "/daily-views/D2a-daily-forecasted",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });

    router.post('/' + version + "/notifications/E4-change-email-confirm", function (req, res) {
        res.redirect('/' + version + "/notifications/E5-change-email-success")
    });

    router.get('/' + version + "/notifications/E5-change-email-success", function (req, res) {
        res.render(version + "/notifications/E5-change-email-success", {
            'error': req.query.error,
            'version': version,
            'about': "/" + version + "/A1-about",
            'daily': "/" + version + "/daily-views/D2a-daily-forecasted",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });

    router.post('/' + version + "/notifications/E5-change-email-success", function (req, res) {
        res.redirect('/' + version + "/A1-about")
    });

    router.get('/' + version + "/notifications/E6-change-email-problem", function (req, res) {
        res.render(version + "/notifications/E6-change-email-problem", {
            'error': req.query.error,
            'version': version,
            'about': "/" + version + "/A1-about",
            'daily': "/" + version + "/daily-views/D2a-daily-forecasted",
            'weekly': "/" + version + "/weekly-views/w2-week-with-triggers",
            'search': "/" + version + "/search/S-search-journey-select",
        });
    });

    router.post('/' + version + "/notifications/E6-change-email-problem", function (req, res) {
        res.redirect('/' + version + "/notifications/E3-change-email-upload-only")
    });









};

