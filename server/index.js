const express = require("express");
const app = express();
const Port = 3001;
const mc = require("./controllers/messages_controller")
app.use(express.json());
app.use(express.static("./public/build"))

app.post('/api/messages', mc.create)

app.get('/api/messages', mc.read)

app.put('/api/messages/:id', mc.update)

app.delete('/api/messages/:id', mc.delete)


app.listen(Port,()=> { 
    console.log(`power level over ${Port}`)
});