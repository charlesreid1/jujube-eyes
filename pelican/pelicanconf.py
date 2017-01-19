#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

from util import *

import re
import os

SITEURL = ''

AUTHOR = u'charlesreid1'
SITENAME = u'Red Heifer'
SITETAGLINE = "death "*20

#SITEURL = ''
SITEURL = '/red-heifer'

PATH = 'content'

TIMEZONE = 'America/Los_Angeles'

DEFAULT_LANG = u'en'



# --------------8<---------------------
# pelican site settings

# Theme: keep it simple
THEME = 'simple-plain'

# Set output directory
OUTPUT_PATH = '../docs/'

# Directories in content/ that should be copied to static site 
STATIC_PATHS = ['images']


# These dictionaries hold names of site files and paths to site files
# to be copied to the static page.
TEMPLATE_PAGES = {}
EXTRA_TEMPLATES_PATHS = {}

## If using plugins
#HOME = os.environ.get('HOME')
#PLUGIN_PATHS = [HOME+'/codes/pelican-plugins/']



# ----------------8<-------------------------
# pelican site files

EXTRA_TEMPLATES_PATHS = ['jviz']

TEMPLATE_PAGES['visualizations.html'] = 'visualizations.html'

TEMPLATE_PAGES['visualization1.html'] = 'visualization1.html'
TEMPLATE_PAGES['visualization1.css'] = 'visualization1.css'
TEMPLATE_PAGES['visualization1.js'] = 'visualization1.js'




#TEMPLATE_PAGES['stuff.html'] = 'stuff.html'
#TEMPLATE_PAGES['stuff.html'] = 'my_app/stuff.html'







# ----------------8<-------------------------
# junk

DISPLAY_PAGES_ON_MENU = False
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None
DEFAULT_PAGINATION = False

