/*
* Initialization
*/
DROP DATABASE IF EXISTS `gesthor_dev`;

CREATE DATABASE `gesthor_dev`;

USE `gesthor_dev`;

/*
* Table definitions - version 1.0
*/
create table `cliente` (
	`id` int(9) auto_increment,
    `nome_razaosocial` varchar(256) not null,
    `cpf_cnpj` varchar(16),
    `endereco` varchar(128),
    `numero` int(8),
    `bairro` varchar(128),
    `cidade` varchar(128),
    `estado` varchar(32),
    `pais` varchar(128),
    `cep` varchar(16),
    `telefone_comercial` varchar(16),
    `fax` varchar(16),
    `telefone_celular` varchar(16),
    `email` varchar(32),
    `descricao` varchar(512),
    constraint pk_cliente primary key(`id`),
    constraint uk_cliente_cpf_cnpj unique(`cpf_cnpj`),
    constraint uk_cliente_email unique(`email`)
);
