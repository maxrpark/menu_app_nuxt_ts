require('dotenv').config();
const Airtable = require('airtable-node');

const airtable = new Airtable({ apiKey: 'keyA1ZW1x3n5MasrB' })
  .base('apptyrbqU499FHLlN')
  .table('products');

console.log();

exports.handler = async () => {
  try {
    const { records } = await airtable.list();
    const products = records.map((product: any) => {
      const { id } = product;
      const { name, desc, image, price, category } = product.fields;
      const url = image[0].url;

      return {
        id,
        name,
        desc,
        price,
        category,
        url,
      };
    });
    return {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: 'Server Error',
    };
  }
};
