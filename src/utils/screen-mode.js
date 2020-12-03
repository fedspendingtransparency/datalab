import globals from 'src/styles/variables.scss';

export const ScreenModeEnum = Object.freeze({ 'mobile': 0, 'tablet': 1, 'desktop': 2, 'desktop_xl': 3 });

export function checkScreenMode(width) {
  if (width < parseInt(globals.md)) {
    return ScreenModeEnum.mobile;
  }
  if (width < parseInt(globals.lg)) {
    return ScreenModeEnum.tablet;
  }
  if (width < parseInt(globals.xl)) {
    return ScreenModeEnum.desktop;
  }
  return ScreenModeEnum.desktop_xl;
}

export function checkAfgScreenMode(width) {
  if (width < 660) {
    return ScreenModeEnum.mobile;
  }
  if (width < 990) {
    return ScreenModeEnum.tablet;
  }
  if (width < 1200) {
    return ScreenModeEnum.desktop;
  }
  return ScreenModeEnum.desktop_xl;
}