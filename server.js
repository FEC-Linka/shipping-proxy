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

//  ***API Referals***

// Shipping API
app.get('/shipping-api/:productId', (req, res) => {
  let id = req.params.productId;
  id = parseInt(id, 10);
  axios({
    method: 'get',
    url: `http://3.95.162.236/shipping-api/${id}`
  })
  .then((shipping) => {
    res.send(shipping.data)
  })
  .catch((err) => {
    console.error(err)
  });
})

//  Shipping Cost Data
app.get('/productInfo-api', (req, res) => {
  axios({
    method: 'get',
    url: `http://3.95.162.236/productInfo-api`
  })
  .then((products) => {
    //res.send(products)
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
    res.send(reviews.data)
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
app.get('/itemDetails/:productId', (req, res) => {
  let id = req.params.productId;
  id = parseInt(id, 10);
  axios({
    method: 'get',
    url: `http://3.133.108.106/itemDetails/${id}`
  })
  .then((info) => {
    res.send(info.data)
  })
  .catch((err) => {
    console.error(err)
  });
})

app.get('/info/:productId', (req, res) => {
  let id = req.params.productId;
  id = parseInt(id, 10);
  axios({
    method: 'get',
    url: `http://3.133.108.106/info/${id}`
  })
  .then((info) => {
    res.send(info.data)
  })
  .catch((err) => {
    console.error(err)
  });
})




// app.get('/pictures', (req, res) => {
//   axios({
//     method: 'get',
//     url: `http://13.56.229.226/` + req.url
//   })
//   .then((info) => {
//     res.send(info.data)
//   })
//   .catch((err) => {
//     console.error(err)
//   });
// })

app.listen(port, () => {
  console.log(`Etsy Proxy listening on port ${port}`);
})