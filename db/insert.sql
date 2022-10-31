INSERT INTO category (category_name) VALUES
('accesorios-moda'),
('calzado'),
('camisas'),
('camisetas'),
('blusas'),
('pantalones-y-jeans'),
('deportiva'),
('bolsos');

INSERT INTO gender (gender_value)
VALUES
('hombre'),
('mujer'),
('niño'),
('niña'),
('bebe'),
('unisex');

INSERT INTO shipping_cost (shipping_value)
VALUES
( 0),
(1000),
(2000),
(3000),
(4000),
(5000),
(10000);

INSERT INTO color (color_value)
VALUES
('negro'),
('blanco'),
('gris'),
('rojo'),
('azul'),
('amarillo'),
('verde');

-- Insert available products to the product table.
INSERT INTO product (product_id, category_id, product_name, shipping_cost)
VALUES
(nextval('product_product_id_seq'), (SELECT category_id FROM category WHERE category_name = 'blusas'), 'blusa', 1000),
(nextval('product_product_id_seq'), (SELECT category_id FROM category WHERE category_name = 'camisas'), 'camisa', 1000),
(nextval('product_product_id_seq'), (SELECT category_id FROM category WHERE category_name = 'accesorios-moda'), 'corbata', 1000),
(nextval('product_product_id_seq'), (SELECT category_id FROM category WHERE category_name = 'pantalones-y-jeans'), 'pantalon', 2000),
(nextval('product_product_id_seq'), (SELECT category_id FROM category WHERE category_name = 'pantalones-y-jeans'), 'pantaloneta', 2000),
(nextval('product_product_id_seq'), (SELECT category_id FROM category WHERE category_name = 'calzado'), 'zapatos', 5000);

