export default function updateUniqueItems(_map) {
  if (!(_map instanceof Map)) {
    throw Error('Cannot process');
  }

  for (const [key] of _map) {
    if (_map.get(key) === 1) {
        _map.set(key, 100);
    }
  }

  return _map;
}