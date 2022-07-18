/*
Aula 8 - Consultas SQL avançadas
Prof. Tiago Dias
*/

-- criando uma nova base de dados e fazendo uma nova conexão

create database aula8

-- carregando as base de dados

-- vendas.csv
-- clientes.csv
-- produtos.csv

-- verificando as cargas
select * from vendas v 

select * from clientes c 

select * from produtos p 

-- ##### FUNÇÕES DE AGREGAÇÃO ##### --

-- somando os valores de todos os produtos
select sum(p.valor)
from produtos p 

-- somando os valores de todas vendas

select 
id_venda,
quantidade,
valor,
quantidade*valor as total_valor
from vendas v 
left join produtos p on p.id_produto = v.id_produto 

-- somando os valores total das vendas
select sum(v.quantidade * p.valor)
from vendas v 
left join produtos p on p.id_produto = v.id_produto 

-- contando os registros de cada tabela da base

select count(*)
from vendas v 

select count(*)
from produtos p 

select count(*)
from clientes c 

-- count(*) x count(coluna)
-- criar uma tabela, inserir colunas com null para verificar a diferença
create table abc(
	id integer,
	texto varchar
)

insert into abc values 
(1, 'a'),
(2, 'b'),

insert into abc (id) values (3)

select * from abc

select count(*) as count_all, count(id) as count_id, count(texto) as count_texto
from abc

-- Qual a quantidade máxima?
select max(v.quantidade)
from vendas v  

-- Qual a maior venda?
select max(quantidade*valor) as maior_venda
from vendas v 
left join produtos p on p.id_produto = v.id_produto 


-- Qual o valor do produto mais barato?
select min(p.valor) as produto_mais_barato
from produtos p 

-- Quais os produtos mais baratos?
select distinct p.produto  
from produtos p 
where p.valor  = (select min(p.valor) as produto_mais_barato
from produtos p)


-- Qual o valor médio dos produtos?
select avg(p.valor) 
from produtos p 

-- Qual o valor médio das vendas?
select avg(p.valor*v.quantidade) 
from vendas v 
left join produtos p on p.id_produto = v.id_produto 

-- ##### GROUP BY ##### --

-- Qual o valor total das vendas por clientes?
select c.nome, sum(v.quantidade * p.valor) as total_venda
from vendas v 
left join produtos p on p.id_produto = v.id_produto  
left join clientes c on c.id_cliente = v.id_cliente
group by 1


-- Valor médio de vendas por produtos? 
select p.produto, avg(v.quantidade * p.valor) as valor_medio_venda 
from vendas v 
left join produtos p on p.id_produto = v.id_produto 
group by 1

-- ##### HAVING ##### --

-- Encontrando vendas por cliente com valor total da venda maior que 3000
select c.nome, sum(v.quantidade*p.valor) as valor_total
from vendas v 
left join produtos p on p.id_produto = v.id_produto 
left join clientes c on c.id_cliente = v.id_cliente  
group by 1
having sum(v.quantidade*p.valor) > 3000



-- Encontrando clientes com mais de uma venda
select c.nome, count(v.id_venda) as num_vendas 
from vendas v 
left join clientes c on c.id_cliente = v.id_cliente 
group by 1
having count(v.id_venda) > 1

-- ##### CAST ##### --

-- convertendo dados de inteiro para string
select cast(id_produto as varchar) as id_produto_texto
from vendas v 

-- convertendo dados de string para inteiro
select '1' as number
union 
select '2' as number

-- convertendo coluna de valor para moeda (https://www.postgresql.org/docs/current/functions-formatting.html)
select
valor,
to_char(valor, 'L9G999G999D99') as valor_moeda
from produtos p 


-- L – Símbolo da moeda (utiliza o idioma)
-- 9 – Valor com o número especificado de dígitos
-- G – Separador de grupo (utiliza o idioma)
-- D – Ponto decimal (utiliza o idioma)
 
-- ##### WITH ##### --

-- criando tabelas temporárias para realizar o join

-- ##### FUNÇÕES COM DATA ##### --

select 
current_date as data_atual,
date_part('year', current_date) as ano_data_atual,
date_trunc('month', current_date)::date as primeiro_dia


-- total por ano das vendas
select date_part('year', v.data_venda), sum(p.valor*v.quantidade) as total_vendas
from vendas v 
left join produtos p on p.id_produto = v.id_produto 
group by 1
order by 1 desc

-- total de clientes por mês
select c.nome, date_part('month', v.data_venda), sum(p.valor*v.quantidade) as total_vendas  
from clientes c 
left join vendas v on v.id_cliente = c.id_cliente 
left join produtos p on p.id_produto = v.id_produto
group by 1, 2
order by 1 desc


-- comparando anos com filtro do mês atual
select date_part('year', v.data_venda), sum(p.valor*v.quantidade) as total_vendas
from vendas v 
left join produtos p on p.id_produto = v.id_produto 
where date_part('month', data_venda) <= date_part('month', current_date)
group by 1
order by 1 desc

create database projeto


