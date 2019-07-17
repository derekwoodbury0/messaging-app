select posts.user_id, username, image, message, title from posts
join users on users.user_id = posts.user_id
where users.user_id = $1