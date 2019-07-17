insert into users (username, password, image) 
values (${username}, ${hash}, ${image})
returning *