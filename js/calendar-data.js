var thisYear = moment().format('YYYY');
var september = "09";
var october = "10";
//var thisMonth = moment().format('MM');

//uncomment this and add in actual dates when ready
var events = [
  { date: thisYear + '-' + september + '-' + '10', title: '10' + ' ' + 'Dorm Storming', time: '7:00-11:00', desc: 'Keep your door open to hear from every fraternity'},
  { date: thisYear + '-' + september + '-' + '11', title: '11' + ' ' + 'Informals', time: '5:00-10:00', desc: 'Come get a Tour of the House' },
  { date: thisYear + '-' + september + '-' + '12', title: '12' + ' ' + 'Informals', time: '5:00-10:00', desc: 'Come get a Tour of the House' },
  { date: thisYear + '-' + september + '-' + '13', title: '13' + ' ' + 'Campus Golf', time: '5:00-8:00', desc: 'Apartments East Cookout followed by a round of Campus Golf, First Formal signups open' },
  { date: thisYear + '-' + september + '-' + '15', title: '15' + ' ' + 'House Day', time: '12:00-6:00', desc: 'Spend the Day at our House meeting and hanging out with Brothers' },
  { date: thisYear + '-' + september + '-' + '17', title: '17' + ' ' + 'Monday Night Football', time: '8:00-11:00', desc: 'Seahawks @ Bears' },
  { date: thisYear + '-' + september + '-' + '19', title: '19' + ' ' + 'Last Day First Formal Signups', time: 'All day', desc: 'Make sure to sign up for first formals' },
  { date: thisYear + '-' + september + '-' + '21', title: '21' + ' ' + 'First Formals', time: '6:00-8:00', desc: 'Make sure to sign up by Wednesday the 19th to get a spot' },
  { date: thisYear + '-' + september + '-' + '22', title: '22' + ' ' + 'TerreDise Day', time: '1:00-6:00', desc: 'Explore the Haute with Brothers' },
  { date: thisYear + '-' + september + '-' + '23', title: '23' + ' ' + 'First Formals', time: '6:00-8:00', desc: 'Make sure to sign up by Wednesday the 19th to get a spot' },
  { date: thisYear + '-' + september + '-' + '24', title: '24' + ' ' + 'Monday Night Football', time: '8:00-11:00', desc: 'Steelers @ Buccaneers' },
  { date: thisYear + '-' + september + '-' + '26', title: '26' + ' ' + 'Field Day', time: '5:00-8:00', desc: 'Join us at the IM fields for a cookout and field games' },
  { date: thisYear + '-' + september + '-' + '29', title: '29' + ' ' + 'Stud Night', time: '8:00-11:00', desc: 'Come to the House for fun games and competitions'},
  { date: thisYear + '-' + october + '-' + '1', title: '1' + ' ' + 'Monday Night Football', time: '8:00-11:00', desc: 'Chiefs @ Broncos' },
  { date: thisYear + '-' + october + '-' + '2', title: '2' + ' ' + 'Second Formals Invites Open', time: 'All day', desc: 'Make sure to see if you have any Second Formals Invites' },
  { date: thisYear + '-' + october + '-' + '3', title: '3' + ' ' + 'Homework Help', time: '6:00-9:00', desc: 'Get help with homework and eat pizza' },
  { date: thisYear + '-' + october + '-' + '5', title: '5' + ' ' + 'Homecoming', time: 'All day', desc: 'Closed Rush' },
  { date: thisYear + '-' + october + '-' + '6', title: '6' + ' ' + 'Homecoming', time: 'All day', desc: 'Closed Rush' },
  { date: thisYear + '-' + october + '-' + '7', title: '7' + ' ' + 'Homecoming', time: 'All day', desc: 'Closed Rush' },
  { date: thisYear + '-' + october + '-' + '8', title: '8' + ' ' + 'Monday Night Football', time: '8:00-11:00', desc: 'Redskins @ Saints' },
  { date: thisYear + '-' + october + '-' + '10', title: '10' + ' ' + 'Homework Help', time: '6:00-9:00', desc: 'Get help with homework and eat pizza' },
  { date: thisYear + '-' + october + '-' + '11', title: '11' + ' ' + 'Fall Break', time: 'All day', desc: 'Closed Rush' },
  { date: thisYear + '-' + october + '-' + '12', title: '12' + ' ' + 'Fall Break', time: 'All day', desc: 'Closed Rush' },
  { date: thisYear + '-' + october + '-' + '13', title: '13' + ' ' + 'Fall Break', time: 'All day', desc: 'Closed Rush' },
  { date: thisYear + '-' + october + '-' + '14', title: '14' + ' ' + 'Fall Break', time: 'All day', desc: 'Closed Rush' },
  { date: thisYear + '-' + october + '-' + '15', title: '15' + ' ' + 'Monday Night Football', time: '8:00-11:00', desc: '49ers @ Packers' },
  //{ date: thisYear + '-' + october + '-' + '17', title: '17' + ' ' + 'Formal Dinner', time: '7:00-9:00', desc: 'Join us at Mogger\'s to hear from our Alumni about our Chapter'},
  { date: thisYear + '-' + october + '-' + '19', title: '19' + ' ' + 'Second Formals', time: '1:00-3:00', desc: 'Make sure to sign up by Wednesday the 19th to get a spot'},
  { date: thisYear + '-' + october + '-' + '20', title: '20' + ' ' + 'Mystery Road Trip', time: 'All day', desc: 'Go on a trip with a couple brothers to a mystery location'},
  { date: thisYear + '-' + october + '-' + '21', title: '21' + ' ' + 'Second Formals', time: '1:00-3:00', desc: 'Make sure to sign up by Wednesday the 19th to get a spot'},
  { date: thisYear + '-' + october + '-' + '22', title: '22' + ' ' + 'No Contact Monday', time: 'All day', desc: 'Closed Rush'},
  { date: thisYear + '-' + october + '-' + '23', title: '23' + ' ' + 'Bid Tuesday', time: '5:00-12:00', desc: 'End of Rush, Beginning of Brotherhood'},

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
