export const current_week = () => {
    var currentdate = new Date();
    var oneJan = new Date(currentdate.getFullYear(),0,1);
    var numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
    var result = Math.ceil(( currentdate.getDay() + numberOfDays) / 7);

    return result;
}



export const months = [
	{
		"abbreviation": "Jan",
		"name": "January",
    "key": 1
	},
	{
		"abbreviation": "Feb",
		"name": "February",
        "key": 2
	},
	{
		"abbreviation": "Mar",
		"name": "March",
        "key": 3
	},
	{
		"abbreviation": "Apr",
		"name": "April",
        "key": 4
	},
	{
		"abbreviation": "May",
		"name": "May",
        "key": 5
	},
	{
		"abbreviation": "Jun",
		"name": "June",
        "key": 6
	},
	{
		"abbreviation": "Jul",
		"name": "July",
        "key": 7
	},
	{
		"abbreviation": "Aug",
		"name": "August",
        "key": 8
	},
	{
		"abbreviation": "Sep",
		"name": "September",
        "key": 9
        
	},
	{
		"abbreviation": "Oct",
		"name": "October",
        "key": 10
	},
	{
		"abbreviation": "Nov",
		"name": "November",
        "key": 11
	},
	{
		"abbreviation": "Dec",
		"name": "December",
        "key": 12
	}
]

Date.prototype.getWeek = function() { 

    // Create a copy of this date object  
    var target  = new Date(this.valueOf());  
  
    // ISO week date weeks start on monday, so correct the day number  
    var dayNr   = (this.getDay() + 6) % 7;  
  
    // Set the target to the thursday of this week so the  
    // target date is in the right year  
    target.setDate(target.getDate() - dayNr + 3);  
  
    // ISO 8601 states that week 1 is the week with january 4th in it  
    var jan4    = new Date(target.getFullYear(), 0, 4);  
  
    // Number of days between target date and january 4th  
    var dayDiff = (target - jan4) / 86400000;    
  
    if(new Date(target.getFullYear(), 0, 1).getDay() < 5) {
      // Calculate week number: Week 1 (january 4th) plus the    
      // number of weeks between target date and january 4th    
      return 1 + Math.ceil(dayDiff / 7);    
    }
    else {  // jan 4th is on the next week (so next week is week 1)
      return Math.ceil(dayDiff / 7); 
    }
  };

export const getDateRangeOfWeek = (weekNo) => {
    var d1 = new Date();
    var numOfdaysPastSinceLastMonday = (d1.getDay()- 1);
    d1.setDate(d1.getDate() - numOfdaysPastSinceLastMonday);
    var weekNoToday = d1.getWeek();
    var weeksInTheFuture = ( weekNo - weekNoToday );
    d1.setDate(d1.getDate() + ( 7 * weeksInTheFuture ));
    var rangeIsFrom = (d1.getMonth()+1) +"/" + d1.getDate();
    d1.setDate(d1.getDate() + 4);
    var rangeIsTo = (d1.getMonth()+1) +"/" + d1.getDate();
    return rangeIsFrom + " - " +rangeIsTo;

}