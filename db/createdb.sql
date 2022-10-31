-- Contains product's category.
CREATE TABLE category (
    category_id SERIAL,
    category_name VARCHAR(25) NOT NULL,
    CONSTRAINT pk_category PRIMARY KEY (category_id)
);

-- Contains different products.
CREATE TABLE product (
    product_id INTEGER,
    category_id INTEGER,
    product_name VARCHAR(25) NOT NULL CHECK (product_name <> ''),
    shipping_cost INTEGER NOT NULL,
    CONSTRAINT pk_product PRIMARY KEY (product_id),
    CONSTRAINT fk_category FOREIGN KEY (category_id) REFERENCES category (category_id)
);

-- Contains product' variants.
CREATE TABLE variant (
    variant_id SERIAL,
    product_id INTEGER,
    variant_name VARCHAR(50) NOT NULL CHECK (variant_name <> ''),
    variant_price INTEGER NOT NULL CHECK (variant_price > 0),
    variant_quantity INTEGER NOT NULL,
    CONSTRAINT pk_product_variant PRIMARY KEY (variant_id),
    CONSTRAINT fk_product_id FOREIGN KEY (product_id) REFERENCES product (product_id) ON DELETE RESTRICT
);

-- Contains different genders for the product.
CREATE TABLE gender (
    gender_id SERIAL,
    gender_value VARCHAR(25),
    CONSTRAINT pk_attribute PRIMARY KEY (gender_id)
);

-- Joining table for variant and gender.
CREATE TABLE variant_gender (
    variant_id INTEGER,
    gender_id INTEGER,
    CONSTRAINT pk_variant_gender PRIMARY KEY (variant_id, gender_id),
    CONSTRAINT fk_variant_id FOREIGN KEY (variant_id) REFERENCES variant (variant_id),
    CONSTRAINT fk_gender_id FOREIGN KEY (gender_id) REFERENCES gender (gender_id)
);

-- Contains different shipping costs for the product.
CREATE TABLE shipping_cost (
    shipping_id SERIAL,
    shipping_value INTEGER,
    CONSTRAINT pk_attribute PRIMARY KEY (shipping_id)
);

-- Joining table for variant and shipping_cost.
CREATE TABLE variant_shipping_cost (
    variant_id INTEGER,
    shipping_id INTEGER,
    CONSTRAINT pk_variant_attribute PRIMARY KEY (variant_id, shipping_id),
    CONSTRAINT fk_variant_id FOREIGN KEY (variant_id) REFERENCES variant (variant_id),
    CONSTRAINT fk_shipping_id FOREIGN KEY (shipping_id) REFERENCES shipping_cost (shipping_id)
);

-- Contains different colors for the product.
CREATE TABLE color (
    color_id SERIAL,
    color_value VARCHAR(25),
    CONSTRAINT pk_attribute PRIMARY KEY (color_id)
);

-- Joining table for variant and color.
CREATE TABLE variant_color (
    variant_id INTEGER,
    color_id INTEGER,
    CONSTRAINT pk_variant_attribute PRIMARY KEY (variant_id, color_id),
    CONSTRAINT fk_variant_id FOREIGN KEY (variant_id) REFERENCES variant (variant_id),
    CONSTRAINT fk_color_id FOREIGN KEY (color_id) REFERENCES color (color_id)
);

-- Contains all customers.
CREATE TABLE customer (
    customer_id SERIAL,
    customer_name VARCHAR(25) NOT NULL CHECK (customer_name <> ''),
    customer_lastname VARCHAR(25),
    customer_email VARCHAR(40) UNIQUE NOT NULL CHECK (customer_email <> ''),
    customer_password VARCHAR(100) NOT NULL CHECK (customer_password <> ''),
    CONSTRAINT pk_customer PRIMARY KEY (customer_id)
);

-- Contains customer's wishlist.
CREATE TABLE wishlist (
    customer_id INTEGER,
    variant_id INTEGER,
    CONSTRAINT pk_wishlist PRIMARY KEY (customer_id, variant_id),
    CONSTRAINT fk_wishlist_customer FOREIGN KEY (customer_id) REFERENCES customer (customer_id),
    CONSTRAINT fk_wishlist_variant FOREIGN KEY (variant_id) REFERENCES variant (variant_id)
);

-- Contains all customer's orders.
CREATE TABLE order_detail (
    order_detail_id INTEGER,
    customer_id INTEGER NOT NULL,
    purchase_date DATE NOT NULL,
    CONSTRAINT pk_order_detail PRIMARY KEY (order_detail_id),
    CONSTRAINT fk_order_detail FOREIGN KEY (customer_id) REFERENCES customer (customer_id)
);

-- Contains the customer's purchased products for each order.
CREATE TABLE order_item (
    order_item_id SERIAL,
    order_detail_id INTEGER NOT NULL,
    variant_id INTEGER NOT NULL,
    product_quantity INTEGER NOT NULL,
    item_total_cost INTEGER NOT NULL,
    CONSTRAINT pk_order_item PRIMARY KEY (order_item_id, order_detail_id),
    CONSTRAINT fk_order_item_order_detail_id FOREIGN KEY (order_detail_id) REFERENCES order_detail(order_detail_id) ON DELETE CASCADE,
    CONSTRAINT fk_order_item_variant_id FOREIGN KEY (variant_id) REFERENCES variant(variant_id) ON DELETE RESTRICT
);

-- Contains store's information.
CREATE TABLE store (
    store_nit INTEGER,
    store_name VARCHAR(30) NOT NULL CHECK (store_name <> ''),
    store_address VARCHAR(30) NOT NULL CHECK (store_address <> ''),
    CONSTRAINT pk_store PRIMARY KEY (store_nit)
);

-- Contains store's phone numbers.
CREATE TABLE store_phone (
    store_nit INTEGER,
    phone BIGINT NOT NULL,
    CONSTRAINT pk_store_phone PRIMARY KEY (store_nit, phone),
    CONSTRAINT fk_store_phone FOREIGN KEY (store_nit) REFERENCES store(store_nit)
);
