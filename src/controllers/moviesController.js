const db = require('../database/models')

module.exports = {
    list : (req,res) => {
        db.Pelicula.findAll()
        .then(movies => res.render('moviesList',{movies}))
},
detail : (req,res) => {
      db.Pelicula.findByPk(req.params.id)
    .then(movie => res.render('moviesDetail',{
        movie
}))
.catch(error => console.log(error))
        
    
    
},
newest : (req,res) => {
        db.Pelicula.findAll({
        order : [
            [
            'release_date','DESC'
            ]
        ],
        limit:5
    })
    .then(movies => res.render('newestMovies',{
        movies,
        
    }));
    

    },
    recomended : (req,res) => {
        db.Pelicula.findAll({
            where : {
                rating: {[db.Sequelize.Op.gte]: 8} /* donde el rating sea mayor a 8 */
            },
            order : [
                [ 'rating','DESC']
            ]
           
        })
        .then(movies => res.render('recommendedMovies',{
            movies,
            
        }))
    }
}
