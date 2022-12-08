// require packages used in the project
const express = require('express');
const exphbs = require('express-handlebars');
const restaurantList = require('./restaurants.json');
const app = express();
const port = 3000;

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// setting static files
app.use(express.static('public'));

// routes setting
app.get('/', (req, res) => {
    const message = `您的清單中有${restaurantList.results.length}間餐廳`;
    res.render('index', { restaurants: restaurantList.results, message });
});

// set dynamic routes
app.get('/restaurants/:restaurant_id', (req, res) => {
    const restaurant = restaurantList.results.find(restaurant => restaurant.id.toString() === req.params.restaurant_id);
    res.render('show', { restaurant });
});

// show search results 
app.get('/search', (req, res) => {
    let message;
    // 對字串中的空白進行處理 → replace(/ /g, "")
    // str.trim() 不會移除中間的空白，只移除前後的空白
    // str.replaceAll() 在 node.js 15.0.0 後才可使用
    const keyword = req.query.keyword.replace(/ /g, "").toLowerCase();
    const restaurants = restaurantList.results.filter(restaurant => {
        const restaurantName = restaurant.name.replace(/ /g, "").toLowerCase();
        const restaurantEngName = restaurant.name_en.replace(/ /g, "").toLowerCase();
        const restaurantCategory = restaurant.category.replace(/ /g, "").toLowerCase();
        return restaurantName.includes(keyword) || restaurantEngName.includes(keyword) || restaurantCategory.includes(keyword);
    });

    // 若輸入為空白，則顯示提示語句
    if (!keyword) {
        message = '請輸入正確的關鍵字！';
        return res.render('index', { restaurants: null, keyword: req.query.keyword, message });
    }

    // 若找無符合關鍵字的結果，則隨機推薦餐廳
    if (restaurants.length === 0) {
        message = `沒有找到符合關鍵字的結果，但您可能會喜歡：`;
        const randomIDs = randomNums(1, restaurantList.results.length, 3);
        const randomRestaurants = restaurantList.results.filter(restaurant => {
            return randomIDs.includes(restaurant.id);
        });
        return res.render('index', { restaurants: randomRestaurants, keyword: req.query.keyword, message });
    }

    // 顯示找到符合關鍵字的結果
    message = `找到${restaurants.length}個符合關鍵字的結果`;
    res.render('index', { restaurants, keyword: req.query.keyword, message });
});

// start and listen on the Express server
app.listen(port, () => {
    console.log(`Express is listening on localhost:${port}`);
});

// 用來生成隨機數字陣列的函式
function randomNums(min, max, length) {
    const nums = [];
    while (nums.length < length) {
        let num = Math.floor(Math.random() * max) + min;
        if (!nums.includes(num)) {
            nums.push(num);
        }
    }
    return nums;
} 