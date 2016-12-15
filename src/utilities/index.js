export function stylePropsParser(classNames, styleObj={}) {
  var classNamesArray = classNames && classNames.split(' ');
  var styleobjArray = '';
  classNamesArray.forEach((className) => {
    if(styleObj[className]) {
      styleobjArray += " " + styleObj[className];
    }
  });
  return styleobjArray;
}
