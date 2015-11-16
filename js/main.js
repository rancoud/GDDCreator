var projectFormJson = [
  {
    name: "Game Name",
    type: "text",
    help: "",
    placeholder: ""
  },
  {
    name: "Company Name",
    type: "text",
    help: "",
    placeholder: ""
  },
  {
    name: "Revision",
    type: "text",
    help: "",
    placeholder: "1.0.0"
  },
  {
    name: "Created At",
    type: "text",
    help: "",
    placeholder: ""
  }
];

var projectForm = new BootstrapFormGenerator('project-form');
projectForm.generate(projectFormJson);

(function($){
  $('.nav-sidebar a').click(function(event){
    event.preventDefault();

    var divToShow = $(this).attr('data-id-part');
    $('.main>div').hide();
    $('.nav-sidebar>li').removeClass('active');
    $('#'+divToShow).show();
    $(this).parent().addClass('active');
  });

  $('#export-json').click(function(){
    alert('fuck');
    return false;
  });

  $('#export-markdown').click(function(){
    alert('uoy');
    return false;
  });

})(jQuery);
