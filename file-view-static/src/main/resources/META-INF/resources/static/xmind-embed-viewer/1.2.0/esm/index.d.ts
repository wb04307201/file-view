import { IframeEventChannelController } from './channel-controller';
import { IframeController } from './iframe-controller';
interface Sheet {
    id: string;
    title: string;
}
interface XMindEmbedViewerState {
    sheets: Sheet[];
    zoomScale: number;
    currentSheetId: string;
}
export declare class XMindEmbedViewer {
    protected iframeController: IframeController;
    protected iframeEventChannelController: IframeEventChannelController;
    protected internalState: XMindEmbedViewerState;
    readonly region: 'cn' | 'global';
    /**
     * Initialize a iframe element from a div/iframe html element.
     */
    constructor(args: {
        el: HTMLElement | HTMLIFrameElement | string;
        styles?: Partial<CSSStyleDeclaration>;
        file?: ArrayBuffer;
        isPitchModeDisabled?: boolean;
        region?: 'cn' | 'global';
    });
    /**
     * Add event listener for embed viewer.
     *
     * Available events:
     * - map-ready
     * - zoom-change
     * - sheet-switch
     * - sheets-load
     *
     */
    addEventListener(event: string, callback: (args: any) => any): void;
    removeEventListener(event: string, callback: (args: any) => any): void;
    /**
     * Update styles for created iframe element.
     */
    setStyles(styles: Partial<CSSStyleDeclaration>): void;
    /**
     * Load a file for embed viewer after iframe ready.
     */
    load(file: ArrayBuffer): void;
    setZoomScale(zoomScale: number): void;
    setFitMap(): void;
    switchSheet(sheetId: string): void;
    get zoom(): number;
    get sheets(): any;
    get currentSheetId(): string;
}
export {};
