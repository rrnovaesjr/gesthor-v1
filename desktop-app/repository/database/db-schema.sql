/*
* Initialization
*/

create database if not exists `gesthor_dev`;

use `gesthor_dev`;

/*
* Table definitions - version 1.0
*/
create table if not exists `client` (
	`id` bigint auto_increment,
    `user_id` varchar(32) not null,
    `name_socialname` varchar(256) not null,
    `cpf_cnpj` varchar(16),
    `address` varchar(128),
    `number` int(6),
    `neighborhood` varchar(128),
    `city` varchar(128),
    `state_province` varchar(32),
    `country` varchar(128),
    `zip_code` varchar(16),
    `telefone_comercial` varchar(16),
    `phone` varchar(16),
    `mobile_phone` varchar(16),
    `email` varchar(32),
    `notes` varchar(512),
    constraint pk_client primary key(`id`),
    constraint uk_client_cpf_cnpj unique(`cpf_cnpj`),
    constraint uk_client_email unique(`email`)
);

create table if not exists `component` (
    `id` bigint auto_increment,
    `label` varchar(128) not null,
    `route` varchar(512),
    `parent_id` bigint default null,
    `leaf` char(1) default 'N',
    constraint pk_component primary key(`id`),
    constraint ck_component_leaf check(`leaf` in ('Y', 'N'))
);

create table if not exists `user_role` (
    `role` varchar(32) not null,
    constraint pk_user_roles primary key(`role`)
);

create table if not exists `component_user_role` (
    `id` bigint auto_increment,
    `component_id` bigint not null,
    `role` varchar(32) not null,
    constraint pk_component_user_roles primary key(`id`),
    constraint fk_component_user_roles_component foreign key(`component_id`) references `component`(`id`) on delete cascade,
    constraint fk_component_user_roles_user_role foreign key(`role`) references `user_role`(`role`) on delete cascade
);