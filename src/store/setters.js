export function setterSelectAnt(data) {
  let newData = data.map(function(item, index) {
    return {value: item.id, label: item.number}
  });
  return newData;
}

export function setterSelectReact(data) {
  let newData = data.map(function(item, index) {
    return {value: item.id, label: item.number}
  });
  return newData;
}
