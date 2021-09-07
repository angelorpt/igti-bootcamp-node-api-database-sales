import clientsRoutes from "./clients";
import suppliesRoutes from "./supplies";
import productsRoutes from "./products";
import salesRoutes from "./sales";

const routes = (app) => {
  app.get("/", (req, res) => res.send("Expressjs rodando"));
  app.use("/api/clients", clientsRoutes);
  app.use("/api/supplies", suppliesRoutes);
  app.use("/api/products", productsRoutes);
  app.use("/api/sales", salesRoutes);

  app.use((err, req, res, next) => {
    console.log("error", err);
    logger.error(`${req.method} ${req.baseUrl} - ${err}`);
    res.status(400).send(err);
  });
};

export default routes;
