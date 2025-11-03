import express from "express";
import dotenv from "dotenv";

const app = express();
app.use(express.json());

dotenv.config();
const serverPort = process.env.PORT || 3001;

app.get("/", (req, res) => {
    res.send("Gerenciamento online");
});

app.listen(serverPort, () => {
    console.log(`Projetos abertos em http://localhost:${serverPort} `);
});