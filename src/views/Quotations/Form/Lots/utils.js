export function setForm(name, value, index, lots) {
  var newLots = lots;
  newLots[index][name] = value;
  return newLots;
}
