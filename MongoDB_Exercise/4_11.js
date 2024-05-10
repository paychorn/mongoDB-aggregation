// display the customer id and name of customers who have not placed any orders
db.getCollection('customer').aggregate(
  [
    {
      $lookup: {
        from: 'orders_w_lines',
        localField: 'customer_id',
        foreignField: 'customer_id',
        as: 'order'
      }
    },
    { $match: { order: { $eq: [] } } },
    {
      $project: {
        _id: 0,
        customer_ampur: 0,
        customer_province: 0,
        customer_zipcode: 0,
        order: 0
      }
    }
  ],
);