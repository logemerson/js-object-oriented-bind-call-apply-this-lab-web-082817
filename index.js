function justInvoke(fn) {
  return fn();
}

function setThisWithCall(fn, thisVal) {
  return fn.call(thisVal);
}

function setThisWithApply(fn, thisVal, args) {
  return fn.apply(thisVal, args);
}

function returnNewFunctionOf(fnToBeCopied, thisVal) {
  return fnToBeCopied.bind(thisVal);
}
