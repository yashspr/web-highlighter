/**
 * adapter for mobile and desktop events
 */

import type { IInteraction, BrowserWindow } from '@src/types';
import { UserInputEvent } from '@src/types';
import detectMobile from '@src/util/is.mobile';

export default (_window?: BrowserWindow): IInteraction => {
    const isMobile = detectMobile((_window || window).navigator.userAgent);

    const interaction: IInteraction = {
        PointerEnd: isMobile ? UserInputEvent.touchend : UserInputEvent.mouseup,
        PointerTap: isMobile ? UserInputEvent.touchstart : UserInputEvent.click,
        // hover and click will be the same event in mobile
        PointerOver: isMobile ? UserInputEvent.touchstart : UserInputEvent.mouseover,
    };

    return interaction;
};
