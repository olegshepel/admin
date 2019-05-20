export function getUnigueKey() {
  let id = (Math.floor(Math.random()*90000) + 10000).toString();
  return id;
}

export function removeNode(lots, nodeId) {
  var newLots = [];
  newLots = lots.filter(function (element) {
    return element.key !== nodeId;
  });
  return newLots;
}

export function addAbove(lots) {
  let newLots = [{key: getUnigueKey(), lot: ''}];
  for (var i=0; i<lots.length; i++) {
    newLots.push(lots[i]);
  };
  return newLots;
}

export function addBelow(lots) {
  lots = lots.concat({key: getUnigueKey(), lot: ''});
  return lots;
}

export function upNode(lots, index) {
  var leftNode = lots[index-1];
  var selectedNode = lots[index];
  var newArray = [];
  for (let i=0; i<lots.length; i++) {
    newArray.push(lots[i]);
  }
  newArray[index-1] = selectedNode;
  newArray[index] = leftNode;
  return newArray;
}

export function downNode(lots, index) {
  var selectedNode = lots[index];
  var rightNode = lots[index+1];
  var newArray = [];
  for (let i=0; i<lots.length; i++) {
    newArray.push(lots[i]);
  }
  newArray[index+1] = selectedNode;
  newArray[index] = rightNode;
  return newArray;
}
