export const isEmpty = (value) => {
  return (
    (value === undefined) ||
    (value == null) ||
    (value === '') ||
    (value === 'undefined')
    // || (value instanceof Array && value.length === 0)
  );
};
const _isWalkable = value => value !== null && typeof value !== 'undefined';
const _getChild = (parent, child) =>
  _isWalkable(parent) ? parent[child] : undefined;

export function getIn(descendants, origin) {
  return descendants.split('.').reduce(_getChild, origin);
}

export const isMobile = () => {
  return (/android|webos|iphone|ipad|ipod|blackberry|windows phone/).test(navigator.userAgent.toLowerCase()) ||
    (window.innerWidth <= 480);
};
