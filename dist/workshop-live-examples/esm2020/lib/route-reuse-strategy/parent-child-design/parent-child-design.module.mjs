import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionOneComponent } from './solution-one/solution-one.component';
import { SolutionTwoComponent } from './solution-two/solution-two.component';
import { SolutionThreeComponent } from './solution-three/solution-three.component';
import * as i0 from "@angular/core";
export class ParentChildDesignModule {
}
ParentChildDesignModule.ɵfac = function ParentChildDesignModule_Factory(t) { return new (t || ParentChildDesignModule)(); };
ParentChildDesignModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ParentChildDesignModule });
ParentChildDesignModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ParentChildDesignModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    SolutionOneComponent,
                    SolutionTwoComponent,
                    SolutionThreeComponent
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    SolutionOneComponent,
                    SolutionTwoComponent,
                    SolutionThreeComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ParentChildDesignModule, { declarations: [SolutionOneComponent,
        SolutionTwoComponent,
        SolutionThreeComponent], imports: [CommonModule], exports: [SolutionOneComponent,
        SolutionTwoComponent,
        SolutionThreeComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyZW50LWNoaWxkLWRlc2lnbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy93b3Jrc2hvcC1saXZlLWV4YW1wbGVzL3NyYy9saWIvcm91dGUtcmV1c2Utc3RyYXRlZ3kvcGFyZW50LWNoaWxkLWRlc2lnbi9wYXJlbnQtY2hpbGQtZGVzaWduLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7QUFtQm5GLE1BQU0sT0FBTyx1QkFBdUI7OzhGQUF2Qix1QkFBdUI7eUVBQXZCLHVCQUF1Qjs2RUFUekI7WUFDUCxZQUFZO1NBQ2I7dUZBT1UsdUJBQXVCO2NBZm5DLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osb0JBQW9CO29CQUNwQixvQkFBb0I7b0JBQ3BCLHNCQUFzQjtpQkFDdkI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLG9CQUFvQjtvQkFDcEIsb0JBQW9CO29CQUNwQixzQkFBc0I7aUJBQ3ZCO2FBQ0Y7O3dGQUNZLHVCQUF1QixtQkFiaEMsb0JBQW9CO1FBQ3BCLG9CQUFvQjtRQUNwQixzQkFBc0IsYUFHdEIsWUFBWSxhQUdaLG9CQUFvQjtRQUNwQixvQkFBb0I7UUFDcEIsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTb2x1dGlvbk9uZUNvbXBvbmVudCB9IGZyb20gJy4vc29sdXRpb24tb25lL3NvbHV0aW9uLW9uZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU29sdXRpb25Ud29Db21wb25lbnQgfSBmcm9tICcuL3NvbHV0aW9uLXR3by9zb2x1dGlvbi10d28uY29tcG9uZW50JztcbmltcG9ydCB7IFNvbHV0aW9uVGhyZWVDb21wb25lbnQgfSBmcm9tICcuL3NvbHV0aW9uLXRocmVlL3NvbHV0aW9uLXRocmVlLmNvbXBvbmVudCc7XG5cblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTb2x1dGlvbk9uZUNvbXBvbmVudCxcbiAgICBTb2x1dGlvblR3b0NvbXBvbmVudCxcbiAgICBTb2x1dGlvblRocmVlQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFNvbHV0aW9uT25lQ29tcG9uZW50LFxuICAgIFNvbHV0aW9uVHdvQ29tcG9uZW50LFxuICAgIFNvbHV0aW9uVGhyZWVDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBQYXJlbnRDaGlsZERlc2lnbk1vZHVsZSB7IH1cbiJdfQ==