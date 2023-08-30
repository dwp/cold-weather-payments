module.exports = function (router) {

    const version = "v11";
    console.log("Additional routes");

    // Nav default statuses -----------------------------------
    let aboutActive = false;
    let dailyActive = false;
    let weeklyActive = false;
    let searchActive = false;

    // Nav  default links ------------------------------
    let navAbout = "/" + version + "/check-cold-weather-payments/about-this-service-A1";
    let navToday = "/" + version + "/check-cold-weather-payments/todays-trigger-data-D2a";
    let navWeekly = "/" + version + "/check-cold-weather-payments/weekly-summary-W2";
    let navSearch = "/" + version + "/check-cold-weather-payments/what-do-you-want-to-do";


    //------------------
    // Views: INDEX

    router.get('index', function (req, res) {
        res.render('index', {
            'version': version,
        });
    });

 //------------------
    // Views: ABOUT THIS SERVICE

    router.get('/' + version + "/check-cold-weather-payments/about-this-service-A1", function (req, res) {
        // Set active navigation tab
        aboutActive = true;
        dailyActive = false;
        weeklyActive = false;
        searchActive = false;
        res.render(version + "/check-cold-weather-payments/about-this-service-A1", {
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
            // Page links
            'changeEmails': "/" + version + "/notifications/E3-change-email-upload-only",
        });
    });

















};

