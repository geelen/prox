-- Migration number: 0000 	 2023-08-04T02:12:18.700Z

CREATE TABLE redirections (
    id INTEGER PRIMARY KEY,
    subdomain TEXT,
    host TEXT
);

CREATE INDEX redirections_subdomain ON redirections(subdomain);
