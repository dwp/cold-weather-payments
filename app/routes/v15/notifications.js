module.exports = function (router) {

    const version = "v15";


    // Set default nav links ------------------------------
    let navAbout = "/" + version + "/check-cold-weather-payments/about-this-service-A1";
    let navToday = "/" + version + "/check-cold-weather-payments/todays-trigger-data-D2a";
    let navWeekly = "/" + version + "/check-cold-weather-payments/weekly-summary-W2";
    let navSearch = "/" + version + "/check-cold-weather-payments/what-do-you-want-to-do";


    //------------------
    // Notification self-serve
    router.get("/" + version + "/notifications/N5-enter-email-address", function (req, res) {
        res.render(version + "/notifications/N5-enter-email-address", {
            'error': req.query.error,
            'version': version,
            'about': navAbout,
            'daily': navToday,
            'weekly': navWeekly,
            'search': navSearch,
        });
    });

    router.post('/' + version + "/notifications/N5-enter-email-address", function (req, res) {
        res.redirect('/' + version + "/notifications/N6-check-emails")
    });

    router.get('/' + version + "/notifications/N6-check-emails", function (req, res) {
        res.render(version + "/notifications/N6-check-emails", {
            'version': version,
            'about': navAbout,
            'daily': navToday,
            'weekly': navWeekly,
            'search': navSearch,
        });
    });

    // From v8 Prototoype

     //------------------
    // Views: MANAGE SUBSCRIPTIONS

    let subCount = 0;
    let success = false;

    router.get('/' + version + "/notifications/N1-manage-subscriptions", function (req, res) {
        success = false;
        // Trigger updates
        console.log(subCount);
        let triggerSub = req.session.data['triggerSub'];
        let triggerStatus;
        let triggerStatusViewSettings;
        console.log("Trigger Status " + triggerStatus)
        if (triggerSub === "yes") {
            triggerStatus = "Subscribed"
            triggerStatusAction = "Unsubscribe"
            triggerStatusRoute = '/' + version + "/notifications/N2b-trigger-unsubscribe"
            triggerStatusViewSettings = true
            var triggerFile = req.session.data['triggerFile']
            if (triggerFile !== "Yes") {
                triggerFile = "No"
            }
            var noTrigger = req.session.data['noTrigger']
            if (noTrigger !== "Yes") {
                noTrigger = "No"
            }
        } else {
            triggerStatus = "Unsubscribed"
            triggerStatusAction = "Subscribe"
            triggerStatusRoute = '/' + version + "/notifications/N2a-trigger-subscribe"
            triggerStatusViewSettings = false
        }

        // Weekly summary 
        let weeklySub = req.session.data['weeklySub'];
        let weeklyStatus;
        let weeklyStatusViewSettings;
        console.log("Weekly Status " + weeklyStatus)
        if (weeklySub === "yes") {
            weeklyStatus = "Subscribed"
            weeklyStatusAction = "Unsubscribe"
            weeklyStatusRoute = '/' + version + "/notifications/N3b-weekly-unsubscribe"
            weeklyStatusViewSettings = true
            var weeklyFile = req.session.data['weeklyFile']
            if (weeklyFile !== "Yes") {
                weeklyFile = "No"
            }
        } else {
            weeklyStatus = "Unsubscribed"
            weeklyStatusAction = "Subscribe"
            weeklyStatusRoute = '/' + version + "/notifications/N3a-weekly-subscribe"
            weeklyStatusViewSettings = false
        }

        // AQD summary 
        let aqdSub = req.session.data['aqdSub'];
        let aqdStatus;
        if (aqdSub === "yes") {
            aqdStatus = "Subscribed"
            aqdStatusAction = "Unsubscribe"
            aqdStatusRoute = '/' + version + "/notifications/N4b-aqd-unsubscribe"
        } else {
            aqdStatus = "Unsubscribed"
            aqdStatusAction = "Subscribe"
            aqdStatusRoute = '/' + version + "/notifications/N4a-aqd-subscribe"
        }

        if (subCount > 0) {
            success = true;
        }


        res.render(version + "/notifications/N1-manage-subscriptions", {
            'error': req.query.error,
            'version': version,
            'about': navAbout,
            'daily': navToday,
            'weekly': navWeekly,
            'search': navSearch,
            'back': "/" + version + "/A1-about",
            //Trigger updates
            'triggerStatus': triggerStatus,
            'triggerStatusAction': triggerStatusAction,
            'changeTrigger': triggerStatusRoute,
            'triggerStatusView': triggerStatusViewSettings,
            'triggerFile': triggerFile,
            'noTrigger': noTrigger,
            'directChangeTriggerFile': '/' + version + "/notifications/N2c-trigger-file-YN",
            //Weekly summary
            'weeklyStatus': weeklyStatus,
            'weeklyStatusAction': weeklyStatusAction,
            'changeWeekly': weeklyStatusRoute,
            'weeklyStatusView': weeklyStatusViewSettings,
            'weeklyFile': weeklyFile,
            'directChangeWeeklyFile': '/' + version + "/notifications/N3c-weekly-file-YN",
            'directChangeNoTrigger': '/' + version + "/notifications/N2d-trigger-no-YN",
            //AQD
            'aqdStatus': aqdStatus,
            'aqdStatusAction': aqdStatusAction,
            'changeaqd': aqdStatusRoute,


            // Success banner
            'success': success
        });
    });







    // Daily trigger subscribe journey
    router.get('/' + version + "/notifications/N2a-trigger-subscribe", function (req, res) {
        res.render(version + "/notifications/N2a-trigger-subscribe", {
            'error': req.query.error,
            'version': version,
            'about': navAbout,
            'daily': navToday,
            'weekly': navWeekly,
            'search': navSearch,
        });
    });

    router.post('/' + version + "/notifications/N2a-trigger-subscribe", function (req, res) {
        var triggerSub = req.session.data['triggerSub']
        if (triggerSub === "yes") {
            res.redirect('/' + version + "/notifications/N2c-trigger-file-YN")
        } else if (triggerSub === "no") {
            res.redirect('/' + version + "/notifications/N1-manage-subscriptions")
        } else {
            res.redirect('/' + version + "/notifications/N2a-trigger-subscribe?error=true")
        }
    });


    router.get('/' + version + "/notifications/N2c-trigger-file-YN", function (req, res) {
        subCount++;
        res.render(version + "/notifications/N2c-trigger-file-YN", {
            'error': req.query.error,
            'version': version,
            'about': navAbout,
            'daily': navToday,
            'weekly': navWeekly,
            'search': navSearch,
        });
    });

    router.post('/' + version + "/notifications/N2c-trigger-file-YN", function (req, res) {
        var triggerFile = req.session.data['triggerFile']
        if (triggerFile === "Yes" || triggerFile === "No") {
            res.redirect('/' + version + "/notifications/N2d-trigger-no-YN")
        } else {
            res.redirect('/' + version + "/notifications/N2c-trigger-file-YN?error=true")
        }
    });

    router.get('/' + version + "/notifications/N2d-trigger-no-YN", function (req, res) {
        subCount++;
        res.render(version + "/notifications/N2d-trigger-no-YN", {
            'error': req.query.error,
            'version': version,
            'about': navAbout,
            'daily': navToday,
            'weekly': navWeekly,
            'search': navSearch,
        });
    });

    router.post('/' + version + "/notifications/N2d-trigger-no-YN", function (req, res) {
        var triggerNo = req.session.data['noTrigger']
        if (triggerNo === "Yes" || triggerNo === "No") {
            res.redirect('/' + version + "/notifications/N1-manage-subscriptions")
        } else {
            res.redirect('/' + version + "/notifications/N2d-trigger-no-YN?error=true")
        }
    });

    // Daily trigger UNsubscribe journey

    router.get('/' + version + "/notifications/N2b-trigger-unsubscribe", function (req, res) {
        res.render(version + "/notifications/N2b-trigger-unsubscribe", {
            'error': req.query.error,
            'version': version,
            'about': navAbout,
            'daily': navToday,
            'weekly': navWeekly,
            'search': navSearch,
        });
    });

    router.post('/' + version + "/notifications/N2b-trigger-unsubscribe", function (req, res) {
        var triggerSub = req.session.data['triggerSub']
        if (triggerSub === "yes" || triggerSub === "no") {
            res.redirect('/' + version + "/notifications/N1-manage-subscriptions")
        } else {
            res.redirect('/' + version + "/notifications/N2b-trigger-unsubscribe?error=true")
        }
    });


    // Weekly trigger subscribe journey
    router.get('/' + version + "/notifications/N3a-weekly-subscribe", function (req, res) {
        res.render(version + "/notifications/N3a-weekly-subscribe", {
            'error': req.query.error,
            'version': version,
            'about': navAbout,
            'daily': navToday,
            'weekly': navWeekly,
            'search': navSearch,
        });
    });

    router.post('/' + version + "/notifications/N3a-weekly-subscribe", function (req, res) {
        var weeklySub = req.session.data['weeklySub'];
        if (weeklySub === "yes") {
            subCount++;
            console.log(subCount);
            res.redirect('/' + version + "/notifications/N3c-weekly-file-YN")
        } else if (weeklySub === "no") {
            res.redirect('/' + version + "/notifications/N1-manage-subscriptions")
        } else {
            res.redirect('/' + version + "/notifications/N3a-weekly-subscribe?error=true")
        }
    });

    router.get('/' + version + "/notifications/N3c-weekly-file-YN", function (req, res) {
        res.render(version + "/notifications/N3c-weekly-file-YN", {
            'error': req.query.error,
            'version': version,
            'about': navAbout,
            'daily': navToday,
            'weekly': navWeekly,
            'search': navSearch,
        });
    });

    router.post('/' + version + "/notifications/N3c-weekly-file-YN", function (req, res) {
        var weeklyFile = req.session.data['weeklyFile']
        if (weeklyFile === "Yes" || weeklyFile === "No") {
            res.redirect('/' + version + "/notifications/N1-manage-subscriptions")
        } else {
            res.redirect('/' + version + "/notifications/N3c-weekly-file-YN?error=true")
        }
    });

    // Weekly summary UNsubscribe journey

    router.get('/' + version + "/notifications/N3b-weekly-unsubscribe", function (req, res) {
        res.render(version + "/notifications/N3b-weekly-unsubscribe", {
            'error': req.query.error,
            'version': version,
            'about': navAbout,
            'daily': navToday,
            'weekly': navWeekly,
            'search': navSearch,
        });
    });

    router.post('/' + version + "/notifications/N3b-weekly-unsubscribe", function (req, res) {
        var weeklySub = req.session.data['weeklySub']
        if (weeklySub === "yes" || weeklySub === "no") {
            res.redirect('/' + version + "/notifications/N1-manage-subscriptions")
        } else {
            res.redirect('/' + version + "/notifications/N3b-weekly-unsubscribe?error=true")
        }
    });


    // AQD subscribe journey
    router.get('/' + version + "/notifications/N4a-aqd-subscribe", function (req, res) {
        res.render(version + "/notifications/N4a-aqd-subscribe", {
            'error': req.query.error,
            'version': version,
            'about': navAbout,
            'daily': navToday,
            'weekly': navWeekly,
            'search': navSearch,
        });
    });

    router.post('/' + version + "/notifications/N4a-aqd-subscribe", function (req, res) {
        var aqdSub = req.session.data['aqdSub'];
        if (aqdSub === "yes") {
            subCount++;
            console.log(subCount);
            res.redirect('/' + version + "/notifications/N1-manage-subscriptions")
        } else if (aqdSub === "no") {
            res.redirect('/' + version + "/notifications/N1-manage-subscriptions")
        } else {
            res.redirect('/' + version + "/notifications/N4a-aqd-subscribe?error=true")
        }
    });

    // AQD UNsubscribe journey

    router.get('/' + version + "/notifications/N4b-aqd-unsubscribe", function (req, res) {
        res.render(version + "/notifications/N4b-aqd-unsubscribe", {
            'error': req.query.error,
            'version': version,
            'about': navAbout,
            'daily': navToday,
            'weekly': navWeekly,
            'search': navSearch,
        });
    });

    router.post('/' + version + "/notifications/N4b-aqd-unsubscribe", function (req, res) {
        var aqdSub = req.session.data['aqdSub']
        if (aqdSub === "yes" || aqdSub === "no") {
            res.redirect('/' + version + "/notifications/N1-manage-subscriptions")
        } else {
            res.redirect('/' + version + "/notifications/N3b-weekly-unsubscribe?error=true")
        }
    });




    //------------------
    // Update distribution list (Notifications)

    router.get('/' + version + "/notifications/E1-change-email-download", function (req, res) {
        res.render(version + "/notifications/E1-change-email-download", {
            'error': req.query.error,
            'version': version,
            'about': navAbout,
            'daily': navToday,
            'weekly': navWeekly,
            'search': navSearch,
        });
    });

    router.post('/' + version + "/notifications/E1-change-email-download", function (req, res) {
        res.redirect('/' + version + "/notifications/E2-change-email-YN")
    });

    router.get('/' + version + "/notifications/E2-change-email-YN", function (req, res) {
        res.render(version + "/notifications/E2-change-email-YN", {
            'error': req.query.error,
            'version': version,
            'about': navAbout,
            'daily': navToday,
            'weekly': navWeekly,
            'search': navSearch,
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
            'about': navAbout,
            'daily': navToday,
            'weekly': navWeekly,
            'search': navSearch,
        });
    });

    router.post('/' + version + "/notifications/E3-change-email-upload", function (req, res) {
        res.redirect('/' + version + "/notifications/E4-change-email-confirm")
    });



    router.get('/' + version + "/notifications/E3-change-email-upload-only", function (req, res) {
        res.render(version + "/notifications/E3-change-email-upload-only", {
            'error': req.query.error,
            'version': version,
            'about': navAbout,
            'daily': navToday,
            'weekly': navWeekly,
            'search': navSearch,
        });
    });

    router.post('/' + version + "/notifications/E3-change-email-upload-only", function (req, res) {
        res.redirect('/' + version + "/notifications/E4-change-email-confirm")
    });




    router.get('/' + version + "/notifications/E4-change-email-confirm", function (req, res) {
        res.render(version + "/notifications/E4-change-email-confirm", {
            'error': req.query.error,
            'version': version,
            'about': navAbout,
            'daily': navToday,
            'weekly': navWeekly,
            'search': navSearch,
        });
    });

    router.post('/' + version + "/notifications/E4-change-email-confirm", function (req, res) {
        res.redirect('/' + version + "/notifications/E5-change-email-success")
    });

    router.get('/' + version + "/notifications/E5-change-email-success", function (req, res) {
        res.render(version + "/notifications/E5-change-email-success", {
            'error': req.query.error,
            'version': version,
            'about': navAbout,
            'daily': navToday,
            'weekly': navWeekly,
            'search': navSearch,
        });
    });

    router.post('/' + version + "/notifications/E5-change-email-success", function (req, res) {
        res.redirect('/' + version + "/A1-about")
    });

    router.get('/' + version + "/notifications/E6-change-email-problem", function (req, res) {
        res.render(version + "/notifications/E6-change-email-problem", {
            'error': req.query.error,
            'version': version,
            'about': navAbout,
            'daily': navToday,
            'weekly': navWeekly,
            'search': navSearch,
        });
    });

    router.post('/' + version + "/notifications/E6-change-email-problem", function (req, res) {
        res.redirect('/' + version + "/notifications/E3-change-email-upload-only")
    });









};

