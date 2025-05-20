import { registerPlugin } from '@capacitor/core';

import type { WidgetsBridgePlugin } from './definitions';

const WidgetsBridgePlugin = registerPlugin<WidgetsBridgePlugin>('WidgetsBridgePlugin');

export type { WidgetsBridgePlugin } from './definitions';
// export { WidgetsBridgePlugin };
