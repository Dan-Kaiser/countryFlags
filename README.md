TODO:
[x]Get a textBox and match input text vs Country name
[x]Move on when the country is guessed or when skip button is pressed
[x]Use 'Enter' Key to press submit
[x]Do nice styling stuff
[x]Allow skip to be on 'Enter' button press when the answer is being displayed
[x]Update answer to include correct answer vs what was typed
[x]Save which ones you get right and wrong
[ ]Make pretty like duolingo
[ ]Train on ones that have more wrong answers than right answers AND ones that haven't been hit yet (alternate is fine)

//Fun additional things
[ ]Diff checker for text
[x]Disable the 'next' button until the answer has been submitted
[x]Disable the submit button when the answer is showing

//Structure
[]App component should handle the logic, and supply needed logical data to the 'dumb' FlagCard Component

//Bugfixes
[ ]User data is not being generated on startup
[ ]User data goes away, and it causes issues, how can we detect when this happens and create userdata using a template
[ ]make the input unchangeable when the answer has been submitted
Double loading on startup -- this is normal
You can change the input when viewing the answer

You can submit a blank answer
[ ]make the submit button unclickable when the input has nothing in it or just whitespace
