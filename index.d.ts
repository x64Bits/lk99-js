declare module "lk99" {
  /**
   * Levitate your blocks
   * @constructor
   * @param {string} selector - This parameter imbues only specific elements with the power to levitate at will, the same parameter that you would pass to document.querySelector. ex. "nav > div:nth-child(2)"
   * @param {string} track - Turn your cursor into a powerful magnet that attracts things
   */
  function lk99(selector?: string, track?: string): void;

  export = lk99;
}
