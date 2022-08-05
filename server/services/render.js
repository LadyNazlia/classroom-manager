exports.homeRoutes = (request, response) => {
    response.render('index')
}

exports.add_user = (request, response) => {
    response.render('add_user')
}

exports.update_user = (request, response) => {
    response.render('update-user')
}