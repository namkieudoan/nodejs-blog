const Course = require('../modals/course');

    class SiteController {
        search(req,res){
            
            Course.find({}, function (err, courses){
                if(!err){
                    res.json(courses);
                }else{
                    res.status(400).json({err: "ERRo !"})
                }
            })

        }
        index(req,res){
            res.render('home')
        }
    }
module.exports = new SiteController