// group customer by portal and sort in descending order by the number of customers
db.getCollection('customer').aggregate(
  [
    {
      $group: {
        _id: '$customer_zipcode',
        customer_number: { $sum: 1 }
      }
    },
    { $sort: { customer_number: -1 } }
  ],
);