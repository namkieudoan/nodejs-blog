const Course = require('../modals/course');
const {multiMongooseToObject} = require('../../ulti/mongoose');

    class SiteController {
        index(req,res,error){
            Course.find({})
                .then(courses=>{
                    //convert object contructor of mongoose to object inerral
                    res.render('home',{ courses: multiMongooseToObject(courses) })
                })
                .catch(error => next(error))
        }
        search(req,res){
            res.render('search')
        }
    }
module.exports = new SiteController