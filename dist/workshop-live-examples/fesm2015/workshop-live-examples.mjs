import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class WorkshopLiveExamplesService {
    constructor() { }
}
WorkshopLiveExamplesService.ɵfac = function WorkshopLiveExamplesService_Factory(t) { return new (t || WorkshopLiveExamplesService)(); };
WorkshopLiveExamplesService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: WorkshopLiveExamplesService, factory: WorkshopLiveExamplesService.ɵfac, providedIn: 'root' });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WorkshopLiveExamplesService, [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return []; }, null);
})();

class WorkshopLiveExamplesComponent {
    constructor() { }
    ngOnInit() {
    }
}
WorkshopLiveExamplesComponent.ɵfac = function WorkshopLiveExamplesComponent_Factory(t) { return new (t || WorkshopLiveExamplesComponent)(); };
WorkshopLiveExamplesComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: WorkshopLiveExamplesComponent, selectors: [["tmd-workshop-live-examples"]], decls: 2, vars: 0, template: function WorkshopLiveExamplesComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1, " *****NPM MODULES workshop-live-examples works! Kelly\n");
            i0.ɵɵelementEnd();
        }
    } });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WorkshopLiveExamplesComponent, [{
            type: Component,
            args: [{ selector: 'tmd-workshop-live-examples', template: "<p>\n  *****NPM MODULES workshop-live-examples works! Kelly\n</p>" }]
        }], function () { return []; }, null);
})();

class WorkshopLiveExamplesModule {
}
WorkshopLiveExamplesModule.ɵfac = function WorkshopLiveExamplesModule_Factory(t) { return new (t || WorkshopLiveExamplesModule)(); };
WorkshopLiveExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: WorkshopLiveExamplesModule });
WorkshopLiveExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({});
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WorkshopLiveExamplesModule, [{
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
        }], null, null);
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(WorkshopLiveExamplesModule, { declarations: [WorkshopLiveExamplesComponent], exports: [WorkshopLiveExamplesComponent] }); })();

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

export { EXAMPLE_COMPONENTS, WorkshopLiveExamplesComponent, WorkshopLiveExamplesModule, WorkshopLiveExamplesService };
//# sourceMappingURL=workshop-live-examples.mjs.map
