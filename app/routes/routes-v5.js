module.exports = function (router) {

    const version = "v5";

    // TRIGGER DAY DATA
    // Scenario 1
    const trigDay1 = "Tuesday 14 February 2023"
    const period1 = "14 Feb 2023 to 20 Feb 2023"
    const scan1 = "17 February 2023";
    const pay1 = "22 February";
    const dlaScan1 = "22 February";
    const dlaPay1 = "27 February";
    // Scenario 2
    const trigDay2 = "Tuesday 14 February 2023"
    const period2 = "14 Feb 2023 to 20 Feb 2023"
    const scan2 = "17 February 2023";
    const pay2 = "22 February";
    const dlaScan2 = "22 February";
    const dlaPay2 = "27 February";
 

    // Journeys


    // router.get('/' + version + "/daily-views/D2a-daily-forecasted", function (req, res) {
    //     res.render(version + "/daily-views/D2a-daily-forecasted", {
    //         'version': version,
    //         'daily': "/" + version + "/daily-views/D2a-daily-forecasted",
    //         'weekly': "/" + version + "/weekly-views/w1-weekly-no-triggers",
    //         'search': "/" + version + "/search/S1-new-search",
    //         'listStations': "/" + version + "/location-lists/LW1-weather-daily",
    //         'listPostcodes': "/" + version + "/location-lists/LP1-postcodes-daily",
    //     });
    // });

    // router.get('/' + version + "/weekly-views/w1-weekly-no-triggers", function (req, res) {
    //     res.render(version + "/weekly-views/w1-weekly-no-triggers", {
    //         'version': version,
    //         'daily': "/" + version + "/daily-views/D2a-daily-forecasted",
    //         'weekly': "/" + version + "/weekly-views/w1-weekly-no-triggers",
    //         'search': "/" + version + "/search/S1-new-search",
    //         'listStations': "/" + version + "/",
    //         'listPostcodes': "/" + version + "/",
    //     });
    // });
    

    // router.get('/' + version + "/search/S1-new-search", function (req, res) {
    //     res.render(version + "/search/S1-new-search", {
    //         'errorBoth': req.query.errorBoth,
    //         'error1': req.query.error1,
    //         'error2': req.query.error2,
    //         'version': version,
    //         'daily': "/" + version + "/daily-views/D2a-daily-forecasted",
    //         'weekly': "/" + version + "/weekly-views/w1-weekly-no-triggers",
    //         'search': "/" + version + "/search/S1-new-search",
    //     });
    // });

    // router.post('/' + version + "/search/S1-new-search", function (req, res) {
    //     var dateRange = req.session.data['date-range']
    //     var location = req.session.data['location']

    //     if (location == undefined && dateRange == undefined) {
    //         console.log("location= " + location + ", date=" + dateRange);
    //         res.redirect('/' + version + "/search/S1-new-search?errorBoth=true");
    //     } else if (dateRange == undefined) {
    //         console.log("location= " + location + ", date=" + dateRange);
    //         res.redirect('/' + version + "/search/S1-new-search?error1=true")
    //     } else if (location == undefined) {
    //         console.log("location= " + location + ", date=" + dateRange);
    //         res.redirect('/' + version + "/search/S1-new-search?error2=true")
    //     } else if (location == "weatherStation"){
    //         console.log("weather station");
    //         res.redirect('/' + version + "/search/not-yet-done")
    //     } else if (location == "postcode"){
    //         console.log("postcode");
    //         res.redirect('/' + version + "/search/not-yet-done")
    //     } else if (location == "everywhere" && dateRange == "single"){
    //         console.log("all locations, single date");
    //         res.redirect('/' + version + "/search/SR1-result-single-day")
    //     } else if (location == "everywhere" && dateRange == "range"){
    //         console.log("all locations, single date");
    //         res.redirect('/' + version + "/search/SR2-result-multiple-days")
    //     } else {
    //         console.log("location= " + location + ", date=" + dateRange);
    //         res.redirect('/' + version + "/search/not-yet-done")
    //     }
    // });



    // router.get('/' + version + "/search/SR1-result-single-day", function (req, res) {
    //     res.render(version + "/search/SR1-result-single-day", {
    //         'version': version,
    //         'daily': "/" + version + "/daily-views/D2a-daily-forecasted",
    //         'weekly': "/" + version + "/weekly-views/w1-weekly-no-triggers",
    //         'search': "/" + version + "/search/S1-new-search",
    //         'listStations': "/" + version + "/location-lists/LW2-weather-daily-two-triggers",
    //         'listPostcodes': "/" + version + "/location-lists/LP2-postcodes-daily-two-triggers",
    //         'aqd': "/" + version + "/search/A1-aqd-summary"
    //     });
    // });

    // router.get('/' + version + "/search/SR2-result-multiple-days", function (req, res) {
    //     res.render(version + "/search/SR2-result-multiple-days", {
    //         'version': version,
    //         'daily': "/" + version + "/daily-views/D2a-daily-forecasted",
    //         'weekly': "/" + version + "/weekly-views/w1-weekly-no-triggers",
    //         'search': "/" + version + "/search/S1-new-search",
    //         'listStationsDay2': "/" + version + "/location-lists/LW2-weather-daily-two-triggers",
    //         'listPostcodesDay2': "/" + version + "/location-lists/LP2-postcodes-daily-two-triggers",
    //         'aqd': "/" + version + "/search/A1-aqd-summary"
    //     });
    // });
    
    // router.get('/' + version + "/search/A1-aqd-summary", function (req, res) {
    //     res.render(version + "/search/A1-aqd-summary", {
    //         'version': version,
    //         'daily': "/" + version + "/daily-views/D2a-daily-forecasted",
    //         'weekly': "/" + version + "/weekly-views/w1-weekly-no-triggers",
    //         'search': "/" + version + "/search/S1-new-search",
    //         'listPostcodes': "/" + version + "/",
    //         'listStations': "/" + version + "/",
    //     });
    // });
   
   


    // router.get('/' + version + "/daily-views/D1-daily-no-trigger", function (req, res) {
    //     res.render(version + "/daily-views/D1-daily-no-trigger", {
    //         'version': version,
    //         'daily': "/" + version + "/daily-views/D1-daily-no-trigger",
    //         'weekly': "/" + version + "/weekly-views/w1-weekly-no-triggers",
    //         'search': "/" + version + "/search/S1-new-search",
    //     });
    // });


    // router.get('/' + version + "/daily-views/D2a-daily-forecasted", function (req, res) {
    //     res.render(version + "/daily-views/D2a-daily-forecasted", {
    //         'version': version,
    //         'daily': "/" + version + "/daily-views/D2a-daily-forecasted",
    //         'weekly': "/" + version + "/weekly-views/w1-weekly-no-triggers",
    //         'search': "/" + version + "/search/S1-new-search",
    //         'listStations': "/" + version + "/",
    //         'listPostcodes': "/" + version + "/",
    //     });
    // });

    // router.get('/' + version + "/daily-views/D2b-daily-forecasted-and-recorded", function (req, res) {
    //     res.render(version + "/daily-views/D2b-daily-forecasted-and-recorded", {
    //         'version': version,
    //         'daily': "/" + version + "/daily-views/D2b-daily-forecasted-and-recorded",
    //         'weekly': "/" + version + "/weekly-views/w1-weekly-no-triggers",
    //         'search': "/" + version + "/search/S1-new-search",
    //         'listStations': "/" + version + "/",
    //         'listPostcodes': "/" + version + "/",
    //     });
    // });

    

    // router.get('/' + version + "/daily-views/D5-daily-data-not-ready", function (req, res) {
    //     res.render(version + "/daily-views/D5-daily-data-not-ready", {
    //         'version': version,
    //         'daily': "/" + version + "/daily-views/D5-daily-data-not-ready",
    //         'weekly': "/" + version + "/weekly-views/w1-weekly-no-triggers",
    //         'search': "/" + version + "/search/S1-new-search",
    //     });
    // });

    // router.get('/' + version + "/daily-views/D6-daily-out-of-season", function (req, res) {
    //     res.render(version + "/daily-views/D6-daily-out-of-season", {
    //         'version': version,
    //         'daily': "/" + version + "/daily-views/D6-daily-out-of-season",
    //         'weekly': "/" + version + "/weekly-views/w1-weekly-no-triggers",
    //         'search': "/" + version + "/search/S1-new-search",
    //     });
    // });























};

