const index = (req,res) => {
    res.render('home');
}
const addProduct = (req,res) => {
    res.render('addProduct');
}
const insertData = (req,res) => {
    
}

module.exports = {
    index,
    addProduct,
    insertData
}