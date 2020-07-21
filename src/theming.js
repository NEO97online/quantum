// TODO: Implement theming
function parseThemeProp(prop, breakpointIndex, theme, category) {
  let value
  if (Array.isArray(prop)) {
    if (breakpointIndex > prop.length - 1) {
      value = prop[prop.length - 1]
    } else {
      value = prop[breakpointIndex]
    }
  } else {
    value = prop
  }

  if (category && theme[category] && theme[category][value]) {
    return theme[category][value]
  } else {
    return value
  } 
}
