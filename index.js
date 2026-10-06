const express = require('express');
const app = express();
app.use(express.json());
app.get('/', (req,res)=>res.send('GADII LIVE - UGX API'));
app.post('/api/deposit/momo',(req,res)=>{
 res.json({success:true, amount:req.body.amount, phone:req.body.phone});
});
app.listen(process.env.PORT||10000);
