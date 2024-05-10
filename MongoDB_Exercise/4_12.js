// display the total number of orders placed between 2020-01-10 and 2020-01-15
db.getCollection('order_w_lines').aggregate(
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
      $group: {
        _id: null,
        total_order: { $sum: 1 }
      }
    },
    { $project: { _id: 0 } }
  ],
);