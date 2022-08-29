DROP TABLE IF EXISTS airports;

CREATE TABLE airports(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    initials TEXT NOT NULL,
    name TEXT NOT NULL,
    city TEXT NOT NULL
);

SELECT * FROM airports;

INSERT INTO airports (initials, name, city) 
VALUES 
('VCP', 'Aeroporto Campinas', 'Campinas'),
('REC', 'Aeroporto Gilberto Freyre', 'Recife'),
('CWB', 'Aeroporto Afonso Pena', 'Curitiba'),
('BEL', 'Aeroporto Val de Cans', 'Belém'),
('VIX', 'Aeroporto Eurico de Aguiar Salles', 'Vitória'),
('SDU', 'Aerorporto Santos Dumont', 'Santos Dumont'),
('CGB', 'Aeroporto Marechal Rondon', 'Cuiabá'),
('CGR', 'Aeroporto Internacional de Campo Grande', 'Campo Grande'),
('FOR', 'Aeroporto Pinto Martins', 'Fortaleza'),
('MCP', 'Aeroporto Internacional de Macapá', 'Macapá'),
('MGF', 'Aeroporto Silvio Name Junior', 'Maringá'),
('GYN', 'Aeroporto Santa Genoveva', 'Goiânia'),
('NVT', 'Aeroporto Ministro Victor Konder', 'Navegantes'),
('MAO', 'Aeroporto Eduardo Gomes', 'Manaus'),
('NAT', 'Aeroporto Augusto Severo', 'Natal'),
('BPS', 'Aeroporto Internacional de Porto Seguro', 'Porto Seguro'),
('MCZ', 'Aeroporto Zumbi dos Palmares', 'Maceió'),
('PMW', 'Aeroporto Brigadeiro Lysias Rodrigues', 'Palmas'),
('SLZ', 'Aeroporto Marechal Cunha Machado', 'São Luis'),
('GRU', 'Aeroporto Governador André Franco Motoro', 'Guarulhos'),
('LDB', 'Aeroporto Governador José Richa', 'Londrina'),
('PVH', 'Aeroporto Governador Jorge Teixeira de Oliveira', 'Porto Velho'),
('RBR', 'Aeroporto Plácido de Castro', 'Rio Branco'),
('JOI', 'Aeroporto Lauro Carneiro de Loyola', 'Joinville'),
('UDI', 'Aeroporto Ten. Cel. Av. César Bombonato', 'Uberlândia'),
('CXJ', 'Aeroporto Hugo Cantergiani', 'Caxias do Sul'),
('IGU', 'Aeroporto Internacional de Foz do Iguaçu', 'Foz do Iguaçu'),
('THE', 'Aeroporto Senador Petrônio Portella', 'Teresina'),
('AJU', 'Aeroporto Santa Maria', 'Aracaju'),
('JPA', 'Aeroporto Presidente Castro Pinto', 'João Pessoa'),
('PNZ', 'Aeroporto Senador Nilo Coelho', 'Petrolina'),
('CNF', 'Aeroporto Tancredo Neves', 'Confins'),
('BVB', 'Aeroporto Atlas Brasil Cantanhede', 'Boa Vista'),
('CPV', 'Aeroporto Presidente João Suassuna', 'Campina Grande'),
('STM', 'Aeroporto Maestro Wilson Fonseca', 'Santarém'),
('IOS', 'Aeroporto Jorge Amado', 'Ilhéus'),
('JDO', 'Aeroporto Orlando Bezerra', 'Juazeiro do Norte'),
('IMP', 'Aeroporto Prefeito Renato Moreira', 'Imperatriz'),
('XAP', 'Aeroporto Serafin Enoss Bertaso', 'Chapecó'),
('MAB', 'Aeroporto de Marabá', 'Marabá'),
('CZS', 'Aeroporto Internacional de Cruzeiro do Sul', 'Cruzeiro do Sul'),
('PPB', 'Aeroporto Estadual de Presidente Prudente', 'Presidente Prudente'),
('CFB', 'Aeroporto Internacional de Cabo Frio', 'Cabo Frio'),
('FEN', 'Aeroporto de Fernando de Noronha', 'Fernando de Noronha'),
('JTC', 'Aeroporto Arealva', 'Bauru'),
('MOC', 'Aeroporto Mário Ribeiro', 'Montes Claros')

UPDATE airports SET name = 'Aeroporto Marechal Cunha Machado'   where initials = 'SLZ' 
