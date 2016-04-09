"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractRouteService_1 = require('./AbstractRouteService');
var ItemModel_1 = require('../models/ItemModel');
var ItemService = (function (_super) {
    __extends(ItemService, _super);
    function ItemService() {
        _super.apply(this, arguments);
        this.update = {
            return: {
                path: "/items/:id",
                router: function (req, res) {
                }
            }
        };
    }
    ItemService.prototype.create = function () {
        return {
            path: "/items",
            router: function (req, res) {
                var model = new ItemModel_1.default();
            }
        };
    };
    ItemService.prototype.read = function () {
        return {
            path: "/items",
            router: function (req, res) {
            }
        };
    };
    ItemService.prototype.delete = function () {
        return {
            path: "/items",
            router: function (req, res) {
            }
        };
    };
    return ItemService;
}(AbstractRouteService_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ItemService;
//# sourceMappingURL=ItemService.js.map