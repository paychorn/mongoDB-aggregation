// display products id, description and color only the one with 'White Ash'
db.getCollection('product').aggregate(
  [
    { $match: { product_color: 'White Ash' } },
    { $project: { _id: 0, product_price: 0 } }
  ],
);f