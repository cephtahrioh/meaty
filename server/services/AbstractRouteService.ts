import IRoute from '../routes/IRoute';

abstract class AbstractRouteService {
  abstract create(): IRoute;
  abstract read(): IRoute;
  abstract update(): IRoute;
  abstract delete(): IRoute;
  
  use(router: any) {
    var createRoute: IRoute = this.create();
    if(createRoute)
      router.post(createRoute.path, createRoute.router);
      
    var readRoute: IRoute = this.read();
    if(readRoute)
      router.get(readRoute.path, readRoute.router);
  }
}

export default AbstractRouteService;