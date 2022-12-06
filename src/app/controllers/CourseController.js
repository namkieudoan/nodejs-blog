const Course = require('../modals/course');
const {multiMongooseToObject} = require('../../ulti/mongoose');
const {mongooseToObject} = require('../../ulti/mongoose');

class CourseController {

    //[GET] courses/:slug
    slug(req, res,next) {
        Course.findOne({slug: req.params.slug})
            .then(course=> {
                res.render('courses/slug',{ course: mongooseToObject(course) })
            })
            .catch(next)
    };

    
    //[GET] courses/
    index(req,res,error){
        Course.find({})
        .then(courses=>{
            //convert object contructor of mongoose to object inerral
            res.render('courses',{ courses: multiMongooseToObject(courses) })
        })
        .catch(error => next(error))
    }
    
    //[GET] courses/create
    create(req, res,next) {
        res.render('courses/create')
     };
     
     //[POST] courses/store
     store(req, res,next) {
         const course = Course(req.body);
         course.save()
             .then(()=> res.redirect(`/courses/${req.body.slug}`))
             .catch(next)
     };
     
     //[GET] courses/edit --- lấy thông tin khóa học về 
    edit(req, res,next) {
        Course.findById(req.params.id)
        .then(course=>{
            res.render('courses/edit',{ course: mongooseToObject(course) })
        })
        .catch(next)
     };
    
     //[PUT] courses/:id -- lưu lại thông tin khóa học
    update(req, res,next) {
        Course.updateOne({_id: req.params.id},req.body)
        .then(()=> res.redirect('/me/stored/courses'))
        .catch(next) 
     };


}

module.exports = new CourseController();
