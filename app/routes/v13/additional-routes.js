module.exports = function (router) {

    const version = "v13";
    console.log("Additional routes");



    // Set default nav links ------------------------------
    let navAbout = "/" + version + "/check-cold-weather-payments/about-this-service-A1";
    let navToday = "/" + version + "/check-cold-weather-payments/todays-trigger-data-D2a";
    let navWeekly = "/" + version + "/check-cold-weather-payments/weekly-summary-W2";
    let navSearch = "/" + version + "/check-cold-weather-payments/what-do-you-want-to-do";

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
            // Page links
            'changeEmails': "/" + version + "/notifications/E3-change-email-upload-only",
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















};

