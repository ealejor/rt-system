//
// Created by edgar on 10/6/24 at 21:20:59.
//

interface EventCallback<T> {
    (data: T): void;
}

interface EventMap {
    [event: string]: any[];
}

export class EventBus<T> {
    private events: { [K in keyof EventMap]?: EventCallback<T>[] } = {};

    public subscribe(key: string, callback: EventCallback<T>): void {
        if (!this.events[key]) {
            this.events[key] = [];
        }
        this.events[key]!.push(callback);
    }

    public unsubscribe(key: string, callback: EventCallback<T>): void {
        if (!this.events[key]) return;

        this.events[key] = this.events[key]!.filter(listener => listener !== callback);
    }

    public publish(key: string, data: T): void {
        if (!this.events[key]) return;

        this.events[key]!.forEach(callback => {
            callback(data);
        });
    }

    public once(key: string, callback: EventCallback<T>): void {
        const onceCallback: EventCallback<T> = (arg: T) => {
            this.unsubscribe(key, onceCallback);
            callback(arg);
        };

        this.subscribe(key, onceCallback);
    }

    public hasListeners(key: string): boolean {
        return !!this.events[key]?.length;
    }

    public clear(key?: string): void {
        if (key) {
            delete this.events[key];
        } else {
            this.events = {};
        }
    }
}
