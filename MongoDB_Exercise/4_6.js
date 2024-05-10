// display the customer id, name of whose order count is the highest
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
        customer_id: '$_id',
        customer_name: '$data.customer_name',
        order_count: '$order_count'
      }
    },
    { $sort: { order_count: -1 } },
    {
      $group: {
        _id: '$order_count',
        customer_id: {
          $push: '$$ROOT.customer_id'
        },
        customer_name: {
          $push: '$$ROOT.customer_name'
        }
      }
    },
    { $sort: { _id: -1 } },
    { $limit: 1 },
    { $unwind: '$customer_id' },
    { $unwind: '$customer_name' }
  ],
);