const request = require('request');
const cheerio = require('cheerio');
const resolve = require('url').resolve;
const fs = require('fs');
//const writeStream = fs.createWriteStream('products.json');
const mongoose = require('mongoose');
const productModel = require('./db/productModel/Product');

const startURL = 'https://hi-tech.md/';

parsing();

async function parsing() {
    let structure = {};
    let catalogURLs = await getCatalogURLs(startURL);

    for (let catalogURL of catalogURLs) {
        let productURLList = await extractProductFromCategory(catalogURL);
        structure[catalogURL] = [];

        for ( let productURL of productURLList) {
            console.log(productURL);
            let product = await parseProduct(productURL);
            structure[catalogURL].push(product)
        }
    }
    // let productToDb = new productModel;
    // productToDb.title = structure.title;
    // productToDb.price = structure.price;
    // productToDb.img = structure.img;
    // productToDb.description = structure.description;
    // productToDb.originURL = structure.originURL;
    // //productToDb.category = structure[catalogURL];
    // productToDb.save(function (err, productToDb) {
    //     console.log(productToDb.title)
    // });

    // const writtenData = JSON.stringify(structure);
    // writeStream.write(`${writtenData}`);

    //let content = fs.readFileSync('./catalogHiTech.json', 'utf8');
    //console.log(content);
    // let obj = JSON.parse(content);
    //  for (let key in obj) {
    //      structure[key] = [];
    //      for (let productURL of obj[key]) {
    //          structure[key].push(
    //              {
    //                  url: productURL,
    //                  product: await parseProduct(productURL)
    //              }
    //          );
    //          console.log(structure[key].length);
    //      }
    //  }
    module.exports = structure;
}

async function getCatalogURLs(url) {
    const productCategories = [];

    let html = await getDOMHtml(url);
    const $ = cheerio.load(html);
    $('.list-title').each(function () {
        productCategories.push(resolve(url, $(this).children('a').attr('href')));
    });

    return productCategories;
}

async function extractProductFromCategory(catalogURL, productList = []) {
    console.log(catalogURL);
    let html = await getDOMHtml(catalogURL);
    const $ = cheerio.load(html);

    $('.products').find('div.row-left').each(async function () {
        let URL = resolve(startURL, $(this).children('a').attr('href'));
        //console.log(URL);
        //let product = await parseProduct(URL);
        productList.push(URL);
    });
    let nextLink = $('.next_page_link').attr('href');
    if (nextLink) {
        nextLink = resolve(catalogURL, nextLink);

        return await extractProductFromCategory(nextLink, productList)
    }
    //console.log(productList);
    return productList
}

async function parseProduct(url) {
    try {
        let html = await getDOMHtml(url);
        const $ = cheerio.load(html);

        return {
            title: $('h2.title').text(),
            price: $('.price').find('.money').text(),
            img: $('#featuted-image').children().first().attr('src'),
            description: $('.description').find('li').text(),
            originURL: url
        }

    } catch (e) {
        console.log('e')
    }
}

function getDOMHtml(url) {
    return new Promise(function (resolve, reject) {
        request(url, (error, response, html) => {
            if (!error && response.statusCode === 200) {
                resolve(html);
            } else {
                reject(null)
            }
        })
    })
}

