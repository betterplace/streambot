export function decodeHtmlEntities(inp){
  var replacements = {'&lt;':'<','&gt;':'>','&sol;':'/','&quot;':'"','&apos;':'\'','&amp;':'&','&laquo;':'«','&raquo;':'»','&nbsp;':' ','&copy;':'©','&reg;':'®','&deg;':'°'
                     };
  for(var r in replacements){
    inp = inp.replace(new RegExp(r,'g'),replacements[r]);
  }
  return inp.replace(/&#(\d+);/g, function(match, dec) {
    return String.fromCharCode(dec);
  });
}
