var projectFormJson = [
  {
    name: "Game Name",
    type: "text",
    help: "",
    placeholder: "",
    value: "mygame"
  },
  {
    name: "Company Name",
    type: "text",
    help: "",
    placeholder: "",
    value: ""
  },
  {
    name: "Revision",
    type: "text",
    help: "",
    placeholder: "1.0.0",
    value: ""
  },
  {
    name: "Created At",
    type: "text",
    help: "",
    placeholder: "",
    value: ""
  }
];

var overviewFormJson = [
  {
    name: "Overall Gameplay",
    type: "text",
    help: "1 short sentences about the overall gameplay",
    placeholder: "",
    value: ""
  },
  {
    name: "Storyline",
    type: "textarea",
    help: "1-2 Paragraphs setting up the storyline or environment of the game.  Describe the first 2 minutes after the player hits the start button",
    placeholder: "",
    value: ""
  },
  {
    name: "General Gameplay",
    type: "text",
    help: "2-3 sentences that sum up the general gameplay, the general visual style and the overall feel of the game.",
    placeholder: "",
    value: ""
  }
];

var globalFormJson = {
  "project-form" : projectFormJson,
  "overview-form" : overviewFormJson
};

var globalForm = new MetaBootstrapFormGenerator(globalFormJson);

(function($){
  $('.nav-sidebar a').click(function(event){
    event.preventDefault();

    var divToShow = $(this).attr('data-id-part');
    $('.main>div').hide();
    $('.nav-sidebar>li').removeClass('active');
    $('#'+divToShow).show();
    $(this).parent().addClass('active');
  });

  $('#export-json-btn').click(function(){
    $('#export-json-text').val(globalForm.export());
  });

  $('#import-json-btn').click(function(){
    globalForm.import(JSON.parse($('#import-json-text').val()));
  });

  $('#export-markdown-btn').click(function(){
    var json = globalForm.export();
    var md = '';
    $('#export-markdown-text').val(md);
  });

})(jQuery);
