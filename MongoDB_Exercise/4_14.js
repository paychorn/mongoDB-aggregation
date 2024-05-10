// insert new products into the product collection
// product_id, product_name, product_color, produce_price
// 7, kitchen cabinet, Cherry, 1500.00
// 8, table, Red Oak, 550.00
// display the result of the select * from product
db.product.insertMany([
  {
    product_id:7, 
    product_name: "kitchen cabinet", 
    product_color: "Cherry", 
    product_price: 1500.00
  },
  { product_id:8, 
    product_name: "table", 
    product_color: "Red Oak", 
    product_price: 550.00
  }
  ])
