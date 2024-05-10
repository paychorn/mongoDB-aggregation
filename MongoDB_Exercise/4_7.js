// display the product id and description of which gets the most orders
db.getCollection('orders_w_lines').aggregate(
  [
    { $unwind: '$order_lines' },
    {
      $group: {
        _id: '$order_lines.product_id',
        sum: { $sum: '$ordered_quantity' }
      }
    },
    {
      $group: {
        _id: '$sum',
        product_id: { $push: '$$ROOT._id' }
      }
    },
    { $sort: { _id: -1 } },
    { $limit: 1 },
    { $unwind: '$product_id' },
    { $project: { _id: 0 } },
    {
      $lookup: {
        from: 'product',
        localField: 'product_id',
        foreignField: 'product_id',
        as: 'details'
      }
    },
    { $unwind: '$details' },
    {
      $project: {
        product_id: 1,
        product_description:
          '$details.product_name'
      }
    },
    { $limit: 1 }
  ],
);