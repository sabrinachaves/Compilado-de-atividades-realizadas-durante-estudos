CREATE TABLE users (
  id TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE PRIMARY KEY,
  hash TEXT NOT NULL,
  salt TEXT NOT NULL
);

select * from users