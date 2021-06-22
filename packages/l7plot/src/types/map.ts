import { Map as MapboxglMap } from 'mapbox-gl';
import { IAMapInstance, IMapboxInstance } from '@antv/l7-maps/typings';
import { IMapConfig as MapConfig, IStatusOptions, PositionName, ISourceCFG } from '@antv/l7-core';
import Source from '@antv/l7-source';
import { ColorsAttr, IStateAttribute } from './attr';
import { ILabelConfig } from './label';
import { IPopup } from './popup';
import { ITooltip } from './tooltip';
import { IZoomControlOption } from './zoom';
import { IScaleControlOption } from './scale';
import { ILegendControlOption } from './legend';
import { ILayerMenuControlOption } from './layer-menu';

export { MapboxglMap, Source };

export type AMapInstance = AMap.Map & IAMapInstance;

export type MapboxInstance = MapboxglMap & IMapboxInstance;

export type MapInstance = AMapInstance | MapboxInstance;

/**
 * 地图图表类型
 */
export enum MapType {
  Point = 'point',
  Bubble = 'bubble',
  Scatter = 'scatter',
  Symbol = 'symbol',
  Clustere = 'clustere',
  Heat = 'heat',
}

/**
 * 底图类型
 */
export enum BaseMapType {
  Amap = 'amap',
  Mapbox = 'mapbox',
}

/**
 * 地图配置
 */
export interface IMapConfig extends Omit<MapConfig, 'id'> {
  type?: 'amap' | 'mapbox';
}

/**
 * logo 配置
 */
export interface ILogo {
  position?: PositionName;
  visible?: boolean;
}

/**
 * 数据配置
 */
export interface ISource extends ISourceCFG {
  data: any;
}

/**
 * 基础 options 配置
 */
export interface IMapOptions {
  // 地图容器基本配置
  /**
   * 画布宽度
   */
  readonly width?: number;

  /**
   * 画布高度
   */
  readonly height?: number;
  /**
   * 画布是否自动适配容器大小，默认为 true
   */

  readonly autoFit?: boolean;

  // 通用数据配置
  /**
   * 地图配置
   */
  readonly map?: IMapConfig;

  /**
   * logo 配置
   */
  readonly logo?: boolean | ILogo;

  /**
   * 地图可操作状态
   */
  readonly controller?: IStatusOptions;

  /**
   * 具体的数据
   */
  readonly source: ISource;

  /**
   * 交互反馈
   */
  readonly state?: IStateAttribute;

  /**
   * 颜色色板
   */
  readonly colors?: ColorsAttr;

  /**
   * 主题，字符串或 object
   */
  readonly theme?: string | Record<string, unknown>;

  /**
   * 数据标签配置
   */
  readonly label?: false | ILabelConfig;

  // 组件相关
  /**
   * tooltip 配置项
   */
  readonly tooltip?: false | ITooltip;

  /**
   * popup 配置项
   */
  readonly popup?: false | IPopup;

  /**
   * 图例 legend 配置项
   */
  readonly legend?: false | ILegendControlOption;
  /**
   * zoom 配置
   */
  readonly zoom?: false | IZoomControlOption;
  /**
   * scale 配置
   */
  readonly scale?: false | IScaleControlOption;
  /**
   * layerMenu 配置
   */
  readonly layerMenu?: false | ILayerMenuControlOption;
}
