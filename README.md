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