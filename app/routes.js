//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

require('./routes/routes-v1.js')(router);
require('./routes/routes-v2.js')(router);
require('./routes/routes-v3.js')(router);
require('./routes/routes-v4.js')(router);
require('./routes/routes-v5.js')(router);
require('./routes/routes-v6.js')(router);
require('./routes/routes-v7.js')(router);
require('./routes/routes-v8.js')(router);
require('./routes/routes-v9.js')(router);
require('./routes/routes-v10.js')(router);

// Version 11
require('./routes/v11/additional-routes.js')(router);
require('./routes/v11/today-routes.js')(router);
require('./routes/v11/weekly-routes.js')(router);
require('./routes/v11/search-routes.js')(router);
require('./routes/v11/notifications.js')(router);

// No sprint 12 version required

// Version 13
require('./routes/v13/additional-routes.js')(router);
require('./routes/v13/today-routes.js')(router);
require('./routes/v13/weekly-routes.js')(router);
require('./routes/v13/search-routes.js')(router);
require('./routes/v13/notifications.js')(router);

// Version 14
require('./routes/v14/additional-routes.js')(router);
require('./routes/v14/today-routes.js')(router);
require('./routes/v14/weekly-routes.js')(router);
require('./routes/v14/search-routes.js')(router);
require('./routes/v14/notifications.js')(router);



// inject the route data into the index page
// router.get('/:version?', (req, res) => {

//     //set the version to the latest
//     let thisVersion = versions[versions.length -1].version
  
//     //unless one is passed in
//     if(req.params.version != undefined) {
//       thisVersion = req.params.version
//     } 
  
//     //load modules if they exists

//     let pageObj = {
//       version: thisVersion,
//       versions: versions
//     }
  
//     res.render('index.html', pageObj)
//   })