INSERT INTO variant (product_id, variant_name, variant_price, variant_quantity)
VALUES
((SELECT product_id FROM product WHERE product_name = 'blusa'), 'blusa-negra-mujer', 50000, 10),
((SELECT product_id FROM product WHERE product_name = 'blusa'), 'blusa-blanca-mujer', 60000, 10),
((SELECT product_id FROM product WHERE product_name = 'blusa'), 'blusa-roja-mujer', 55000, 50),
((SELECT product_id FROM product WHERE product_name = 'blusa'), 'blusa-blanca-niña', 45000, 10),
((SELECT product_id FROM product WHERE product_name = 'blusa'), 'blusa-roja-niña', 40000, 20),
((SELECT product_id FROM product WHERE product_name = 'camisa'), 'camisa-negra-hombre', 65000, 35),
((SELECT product_id FROM product WHERE product_name = 'camisa'), 'camisa-amarilla-hombre', 55000, 35),
((SELECT product_id FROM product WHERE product_name = 'camisa'), 'camisa-verde-hombre', 50000, 35),
((SELECT product_id FROM product WHERE product_name = 'camisa'), 'camisa-blanca-niño', 30000, 20),
((SELECT product_id FROM product WHERE product_name = 'camisa'), 'camisa-negra-niño', 45000, 15),
((SELECT product_id FROM product WHERE product_name = 'corbata'), 'corbata-negra-hombre', 30000, 20),
((SELECT product_id FROM product WHERE product_name = 'corbata'), 'corbata-azul-hombre', 23000, 50),
((SELECT product_id FROM product WHERE product_name = 'corbata'), 'corbata-verde-hombre', 25000, 15),
((SELECT product_id FROM product WHERE product_name = 'corbata'), 'corbata-negra-niño', 20000, 15),
((SELECT product_id FROM product WHERE product_name = 'corbata'), 'corbata-azul-niño', 15000, 15),
((SELECT product_id FROM product WHERE product_name = 'pantalon'), 'pantalon-negro-hombre', 65000, 50),
((SELECT product_id FROM product WHERE product_name = 'pantalon'), 'pantalon-azul-hombre', 45000, 75),
((SELECT product_id FROM product WHERE product_name = 'pantalon'), 'pantalon-gris-hombre', 60000, 32),
((SELECT product_id FROM product WHERE product_name = 'pantalon'), 'pantalon-rojo-mujer', 65000, 50),
((SELECT product_id FROM product WHERE product_name = 'pantalon'), 'pantalon-gris-mujer', 45000, 75),
((SELECT product_id FROM product WHERE product_name = 'pantalon'), 'pantalon-azul-mujer', 60000, 32),
((SELECT product_id FROM product WHERE product_name = 'pantalon'), 'pantalon-azul-niño', 35000, 23),
((SELECT product_id FROM product WHERE product_name = 'pantalon'), 'pantalon-rojo-niño', 45000, 45),
((SELECT product_id FROM product WHERE product_name = 'pantalon'), 'pantalon-amarillo-niña', 35000, 23),
((SELECT product_id FROM product WHERE product_name = 'pantalon'), 'pantalon-azul-niña', 45000, 45),
((SELECT product_id FROM product WHERE product_name = 'pantaloneta'), 'pantaloneta-roja-hombre', 25000, 12),
((SELECT product_id FROM product WHERE product_name = 'pantaloneta'), 'pantaloneta-amarilla-hombre', 25000, 31),
((SELECT product_id FROM product WHERE product_name = 'pantaloneta'), 'pantaloneta-blanca-hombre', 25000, 59),
((SELECT product_id FROM product WHERE product_name = 'pantaloneta'), 'pantaloneta-roja-mujer', 25000, 12),
((SELECT product_id FROM product WHERE product_name = 'pantaloneta'), 'pantaloneta-amarilla-mujer', 25000, 31),
((SELECT product_id FROM product WHERE product_name = 'pantaloneta'), 'pantaloneta-blanca-mujer', 25000, 59),
((SELECT product_id FROM product WHERE product_name = 'pantaloneta'), 'pantaloneta-amarilla-niño', 10000, 12),
((SELECT product_id FROM product WHERE product_name = 'pantaloneta'), 'pantaloneta-gris-niño', 25000, 9),
((SELECT product_id FROM product WHERE product_name = 'zapatos'), 'zapatos-negros-hombre', 80000, 21),
((SELECT product_id FROM product WHERE product_name = 'zapatos'), 'zapatos-azules-hombre', 90000, 32),
((SELECT product_id FROM product WHERE product_name = 'zapatos'), 'zapatos-verdes-hombre', 70000, 58),
((SELECT product_id FROM product WHERE product_name = 'zapatos'), 'zapatos-amarillos-mujer', 80000, 21),
((SELECT product_id FROM product WHERE product_name = 'zapatos'), 'zapatos-azules-mujer', 90000, 32),
((SELECT product_id FROM product WHERE product_name = 'zapatos'), 'zapatos-grises-mujer', 70000, 58),
((SELECT product_id FROM product WHERE product_name = 'zapatos'), 'zapatos-grises-niño', 50000, 17),
((SELECT product_id FROM product WHERE product_name = 'zapatos'), 'zapatos-amarillos-niño', 60000, 17),
((SELECT product_id FROM product WHERE product_name = 'zapatos'), 'zapatos-verdes-niña', 80000, 25),
((SELECT product_id FROM product WHERE product_name = 'zapatos'), 'zapatos-azules-niña', 80000, 41);

