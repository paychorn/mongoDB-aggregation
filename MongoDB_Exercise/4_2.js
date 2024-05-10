// group customer by portal and sort in descending order by the number of customers
// only display the results where the number of customers is greater than 1
db.getCollection('customer').aggregate(
  [
    {
      $group: {
        _id: '$customer_zipcode',
        customer_number: { $sum: 1 }
      }
    },
    { $sort: { customer_number: -1 } },
    { $match: { customer_number: { $gt: 1 } } }
  ],
);