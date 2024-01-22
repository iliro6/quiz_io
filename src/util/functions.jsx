export function unescapeHtml(safe) {
  return safe
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&eacute;/g, "e")
    .replace(/&iacute;/g,'i')
    .replace(/&uuml;/g,'u')
}

export function shuffle(newArr) {
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

export function PrimitiveEquality (a,b){
   return JSON.stringify(a) === JSON.stringify(b);
}
