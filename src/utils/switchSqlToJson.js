function switchFunc(originalText) {
  var keys = originalText.substring(
    originalText.indexOf("(") + 1,
    originalText.indexOf(")")
  );
  var tmp = originalText.substring(originalText.indexOf(")") + 1);
  var valsArr = [];
  while (tmp.indexOf("(") > -1) {
    var vals = tmp.substring(tmp.indexOf("(") + 1, tmp.indexOf(")"));
    valsArr.push(vals);
    tmp = tmp.slice(tmp.indexOf(")") + 5);
  }

  const dests = valsArr.map((i) => singleVal(keys, i));
  return dests;
}

function singleVal(keys, vals) {
  keys = keys.replaceAll("`", "");
  var ks = keys.split(",");
  var vs = vals.split(",");
  var json = {};
  var s = "{";
  for (var i = 0; i < ks.length; i++) {
    var v = vs[i].trim();
    var k = ks[i];

    if (v.indexOf("'") < 0 && v.toUpperCase() != "NULL") {
      json[k.trim()] = !Number(v) ? v : Number(v);
      s +=
        '"' + k.trim() + '":' + (!Number(v) ? '"' + v + '"' : Number(v)) + ",";
      continue;
    }
    v = v.replaceAll("'", "");
    s += '"' + k.trim() + '":"' + v + '",';
    json[k.trim()] = v;
  }
  if (s.length > 0) {
    s = s.substring(0, s.lastIndexOf(","));
  }
  s += "}";
  // var result = JSON.stringify(json, null, "  ");
  return json;
}
