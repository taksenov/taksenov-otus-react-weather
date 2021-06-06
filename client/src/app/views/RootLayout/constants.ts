interface IScreens {
  xxl: boolean | undefined;
  xl: boolean | undefined;
  lg: boolean | undefined;
  md: boolean | undefined;
  sm: boolean | undefined;
  xs: boolean | undefined;
}

interface IRules {
  ONLY_SM: boolean;
  ONLY_MD: boolean;
  ONLY_LG: boolean;
  ONLY_XL: boolean;
  GREATER_THAN_XS: boolean;
  GREATER_THAN_SM: boolean;
  GREATER_THAN_MD: boolean;
  GREATER_THAN_LG: boolean;
  GREATER_THAN_XL: boolean;
  LESS_THAN_XXL: boolean;
  LESS_THAN_XL: boolean;
  LESS_THAN_LG: boolean;
  LESS_THAN_MD: boolean;
  LESS_THAN_SM: boolean;
  XXL: boolean;
  XL: boolean;
  LG: boolean;
  MD: boolean;
  SM: boolean;
  XS: boolean;
}

/**
 * Сгенерировать правила для адаптивного дизайна
 *
 * BreakPoints
 * {
 *   xs:'480px',
 *   sm:'576px',
 *   md:'768px',
 *   lg:'992px',
 *   xl:'1200px',
 *   xxl:'1600px',
 * }
 *
 * @param {IScreens} screens
 * @returns {IRules}
 */
export const getBrkPointsRules = (screens: IScreens): IRules => {
  const {
    xxl = false,
    xl = false,
    lg = false,
    md = false,
    sm = false,
    xs = false,
  } = screens;

  return {
    ONLY_SM: !xxl && !xl && !lg && !md && sm,
    ONLY_MD: !xxl && !xl && !lg && md,
    ONLY_LG: !xxl && !xl && lg,
    ONLY_XL: !xxl && xl,
    GREATER_THAN_XS: (xxl || xl || lg || md || sm) && !xs,
    GREATER_THAN_SM: (xxl || xl || lg || md) && sm,
    GREATER_THAN_MD: (xxl || xl || lg) && md,
    GREATER_THAN_LG: (xxl || xl) && lg,
    GREATER_THAN_XL: xxl && xl,
    LESS_THAN_XXL: !xxl && (xl || lg || md || sm || xs),
    LESS_THAN_XL: !xl && (lg || md || sm || xs),
    LESS_THAN_LG: !lg && (md || sm || xs),
    LESS_THAN_MD: !md && (sm || xs),
    LESS_THAN_SM: !sm && xs,
    XXL: xxl,
    XL: xl,
    LG: lg,
    MD: md,
    SM: sm,
    XS: xs,
  };
};
