# Dashboard UX Tests and Results
In this document we will be conducting some tests on two respondents. They will be looking at the mockup below and they will answer some questions and give general feedback.

The mockup in question:

![image](https://user-images.githubusercontent.com/77112006/145224513-2ae1ba83-fe16-48f9-a256-100bb3ea8154.png)

# Tests

## Respondents

| Name     | Age | Gender    |
| :---        |    :----:   |          ---: |
| Mariëlle     | 49      | Female  |
| Jaicy   | 18        | Female     |

## Tasks
Both respondents were given tasks to complete, these were then timed and documented. 

### Task 1: Look at the mockup for 5 seconds, what are the first words that comes up?

Marielle:
> "Tight, gray"

Jaicy:
> ""

### Task 2: Update the price of "Watch (pink)"
Marielle:
- Completed in 30 seconds
- Would try to use the arrow keys to go 4 rows down, if that wouldn't work she would try to click on that row.
- Tried to press on the price field in the list itself, instead of the panel on the right
- Pressed update
> "Is update the right word? I would think save is better."

> "A confirmation message would be nice, otherwise I wouldn't be sure that it actually saved."

Jaicy:

### Task 3: Add Product
Marielle:
- Completed in 21 seconds
- After pressing on the plus button, expected an empty row to appear in the list, where she would be able to fill in the info.
- Then pressed update

> "What's the pencil button for?"

Jaicy:

### Task 4: Delete earring
Marielle:
- Completed in 9 seconds
- Pressed x button
- Expected an "Are you sure?" message to appear

> "Maybe a red "x" or a garbage can would be more clear for me. Since there is also a +, which looks like an x.

Jaicy:

### Task 5: Update image of ring
Marielle:
- Completed in 39 seconds
- Pressed the row of the ring product
- didn't immediately see the image field, since it's not on the list, but on the side panel.
- Wasn't clear how to change image. (Side effect of still working with image urls instead of choosing a file.)

Jaicy:

### General Feedback
Marielle:
- Input fields would be more logical on the left. No real reason other than her being accustomed to such screens being on the left.

Jaicy:


## Result
From these tests there are a couple thing we can conclude:
- The side panel gets overlooked
- The rows inside the list being selectable, which changes the side panel to that rows info, isn't clear enough
- Feedback to the user is important, i.e. when deleting, updating, adding product. So they can be sure what they did actually got registered.
- There is the expectation that something on the screen will change after pressing the "+" button to add a product, so either an empty fillable row in the list, or some other screen or message.
- Changing images isn't clear to the average user. This is more of a technical thing. But should be definitely addressed before release.
- Button should be clearer in what they do.
- The word "save" is more clear than "update" since the average user only uses "update" for updates they download for things like apps and stuff.
- The pencil button seems useless.


### Potential Solutions.
- Get rid of the side panel. Instead, use a pop up screen after pressing the edit button in the row.
- Add MUI Snackbar messages when user adds, updates and deletes products.
- Change "+" to "Add Product" button, also use a pop up screen after pressing just like the dit pop up, rather change the "Save" button with "Add".
- Changing image system should be changed, images should be able to be uploaded and hosted on the website.
- Change the "x" button with a red garbage can icon. Also add a "are you sure" pop up when pressing.







