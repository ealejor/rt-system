//
// Created by edgar on 1/6/24 at 13:57:25.
//

type EventMap = {
    [event: string]: any[];
};

type EventCallback<T> = (...args: T[]) => void;

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

    public publish(key: string, ...args: T[]): void {
        if (!this.events[key]) return;

        this.events[key]!.forEach(callback => {
            callback(...args);
        });
    }

    public once(key: string, callback: EventCallback<T>): void {
        const onceCallback: EventCallback<T> = (...args: T[]) => {
            this.unsubscribe(key, onceCallback);
            callback(...args);
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
