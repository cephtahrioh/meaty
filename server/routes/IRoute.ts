interface IRoute {
  path: string;
  router(req: any, res: any): void;
}

export default IRoute;