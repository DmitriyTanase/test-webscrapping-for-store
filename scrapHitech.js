const db = require('./db/connection');
const product = require('./db/productModel/product');
const { MongoClient } = require('mongodb');




product.find(function (err, TestProductCollection2) {
    if (err) return console.error(err);
    console.log(TestProductCollection2);
});



db.close();

// const request = require('request');
// const cheerio = require('cheerio');
// const tress = require('tress');
// const resolve = require('url').resolve;
// const fs = require('fs');
// const writeStream = fs.createWriteStream('catalogHiTech.json');
//
// const URL = 'https://hi-tech.md/products/televizor-aiwa-led-24h500-utsenka-1';
// const scrapedProducts = [];
// const productList = [];
// const productPages = [];
// const productCategories = [];
//
//
// const q = tress(function (url, callback) {
//     request(URL, (error, response, html) => {
//         if (!error && response.statusCode == 200) {
//             const $ = cheerio.load(html);
//             //------------------ПАРСЕР---------------------
//             $('.info-detail-pro').each(function () {
//                 scrapedProducts.push({
//                     title: $('h2.title').text(),
//                     price: $('.price').find('.money').text(),
//                     img: $('#featuted-image').children().first().attr('src'),
//                     description: $('.description').find('li').text()
//                 });
//             });
//------------ОЧЕРЕДЬ ПРОДУКТОВ-------------
// $('div.row-left').each(function () {
//     productList.push(resolve(URL, $(this).children('a').attr('href')));
// });
//-------------ОЧЕРЕДЬ СТРАНИЦ--------------
// for (let productCategory of productCategories) {
//
// }
// $('li.next').each(function () {
//     productPages.push(resolve(URL, $(this).children('a').attr('href')));
// });
//-------------ОЧЕРЕДЬ КАТЕГОРИЙ------------
// $('li.list-title').each(function () {
//     productCategories.push(resolve(URL, $(this).children('a').attr('href')));
// });
// console.log(productCategories);
//             callback()
//         }
//     })
// }, 10);
//
// q.drain = function () {
//     const writtenData = JSON.stringify(scrapedProducts);
//    writeStream.write(`${writtenData}`);
//     console.log(writtenData);
// };
// q.push(URL);


// request(URL, (error, response, html) => {
//     if (!error && response.statusCode == 200) {
//         const $ = cheerio.load(html);
//         const q = tress(
//             function crawlHitech(url, callback) {
//                 //------------------ПАРСЕР---------------------
//                 $('.info-detail-pro').each(function () {
//                     scrapedProducts.push({
//                         title: $('h2.title').text(),
//                         price: $('.price').find('.money').text(),
//                         img: $('#featuted-image').children().first().attr('src'),
//                         description: $('.description').find('li').text()
//                     });
//                 });
//                 //------------ОЧЕРЕДЬ ПРОДУКТОВ-------------
//                 $('div.row-left').each(function () {
//                     q.push(resolve(URL, $(this).children('a').attr('href')));
//                 });
//                 //-------------ОЧЕРЕДЬ СТРАНИЦ--------------
//                 $('li.next').each(function () {
//                     q.push(resolve(URL, $(this).children('a').attr('href')));
//                 });
//                 //-------------ОЧЕРЕДЬ КАТЕГОРИЙ------------
//                 $('li.list-title').each(function () {
//                     q.push(resolve(URL, $(this).children('a').attr('href')));
//                 });
//                 callback();
//             }, 10
//         );
//         q.drain = function () {
//             const writtenData = JSON.stringify(scrapedProducts);
//             writeStream.write(`${writtenData}`);
//             console.log(writtenData);
//         };
//     } else throw (error)
// });


// $('.info-detail-pro').each(function () {
//         //     scrapedProducts.push({
//         //         title: $('h2.title').text(),
//         //         price: $('.price').find('.money').text(),
//         //         img: $('#featuted-image').children().first().attr('src'),
//         //         description: $('.description').find('li').text()
//         //     });
//         // });
//console.log(scrapedProduct)


// let q = tress(function (URL, callback) {
//     if (!error && response.statusCode == 200) {
//         const $ = cheerio.load(html);
//         result.push({
//             title: $('.product-title').text(),
//             price: $('.product-price').text(),
//             href: (resolve(URL, $('.title-5').attr('href'))),
//             img: $('.hoverBorderWrapper').children('img').attr('src')
//         });
//         $('.products').each(function () {
//             q.push(resolve(URL, $(this).attr('href')));
//         });
//         $('.next_page_link').each(function () {
//             q.push(resolve(URL, $(this).attr('href')))
//         });
//         callback();
//     }
// }, 10);
//
// q.drain = function () {
//     console.log(result);
//     fs.writeFileSync('./data.json', JSON.stringify(result, null, 4));
// };
// q.push(URL);


// if (!error && response.statusCode == 200) {
//         const $ = cheerio.load(html);
//             productCategory[i] = {categoryLinks, category};
//     $('.list-title').each(function() {
//         productCategory.push({
//             categoryLinks: (resolve(URL, $(this).children('a').attr('href'))),
//             category: $(this).children('a').text()
//         });
//     });
//     console.log(productCategory);
//     const writtenData = JSON.stringify(productCategory);
//     writeStream.write(`${writtenData}\n`);
// }


//.replace(/(\s+)/g,' ');
//writeStream.write(`${category}`);
// $('.row-left img').each((i, el) => {
//     const img = $(el);
//     photos.push(img.attr('src'));
//     console.log(photos)
// });
// $('.products').each((i, el) => {
//     const title = $(el)
//         .find('.product-title')
//         .text();
//     const price = $(el)
//         .find('.product-price')
//         .text();
//     scrapedProduct[el] = { title, price };
//     console.log(title, price);
//     writeStream.write(`${title} ${price} \n`);
// });
// $('.product-information').each((i, el) => {
//     const description = $(el)
//         .find('.description')
//         .children('li')
//         .text();
//     console.log(description);
// });