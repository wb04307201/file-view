export class IframeEventChannelController {
    channel = new MessageChannel();
    channelSetupPromise;
    eventIndex = 0;
    handlers = {};
    constructor(iFrameController, domain = '*') {
        const iframe = iFrameController.getIframe();
        if (iframe.hasAttribute('data-event-channel-setup')) {
            throw new Error('An embed viewer instance already initialized on the iframe!');
        }
        else {
            iframe.setAttribute('data-event-channel-setup', 'true');
        }
        this.channelSetupPromise = (async () => {
            await new Promise(resolve => {
                iframe.addEventListener('load', () => {
                    this.channel.port1.start();
                    const port1Handler = (e) => {
                        const [type] = e.data;
                        if (type === 'channel-ready') {
                            e.preventDefault();
                            this.channel.port1.removeEventListener('message', port1Handler);
                            this.channel.port1.addEventListener('message', this.eventDispatcher.bind(this));
                            resolve(undefined);
                        }
                    };
                    this.channel.port1.addEventListener('message', port1Handler);
                    iframe.contentWindow?.postMessage(['setup-channel', { port: this.channel.port2 }], domain || '*', [this.channel.port2]);
                });
            });
        })();
    }
    eventDispatcher(e) {
        const [type, eventName, payload] = e.data || [];
        if (type === 'event' && eventName && this.handlers[eventName]) {
            this.handlers[eventName].forEach(handler => handler(payload));
        }
    }
    addEventListener(event, callback) {
        this.handlers[event] = this.handlers[event] || [];
        if (this.handlers[event].includes(callback))
            return;
        this.handlers[event].push(callback);
    }
    removeEventListener(event, callback) {
        if (!this.handlers[event])
            return;
        const index = this.handlers[event].findIndex(fn => fn === callback);
        this.handlers[event].splice(index, 1);
    }
    async emit(event, payload) {
        await this.channelSetupPromise;
        const replyEvent = `xmind-embed-viewer#${this.eventIndex++}`;
        await new Promise(resolve => {
            const handler = (e) => {
                const [message, payload] = e.data;
                if (message === replyEvent) {
                    this.channel.port1.removeEventListener('message', handler);
                    resolve(payload);
                }
            };
            this.channel.port1.addEventListener('message', handler);
            this.channel.port1.postMessage([event, payload, replyEvent]);
        });
    }
}
//# sourceMappingURL=channel-controller.js.map