# TOP-COLLEGES-BROWSER

## Overview

TOP-COLLEGES-BROWSER is a web-based project that lists the top colleges in a specified country along with their website URLs. This project is built using HTML, JavaScript, and an external API to fetch college data.
(Note: not much styling done to the webstie as its purely based on API working)

## Features

- Input field for users to specify a country.
- Displays a list of top colleges in the specified country.
- Each college entry includes the name and website URL.
- Utilizes the [Hipolabs Universities API](http://universities.hipolabs.com) for fetching college data.


## Technologies Used

- HTML
- JavaScript
- [Hipolabs Universities API](http://universities.hipolabs.com)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/aakif100/TOP-COLLEGES-BROWSER.git
    ```

2. Navigate to the project directory:

    ```bash
    cd TOP-COLLEGES-BROWSER
    ```

## Usage

1. Open the `index.html` file in your web browser.

2. Enter the name of a country in the input field.

3. Click the "Search" button to display a list of top colleges in the specified country.


- `index.html`: The main HTML file that contains the structure of the web page.
- `script.js`: The JavaScript file that contains the logic for fetching and displaying college data.
- `style.css`: The CSS file for styling the web page (minimal styling included).

## API Reference

This project uses the [Hipolabs Universities API](http://universities.hipolabs.com) to fetch data about universities. The API endpoint used is:
 
  http://universities.hipolabs.com/search?name={country_name}

## Contributing

Contributions are welcome! If you have any ideas or improvements, feel free to open an issue or submit a pull request.  


  


