--  na tabela pedidos mostra apenas 10 primeiros pedidos
describe pedidos;
select *from pedidos where id_pedido <= 10;

-- mostar apenas os 10 ultimos pedidos
select *from pedidos where id_pedido > 19;
select *from pedidos order by id_pedido desc limit 10;

-- mostre os pedidos por ordem de entregadores
select *from pedidos order by id_entregador;

-- mostra apenas data e id do cliente id entregador por ordem de entregadores
select id_cliente,id_entregador,data from pedidos order by id_entregador;


-- mostra apenas data e id do cliente id entregador e a quantidade de pedidos por entregador
select id_cliente,id_entregador,data,count(id_pedido)
from pedidos  group by id_entregador;

-- juntando tabelas 

select nome_completo from entregadores;
select *from pedidos inner join entregadores 
on pedidos.id_entregador = entregadores.id_entregador;

-- tabela itens 
-- id produto id quantidade id pedido 
-- mostrar tbm  nome do produto preço do produto
select nome from produtos;
select i.id_produto, i.id_pedido,i.id_quantidade, p.nome,p.preco
from itens i inner join produtos p
on p.id_produto = i.id_produto;



