Title: This is a blog post.
Date: 2222-01-01 20:00
Category: 

 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar velit lectus, et accumsan purus convallis in. Vestibulum sodales sollicitudin tortor, non fermentum risus consequat in. Quisque felis nunc, hendrerit eu venenatis at, pellentesque lobortis libero. Duis arcu erat, euismod nec eros a, pharetra sagittis magna. Etiam ut lacus non ex lacinia lobortis eget sit amet mi. Curabitur nunc augue, fringilla at varius eu, tempor eget ex. Quisque mauris mauris, ultricies vitae neque molestie, ultrices venenatis neque.

 Donec fringilla justo vestibulum nisi mollis hendrerit. Fusce sodales nibh id massa placerat, at hendrerit mauris porta. Vivamus at sollicitudin diam. Suspendisse pretium ipsum varius mauris bibendum finibus. Nunc lacus ante, maximus vitae tellus vitae, pellentesque hendrerit massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris fermentum pretium laoreet. Donec vitae justo non leo auctor posuere. Integer odio orci, rhoncus et tempor vel, tristique non libero. Aliquam varius odio diam, vel fermentum eros accumsan sagittis. Praesent tempor diam et dui vestibulum euismod. Suspendisse potenti. Aenean faucibus velit vel orci dapibus imperdiet. Praesent ultrices egestas dui ut facilisis.

 Cras aliquet vitae tellus id maximus. In eleifend nisi nec enim congue auctor. Pellentesque ullamcorper luctus neque, nec fringilla urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare pellentesque nunc, dignissim fringilla lacus fermentum a. Cras maximus euismod leo eget congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend vehicula arcu faucibus iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec nisl mauris, pellentesque id risus et, faucibus eleifend tellus. Mauris tincidunt ultrices augue, eu dapibus lorem auctor quis. Nulla consectetur augue vitae sem pretium, eu auctor neque rhoncus. Nullam dignissim, est viverra eleifend cursus, nulla lacus pretium metus, nec molestie velit dui dignissim massa. Fusce ultricies quam odio, sed maximus mi venenatis vitae. Phasellus turpis erat, semper vel ipsum sed, sodales sagittis nunc. 

## The Census Data



Integer ut sem lectus. Ut tincidunt, lectus ut dignissim mattis, ante eros tristique nulla, id ornare elit ipsum sed odio. Fusce ac ante ornare, interdum nunc mollis, malesuada nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget eros mollis, cursus arcu in, commodo nisl. Phasellus nulla quam, tempus id auctor quis, maximus id dolor. Morbi id dolor in tortor bibendum mattis.

Cras egestas aliquet erat, et molestie eros rhoncus ut. Sed vitae dignissim magna, sed convallis risus. Integer congue sem velit, pulvinar convallis sem finibus ut. Sed non ligula ac orci iaculis varius quis nec erat. Suspendisse aliquet faucibus massa in vulputate. Aenean neque nisi, blandit fringilla ex faucibus, bibendum pulvinar dolor. Nunc turpis erat, gravida at placerat at, fringilla vel massa. Suspendisse tellus ex, ultricies ac ipsum ut, viverra pellentesque est. Cras augue mi, bibendum sed enim vitae, fermentum sagittis augue. Cras efficitur semper mi ut interdum. 

```python

import json
import urllib2
import logging 

url = "http://api.censusreporter.org/1.0/table/search?q=military" 

results = json.load(urllib2.urlopen(url))
```

