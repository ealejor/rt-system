//
// Created by edgar on 1/6/24 at 13:55:25.
//

export enum Event {
    drawer = 'open:drawer',
    backdrop = 'show:backdrop',
    notfound = 'not:found',
    mobile = 'is:mobile',
    footer = 'show:first:footer',
}

export interface Item {
    title: string;
    path: string;
}

export interface Menu {
    title: string;
    opened: boolean;
    description?: string;
    path?: string;
    items?: Item[];
}

export enum Breakpoint {
    MOBILE = "(max-width: 768px)",
    TABLET = "(max-width: 1024px)",
    DESKTOP = "(max-width: 1440px)"
}
