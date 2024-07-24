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
