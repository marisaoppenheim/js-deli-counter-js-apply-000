function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  return 'Welcome,' + ' ' + newName + '.' + ' ' + 'You are number' + ' ' + katzDeliLine.length + ' ' + 'in line.';
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    var serve = katzDeliLine[0];
    katzDeliLine.pop();
  }
  return 'Currently serving' + '' + serve + '.';
}
