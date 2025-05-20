import { registerPlugin } from '@capacitor/core';

import type { WidgetsBridgePlugin } from './definitions';

const WidgetsBridge = registerPlugin<WidgetsBridgePlugin>('WidgetsBridgePlugin');

export * from './definitions';
export { WidgetsBridge };
