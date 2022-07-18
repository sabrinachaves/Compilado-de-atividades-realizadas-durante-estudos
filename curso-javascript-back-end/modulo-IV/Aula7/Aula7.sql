/*
Aula 7 - Consultas SQL com tabelas relacionadas
Prof. Tiago Dias
*/

-- ##### JOINS ##### --

-- criando tabela_a e tabela_b

create table  public.tabela_a (
                id_aluno INTEGER,
                nm_aluno VARCHAR,
                id_uf INTEGER
);

create table  public.tabela_b (
                id_uf INTEGER,
                nm_uf VARCHAR
);
-- inserindo dados nas tabela_a e tabela_b

insert into tabela_a values
	(1,'Joana',1),
	(2,'Priscila',9),
	(3,'José',3),
	(4,'Maria',4),
	(5,'Paula',8),
	(6,'Paulo',8);

insert into tabela_b values
	(1,'BA'),
	(2,'CE'),
	(3,'SP'),
	(4,'PE'),
	(5,'RJ'),
	(6,'SC');

-- left join tabela_a com tabela_b
select * from tabela_a ta 
left join tabela_b tb using (id_uf)


-- right join tabela_a com tabela_b
select * from tabela_a ta 
right join tabela_b tb using (id_uf)

  

-- inner join tabela_a com tabela_b
select * from tabela_a ta 
inner join tabela_b tb using (id_uf)



-- full join tabela_a com tabela_b
select * from tabela_a ta 
full join tabela_b tb on ta.id_uf = tb.id_uf



-- transformando a coluna do join em apenas uma com USING

select * from tabela_a ta 
left join tabela_b tb using (id_uf)

-- filtrando o join
select * from tabela_a ta 
left join tabela_b tb on ta.id_uf = tb.id_uf and nm_uf is not null /*Eu que fiz*/

-- ##### UNIONS ##### --

-- criando tabela_c  

create table  public.tabela_c (
                id_aluno INTEGER,
                nm_aluno VARCHAR,
                id_uf INTEGER
);

-- inserindo dados nas tabela_a e tabela_b

insert into tabela_c values
	(1,'Joana',1),
	(7,'Gustavo',1),
	(8,'Giovana',3);

-- Union tabela_a com tabela_c


-- Union all tabela_a com tabela_c


-- intersect tabela_a com tabela_c


-- except tabela_a com tabela_c e tabela_c com tabela_a (Atenção!!! A ordem das tabelas altera a exibição)


-- ##### VIEWS ##### --

-- criando uma view



-- consultando view



-- criando uma view materializada



-- consultando view materializada



-- atualizando dados 



-- consultando view atualizada



-- consultando view materializada desatualizada



-- atualizando view materializada



-- consultando view materializada atualizada



-- ##### ATIVIDADE ##### --

-- Questão 1 - Construir uma consulta que apresente o nome dos municípios que tiverem área reflorestada maior que 200.000 ha.
select mc.municipio 
from municipios_csv mc 
left join florestas_csv fc using (id_municipio)
where fc.area_ha > 200000

-- Questão 2 - Construir uma consulta que apresente o nome dos municípios e a sigla dos estados que tiverem área reflorestada maior que 150.000 ha.
select mc.municipio, ec.estado_sigla  
from municipios_csv mc 
left join estados_csv ec using (id_estado)
left join florestas_csv fc using (id_municipio)
where fc.area_ha > 150000

-- Questão 3 - Construir uma consulta que apresente o nome dos municípios, região e país que não estão presentes na tabela florestas.
select mc.municipio, rc.regiao, pc.pais  
from municipios_csv mc 
left join regioes_csv rc  fc using (id_regiao)
left join paises_csv pc using (id_pais)
where id_municipio not in (select id_municipio from florestas_csv fc) 

-- Questão 4 - Construir uma consulta que apresente nome do municípios e as espécies que tiverem área reflorestada maior que 30.000 ha no estado da Bahia.
select mc.municipio, ec.especie  
from municipios_csv mc 
left join florestas_csv fc using (id_municipio)
left join especies_csv ec using (id_especie)
left join estados_csv ec2 using (id_estado)
where fc.area_ha > 30000 and ec2.estado_sigla = 'BA' 

-- Questão 5 - Construir uma view e uma view materializada com as informações da tabela original, depois comparar os tempos de execução das consultas.

create view view_florestas as (
select 
data_ano,
regiao,
pais,
estado,
estado_sigla,
municipio,
municipio_estado,
latitude,
longitude,
especie,
area_ha
from florestas_csv fc 
inner join municipios_csv mc using (id_municipio)
inner join regioes_csv rc using (id_regiao)
inner join estados_csv ec using (id_estado)
inner join paises_csv pc using (id_pais)
inner join especies_csv ec2 using (id_especie))

create materialized view mat_florestas as (
select 
data_ano,
regiao,
pais,
estado,
estado_sigla,
municipio,
municipio_estado,
latitude,
longitude,
especie,
area_ha
from florestas_csv fc 
inner join municipios_csv mc using (id_municipio)
inner join regioes_csv rc using (id_regiao)
inner join estados_csv ec using (id_estado)
inner join paises_csv pc using (id_pais)
inner join especies_csv ec2 using (id_especie))

select * from view_florestas vf 

select * from mat_florestas mf 





