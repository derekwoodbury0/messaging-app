create table posts (
    post_id serial primary key,
    user_id int,
    message text
);

insert into posts (user_id, message)
values (1, 'hello world');

alter table posts
add column title varchar;

update posts
set title = 'post 1'
where user_id = 1;

select posts.user_id, username, image, message, title from posts
join users on users.user_id = posts.user_id;