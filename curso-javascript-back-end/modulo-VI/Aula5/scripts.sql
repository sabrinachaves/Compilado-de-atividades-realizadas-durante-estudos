DROP TABLE IF EXISTS alunas;

CREATE TABLE alunas(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    idade INTEGER,
    username TEXT NOT NULL,
    senha TEXT NOT NULL,
    email TEXT NOT NULL
);

SELECT * FROM alunas;

INSERT INTO alunas(name, idade, username, senha, email)
VALUES('Paloma', 33, 'palomachs', '00123456', 'palomacha100@gmail.com')

UPDATE TABLE alunas SET idade = 36 where id = 1;