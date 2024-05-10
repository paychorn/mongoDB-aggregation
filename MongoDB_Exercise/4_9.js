// display id and name of customers who have placed orders between 2020-01-10 and 2020-01-15
db.getCollection('orders_w_lines').aggregate(
  [
    {
      $match: {
        order_date: {
          $gte: '2020-01-10 00:00:00',
          $lte: '2020-01-15 23:59:59'
        }
      }
    },
    {
      $lookup: {
        from: 'customer',
        localField: 'customer_id',
        foreignField: 'customer_id',
        as: 'customer'
      }
    },
    { $unwind: '$customer' },
    {
      $group: {
        _id: '$customer_id',
        customer: {
          $first: '$customer.customer_name'
        }
      }
    }
  ],
);