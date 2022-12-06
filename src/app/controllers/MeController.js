const Course = require('../modals/course');
const {multiMongooseToObject} = require('../../ulti/mongoose');

class MeController {

    //[GET] me/stored/courses
    storedCourses(req, res,next) {
        Course.find({})
            .then(courses=> {
                res.render('me/stored-courses',{ courses: multiMongooseToObject(courses) })
            })
            .catch(next)
    };
    
}

module.exports = new MeController();
