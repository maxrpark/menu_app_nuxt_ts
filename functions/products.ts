require('dotenv').config();
const Airtable = require('airtable-node');
console.log(process.env.KEY);
const airtable = new Airtable({ apiKey: process.env.KEY })
  .base('apptyrbqU499FHLlN')
  .table('products');

interface Product {
  id: string;
  fields: {
    name: string;
    desc: string;
    price: string;
    category: string;
    url: string;
    image: any;
    tags: string;
  };
}

exports.handler = async () => {
  try {
    const { records } = await airtable.list();
    const products = records.map((product: Product) => {
      const { id } = product;
      const { name, desc, image, price, category, tags } = product.fields;
      const url = image[0].url;

      return {
        id,
        name,
        desc,
        price,
        category,
        url,
        tags,
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
