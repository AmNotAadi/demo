// Color utility functions for theme generation
export function generateColorPalette(primaryColor: string) {
  // Convert hex to RGB
  const hex = primaryColor.replace('#', '')
  const r = parseInt(hex.substr(0, 2), 16)
  const g = parseInt(hex.substr(2, 2), 16)
  const b = parseInt(hex.substr(4, 2), 16)

  // Generate lighter and darker shades
  const lighten = (color: number, factor: number) => Math.min(255, Math.round(color + (255 - color) * factor))
  const darken = (color: number, factor: number) => Math.round(color * (1 - factor))

  return {
    primary: primaryColor,
    primaryLight: `rgb(${lighten(r, 0.1)}, ${lighten(g, 0.1)}, ${lighten(b, 0.1)})`,
    primaryLighter: `rgb(${lighten(r, 0.2)}, ${lighten(g, 0.2)}, ${lighten(b, 0.2)})`,
    primaryLightest: `rgb(${lighten(r, 0.3)}, ${lighten(g, 0.3)}, ${lighten(b, 0.3)})`,
    primaryDark: `rgb(${darken(r, 0.1)}, ${darken(g, 0.1)}, ${darken(b, 0.1)})`,
    primaryDarker: `rgb(${darken(r, 0.2)}, ${darken(g, 0.2)}, ${darken(b, 0.2)})`,
    primaryDarkest: `rgb(${darken(r, 0.3)}, ${darken(g, 0.3)}, ${darken(b, 0.3)})`,
  }
}

export function getContrastColor(backgroundColor: string): string {
  const hex = backgroundColor.replace('#', '')
  const r = parseInt(hex.substr(0, 2), 16)
  const g = parseInt(hex.substr(2, 2), 16)
  const b = parseInt(hex.substr(4, 2), 16)
  
  // Calculate luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  
  return luminance > 0.5 ? '#000000' : '#ffffff'
}
