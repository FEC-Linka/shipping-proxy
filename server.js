const express = require('express');
const path = require('path');
const cors = require('cors');
const axios = require('axios');


const app = express();
const port = process.env.PORT || 7199;

app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
})

app.get('/:productId', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
})

//create variable with id that's available to all routes

//  ***API Referals***

// Shipping API
app.get('/shipping-api/:productId', (req, res) => {
  let id = req.params.productId;
  id = parseInt(id, 10);
  axios({
    method: 'get',
    url: `http://localhost:7100/shipping-api/${id}`
  })
  .then((shipping) => {
    res.send(shipping.data)
  })
  .catch((err) => {
    console.error(err)
  });
})

// Reviews APIs

// reviews
app.get('/reviews/:productId', (req, res) => {
  let id = req.params.productId;
  id = parseInt(id, 10);
  axios({
    method: 'get',
    url: `http://etsy-reviews.rvrita.com/reviews/${id}`
  })
  .then((reviews) => {
    console.log('REVDATA', reviews.data)
    //res.send(reviews.data)
  })
  .catch((err) => {
    console.error(err)
  });
})

//  review-summary
app.get('/review-summary/:productId', (req, res) => {
  let id = req.params.productId;
  id = parseInt(id, 10);
  axios({
    method: 'get',
    url: `http://etsy-reviews.rvrita.com/review-summary/${id}`
  })
  .then((reviews) => {
    res.send(reviews.data)
  })
  .catch((err) => {
    console.error(err)
  });
})

// review-list
app.get('/review-list/:productId', (req, res) => {
  let id = req.params.productId;
  id = parseInt(id, 10);
  axios({
    method: 'get',
    url: `http://etsy-reviews.rvrita.com/review-list/${id}`
  })
  .then((reviews) => {
    res.send(reviews.data)
  })
  .catch((err) => {
    console.error(err)
  });
})

// review-pictures
app.get('/reviews-pictures/:productId', (req, res) => {
  let id = req.params.productId;
  id = parseInt(id, 10);
  axios({
    method: 'get',
    url: `http://etsy-reviews.rvrita.com/reviews-pictures/${id}`
  })
  .then((reviews) => {
    res.send(reviews.data)
  })
  .catch((err) => {
    console.error(err)
  });
})

//Item info ***TODO*** refactor when Val finishes
app.get('/info', (req, res) => {
  // let id = req.params.productId;  //may have to change productId
  // id = parseInt(id, 10);
  axios({
    method: 'get',
    url: `http://localhost:5000/info`  //TODO change to include id
  })
  .then((info) => {
    console.log(info)
    res.send(info)
    //res.send(info.data)
  })
  .catch((err) => {
    console.error(err)
  });
})

//Pictures ***TODO*** refactor when Zach finishes
app.get('/pictures', (req, res) => {
  // let id = req.params.productId;  //may have to change productId
  // id = parseInt(id, 10);
  axios({
    method: 'get',
    url: `http://localhost:3000/pictures/?itemId=1`  //TODO change to include dynamic id
  })
  .then((info) => {
    console.log(info)
    res.send(info)
    //res.send(info.data)
  })
  .catch((err) => {
    console.error(err)
  });
})

app.listen(port, () => {
  console.log(`Etsy Proxy listening on port ${port}`);
})