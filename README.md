# Dates and days

You've been given a half-finished project to work on.

It's suppose to be a simple demo that lets the user enter date/day information, but the original author didn't know any JavaScript — so they weren't able to finish it.

**This is where you come in!**

The code is in the `src/` directory.

## Rules

* Use native DOM APIs (e.g. `document.getElementById`) rather than 3rd party libraries like jQuery.
* You're free to look up any APIs on the web, you will not be penalised for doing so.
* You're free to add or change any HTML/CSS/JS.

## Tasks

1. Convert the three `<div>` tags (`days-of-the-week`, `date-picker`, `user-input`) into tabs. You should
   end up with something like this:

   ![Example](http://i.imgur.com/XdPP8QD.png)

   **Note:** Focus on functionality rather than appearance.

2. Use JavaScript to fill in the correct day, month, and year values in the "Date picker" tab.
3. When the "Run" button is pressed, the "Result" text box should be populated based on the currently selected tab:

    * Days of the week — a comma separated string of the currently checked days of the week. Use the three letter acronyms.
    * Date picker — entered date in the format `DD/MM/YYYY`
    * User input — simply equal to the user entered string.

4. When user enters a string in the User input tab and Run is pressed, it should be parsed back to the appropriate tab. For this task, you can assume that the user input is correct. For example if the user types `MON, TUE`, the days of the week tab should be selected with Monday and Tuesday check boxes selected.



# Just open index.html on your browser, used chrome to test