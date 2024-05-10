// show order of whose customer id is 10001
db.getCollection('orders_w_lines').aggregate(
  [
    { $match: { customer_id: 10001 } },
    { $project: { _id: 0, customer_id: 0 } }
  ]
);