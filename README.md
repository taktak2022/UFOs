# UFOs

## Module 11: Creating Dynamic Content with JAVASCRIPT
For this assignment, we created a custom webpage to organize UFO sightings data into a table which we can filter using different inputs.  In doing so we gained knowlegde in utilizing HTML to create the framework for our web page, Javascript as the primary code to build the webpage and CSS to add custom attributes to make it visually dynamic.

### Tools:
* HTML
* JAVASCRIPT
* CSS
* BOOTSTRAP

### Syntax
After getting somewhat familiar with Python, part of the challenge was learning how similar or different the syntax is for Javascript compared to Python.  Although the concepts were similar, some of the notable differences were as follows:
* Variables - were mostly camel-case as opposed to snake-case as in Python
* Case-sensitive - upper and lower case words are considered "different" in Javascript
* Semi-colons - needed to end statements
* Indention and curly-brackets - this was more emphasized in Javascript that in Python and could be considered one of the more tedious attributes of this language

### Inter-connected relationship between app.py, index.html and data.js
After a very confusing Module 10 about Web-Scraping, this module actually made sense of some of the things I did not comprehend in Module 10.  In some ways I think this module should have come before it as it better prepares us with how the app.py and index.html worked and connected with each other along with the style.css file as well. I also believe the "storyboarding" section of Module 11.2.4 contributed in furthering that understanding as far as placement of HTML elements in the framework by giving us a visual representation of what we being asked to create.

When the pieces all came together, the result is a very visually appealing webpage.
![image](https://user-images.githubusercontent.com/99851509/170898975-d54ddd03-e357-481e-913f-5cbbb1a3c718.png)

### Results of webpage
The input label to search by date worked fine.  The only limitation was that the data itself was limited to signtings from only a two-week period at most from January 1, 2010 to about mid-January of 2010.  The data was also limited as it only listed, for the most part, cities in the USA with a few exceptions in Canada, but no other locations around the world.  

### Create additional filters
For the Challenge portion, we were asked to create additional input labels so we could filter via City, State, Country and Shape of the UFO.  Learning how to include, design, manipulate and plot different attributes and elements of this webpage was genuinely enjoyable - one of the highlights of this class!
![image](https://user-images.githubusercontent.com/99851509/170899921-ca135102-1606-4957-8b7a-ddf16f1b5286.png)

### Summary: drawbacks and recommendations
Let us start with the drawbacks of this webpage. Firstly, as mentioned above in "Results", the data itself is limited.  This hampered the ability to search effectively as there was not enough information to go through.  Initially, I had information in each input label as "placeholders" but this caused an issue in itself by affecting the search parameters.  The solution was to take them out.  With the limited data from only a two-week period and a few countries, the "Country" input label itself was probably not needed.  At some future point when there is more data to sort through, this will become more helpful.  Secondly, the city names had to be exact.  I attempted to search for either "San Diego", "San Mateo" or "San Francisco" by typing "San"(or "san") into the input label for "Enter a City" but no results were found.  When I attempted it again, this time with the full name of the city, I got results.  I looked through HTML documentation and Googled for an "autocomplete" operator or a "like/in" statement similar to SQL but could not find an answer.  I am hypothesizing but it may have to do with the rules already established by the brower, in this case Google, that prevented me from fine-tuning this problem.  Lastly the "Shape" input label has too many interpretations.  If you look carefully at the available data for shapes, among the more obscure descriptions were: fireball, light and flash which are not really shapes in the conventional sense.

I would recommend a drop-down menu for the "Shapes" input label to take the guesswork out of the interpretation.  This would narrow the search enough to make a resonable search query.  A drop-down menu for the "States" input label may be a helpful choice as that too is open to how you list the state: either by full name or two-letter state code, of which whether it is capitalized or lower case could make a difference.  When enough data is available, I would also recommend instead of "Date", adding two other search input labels for "Month" and "Year" which would include all reported incidents for a given period instead of a single day.
