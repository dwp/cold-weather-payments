module.exports = function (router) {


    const version = "v11";
    console.log("Search routes");


    // Nav default statuses -----------------------------------
    let aboutActive = false;
    let dailyActive = false;
    let weeklyActive = false;
    let searchActive = false;
    let searchVariation = "all";
    // Nav  default links ------------------------------
    let navAbout = "/" + version + "/check-cold-weather-payments/about-this-service-A1";
    let navToday = "/" + version + "/check-cold-weather-payments/todays-trigger-data-D2a";
    let navWeekly = "/" + version + "/check-cold-weather-payments/weekly-summary-W2";
    let navSearch = "/" + version + "/check-cold-weather-payments/what-do-you-want-to-do";


    //---------------------------------------------------------------------------------------------------------------
    // S Start search journey
    router.get('/' + version + "/check-cold-weather-payments/what-do-you-want-to-do", function (req, res) {

        // Set active navigation tab
        aboutActive = false;
        dailyActive = false;
        weeklyActive = false;
        searchActive = true;
        res.render(version + "/check-cold-weather-payments/what-do-you-want-to-do", {
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

        });
    });













};
