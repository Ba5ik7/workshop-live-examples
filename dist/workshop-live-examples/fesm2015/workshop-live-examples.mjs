import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class WorkshopLiveExamplesService {
    constructor() { }
}
WorkshopLiveExamplesService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: WorkshopLiveExamplesService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
WorkshopLiveExamplesService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: WorkshopLiveExamplesService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: WorkshopLiveExamplesService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class WorkshopLiveExamplesComponent {
    constructor() { }
    ngOnInit() {
    }
}
WorkshopLiveExamplesComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: WorkshopLiveExamplesComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
WorkshopLiveExamplesComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: WorkshopLiveExamplesComponent, selector: "tmd-workshop-live-examples", ngImport: i0, template: "<p>\n  *****NPM MODULES workshop-live-examples works! Kelly\n</p>", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: WorkshopLiveExamplesComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tmd-workshop-live-examples', template: "<p>\n  *****NPM MODULES workshop-live-examples works! Kelly\n</p>", styles: [""] }]
        }], ctorParameters: function () { return []; } });

class WorkshopLiveExamplesModule {
}
WorkshopLiveExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: WorkshopLiveExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
WorkshopLiveExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: WorkshopLiveExamplesModule, declarations: [WorkshopLiveExamplesComponent], exports: [WorkshopLiveExamplesComponent] });
WorkshopLiveExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: WorkshopLiveExamplesModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: WorkshopLiveExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        WorkshopLiveExamplesComponent
                    ],
                    imports: [],
                    exports: [
                        WorkshopLiveExamplesComponent
                    ]
                }]
        }] });

const EXAMPLE_COMPONENTS = {
    "workshop-live-examples": {
        "packagePath": "",
        "title": "This is a Test Example",
        "componentName": "WorkshopLiveExamplesComponent",
        "files": [
            "workshop-live-examples.component.ts",
            "workshop-live-examples.component.html",
            "workshop-live-examples.component.scss"
        ],
        "selector": "tmd-workshop-live-examples",
        "additionalComponents": [],
        "primaryFile": "workshop-live-examples.component.ts",
        "module": {
            "name": "WorkshopLiveExamplesModule",
            "importSpecifier": ""
        }
    }
};

/*
 * Public API Surface of workshop-live-examples
 */

/**
 * Generated bundle index. Do not edit.
 */

export { WorkshopLiveExamplesComponent, WorkshopLiveExamplesModule, WorkshopLiveExamplesService };
//# sourceMappingURL=workshop-live-examples.mjs.map
