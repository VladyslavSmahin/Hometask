const express = require(`express`);
const app = express();
const TODOS = [{
    id: 1,
    text: `one`,
    checked: false,
}]
app.listen(3333, () => {
    console.log(`Server is here...`)
})
app.get(`/`, (req,res) => {
   /* console.log(req);*/
    res.send(TODOS)
})