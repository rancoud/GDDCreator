(function() {
  function MarkdownGenerator(options) {
    this.options = options || {};
  }

  MarkdownGenerator.prototype.title = function (string, level, anchor) {
    var level = level >> 0 || 1;
    var str = '';

    for(var i = 0; i < level; i++) {
      str = str + '#';
    }

    if(anchor !== undefined) {
      str = '<a name="' + anchor + '"></a>\n' + str;
    }

    return str + ' ' + string + '\n';
  };

  MarkdownGenerator.prototype.line = function (string) {
    return string + '  \n';
  };

  MarkdownGenerator.prototype.text = function (string) {
    return string + '  \n\n';
  };

  MarkdownGenerator.prototype.link = function (string, link) {
    return '[' + string + '](' + link + ')';
  };

  MarkdownGenerator.prototype.list = function (string) {
    return '* ' + string + '  \n';
  };

  MarkdownGenerator.prototype.listOrder = function (string, level, num) {
    var level = level >> 0 || 1;
    var num = num || '1. ';
    var str = '';

    for(var i = 1; i < level; i++) {
      str = str + '  ';
    }

    return str + num + string + '  \n';
  };

  window.MarkdownGenerator = MarkdownGenerator;
})();
