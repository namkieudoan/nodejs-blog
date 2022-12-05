const Course = require('../modals/course');
const {multiMongooseToObject} = require('../../ulti/mongoose');
const {mongooseToObject} = require('../../ulti/mongoose');

class CourseController {
    slug(req, res,next) {
        Course.findOne({slug: req.params.slug})
            .then(course=> {
                res.render('courses/slug',{ course: mongooseToObject(course) })
            })
            .catch(next)
    };

    index(req,res,error){
        Course.find({})
            .then(courses=>{
                //convert object contructor of mongoose to object inerral
                res.render('courses',{ courses: multiMongooseToObject(courses) })
            })
            .catch(error => next(error))
    }
}

module.exports = new CourseController();