-- blusa-negra-mujer
INSERT INTO variant_gender (variant_id, gender_id)
VALUES
((SELECT variant_id FROM variant WHERE variant_name = 'blusa-negra-mujer'), (SELECT gender_id FROM gender WHERE gender_value = 'mujer')),
((SELECT variant_id FROM variant WHERE variant_name = 'blusa-blanca-mujer'), (SELECT gender_id FROM gender WHERE gender_value = 'mujer')),
((SELECT variant_id FROM variant WHERE variant_name = 'blusa-roja-mujer'), (SELECT gender_id FROM gender WHERE gender_value = 'mujer')),
((SELECT variant_id FROM variant WHERE variant_name = 'blusa-blanca-niña'), (SELECT gender_id FROM gender WHERE gender_value = 'niña')),
((SELECT variant_id FROM variant WHERE variant_name = 'blusa-roja-niña'), (SELECT gender_id FROM gender WHERE gender_value = 'niña')),
((SELECT variant_id FROM variant WHERE variant_name = 'camisa-negra-hombre'), (SELECT gender_id FROM gender WHERE gender_value = 'hombre')),
((SELECT variant_id FROM variant WHERE variant_name = 'camisa-amarilla-hombre'), (SELECT gender_id FROM gender WHERE gender_value = 'hombre')),
((SELECT variant_id FROM variant WHERE variant_name = 'camisa-verde-hombre'), (SELECT gender_id FROM gender WHERE gender_value = 'hombre')),
((SELECT variant_id FROM variant WHERE variant_name = 'camisa-blanca-niño'), (SELECT gender_id FROM gender WHERE gender_value = 'niño')),
((SELECT variant_id FROM variant WHERE variant_name = 'camisa-negra-niño'), (SELECT gender_id FROM gender WHERE gender_value = 'niño')),
((SELECT variant_id FROM variant WHERE variant_name = 'corbata-negra-hombre'), (SELECT gender_id FROM gender WHERE gender_value = 'hombre')),
((SELECT variant_id FROM variant WHERE variant_name = 'corbata-azul-hombre'), (SELECT gender_id FROM gender WHERE gender_value = 'hombre')),
((SELECT variant_id FROM variant WHERE variant_name = 'corbata-verde-hombre'), (SELECT gender_id FROM gender WHERE gender_value = 'hombre')),
((SELECT variant_id FROM variant WHERE variant_name = 'corbata-negra-niño'), (SELECT gender_id FROM gender WHERE gender_value = 'niño')),
((SELECT variant_id FROM variant WHERE variant_name = 'corbata-azul-niño'), (SELECT gender_id FROM gender WHERE gender_value = 'niño')),
((SELECT variant_id FROM variant WHERE variant_name = 'pantalon-negro-hombre'), (SELECT gender_id FROM gender WHERE gender_value = 'hombre')),
((SELECT variant_id FROM variant WHERE variant_name = 'pantalon-azul-hombre'), (SELECT gender_id FROM gender WHERE gender_value = 'hombre')),
((SELECT variant_id FROM variant WHERE variant_name = 'pantalon-gris-hombre'), (SELECT gender_id FROM gender WHERE gender_value = 'hombre')),
((SELECT variant_id FROM variant WHERE variant_name = 'pantalon-rojo-mujer'), (SELECT gender_id FROM gender WHERE gender_value = 'mujer')),
((SELECT variant_id FROM variant WHERE variant_name = 'pantalon-gris-mujer'), (SELECT gender_id FROM gender WHERE gender_value = 'mujer')),
((SELECT variant_id FROM variant WHERE variant_name = 'pantalon-azul-mujer'), (SELECT gender_id FROM gender WHERE gender_value = 'mujer')),
((SELECT variant_id FROM variant WHERE variant_name = 'pantalon-azul-niño'), (SELECT gender_id FROM gender WHERE gender_value = 'niño')),
((SELECT variant_id FROM variant WHERE variant_name = 'pantalon-rojo-niño'), (SELECT gender_id FROM gender WHERE gender_value = 'niño')),
((SELECT variant_id FROM variant WHERE variant_name = 'pantalon-amarillo-niña'), (SELECT gender_id FROM gender WHERE gender_value = 'niña')),
((SELECT variant_id FROM variant WHERE variant_name = 'pantalon-azul-niña'), (SELECT gender_id FROM gender WHERE gender_value = 'niña')),
((SELECT variant_id FROM variant WHERE variant_name = 'pantaloneta-roja-hombre'), (SELECT gender_id FROM gender WHERE gender_value = 'hombre')),
((SELECT variant_id FROM variant WHERE variant_name = 'pantaloneta-amarilla-hombre'), (SELECT gender_id FROM gender WHERE gender_value = 'hombre')),
((SELECT variant_id FROM variant WHERE variant_name = 'pantaloneta-blanca-hombre'), (SELECT gender_id FROM gender WHERE gender_value = 'hombre')),
((SELECT variant_id FROM variant WHERE variant_name = 'pantaloneta-amarilla-niño'), (SELECT gender_id FROM gender WHERE gender_value = 'niño')),
((SELECT variant_id FROM variant WHERE variant_name = 'pantaloneta-gris-niño'), (SELECT gender_id FROM gender WHERE gender_value = 'niño')),
((SELECT variant_id FROM variant WHERE variant_name = 'zapatos-negros-hombre'), (SELECT gender_id FROM gender WHERE gender_value = 'hombre')),
((SELECT variant_id FROM variant WHERE variant_name = 'zapatos-azules-hombre'), (SELECT gender_id FROM gender WHERE gender_value = 'hombre')),
((SELECT variant_id FROM variant WHERE variant_name = 'zapatos-verdes-hombre'), (SELECT gender_id FROM gender WHERE gender_value = 'hombre')),
((SELECT variant_id FROM variant WHERE variant_name = 'zapatos-amarillos-mujer'), (SELECT gender_id FROM gender WHERE gender_value = 'mujer')),
((SELECT variant_id FROM variant WHERE variant_name = 'zapatos-azules-mujer'), (SELECT gender_id FROM gender WHERE gender_value = 'mujer')),
((SELECT variant_id FROM variant WHERE variant_name = 'zapatos-grises-mujer'), (SELECT gender_id FROM gender WHERE gender_value = 'mujer')),
((SELECT variant_id FROM variant WHERE variant_name = 'zapatos-grises-niño'), (SELECT gender_id FROM gender WHERE gender_value = 'niño')),
((SELECT variant_id FROM variant WHERE variant_name = 'zapatos-amarillos-niño'), (SELECT gender_id FROM gender WHERE gender_value = 'niño')),
((SELECT variant_id FROM variant WHERE variant_name = 'zapatos-verdes-niña'), (SELECT gender_id FROM gender WHERE gender_value = 'niña')),
((SELECT variant_id FROM variant WHERE variant_name = 'zapatos-azules-niña'), (SELECT gender_id FROM gender WHERE gender_value = 'niña'));

