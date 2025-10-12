import { IframeEventChannelController } from './channel-controller';
import { IframeController } from './iframe-controller';
export class XMindEmbedViewer {
    iframeController;
    iframeEventChannelController;
    internalState = {
        sheets: [],
        zoomScale: 100,
        currentSheetId: ''
    };
    region;
    /**
     * Initialize a iframe element from a div/iframe html element.
     */
    constructor(args) {
        const { file, el, region = 'global', styles = {
            'height': '350px',
            'width': '750px',
        }, isPitchModeDisabled } = args;
        const domain = region === 'cn' ? 'www.xmind.cn' : 'www.xmind.app';
        const iframeController = new IframeController(el, `https://${domain}/embed-viewer${isPitchModeDisabled ? '?pitch-mode=disabled' : ''}`);
        const iframeEventChannelController = new IframeEventChannelController(iframeController, `https://${domain}`);
        this.iframeController = iframeController;
        this.iframeEventChannelController = iframeEventChannelController;
        this.region = region;
        iframeEventChannelController.addEventListener('sheet-switch', payload => this.internalState.currentSheetId = payload);
        iframeEventChannelController.addEventListener('zoom-change', payload => this.internalState.zoomScale = payload);
        iframeEventChannelController.addEventListener('sheets-load', payload => this.internalState.sheets = payload);
        this.iframeController.setStyles(styles);
        if (file) {
            this.load(file);
        }
    }
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
    addEventListener(event, callback) {
        this.iframeEventChannelController.addEventListener(event, callback);
    }
    removeEventListener(event, callback) {
        this.iframeEventChannelController.removeEventListener(event, callback);
    }
    /**
     * Update styles for created iframe element.
     */
    setStyles(styles) {
        this.iframeController.setStyles(styles);
    }
    /**
     * Load a file for embed viewer after iframe ready.
     */
    load(file) {
        this.iframeEventChannelController.emit('open-file', file);
    }
    setZoomScale(zoomScale) {
        this.iframeEventChannelController.emit('zoom', zoomScale);
    }
    setFitMap() {
        this.iframeEventChannelController.emit('fit-map');
    }
    switchSheet(sheetId) {
        this.iframeEventChannelController.emit('switch-sheet', sheetId);
    }
    get zoom() {
        return this.internalState.zoomScale;
    }
    get sheets() {
        return JSON.parse(JSON.stringify(this.internalState.sheets));
    }
    get currentSheetId() {
        return this.internalState.currentSheetId;
    }
}
//# sourceMappingURL=index.js.map