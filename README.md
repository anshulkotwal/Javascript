# Color Changing Algorithm

This project is a simple JavaScript-based color-changing algorithm that dynamically changes the background color of the web page based on the button clicked. The project also includes a smooth shadow effect that appears when the background color changes.

## Demo

![image](https://github.com/user-attachments/assets/72fb54ba-ec06-41ed-9cc5-e0d57a421ca5)


## Features

- **Dynamic Color Change**: Click any button, and the background color of the page will change to match the button's color.
- **Smooth Shadow Effect**: A smooth shadow effect is applied when the color changes, creating a more visually appealing transition.

## Getting Started

### Prerequisites

To run this project, you'll need:

- A modern web browser (Chrome, Firefox, Safari, etc.)

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/anshulkotwal/color-changing-algorithm.git
    ```
   
2. **Navigate to the project directory:**
    ```bash
    cd color-changing-algorithm
    ```

3. **Open the `index.html` file in your browser:**
    - Simply double-click the `index.html` file to view the project in your browser.

### Usage

- The project includes several buttons, each associated with a different color.
- Clicking on any button will change the background color of the webpage to the color corresponding to the button.
- A shadow effect will be applied during the color change, adding a smooth visual transition.

### Code Explanation

Here is the main JavaScript code used to implement the color-changing functionality:

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        body.style.backgroundColor = e.target.id;
        body.classList.add('shadow-effect');

        setTimeout(function() {
            body.classList.remove('shadow-effect');
        }, 600); 
    });
});

##License
This project is licensed under the MIT License. See the LICENSE file for more details.

##Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request if you have any improvements or bug fixes.

##Contact
For any questions or inquiries, feel free to reach out:

##GitHub: anshulkotwal
###Email: anshulkotwal12@gmail.com