INSERT INTO variant_shipping_cost (variant_id, shipping_id)
VALUES
((SELECT variant_id FROM variant WHERE variant_name = 'blusa-negra-mujer'), (SELECT shipping_id FROM shipping_cost WHERE shipping_value = 1000)),
((SELECT variant_id FROM variant WHERE variant_name = 'blusa-blanca-mujer'), (SELECT shipping_id FROM shipping_cost WHERE shipping_value = 1000)),
((SELECT variant_id FROM variant WHERE variant_name = 'blusa-roja-mujer'), (SELECT shipping_id FROM shipping_cost WHERE shipping_value = 1000)),
((SELECT variant_id FROM variant WHERE variant_name = 'blusa-blanca-niña'), (SELECT shipping_id FROM shipping_cost WHERE shipping_value = 1000)),
((SELECT variant_id FROM variant WHERE variant_name = 'blusa-roja-niña'), (SELECT shipping_id FROM shipping_cost WHERE shipping_value = 1000)),
((SELECT variant_id FROM variant WHERE variant_name = 'camisa-negra-hombre'), (SELECT shipping_id FROM shipping_cost WHERE shipping_value = 1000)),
((SELECT variant_id FROM variant WHERE variant_name = 'camisa-amarilla-hombre'), (SELECT shipping_id FROM shipping_cost WHERE shipping_value = 1000)),
((SELECT variant_id FROM variant WHERE variant_name = 'camisa-verde-hombre'), (SELECT shipping_id FROM shipping_cost WHERE shipping_value = 1000)),
((SELECT variant_id FROM variant WHERE variant_name = 'camisa-blanca-niño'), (SELECT shipping_id FROM shipping_cost WHERE shipping_value = 1000)),
((SELECT variant_id FROM variant WHERE variant_name = 'camisa-negra-niño'), (SELECT shipping_id FROM shipping_cost WHERE shipping_value = 1000)),
((SELECT variant_id FROM variant WHERE variant_name = 'corbata-negra-hombre'), (SELECT shipping_id FROM shipping_cost WHERE shipping_value = 2000)),
((SELECT variant_id FROM variant WHERE variant_name = 'corbata-azul-hombre'), (SELECT shipping_id FROM shipping_cost WHERE shipping_value = 2000)),
((SELECT variant_id FROM variant WHERE variant_name = 'corbata-verde-hombre'), (SELECT shipping_id FROM shipping_cost WHERE shipping_value = 2000)),
((SELECT variant_id FROM variant WHERE variant_name = 'corbata-negra-niño'), (SELECT shipping_id FROM shipping_cost WHERE shipping_value = 2000)),
((SELECT variant_id FROM variant WHERE variant_name = 'corbata-azul-niño'), (SELECT shipping_id FROM shipping_cost WHERE shipping_value = 2000)),
((SELECT variant_id FROM variant WHERE variant_name = 'pantalon-negro-hombre'), (SELECT shipping_id FROM shipping_cost WHERE shipping_value = 3000)),
((SELECT variant_id FROM variant WHERE variant_name = 'pantalon-azul-hombre'), (SELECT shipping_id FROM shipping_cost WHERE shipping_value = 3000)),
((SELECT variant_id FROM variant WHERE variant_name = 'pantalon-gris-hombre'), (SELECT shipping_id FROM shipping_cost WHERE shipping_value = 3000)),
((SELECT variant_id FROM variant WHERE variant_name = 'pantalon-rojo-mujer'), (SELECT shipping_id FROM shipping_cost WHERE shipping_value = 3000)),
((SELECT variant_id FROM variant WHERE variant_name = 'pantalon-gris-mujer'), (SELECT shipping_id FROM shipping_cost WHERE shipping_value = 3000)),
((SELECT variant_id FROM variant WHERE variant_name = 'pantalon-azul-mujer'), (SELECT shipping_id FROM shipping_cost WHERE shipping_value = 3000)),
((SELECT variant_id FROM variant WHERE variant_name = 'pantalon-azul-niño'), (SELECT shipping_id FROM shipping_cost WHERE shipping_value = 3000)),
((SELECT variant_id FROM variant WHERE variant_name = 'pantalon-rojo-niño'), (SELECT shipping_id FROM shipping_cost WHERE shipping_value = 3000)),
((SELECT variant_id FROM variant WHERE variant_name = 'pantalon-amarillo-niña'), (SELECT shipping_id FROM shipping_cost WHERE shipping_value = 3000)),
((SELECT variant_id FROM variant WHERE variant_name = 'pantalon-azul-niña'), (SELECT shipping_id FROM shipping_cost WHERE shipping_value = 3000)),
((SELECT variant_id FROM variant WHERE variant_name = 'pantaloneta-roja-hombre'), (SELECT shipping_id FROM shipping_cost WHERE shipping_value = 2000)),
((SELECT variant_id FROM variant WHERE variant_name = 'pantaloneta-amarilla-hombre'), (SELECT shipping_id FROM shipping_cost WHERE shipping_value = 2000)),
((SELECT variant_id FROM variant WHERE variant_name = 'pantaloneta-blanca-hombre'), (SELECT shipping_id FROM shipping_cost WHERE shipping_value = 2000)),
((SELECT variant_id FROM variant WHERE variant_name = 'pantaloneta-amarilla-niño'), (SELECT shipping_id FROM shipping_cost WHERE shipping_value = 2000)),
((SELECT variant_id FROM variant WHERE variant_name = 'pantaloneta-gris-niño'), (SELECT shipping_id FROM shipping_cost WHERE shipping_value = 2000)),
((SELECT variant_id FROM variant WHERE variant_name = 'zapatos-negros-hombre'), (SELECT shipping_id FROM shipping_cost WHERE shipping_value = 5000)),
((SELECT variant_id FROM variant WHERE variant_name = 'zapatos-azules-hombre'), (SELECT shipping_id FROM shipping_cost WHERE shipping_value = 5000)),
((SELECT variant_id FROM variant WHERE variant_name = 'zapatos-verdes-hombre'), (SELECT shipping_id FROM shipping_cost WHERE shipping_value = 5000)),
((SELECT variant_id FROM variant WHERE variant_name = 'zapatos-amarillos-mujer'), (SELECT shipping_id FROM shipping_cost WHERE shipping_value = 5000)),
((SELECT variant_id FROM variant WHERE variant_name = 'zapatos-azules-mujer'), (SELECT shipping_id FROM shipping_cost WHERE shipping_value = 5000)),
((SELECT variant_id FROM variant WHERE variant_name = 'zapatos-grises-mujer'), (SELECT shipping_id FROM shipping_cost WHERE shipping_value = 5000)),
((SELECT variant_id FROM variant WHERE variant_name = 'zapatos-grises-niño'), (SELECT shipping_id FROM shipping_cost WHERE shipping_value = 4000)),
((SELECT variant_id FROM variant WHERE variant_name = 'zapatos-amarillos-niño'), (SELECT shipping_id FROM shipping_cost WHERE shipping_value = 4000)),
((SELECT variant_id FROM variant WHERE variant_name = 'zapatos-verdes-niña'), (SELECT shipping_id FROM shipping_cost WHERE shipping_value = 4000)),
((SELECT variant_id FROM variant WHERE variant_name = 'zapatos-azules-niña'), (SELECT shipping_id FROM shipping_cost WHERE shipping_value = 4000));

