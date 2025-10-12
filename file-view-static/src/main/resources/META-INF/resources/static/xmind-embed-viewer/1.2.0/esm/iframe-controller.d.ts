export declare class IframeController {
    protected iframe: HTMLIFrameElement;
    constructor(target: HTMLElement | HTMLIFrameElement | string, src: string);
    getIframe(): HTMLIFrameElement;
    setStyles(styles: Partial<CSSStyleDeclaration>): void;
}
