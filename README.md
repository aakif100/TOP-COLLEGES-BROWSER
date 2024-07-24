# TOP-COLLEGES-BROWSER

## Overview

TOP-COLLEGES-BROWSER is a web-based project that lists the top colleges in a specified country along with their website URLs. This project is built using HTML, JavaScript, and an external API to fetch college data.
<br>
<br>

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

## API Reference

This project uses the [Hipolabs Universities API](http://universities.hipolabs.com) to fetch data about universities. The API endpoint used is:
 
  http://universities.hipolabs.com/search?name={country_name}

## Contributing

Contributions are welcome! If you have any ideas or improvements, feel free to open an issue or submit a pull request.  


## Acknowledgements

- [Hipolabs Universities API](http://universities.hipolabs.com) for providing the college data.  








Commands in Terminal:
==============================
django-admin startproject introduction
cd introduction
python3 manage.py startapp introduction_app
code .
==================================
Code changes in Programs using VS Code
================================
introduction/urls.py
======================
from django.contrib import admin
from django.urls import path
from introduction_app import views
urlpatterns = [
path('admin/', admin.site.urls),
path('', views.home, name='home'),
path('about-us/', views.about_us, name='about_us'),
path('contact-us/', views.contact_us, name='contact_us'),
]
========================
introduction/settings.py
======================
# Application definition
INSTALLED_APPS = [
'django.contrib.admin',
'django.contrib.auth',
'django.contrib.contenttypes',
'django.contrib.sessions',
'django.contrib.messages',
'django.contrib.staticfiles',
'introduction_app'
]
======


introduction_app/views.py
=======================
from django.shortcuts import render
def home(request):
return render(request, 'introduction_app/home.html')
def about_us(request):
return render(request, 'introduction_app/about_us.html')
def contact_us(request):
return render(request, 'introduction_app/contact_us.html')
=======================
introduction_app/templates/introduction_app/about_us.html
================================
{% extends 'introduction_app/layout.html' %}
{% block title %}About Us - Event Website{% endblock %}
{% block content %}
<h2>About Us</h2>
<p>This is the about us page of Django Lab Class.</p>
{% endblock %}
=============================
introduction_app/templates/introduction_app/contact_us.html
===============================
{% extends 'introduction_app/layout.html' %}
{% block title %}Contact Us - Event Website{% endblock %}
{% block content %}
<h2>Contact Us</h2>
<p>This is the contact us page content.</p>
<p>Name: Dr.Sayed Abdulhayan.</p>
<p>Email: sabdulhayan.cs@pace.edu.in .</p>
<p>Mob: 9986096513.</p>
<p>Thank you .</p>
{% endblock %}
==============================
introduction_app/templates/introduction_app/home.html
===================================
{% extends 'introduction_app/layout.html' %}
{% block title %}Home - Event Website{% endblock %}





{% block content %}
<h2>Welcome to our DJANGO Website!</h2>
<p>This is the Full stack development home page content.</p>
{% endblock %}
================================
introduction_app/templates/introduction_app/layout.html
================================
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>{% block title %}Event Website{% endblock %}</title>
<style>
/* Add your CSS styles here */
/* Example: 
*/
.header {
background-color: white;
color: #f20f0f;
padding: 10px;
text-align: left;
font-size: 50;
}
.footer {
background-color: white;
color: #0fe27c;
padding: 10px;
text-align: center;
font-size: 60;
}
</style>
</head>
<body>
<div class="header">
<h1>Navigation Menu</h1>
<ul>
<li><a href="{% url 'home' %}">Home</a></li>
<li><a href="{% url 'about_us' %}">About Us</a></li>
<li><a href="{% url 'contact_us' %}">Contact Us</a></li>
</ul>
<style>
ul {
background-color: white;
color: #0fe27c;
padding: 20px;
text-align: left;
font-size: 60;
} 
</style>
</div>
<div class="content">


{% block content %}
{% endblock %}
</div>
<div class="footer">
<p>&copy; 2024 Event Website. All rights reserved. Developed by Sayed Abulhayan</p>
</div>
</body>
</html>
=================================
Commands in Terminal:
==============================
python3 -m venv venv
source venv/bin/activate
pip install Django
python3 manage.py migrate
python3 manage.py runserver
=============================





