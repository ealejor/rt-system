//
// Created by edgar on 1/6/24 at 13:55:25.
//

export enum Event {
    IS_OPEN_DRAWER = 'open:drawer',
    NOT_FOUND = 'not:found',
    IS_MOBILE = 'is:mobile',
    SHOW_FIRST_FOOTER = 'show:first:footer',
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
