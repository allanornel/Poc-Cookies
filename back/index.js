import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// app.use(cors({ credentials: true, origin: "http://localhost:5000/" }));
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:5000/");
//   res.header("Access-Control-Allow-Credentials", true);
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.get("/", (req, res) => {
  res.setH;
  res.setHeader("Set-Cookie", ["name=allan", "language=portuguese"]);
  res.cookie("Cookie name", "Testando 1 2 3");
  res.send("Cookie setado");
});

app.get("/getcookie", (req, res) => {
  console.log(req.cookies);
  res.send(req.cookies);
});

app.get("/clearCookie", (req, res) => {
  // res.clearCookie(); //Essa forma apesar de constar num site, não deletou todos os cookies da minha aplicação.
  // 3 cookies criados anteriormente no exemplo
  res.clearCookie("name");
  res.clearCookie("language");
  res.clearCookie("Cookie name");
  res.send("Cookie has been deleted successfully");
});

app.listen(5000, () => console.log("Server ON port 5000"));
