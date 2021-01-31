---
layout: page
title: Collections
permalink: /collections/
---
## CDs
A list of CDs I own. Very WIP, there's loads of these things lying around.

I'm actually not sure if I really want to continue expanding this, since it's way easier to use an external cataloguing system.
Check out my [RateYourMusic account](https://rateyourmusic.com/~PadPalon) for that.

{% assign cds_by_year = site.cds | group_by: 'year' | sort: 'name desc' %}
{% for year in cds_by_year %}
**{{ year.name }}**
{% assign cds = year.items | sort: 'artist' %}
{% for cd in cds %}
* **{{ cd.title }}** by *{{ cd.artist }}*
{% endfor %}
{% endfor %}