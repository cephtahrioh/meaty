"use strict";
var AbstractRouteService = (function () {
    function AbstractRouteService() {
    }
    AbstractRouteService.prototype.use = function (router) {
        var createRoute = this.create();
        if (createRoute)
            router.post(createRoute.path, createRoute.router);
        var readRoute = this.read();
        if (readRoute)
            router.get(readRoute.path, readRoute.router);
    };
    return AbstractRouteService;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AbstractRouteService;
//# sourceMappingURL=AbstractRouteService.js.map