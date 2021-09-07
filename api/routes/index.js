import clientsRoutes from "./clients";

const routes = (app) => {
  app.use("/api/clients", clientsRoutes);
};

export default routes;
