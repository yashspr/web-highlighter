import type { BrowserWindow } from '@src/types';

/**
 * Something about the Selection/Range API in browsers.
 * If you want to use Highlighter in some old browsers, you may use a polyfill.
 * https://caniuse.com/#search=selection
 */

export const getDomRange = (_window?: BrowserWindow): Range => {
    const selection = (_window || window).getSelection();

    if (selection.isCollapsed) {
        // eslint-disable-next-line no-console
        console.debug('no text selected');

        return null;
    }

    return selection.getRangeAt(0);
};

export const removeSelection = (_window?: BrowserWindow): void => {
    (_window || window).getSelection().removeAllRanges();
};
