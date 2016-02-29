
// How to start: Say this kind of thing:
// //When the user submits the form:
//   --- get the users input.
  // add that users input to an arrau
//   ---create a new table row
//   ---add the user input to the second td of that row.
// calculate the total.
//add all the values of the array together
// - update #total's html to the total.











// =======================================
// Possible Useful jQuery Methods
//
// A few things to look for:
//
// Appending an element to another element
// .append();
// Updating the HTML for an element
// .html("the new value here")
// Reading the HTML from an element
// .html();
// listening to events
// .on("submit",callback)
//
//
// event.preventDefault()
// If this method is called, the default action of the event will not be triggered
//
// =======================================
/*You do: Identify the Problem

Spend 10 minutes using the obfuscated solution, and answer the following questions:

What elements should we create variables for?
      I SAID    //// WE SAID

  1. input        // #entry - form!
  2.             // #newEntry - text input
* they are getting the CSS Selectors from the established code - not their imaginations
  3. #total - th total <th>
  4. #entries - the table of all entries

  ===========================================

What events should we listen for?
  1. input - hit enter, then add?
  ==== ""Form Submission?" Or ENTER KEY as event listeners ======
  ** FORM SUBMISSION automatically restarts the page. ** Use reset default or whatever


What elements need to be created?
  <tr><td></td><td></td>

How is user input handled?
  1. added to the total.
  2. non mumbers give you NaN
  3. positive add
  4. expect users are good.

What do we need to keep track of?
  1. numbers entered.

What can be calculated from the things we need to keep track of?
  1. the total of all entered numbers. */
