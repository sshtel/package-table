'use strict'

import * as _ from "lodash";

class PackageFile {

    private sourceURL: string  = undefined;

    private object: any = undefined;

    private name: string  = undefined;
    private version: string  = undefined;
    private description: string  = undefined;
    private main: string  = undefined;
    private typings: string  = undefined;
    private author: string  = undefined;
    private contributors: [string] = undefined;
    private scripts: any = {};

    
    constructor(url: string) {
        this.sourceURL = url;
        
    }

};
  
interface DependencyGrid {
    moduleName: string;
    
}
export class PackageLoader {
    constructor() {

    }
    private packageFiles: any[] = new Array();
    private dependenciesGrid: DependencyGrid[] = new Array();
    private devDependenciesGrid: DependencyGrid[] = new Array();
  
    public static test() {
        console.log('hey, lodash')
        let arr = { aa: 1, bb: 2, cc: 3};
        arr = _.omit(arr, 'aa');
        console.log(arr);
    }

    public loadPackageFromUrl(url: string) {
        $.ajax({
            url,
            type: 'get',
            cache: false,
            success: data => {
                let obj = JSON.parse(data);
                this.packageFiles.push(obj);

                _.each(obj, (value, index) => {
                    console.log(value);
                })
                
                // if( this.dependenciesGrid.hasOwnProperty('a') === true) {

                // }

            },
            error: data => {
                
            }
        });
    }

    public printObjects() {
        console.log(this.packageFiles);
        this.packageFiles.forEach( (value, index) => {
            console.log(value);
        })
    }
}