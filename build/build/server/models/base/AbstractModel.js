"use strict";
var AbstractModel = (function () {
    function AbstractModel() {
        this.values = {};
    }
    AbstractModel.prototype.hasColumn = function (column) {
        return getColumns().has(column);
    };
    AbstractModel.prototype.set = function (column, value) {
        this.values[column] = value;
    };
    AbstractModel.prototype.get = function (column) {
        return this.values[column];
    };
    AbstractModel.prototype.retrieve = function (txn) {
    };
    AbstractModel.prototype.insert = function (txn) {
    };
    AbstractModel.prototype.update = function (txn) {
    };
    AbstractModel.prototype.delete = function (txn) {
    };
    AbstractModel.prototype.save = function (txn) {
    };
    return AbstractModel;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AbstractModel;
//# sourceMappingURL=AbstractModel.js.map