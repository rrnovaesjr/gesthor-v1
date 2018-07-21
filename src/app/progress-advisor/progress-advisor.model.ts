export interface ProgressAdvisorConfig {

  /**
   * If progress bar must be displayed or not.
   */
  show: boolean;

  /**
   * The progress bar's mode. Can assume:
   * 
   * - `'indeterminate'`: infinite flow;
   * 
   * - `'query'`: infinite reverse flow;
   * 
   * - `'buffer'`: UDP/server loading;
   * 
   * - `'determinate'`: determinate/normal percentage value.
   */
  mode?: string;

  /**
   * The value of the progress bar.
  */
  value?: number;

  /**
   * The buffer value of the progress bar.
   */
  bufferValue?: number;
}