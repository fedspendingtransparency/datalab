import globals from 'src/styles/variables.scss';

export const ScreenModeEnum = Object.freeze({ 'mobile': 0, 'tablet': 1, 'desktop': 2, 'desktop_xl': 3 });

export function checkScreenMode(width) {
  if (width < parseInt(globals.md)) {
    return ScreenModeEnum.mobile;
  } else if (width < parseInt(globals.lg)) {
    return ScreenModeEnum.tablet;
  } else if (width < parseInt(globals.xl)) {
    return ScreenModeEnum.desktop;
  } else {
    return ScreenModeEnum.desktop_xl;
  }
}