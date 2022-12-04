const newRouter = require ('./news');
const siteRouter = require ('./site');

function route(app) {
    
    // bởi vì news có slug nên tách thành 2 routes, còn search !?, ...
    app.use('/news', newRouter);
    app.use('/', siteRouter);
}

module.exports = route;