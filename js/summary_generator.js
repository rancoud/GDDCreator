(function() {

  // helpers
  function createEl(params) {
		var el = null,
			attribute = undefined,
			elText;

		if (typeof params === 'string') {
			return document.createElement(params);
		}

		if (typeof params === 'object') {
			el = document.createElement(params.type);
			if (params.id !== undefined) {
				el.id = params.id;
			}
			if (params['class'] !== undefined) {
				el.className = params['class'];
			}
			if (params.width !== undefined) {
				el.width = params.width;
			}
			if (params.height !== undefined) {
				el.height = params.height;
			}
			if (params.attr !== undefined) {
				for (attribute in params.attr) {
					if (params.attr.hasOwnProperty(attribute)) {
						el.setAttribute(attribute, params.attr[attribute]);
					}
				}
			}
			if (params.textNode !== undefined) {
				if (params.textNode === null || params.textNode === undefined) {
					elText = document.createTextNode('');
				}
				else {
					elText = document.createTextNode(params.textNode);
				}
				el.appendChild(elText);
			}
			return el;
		}
	}

  function generateId(name) {
    name = name.toLowerCase();
    name = name.split(' ').join('_');
    name = name.split('&').join('and');
    return 'part_' + name
  }

  function getElementByType(type) {
    if(type === "textarea") {
      return "textarea";
    }

    return "input";
  }

  // constructor
  function SummaryGenerator(idSidebar, idMain) {
    this.listIds = [];

    this.anchorSidebar = document.getElementById(idSidebar);
    if(this.anchorSidebar === null) {
      throw "Id '" + idSidebar + "' not found in dom document!";
    }

    this.anchorMain = document.getElementById(idMain);
    if(this.anchorMain === null) {
      throw "Id '" + idMain + "' not found in dom document!";
    }
  }

  SummaryGenerator.prototype.generate = function (summary) {
    for (var i = 0; i < summary.length; i++) {
      this.transform(summary[i]);
    }
  };

  SummaryGenerator.prototype.transform = function (obj) {
    var elemSidebar = this.toSidebar(obj, 0);
    this.anchorSidebar.insertBefore(elemSidebar, document.getElementById('sidebar-export'));

    this.toMain(obj);
  };

  SummaryGenerator.prototype.checkUnikId = function (id) {
    for (var i = 0, max = this.listIds.length; i < max; i++) {
      if(this.listIds[i] == id) {
        throw "Id '" + id + "' already exist";
      }
    }

    this.listIds.push(id);
  };

  SummaryGenerator.prototype.toSidebar = function (obj, level) {
    var elemSidebar = createEl({type:'li'});
    if(obj.active !== undefined && obj.active === true) {
      elemSidebar.setAttribute('class', 'active');
    }
    var id = generateId(obj.title);
    this.checkUnikId(id);

    var elemSidebarLink = createEl({type:'a', textNode: obj.title, attr:{href:'#', "data-id-part":id}});

    elemSidebar.appendChild(elemSidebarLink);

    if(obj.childs !== undefined && obj.childs.length > 0) {
      level++;
      var childs = createEl({type:'ul', class:'nav subpart sub'+level});
      for (var i = 0, max = obj.childs.length; i < max; i++) {
        var _elem = this.toSidebar(obj.childs[i], level);
        childs.appendChild(_elem);
      }
      elemSidebar.appendChild(childs);
    }

    return elemSidebar;
  };

  SummaryGenerator.prototype.toMain = function (obj) {
    var elemMain = createEl({type:'div', id:generateId(obj.title)});
    var h1 = createEl({type:'h1', textNode: obj.title});
    var divForm = createEl({type:'div', id: obj.form});

    elemMain.appendChild(h1);
    elemMain.appendChild(divForm);

    this.anchorMain.insertBefore(elemMain, document.getElementById('export'));

    if(obj.childs !== undefined && obj.childs.length > 0) {
      for (var i = 0, max = obj.childs.length; i < max; i++) {
        this.toMain(obj.childs[i]);
      }
    }
  };

  window.SummaryGenerator = SummaryGenerator;
})();
