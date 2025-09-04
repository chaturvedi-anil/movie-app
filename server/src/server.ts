import app from "./app";

app.listen(process.env.PORT, () => {
  console.log(`express is running on port ${process.env.PORT}`);
});
