
export function getActiveRouteFromState(route) {
  const { state } = route
  if (state && Array.isArray(state.routes)) {
    return getActiveRouteFromState(state.routes[state.index])
  }
  return route.name === 'root' ? 'Home' : route.name
}