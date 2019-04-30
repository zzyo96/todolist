import _ from 'lodash';
import j from 'jquery';
import foo from './foo'

function component() {
  const element = j('<div></div>');

  element.html(_.join(['Hi','webpack'], ' '))

  return element.get(0);
}

document.body.appendChild(component());
console.log(foo)
console.log(foo()) //打开浏览器控制台看看结果