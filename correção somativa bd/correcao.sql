drop database if exists locadora; -- Apaga
create database locadora 
charset = UTF8 collate = utf8_general_ci;
use locadora;   -- Acessa

--Cria a tabela DDL

create table veiculos(
    placa VARCHAR(8) not null primary key,
    modelo VARCHAR(20) not null,
    marca   VARCHAR(20) not null,
    cor VARCHAR(10) not null,
    valor_diaria decimal(6,2) not null,
    ano integer(4) not null,
    tipo VARCHAR(10) not null
);

create table locacoes(
    id integer not null primary key auto_increment,
    data_retirada Date not null,
    data_devolucao Date,   
    obs VARCHAR(400) not null, -- fica a critério se poe not null ou nao
    valor_efetivo decimal(6,2)
);

create table cliente(
    cpf VARCHAR(12) primary key not null,
    nome VARCHAR(50) not null,
    endereco VARCHAR(100) not null,
    email VARCHAR(30) not null

);

create table telefones(
    cpf VARCHAR(12) not null,
    telefones varchar(12) not null,
    -- para 
    constraint fk_tel_cli foreign key (cpf) references cliente(cpf) 
    on delete cascade
    on update cascade
);




show tables;

alter table locacoes add placa VARCHAR(8) not null;

alter table locacoes add constraint fk_loc_vei foreign key (placa) references veiculos(placa) 
     on update cascade;

alter table locacoes add constraint fk_loc_vei foreign key (placa) 
references veiculos(placa) on update cascade;

alter table locacoes add cpf VARCHAR(12) not null;

alter table locacoes add constraint fk_loc_cli foreign key (cpf) 
references cliente (cpf);