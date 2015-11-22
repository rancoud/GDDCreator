/**
JSON example for generate
var form = [
  {
    label: "Game Name",
    type: "text",
    help: "",
    placeholder: ""
  }
];
*/
(function(){

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
    return name
  }

  function getElementByType(type) {
    if(type === "textarea") {
      return "textarea";
    }

    return "input";
  }

  // constructor
  function BootstrapFormGenerator(id) {
    this.anchor = document.getElementById(id);
    if(this.anchor === null) {
      throw "Id '" + id + "' not found in dom document!";
    }
  }

  BootstrapFormGenerator.prototype.generate = function (json) {
    this.json = json;
    var tempRender = [];
    for (var i = 0, max = json.length; i < max; i++) {
      tempRender.push(this.transform(json[i]));
    }

    for (var i = 0, max = tempRender.length; i < max; i++) {
      this.anchor.appendChild(tempRender[i]);
    }
  };

  BootstrapFormGenerator.prototype.transform = function (obj) {
    var element = getElementByType(obj.type);
    var id = generateId(obj.name);
    var root = createEl({type:'div', class:"form-group"});
    var label = createEl({type:'label', class:"form-group", textNode: obj.name, attr:{for:id}});
    if(element === "textarea") {
      var input = createEl({type:element, id:id, class:"form-control", textNode: obj.value, attr:{placeholder: obj.placeholder, type:obj.type}});
    }
    else {
      var input = createEl({type:element, id:id, class:"form-control", attr:{placeholder: obj.placeholder, type:obj.type, value: obj.value}});
    }
    var help = createEl({type:'span', class:'help-block', textNode: obj.help});

    root.appendChild(label);
    root.appendChild(input);
    root.appendChild(help);

    return root;
  };

  BootstrapFormGenerator.prototype.export = function (exportInJson) {
    var json = this.json;

    for (var i = 0, max = json.length; i < max; i++) {
      json[i].value = document.getElementById(generateId(json[i].name)).value;
    }

    if(exportInJson !== undefined && exportInJson === true) {
      return JSON.stringify(json);
    }

    return json;
  };

  BootstrapFormGenerator.prototype.import = function (json) {
    this.anchor.innerHTML = "";
    this.generate(json);
  };

  window.BootstrapFormGenerator = BootstrapFormGenerator;

  function MetaBootstrapFormGenerator(json) {
    this.refsBootstrapFormGenerator = {};

    for (var id in json) {
      if (json.hasOwnProperty(id)) {
        var bfg = new BootstrapFormGenerator(id);
        bfg.generate(json[id]);
        this.refsBootstrapFormGenerator[id] = bfg;
      }
    }

    return this;
  };

  MetaBootstrapFormGenerator.prototype.export = function (metaExportInJson) {
    var jsonString = '';
    var jsonArray = [];
    var exportInJson = false;

    if(metaExportInJson !== undefined && metaExportInJson === true) {
      exportInJson = true;
    }

    for (var id in this.refsBootstrapFormGenerator) {
      if (this.refsBootstrapFormGenerator.hasOwnProperty(id)) {
        if(exportInJson === true) {
          jsonString+= '"' + id + '" : ' + this.refsBootstrapFormGenerator[id].export(true) + ',';
        }
        else {
          jsonArray.push({[id] : this.refsBootstrapFormGenerator[id].export()});
        }
      }
    }

    if(exportInJson === true) {
      if(jsonString.charAt(jsonString.length-1) === ',') {
        jsonString = jsonString.substr(0, jsonString.length-1);
      }
      jsonString = '{' + jsonString + '}';

      return jsonString;
    }

    return jsonArray;
  };

  MetaBootstrapFormGenerator.prototype.import = function (json) {
    for (var id in this.refsBootstrapFormGenerator) {
      if (this.refsBootstrapFormGenerator.hasOwnProperty(id)) {
        this.refsBootstrapFormGenerator[id].import(json[id]);
      }
    }
  };

  window.MetaBootstrapFormGenerator = MetaBootstrapFormGenerator;

})();
