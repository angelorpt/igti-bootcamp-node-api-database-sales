import clientsRoutes from "./clients";
import suppliesRoutes from "./supplies";
import productsRoutes from "./products";
import salesRoutes from "./sales";

const routes = (app) => {
  app.use("/api/clients", clientsRoutes);
  app.use("/api/supplies", suppliesRoutes);
  app.use("/api/products", productsRoutes);
  app.use("/api/sales", salesRoutes);
};

export default routes;
