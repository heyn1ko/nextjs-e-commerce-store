CREATE TABLE products (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(60) NOT NULL,
    year VARCHAR(10),
    price VARCHAR(10) NOT NULL,
    designer VARCHAR(50),
    origin VARCHAR(20)
);


INSERT INTO products
(name, year, price, currency, designer, origin)
VALUES
('Amboss cutlery set','1957','2700','€','Carl Aubock','Austria'),
('Hana cutlery set','1990','3100','€','Shozo Toyohisa','Japan'),
('Unitre cutlery set','1971','600','€','Carla Nencioni & Armando Moleri','Italy'),
('Xum cutlery set','1990','9400','€','Robert Wilhite','Japan');


ALTER TABLE products
DROP COLUMN currency;
