// show and hide styled inputs, update natural language statement
$('.input-container').click(function() {
  var target = $(this);
  var targetInput = $(this).find('input');
  var targetSelect = $(this).find('select');
  var styledSelect = $(this).find('.newSelect');
  target.addClass('active');
  targetInput.focus();
  targetInput.change(function() {
    var inputValue = $(this).val();
    var placeholder = target.find('.placeholder')
    target.removeClass('active');
    placeholder.html(inputValue);
  });
  targetSelect.change(function() {
    var inputValue = $(this).val();
    var placeholder = target.find('.placeholder')
    target.removeClass('active');
    placeholder.html(inputValue);
  });
  styledSelect.click(function() {
    var target = $(this);
    setTimeout(function() {
      target.parent().parent().removeClass('active');
    }, 10);
  });
});

// style selects

// Create the new select
var select = $('.fancy-select');
select.wrap('<div class="newSelect"></div>');
$('.newSelect').prepend('<div class="newOptions"></div>');

//populate the new select
select.each(function() {
  var selectOption = $(this).find('option');
  var target = $(this).parent().find('.newOptions');
  selectOption.each(function() {
    var optionContents = $(this).html();
    var optionValue = $(this).attr('value');
    target.append('<div class="newOption" data-value="' + optionValue + '">' + optionContents + '</div>')
  });
});
// new select functionality
var newSelect = $('.newSelect');
var newOption = $('.newOption');
// update based on selection 
newOption.on('mouseup', function() {
  var OptionInUse = $(this);
  var siblingOptions = $(this).parent().find('.newOption');
  var newValue = $(this).attr('data-value');
  var selectOption = $(this).parent().parent().find('select option');
  // style selected option
  siblingOptions.removeClass('selected');
  OptionInUse.addClass('selected');
  // update the actual input
  selectOption.each(function() {
    var optionValue = $(this).attr('value');
    if (newValue == optionValue) {
      $(this).prop('selected', true);
    } else {
      $(this).prop('selected', false);
    }
  })
});
newSelect.click(function() {
  var target = $(this);
  target.parent().find('select').change();
});

$('#have-havent select').on('change', function(){
  console.log($(this).val());
  if($(this).val() === "haven't"){
    $('#frequency').hide();
  }
  else {
    $('#frequency').show();
  }
});

$('#have-havent select').on('change', function(){
  console.log($(this).val());
  if($(this).val() === "haven't"){
    $('.have-exercised').hide();
  }
  else {
    $('.have-exercised').show();
  }
});

$('#frequency select').on('change', function(){
  var int = parseInt($(this).val());
  console.log(int > 1);
  console.log($(this).val());
  if(parseInt($(this).val()) > 1){
    $('#time').html('times');
  }
  else {
    $('#time').html('time');
  }
});

var naturalForn = $("#form");

$(naturalForn).on('submit', function(event){
  event.preventDefault();
  var frequency = $('#frequency select').val();
  var unit = $('#unit select').val();
  console.log(frequency,unit);
  var calculate = function() {
    if ( unit === 'week' ) {
      frequency = frequency * 90 / 7;
    }
    else {
      frequency = frequency * 3;
    }
    
    return parseInt(frequency);
  }
  if($('#have-havent select').val() === 'have'){
    alert('You have exercised '+ calculate() +' times in the last 3 months');
  }
  else {
    alert('You haven\'t exercised in the last 3 months');
  }
  
});