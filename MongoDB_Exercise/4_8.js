// display the customer name, and the number of orders where have placed the most top three orders
db.getCollection('orders_w_lines').aggregate(
  [
    {
      $group: {
        _id: '$customer_id',
        order_count: { $sum: 1 }
      }
    },
    {
      $lookup: {
        from: 'customer',
        localField: '_id',
        foreignField: 'customer_id',
        as: 'data'
      }
    },
    { $unwind: '$data' },
    {
      $project: {
        _id: 0,
        customer_name: '$data.customer_name',
        order_count: '$order_count'
      }
    },
    { $sort: { order_count: -1 } },
    { $limit: 3 }
  ]
);