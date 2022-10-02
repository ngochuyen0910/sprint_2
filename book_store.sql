create
database book_store;

use
book_store;

create table app_role
(
    id        int primary key auto_increment,
    role_name varchar(45)
);

create table app_user
(
    id            int primary key auto_increment,
    creation_date date,
    email         varchar(45),
    `password`    varchar(45),
    username      varchar(45)
);

create table user_role
(
    id      int primary key auto_increment,
    role_id int,
    user_id int,
    foreign key (role_id) references app_role (id),
    foreign key (user_id) references app_user (id)
);

create table customer
(
    id            int primary key auto_increment,
    cusromer_name varchar(50),
    date_of_birth date,
    id_card       varchar(10),
    gender        varchar(10),
    user_id       int,
    foreign key (user_id) references app_user (id)
);

create table category
(
    id            int primary key auto_increment,
    category_name varchar(255)
);

create table book
(
    id          int primary key auto_increment,
    code        varchar(10),
    writer      varchar(255),
    translater  varchar(255),
    company     varchar(255),
    page_number int,
    size        int,
    day_out     varchar(20),
    price       double,
    category_id int,
    foreign key (category_id) references category (id)
);

create table cart
(
    id          int primary key auto_increment,
    amount      int,
    book_id     int,
    customer_id int,
    foreign key (book_id) references book (id),
    foreign key (customer_id) references customer (id)
);



