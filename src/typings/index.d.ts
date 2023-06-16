declare module 'cal-heatmap' {
  export default class CalHeatmap {
    constructor();

    paint(
      options?: CalHeatmap.DeepPartial<OptionsType>,
      plugins?: CalHeatmap.PluginDefinition[] | CalHeatmap.PluginDefinition
    ): Promise<unknown>;

    addTemplates(templates: CalHeatmap.Template | CalHeatmap.Template[]): void;

    next(n?: number): Promise<unknown>;

    previous(n?: number): Promise<unknown>;

    jumpTo(date: Date, reset?: boolean): Promise<unknown>;

    fill(dataSource?: OptionsType['data']['source']): Promise<unknown>;

    on(name: string, fn: () => any): void;

    dimensions(): CalHeatmap.Dimensions;

    destroy(): Promise<unknown>;

    extendDayjs(plugin: PluginFunc): dayjs.Dayjs;
  }
}

declare module 'cal-heatmap';
declare module 'cal-heatmap/plugins/Legend';
declare module 'cal-heatmap/plugins/Tooltip';
