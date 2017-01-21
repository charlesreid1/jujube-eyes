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

SITEURL = ''
#SITEURL = '/red-heifer'

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

EXTRA_TEMPLATES_PATHS = [
                         'jviz',
                         'jviz/c3',
                         'jviz/cubism',
                         'jviz/rickshaw',
                         ]

TEMPLATE_PAGES['c3/visualization1.html']   = 'c3/visualization1.html'
TEMPLATE_PAGES['c3/visualization1.css']    = 'c3/visualization1.css'
TEMPLATE_PAGES['c3/visualization1.js']     = 'c3/visualization1.js'

TEMPLATE_PAGES['c3/visualization2.json']   = 'c3/visualization2.json'
TEMPLATE_PAGES['c3/visualization2.html']   = 'c3/visualization2.html'
TEMPLATE_PAGES['c3/visualization2.css']    = 'c3/visualization2.css'
TEMPLATE_PAGES['c3/visualization2.js']     = 'c3/visualization2.js'

TEMPLATE_PAGES['c3/visualization3.json']   = 'c3/visualization3.json'
TEMPLATE_PAGES['c3/visualization3.html']   = 'c3/visualization3.html'
TEMPLATE_PAGES['c3/visualization3.css']    = 'c3/visualization3.css'
TEMPLATE_PAGES['c3/visualization3.js']     = 'c3/visualization3.js'

TEMPLATE_PAGES['c3/visualization4.json']   = 'c3/visualization4.json'
TEMPLATE_PAGES['c3/visualization4.html']   = 'c3/visualization4.html'
TEMPLATE_PAGES['c3/visualization4.css']    = 'c3/visualization4.css'
TEMPLATE_PAGES['c3/visualization4.js']     = 'c3/visualization4.js'

TEMPLATE_PAGES['chartdata_all.json']   = 'chartdata_all.json'

TEMPLATE_PAGES['c3/visualization5.html']   = 'c3/visualization5.html'
TEMPLATE_PAGES['c3/visualization5.css']    = 'c3/visualization5.css'
TEMPLATE_PAGES['c3/visualization5.js']     = 'c3/visualization5.js'

TEMPLATE_PAGES['c3/visualization6.html']   = 'c3/visualization6.html'
TEMPLATE_PAGES['c3/visualization6.css']    = 'c3/visualization6.css'
TEMPLATE_PAGES['c3/visualization6.js']     = 'c3/visualization6.js'




TEMPLATE_PAGES['cubism/viz1.html']   = 'cubism/viz1.html'
TEMPLATE_PAGES['cubism/viz1.css']    = 'cubism/viz1.css'
TEMPLATE_PAGES['cubism/viz1.js']     = 'cubism/viz1.js'



TEMPLATE_PAGES['rickshaw/viz1.html']   = 'rickshaw/viz1.html'
TEMPLATE_PAGES['rickshaw/viz1.css']    = 'rickshaw/viz1.css'
TEMPLATE_PAGES['rickshaw/viz1.js']     = 'rickshaw/viz1.js'




# ----------------8<-------------------------
# junk

DISPLAY_PAGES_ON_MENU = False
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None
DEFAULT_PAGINATION = False

