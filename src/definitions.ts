/**
 * Provides access to native iOS WidgetKit APIs.
 *
 * @since 7.0.0
 */
export interface WidgetsBridgePlugin {
  /**
   * Return the value from user’s defaults database associated with the specified key.
   *
   * @param options Options including key and group.
   * @since 0.0.1
   * @returns Promise resolving with the retrieved value.
   */
  getItem(options: UserDefaultsOptions): Promise<{ results: string }>;

  /**
   * Set the value in the user’s defaults database for a specified key.
   *
   * @param options Options including key, value, and group.
   * @since 0.0.1
   * @returns Promise resolving with operation success.
   */
  setItem(options: UserDefaultsOptions): Promise<{ results: boolean }>;

  /**
   * Remove the value from user’s defaults database for a specified key.
   *
   * @param options Options including key and group.
   * @since 0.0.1
   * @returns Promise resolving with operation success.
   */
  removeItem(options: UserDefaultsOptions): Promise<{ results: boolean }>;

  /**
   * Reload all configured widget timelines.
   *
   * @since 0.0.1
   * @returns Promise resolving with operation success.
   */
  reloadAllTimelines(): Promise<{ results: boolean }>;

  /**
   * Reload widget timelines for a specific kind.
   *
   * @param options Widget kind identifier.
   * @since 0.0.1
   * @returns Promise resolving with operation success.
   */
  reloadTimelines(options: TimelinesOptions): Promise<{ results: boolean }>;

  /**
   * Get current widget configurations.
   *
   * @since 0.0.1
   * @returns Promise resolving with configuration data.
   */
  getCurrentConfigurations(): Promise<{ results: any }>;
}

/**
 * Options for user defaults database operations.
 *
 * @since 0.0.1
 */
export interface UserDefaultsOptions {
  /**
   * The key whose value to retrieve, set, or remove.
   *
   * @since 0.0.1
   */
  key: string;

  /**
   * The user defaults group to store/retrieve data from.
   *
   * @since 0.0.1
   */
  group: string;

  /**
   * The value to set (for `setItem` only).
   *
   * @since 0.0.1
   */
  value?: string;
}

/**
 * Options for specifying the widget kind when reloading timelines.
 *
 * @since 0.0.1
 */
export interface TimelinesOptions {
  /**
   * The widget kind identifier.
   *
   * @since 0.0.1
   */
  ofKind: string;
}