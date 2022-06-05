export interface WorkshopExampleList {
}
export interface LiveExample {
    /** Title of the example. */
    title: string;
    /** Name of the example component. */
    componentName: string;
    /** Selector to match the component of this example. */
    selector: string;
    /** Name of the primary file of this example. */
    primaryFile: string;
    /** List of files which are part of the example. */
    files: string[];
    /** Path to the directory containing the example. */
    packagePath: string;
    /** List of additional components which are part of the example. */
    additionalComponents: string[];
    /** NgModule that declares this example. */
    module: NgModuleInfo;
}
export interface NgModuleInfo {
    /** Name of the NgModule. */
    name: string;
    /**
     * Import specifier that resolves to this module. The specifier is not scoped to
     * `@angular/components-examples` because it's up to the consumer how the module is
     * imported. For example, in the docs app, modules are lazily imported from `fesm2015/`.
     */
    importSpecifier: string;
}
export declare const EXAMPLE_COMPONENTS: {
    [id: string]: LiveExample;
};
