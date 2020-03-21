module.exports = { 
    // get all user 
    index (req, res) {
    res.send('show all user') },
    // create user
    create (req, res) {
    res.send('create user:' + JSON.stringify(req.body)
    )},
    
    // edit user, suspend, active
put (req, res) {
    res.send('ทาํ การแกไ้ ขผใุ้ ชง้ าน: ' + req.params.userId + ':' +
    JSON.stringify(req.body)) },

    // delete user
    remove (req, res) {
    res.send('delete user: ' + req.params.userId + ':'+ JSON.stringify (req.body)
    )},
    
    // get user by id
    show (req, res) {
    res.send('view user:' + req.params.userId)
    } 
}