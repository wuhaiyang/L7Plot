import { PointMapOptions } from '../point-map/interface';

/** 点密度图的配置类型定义 */
export interface DotDensityMapOptions extends PointMapOptions {
  /**
   * 图形形状
   */
  shape?: 'dot';
  /**
   * 图形大小
   */
  size?: number;
}