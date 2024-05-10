// display the total payment of order_id 3
db.getCollection('orders_w_lines').aggregate(
  [
    { $unwind: '$order_lines' },
    {
      $lookup: {
        from: 'product',
        localField: 'order_lines.product_id',
        foreignField: 'product_id',
        as: 'details'
      }
    },
    { $unwind: '$details' },
    {
      $project: {
        _id: '$order_id',
        total_price: {
          $multiply: [
            '$order_lines.ordered_quantity',
            '$details.product_price'
          ]
        }
      }
    },
    { $match: { _id: { $eq: 3 } } },
    {
      $group: {
        _id: '$_id',
        total_payment: { $sum: '$total_price' }
      }
    }
  ],
);