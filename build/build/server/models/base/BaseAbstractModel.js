"use strict";
var collections_1 = require('typescript-collections/collections');
var ItemModel = (function () {
    function ItemModel() {
        this.columns = new collections_1.Set(["NAME", "DESCRIPTION", "IMAGE"]);
    }
    ItemModel.prototype.getColumns = function () {
        return columns;
    };
    return ItemModel;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ItemModel;
//# sourceMappingURL=BaseAbstractModel.js.map