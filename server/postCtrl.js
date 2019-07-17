module.exports = {
    getPosts: async(req, res) => {
        console.log('hit')
        let db = req.app.get('db')
        let {user_id} = req.query
        console.log(user_id)
        let posts = await db.get_all_posts(user_id)
        console.log(posts)
        res.send(posts)
    }
}