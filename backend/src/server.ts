import app from "./app";

const port = 8000;
const host = '0.0.0.0';

app.listen(port, host,()=>{
    console.log(`App is runnning on http://localhost:${port}`);
});