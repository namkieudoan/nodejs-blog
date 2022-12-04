    class NewController {
        
        slug(req,res){
            res.send('News slug !')
        }

        index(req,res){
            res.render('news')
        }
    }

module.exports = new NewController;