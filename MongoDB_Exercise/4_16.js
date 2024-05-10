// update the price of the product "Sofabed" from 7500.00 to 5400.00
// display the result of the select * from product
db.product.updateOne({product_name:"Sofabed"}, {$set:{product_price: 5400.00}})
db.product.find()