INSERT INTO variant_color (variant_id, color_id)
VALUES
((SELECT variant_id FROM variant WHERE variant_name = 'blusa-negra-mujer'), (SELECT color_id FROM color WHERE color_value = 'negro')),
((SELECT variant_id FROM variant WHERE variant_name = 'blusa-blanca-mujer'), (SELECT color_id FROM color WHERE color_value = 'blanco')),
((SELECT variant_id FROM variant WHERE variant_name = 'blusa-roja-mujer'), (SELECT color_id FROM color WHERE color_value = 'rojo')),
((SELECT variant_id FROM variant WHERE variant_name = 'blusa-blanca-niña'), (SELECT color_id FROM color WHERE color_value = 'blanco')),
((SELECT variant_id FROM variant WHERE variant_name = 'blusa-roja-niña'), (SELECT color_id FROM color WHERE color_value = 'rojo')),
((SELECT variant_id FROM variant WHERE variant_name = 'camisa-negra-hombre'), (SELECT color_id FROM color WHERE color_value = 'negro')),
((SELECT variant_id FROM variant WHERE variant_name = 'camisa-amarilla-hombre'), (SELECT color_id FROM color WHERE color_value = 'amarillo')),
((SELECT variant_id FROM variant WHERE variant_name = 'camisa-verde-hombre'), (SELECT color_id FROM color WHERE color_value = 'verde')),
((SELECT variant_id FROM variant WHERE variant_name = 'camisa-blanca-niño'), (SELECT color_id FROM color WHERE color_value = 'blanco')),
((SELECT variant_id FROM variant WHERE variant_name = 'camisa-negra-niño'), (SELECT color_id FROM color WHERE color_value = 'negro')),
((SELECT variant_id FROM variant WHERE variant_name = 'corbata-negra-hombre'), (SELECT color_id FROM color WHERE color_value = 'negro')),
((SELECT variant_id FROM variant WHERE variant_name = 'corbata-azul-hombre'), (SELECT color_id FROM color WHERE color_value = 'azul')),
((SELECT variant_id FROM variant WHERE variant_name = 'corbata-verde-hombre'), (SELECT color_id FROM color WHERE color_value = 'verde')),
((SELECT variant_id FROM variant WHERE variant_name = 'corbata-negra-niño'), (SELECT color_id FROM color WHERE color_value = 'negro')),
((SELECT variant_id FROM variant WHERE variant_name = 'corbata-azul-niño'), (SELECT color_id FROM color WHERE color_value = 'azul')),
((SELECT variant_id FROM variant WHERE variant_name = 'pantalon-negro-hombre'), (SELECT color_id FROM color WHERE color_value = 'negro')),
((SELECT variant_id FROM variant WHERE variant_name = 'pantalon-azul-hombre'), (SELECT color_id FROM color WHERE color_value = 'azul')),
((SELECT variant_id FROM variant WHERE variant_name = 'pantalon-gris-hombre'), (SELECT color_id FROM color WHERE color_value = 'gris')),
((SELECT variant_id FROM variant WHERE variant_name = 'pantalon-rojo-mujer'), (SELECT color_id FROM color WHERE color_value = 'rojo')),
((SELECT variant_id FROM variant WHERE variant_name = 'pantalon-gris-mujer'), (SELECT color_id FROM color WHERE color_value = 'gris')),
((SELECT variant_id FROM variant WHERE variant_name = 'pantalon-azul-mujer'), (SELECT color_id FROM color WHERE color_value = 'azul')),
((SELECT variant_id FROM variant WHERE variant_name = 'pantalon-azul-niño'), (SELECT color_id FROM color WHERE color_value = 'azul')),
((SELECT variant_id FROM variant WHERE variant_name = 'pantalon-rojo-niño'), (SELECT color_id FROM color WHERE color_value = 'rojo')),
((SELECT variant_id FROM variant WHERE variant_name = 'pantalon-amarillo-niña'), (SELECT color_id FROM color WHERE color_value = 'amarillo')),
((SELECT variant_id FROM variant WHERE variant_name = 'pantalon-azul-niña'), (SELECT color_id FROM color WHERE color_value = 'azul')),
((SELECT variant_id FROM variant WHERE variant_name = 'pantaloneta-roja-hombre'), (SELECT color_id FROM color WHERE color_value = 'rojo')),
((SELECT variant_id FROM variant WHERE variant_name = 'pantaloneta-amarilla-hombre'), (SELECT color_id FROM color WHERE color_value = 'amarillo')),
((SELECT variant_id FROM variant WHERE variant_name = 'pantaloneta-blanca-hombre'), (SELECT color_id FROM color WHERE color_value = 'blanco')),
((SELECT variant_id FROM variant WHERE variant_name = 'pantaloneta-amarilla-niño'), (SELECT color_id FROM color WHERE color_value = 'amarillo')),
((SELECT variant_id FROM variant WHERE variant_name = 'pantaloneta-gris-niño'), (SELECT color_id FROM color WHERE color_value = 'gris')),
((SELECT variant_id FROM variant WHERE variant_name = 'zapatos-negros-hombre'), (SELECT color_id FROM color WHERE color_value = 'negro')),
((SELECT variant_id FROM variant WHERE variant_name = 'zapatos-azules-hombre'), (SELECT color_id FROM color WHERE color_value = 'azul')),
((SELECT variant_id FROM variant WHERE variant_name = 'zapatos-verdes-hombre'), (SELECT color_id FROM color WHERE color_value = 'verde')),
((SELECT variant_id FROM variant WHERE variant_name = 'zapatos-amarillos-mujer'), (SELECT color_id FROM color WHERE color_value = 'amarillo')),
((SELECT variant_id FROM variant WHERE variant_name = 'zapatos-azules-mujer'), (SELECT color_id FROM color WHERE color_value = 'azul')),
((SELECT variant_id FROM variant WHERE variant_name = 'zapatos-grises-mujer'), (SELECT color_id FROM color WHERE color_value = 'gris')),
((SELECT variant_id FROM variant WHERE variant_name = 'zapatos-grises-niño'), (SELECT color_id FROM color WHERE color_value = 'gris')),
((SELECT variant_id FROM variant WHERE variant_name = 'zapatos-amarillos-niño'), (SELECT color_id FROM color WHERE color_value = 'amarillo')),
((SELECT variant_id FROM variant WHERE variant_name = 'zapatos-verdes-niña'), (SELECT color_id FROM color WHERE color_value = 'verde')),
((SELECT variant_id FROM variant WHERE variant_name = 'zapatos-azules-niña'), (SELECT color_id FROM color WHERE color_value = 'azul'));

