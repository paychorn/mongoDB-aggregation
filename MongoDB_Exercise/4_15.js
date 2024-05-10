// delete all orders for customer 10001
// delete the customer 10001
// display the result of select * from customer, ordert, and order_lines
db.customer.deleteOne({customer_id: 10001})
db.order_lines.deleteMany({customer_id:10001})
db.customer.find()
db.order_lines.find()