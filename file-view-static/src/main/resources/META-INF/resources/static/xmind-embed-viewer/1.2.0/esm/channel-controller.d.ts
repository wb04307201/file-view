import { IframeController } from './iframe-controller';
export declare class IframeEventChannelController {
    protected channel: MessageChannel;
    protected channelSetupPromise: Promise<any>;
    protected eventIndex: number;
    protected handlers: {
        [event: string]: ((args: any) => any)[];
    };
    constructor(iFrameController: IframeController, domain?: string);
    protected eventDispatcher(e: MessageEvent): void;
    addEventListener<T = any>(event: string, callback: (args: T) => any): void;
    removeEventListener(event: string, callback: (payload: any) => void): void;
    emit<T = any>(event: string, payload?: T): Promise<void>;
}
