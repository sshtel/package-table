'use strict';
exports.__esModule = true;
var _ = require("lodash");
var PackageFile = /** @class */ (function () {
    function PackageFile(url) {
        this.sourceURL = undefined;
        this.object = undefined;
        this.name = undefined;
        this.version = undefined;
        this.description = undefined;
        this.main = undefined;
        this.typings = undefined;
        this.author = undefined;
        this.contributors = undefined;
        this.scripts = {};
        this.sourceURL = url;
    }
    return PackageFile;
}());
;
var PackageLoader = /** @class */ (function () {
    function PackageLoader() {
        this.packageFiles = new Array();
        this.dependenciesGrid = new Array();
        this.devDependenciesGrid = new Array();
    }
    PackageLoader.test = function () {
        console.log('hey, lodash');
        var arr = { aa: 1, bb: 2, cc: 3 };
        arr = _.omit(arr, 'aa');
        console.log(arr);
    };
    PackageLoader.prototype.loadPackageFromUrl = function (url) {
        var _this = this;
        $.ajax({
            url: url,
            type: 'get',
            cache: false,
            success: function (data) {
                var obj = JSON.parse(data);
                _this.packageFiles.push(obj);
                _.each(obj, function (value, index) {
                    console.log(value);
                });
                // if( this.dependenciesGrid.hasOwnProperty('a') === true) {
                // }
            },
            error: function (data) {
            }
        });
    };
    PackageLoader.prototype.printObjects = function () {
        console.log(this.packageFiles);
        this.packageFiles.forEach(function (value, index) {
            console.log(value);
        });
    };
    return PackageLoader;
}());
exports.PackageLoader = PackageLoader;
