//Import express JS
import express from "express";

const app = express();

// Create Get method for server side to get products.
app.get("/products", (req, res) => {
    res.send("Start server now 274.");
});

app.listen(5000, () => {
    console.log('Server started at http://localhost:5000 ');
})