-- Inserts store's information to the store table.
INSERT INTO store (store_nit, store_name, store_address)
VALUES
(nextval('nit_seq'), 'THE FASHION ROOM SUR', 'CR 29B N 325-4'),
(nextval('nit_seq'), 'THE FASHION ROOM NORTE', 'CR 100 N110-2'),
(nextval('nit_seq'), 'THE FASHION ROOM ORIENTE', 'CR 5 N20-12'),
(nextval('nit_seq'), 'THE FASHION ROOM OCCIDENTE', 'CR 5 N1-2'),
(nextval('nit_seq'), 'THE FASHION ROOM SUROCCIDENTE', 'CR 7 N56-32');

-- Inserts store's phone numbers to the store_phone table.
INSERT INTO store_phone (store_nit, phone) VALUES
((SELECT store_nit FROM store WHERE store_name = 'THE FASHION ROOM SUR'), 4225136),
((SELECT store_nit FROM store WHERE store_name = 'THE FASHION ROOM SUR'), 4215489),
((SELECT store_nit FROM store WHERE store_name = 'THE FASHION ROOM NORTE'), 3254984),
((SELECT store_nit FROM store WHERE store_name = 'THE FASHION ROOM NORTE'), 3254856),
((SELECT store_nit FROM store WHERE store_name = 'THE FASHION ROOM ORIENTE'), 8445623),
((SELECT store_nit FROM store WHERE store_name = 'THE FASHION ROOM ORIENTE'), 4725148),
((SELECT store_nit FROM store WHERE store_name = 'THE FASHION ROOM OCCIDENTE'), 4227452),
((SELECT store_nit FROM store WHERE store_name = 'THE FASHION ROOM OCCIDENTE'), 8742394),
((SELECT store_nit FROM store WHERE store_name = 'THE FASHION ROOM SUROCCIDENTE'), 1225478),
((SELECT store_nit FROM store WHERE store_name = 'THE FASHION ROOM SUROCCIDENTE'), 3668741);