module.exports = function (router) {

    const version = "v15";




    // Set default nav links ------------------------------
    let navAbout = "/" + version + "/check-cold-weather-payments/about-this-service-A1";
    let navToday = "/" + version + "/check-cold-weather-payments/todays-trigger-data-D2a";
    let navWeekly = "/" + version + "/check-cold-weather-payments/weekly-summary-W2";
    let navSearch = "/" + version + "/check-cold-weather-payments/what-do-you-want-to-do";
    let navSettings = "/" + version + "/notifications/N5-enter-email-address";





    //------------------
    // index


    router.post('/', function (req, res) {
        var protoJourney = req.session.data['protoJourney'];
        if (protoJourney == undefined) {
            res.redirect('/' + version + "/check-cold-weather-payments/about-this-service-A1")
        } else if (protoJourney == "baselines") {
            res.redirect('ready-for-dev')
        } else if (protoJourney == "landing") {
            res.redirect("/" + version + "/check-cold-weather-payments/todays-trigger-data-D2a")
        } else if (protoJourney == "variations") {
            res.redirect('page-variations')
        }
    });

    //------------------
    // Email settings

    router.get('/' + version + "/check-cold-weather-payments/email-settings", function (req, res) {
        // Set active navigation tab
        settingsActive = true;
        res.render(version + "/check-cold-weather-payments/email-settings", {
            'version': version,
            // Navigation settings
            'settingsActive': settingsActive,
            'about': navAbout,
            'daily': navToday,
            'weekly': navWeekly,
            'search': navSearch,
            'settings': navSettings,
            // Page links
            'enterEmail': "/" + version + "/notifications/N5-enter-email-address",
        });
    });
    
    
    //------------------
    // A1 About this Service

    router.get('/' + version + "/check-cold-weather-payments/about-this-service-A1", function (req, res) {
        // Set active navigation tab
        aboutActive = true;
        res.render(version + "/check-cold-weather-payments/about-this-service-A1", {
            'version': version,
            // Navigation settings
            'aboutActive': aboutActive,
            'about': navAbout,
            'daily': navToday,
            'weekly': navWeekly,
            'search': navSearch,
            'settings': navSettings,
            // Page links
            'enterEmail': "/" + version + "/notifications/N5-enter-email-address",
        });
    });

    //------------------
    // D7a Problem with the service

    router.get('/' + version + "/check-cold-weather-payments/problem-with-the-service-7a", function (req, res) {
        variation = "problem";
        // Set active navigation tab
        res.render(version + "/check-cold-weather-payments/problem-with-the-service", {
            'version': version,
            'variation': variation,
            // Navigation settings
            'about': navAbout,
            'daily': navToday,
            'weekly': navWeekly,
            'search': navSearch, 
            'settings': navSettings,
        });
    });

    //------------------
    // D7b Service unavailable

    router.get('/' + version + "/check-cold-weather-payments/service-unavailable-7b", function (req, res) {
        variation = "unavailable";
        // Set active navigation tab
        res.render(version + "/check-cold-weather-payments/problem-with-the-service", {
            'version': version,
            'variation': variation,
            // Navigation settings
            'about': navAbout,
            'daily': navToday,
            'weekly': navWeekly,
            'search': navSearch, 
            'settings': navSettings,
        });
    });


    //------------------
    // D7c Service unavailable with timescale

    router.get('/' + version + "/check-cold-weather-payments/service-unavailable-7c", function (req, res) {
        variation = "unavailable with timescale";
        // Set active navigation tab
        res.render(version + "/check-cold-weather-payments/problem-with-the-service", {
            'version': version,
            'variation': variation,
            // Navigation settings
            'about': navAbout,
            'daily': navToday,
            'weekly': navWeekly,
            'search': navSearch, 
            'settings': navSettings,
        });
    });


    //------------------
    // details-fix

    router.get('/' + version + "/check-cold-weather-payments/details-fix", function (req, res) {
        // Set active navigation tab
        aboutActive = true;
        res.render(version + "/check-cold-weather-payments/details-fix", {
            'version': version,
            // Navigation settings
            'aboutActive': aboutActive,
            'about': navAbout,
            'daily': navToday,
            'weekly': navWeekly,
            'search': navSearch, 
            'settings': navSettings,
            // Page links
            'changeEmails': "/" + version + "/notifications/E3-change-email-upload-only",
        });
    });

    //------------------
    // Accessibility statement

    router.get('/' + version + "/check-cold-weather-payments/accessibility-statement", function (req, res) {
        res.render(version + "/check-cold-weather-payments/accessibility-statement", {
            'version': version,
        });
    });

    //------------------
    // Beta drafts 

    router.get('/' + version + "/beta-drafts/select-season", function (req, res) {
        res.render(version + "/beta-drafts/select-season", {
            'version': version,
        });
    });

    router.get('/' + version + "/beta-drafts/enter-season", function (req, res) {
        res.render(version + "/beta-drafts/enter-season", {
            'version': version,
        });
    });

    router.get('/' + version + "/beta-drafts/what-do-you-want-to-do-multiple-seasons", function (req, res) {
        res.render(version + "/beta-drafts/what-do-you-want-to-do-multiple-seasons", {
            'version': version,
        });
    });















};

