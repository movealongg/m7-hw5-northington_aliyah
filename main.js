var main = document.createElement('main');

var pageBody = document.getElementsByTagName('body')[0]

var scriptTag = document.getElementsByTagName('script')[0]

pageBody.insertBefore(main,scriptTag)

var header = document.createElement('h1');

main.appendChild(header);

var list = document.createElement('ul');

main.appendChild(list);
