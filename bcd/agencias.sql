drop database if exists agencia;
create database agencia;
use agencia;

-- DDL (Data Develpoment Language)
create table vendedores(
    id_vendedor integer not null primary key auto_increment,
    nome VARCHAR(40) not null
);

create table veiculos(
    id_veiculo integer not null primary key auto_increment,
    modelo VARCHAR(40) not null,
    preco decimal(9,2) not null
);

create table agencias(
    id_agencia integer not null primary key auto_increment,
    cidade VARCHAR(40) not null,
    uf VARCHAR(2) not null
);

create table vendas(
    data Date not null,
    id_vendedor integer not null,
    id_veiculo integer not null,
    id_agencia integer not null,
    constraint fk_venda_vendedor foreign key (id_vendedor) references vendedores(id_vendedor),
    constraint fk_venda_veiculo foreign key (id_veiculo) references veiculos(id_veiculo),
    constraint fk_venda_agencia foreign key (id_agencia) references agencias(id_agencia)
);

show tables;

-- DML (Data Manipulation Language)
-- CRUD em MYSQL DDL (CREATE, SHOW DESCRIBE, ALTER, DROP)
-- CRUD em MYSQL DML (INSERT, SELECT, UPDATE e DELETE)

describe agencias;
insert into agencias(cidade,uf) values
("Jaguariúna","SP"),
("Pedreira","SP"),
("Holambra","SP"),
("Amparo","SP"),
("Serra Negra","SP");
select * from agencias;

describe vendedores;
insert into vendedores(nome) values ("Jair"),("Jafoi"),("Jaera"),("Javai");
select * from vendedores;
describe veiculos;
insert into veiculos(modelo,preco) values
("Palio",9000.00),
("Gol",17000.00),
("Fiesta",19000.00),
("Celta",29000.00);
select * from veiculos;
insert into veiculos(modelo,preco) values
("Palio",9000.00),
("Gol",17000.00),
("Fiesta",19000.00),
("Celta",29000.00);
select * from veiculos;
select modelo from veiculos;
select preco from veiculos;
select modelo, preco from veiculos;

-- Apaga o conteúdo da tabela inteira
--delete from veiculos;
-- Aaltera o conteúdo da tabela inteira
---update veiculos set modelo = "Civic";

-- WHERE (Onde) Cláusula mais importante no "CRUD"

-- select * from veiculos;
-- select * from veiculos where id_veiculo = 3;
-- select * from veiculos where modelo like "%ta";
-- select id_veiculo from veiculos where preco > 20000;
-- delete from veiculos where id_veiculo = 3;
-- update veiculos set modelo = "Civic" where id_veiculo = 8;
-- insert into veiculos value (3,"Fiesta",19000);


drop database if exists agencia;
create database agencia;
use agencia;

-- DDL (Data Develpoment Language)
create table vendedores(
    id_vendedor integer not null primary key auto_increment,
    nome VARCHAR(40) not null
);

create table veiculos(
    id_veiculo integer not null primary key auto_increment,
    modelo VARCHAR(40) not null,
    preco decimal(9,2) not null
);

create table agencias(
    id_agencia integer not null primary key auto_increment,
    cidade VARCHAR(40) not null,
    uf VARCHAR(2) not null
);

create table vendas(
    data Date not null,
    id_vendedor integer not null,
    id_veiculo integer not null,
    id_agencia integer not null,
    constraint fk_venda_vendedor foreign key (id_vendedor) references vendedores(id_vendedor),
    constraint fk_venda_veiculo foreign key (id_veiculo) references veiculos(id_veiculo),
    constraint fk_venda_agencia foreign key (id_agencia) references agencias(id_agencia)
);

show tables;

insert into vendedores (nome) values 
("Alfredo Santos"),
("Amanda Alves"),
("Amanda Bourn"),
("Amanda de Oliveira"),
("Ana Freeman"),
("Ana Paula Alves"),
("Ana Paula Souza"),
("Ana Silva"),
("Ana Souza"),
("Bento Martins"),
("Bento Santos"),
("Carlos Bourn"),
("Carlos Martins"),
("Elian Belli"),
("Elian Souza"),
("Enso Belli"),
("Fabrício da Silva"),
("Fabrício Ramos"),
("Fabrício Scovisk"),
("Gilberto Fernandes"),
("Gilberto Santos"),
("Hiago Belli"),
("Hiago Bourn"),
("Ivo da Silva"),
("Ivo Souza"),
("João Alves"),
("João da Silva"),
("João Freeman"),
("Juvenal Alves"),
("Lucas Alves"),
("Lucas Fernandes"),
("Luciano Belli"),
("Luciano Bourn"),
("Luciano Freeman"),
("Luciano Souza"),
("Marcos Bourn"),
("Marcos Freeman"),
("Matheus Bourn"),
("Nivaldo de Oliveira"),
("Nivaldo Fernandes"),
("Nivaldo Martins"),
("Orácio da Silva"),
("Orácio de Oliveira"),
("Orácio Souza"),
("Paulo Alves"),
("Paulo Falcirolli"),
("Ribamar Fernandes"),
("Ricardo Belli"),
("Ricardo Ramos"),
("Saulo Belli"),
("Saulo Falcirolli"),
("Timóteo Bourn"),
("Zilda Alves");

insert into veiculos (modelo,preco) values
("Civic",14404),	
("Uno",28877),	
("Polo",41835),	
("Pálio",53940),	
("Fiesta",18715),	
("Cruze",48416),	
("Corola",39496),	
("Gol",35845),	
("EcoSport",47753),	
("Logan",39417),	
("Ka",19995);	


insert into agencias (cidade, uf) values
("Jacarezinho","PR"),
("Amparo","SP"),
("Americana","SP"),	
("Pedreira","SP"),	
("Curitiba","PR"),	
("Londrina","PR"),	
("Belo Horizonte","MG"),	
("Campinas","SP"),	
("Pouso Alegre","MG"),	
("Monte Verde","MG"),	
("Jaguariúna","SP");	

LOAD DATA INFILE 'd:/felipe reis/bcd/vendas.csv'
INTO TABLE vendas
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

select * from vendas order by data desc limit 20;

select * from agencias INTO OUTFILE 'd:/felipe reis/bcd/agencias.csv'
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n';
IGNORE 1 ROWS;


