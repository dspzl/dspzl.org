var thisYear = moment().format('YYYY');
var september = "09";
var october = "10";
//var thisMonth = moment().format('MM');

//uncomment this and add in actual dates when ready
var events = [
  { date: thisYear + '-' + september + '-' + '11', title: '11' + ' ' + 'Dorm Storming', time: '7:00-10:00', desc: 'Keep your door open to hear from every fraternity'},
  { date: thisYear + '-' + september + '-' + '12', title: '12' + ' ' + 'Informals', time: '5:00-10:00', desc: 'Come get a Tour of the House' },
  { date: thisYear + '-' + september + '-' + '13', title: '13' + ' ' + 'Informals', time: '5:00-10:00', desc: 'Come get a Tour of the House' },
  { date: thisYear + '-' + september + '-' + '14', title: '14' + ' ' + 'Campus Golf', time: '5:30-8:00', desc: 'Apartments East Cookout followed by a round of Campus Golf' },
  { date: thisYear + '-' + september + '-' + '16', title: '16' + ' ' + 'House Day', time: '5:30-9:00', desc: 'Spend the Day at our House meeting and hanging out with Brothers. Pickup at 5:15' },
  { date: thisYear + '-' + september + '-' + '18', title: '18' + ' ' + 'Monday Night Football', time: '8:30-11:00', desc: 'Lions @ Giants. Pickup at 8:15' },
  { date: thisYear + '-' + september + '-' + '20', title: '20' + ' ' + 'Homework Help', time: '6:00-9:00', desc: 'Get help with homework and eat pizza' },
  { date: thisYear + '-' + september + '-' + '22', title: '22' + ' ' + 'First Formals', time: '6:00-8:00', desc: 'Make sure to sign up by Wednesday the 20th to get a spot' },
  { date: thisYear + '-' + september + '-' + '23', title: '23' + ' ' + 'A Day in Terredise', time: '12:00-7:00', desc: 'Explore the Haute with Brothers' },
  { date: thisYear + '-' + september + '-' + '24', title: '24' + ' ' + 'First Formals', time: '6:00-8:00', desc: 'Make sure to sign up by Wednesday the 20th to get a spot' },
  { date: thisYear + '-' + september + '-' + '25', title: '25' + ' ' + 'Monday Night Football', time: '8:30-11:00', desc: 'Cowboys @ Cardinals. Pickup at 8:15' },
  { date: thisYear + '-' + september + '-' + '27', title: '27' + ' ' + 'Campus Cookout', time: '4:00-7:00', desc: 'Cookout on Speed Lawn' },
  { date: thisYear + '-' + september + '-' + '30', title: '30' + ' ' + 'Stud Night', time: '8:00-11:00', desc: ''},
  { date: thisYear + '-' + october + '-' + '2', title: '2' + ' ' + 'Monday Night Football', time: '8:30-11:00', desc: 'Redskins @ Chiefs. Pickup at 8:15' },
  { date: thisYear + '-' + october + '-' + '4', title: '4' + ' ' + 'Homework Help', time: '6:00-9:00', desc: 'Get help with homework and eat pizza' },
  { date: thisYear + '-' + october + '-' + '6', title: '6' + ' ' + 'Homecoming', time: 'All day', desc: 'Closed Rush' },
  { date: thisYear + '-' + october + '-' + '7', title: '7' + ' ' + 'Homecoming', time: 'All day', desc: 'Closed Rush' },
  { date: thisYear + '-' + october + '-' + '8', title: '8' + ' ' + 'Homecoming', time: 'All day', desc: 'Closed Rush' },
  { date: thisYear + '-' + october + '-' + '9', title: '9' + ' ' + 'Monday Night Football', time: '8:30-11:00', desc: 'Vikings @ Bears. Pickup at 8:15' },
  { date: thisYear + '-' + october + '-' + '11', title: '11' + ' ' + 'Homework Help', time: '6:00-9:00', desc: 'Get help with homework and eat pizza' },
  { date: thisYear + '-' + october + '-' + '12', title: '12' + ' ' + 'Fall Break', time: 'All day', desc: 'Closed Rush' },
  { date: thisYear + '-' + october + '-' + '13', title: '13' + ' ' + 'Fall Break', time: 'All day', desc: 'Closed Rush' },
  { date: thisYear + '-' + october + '-' + '14', title: '14' + ' ' + 'Fall Break', time: 'All day', desc: 'Closed Rush' },
  { date: thisYear + '-' + october + '-' + '15', title: '15' + ' ' + 'Fall Break', time: 'All day', desc: 'Closed Rush' },
  { date: thisYear + '-' + october + '-' + '18', title: '18' + ' ' + 'Homework Help', time: '6:00-9:00', desc: 'Get help with homework and eat pizza' },
  { date: thisYear + '-' + october + '-' + '20', title: '20' + ' ' + 'Second Formals', time: '6:00-8:00', desc: 'Make sure to sign up by Wednesday the 19th to get a spot'},
  { date: thisYear + '-' + october + '-' + '21', title: '21' + ' ' + 'Mystery Road Trip', time: 'All day', desc: 'Go on a trip with a couple brothers to a mystery location'},
  { date: thisYear + '-' + october + '-' + '22', title: '22' + ' ' + 'Second Formals', time: '6:00-8:00', desc: 'Make sure to sign up by Wednesday the 19th to get a spot'},
  { date: thisYear + '-' + october + '-' + '23', title: '23' + ' ' + 'No Contact Monday', time: 'All day', desc: 'Closed Rush'},
  { date: thisYear + '-' + october + '-' + '24', title: '24' + ' ' + 'Bid Tuesday', time: '5:00-12:00', desc: 'End of Rush, Beginning of Brotherhood'},

];

function sizeEventsCol() {
  $(".rush-cal").each(function() {
    $(this).find(".event-listing").height($(this).find(".clndr-grid").height());
  });
}

$('.rush-cal').each(function() {
  $(this).clndr({
    template: $('#rush-cal-template').html(),
    events: events,
    forceSixRows: true,
    doneRendering: sizeEventsCol
  });
});

window.onresize = function(event) {
  sizeEventsCol();
}
