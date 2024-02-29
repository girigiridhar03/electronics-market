const express = require('express');
const { Connection } = require('./src/Config/db');
const { userRouter } = require('./src/Routes/user.routes');
const { acRouter } = require('./src/routes/ac.routes');
const { cameraRouter } = require('./src/routes/camera.routes');
const { laptopRoutes } = require('./src/routes/laptop.routes');
const { mobileRoutes } = require('./src/routes/mobile.routes');
const { cartRouter } = require('./src/routes/cart.routes');
const { homeRouter } = require('./src/routes/home.routes');
const cors = require('cors');
const app = express();

const corsOptions = {
    origin: 'http://localhost:3000', 
    credentials: true,            
   optionSuccessStatus: 200, 
};

app.use(cors());

app.use(express.json());
app.use("/users", userRouter);
app.use("/ac", acRouter);
app.use("/camera", cameraRouter);
app.use("/laptop", laptopRoutes);
app.use("/mobile", mobileRoutes);
app.use("/cart", cartRouter);
app.use("/home", homeRouter);

app.listen(5000, async () => {
    try {
        await Connection();
        console.log("connected successfully on port  5000");
    } catch (error) {
        console.log(error.message);
    }
});
