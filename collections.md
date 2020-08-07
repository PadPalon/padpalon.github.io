---
layout: page
title: Collections
permalink: /collections/
---
## CDs
A list of CDs I own. Very WIP, there's loads of these things lying around.

{% assign cds_by_year = site.cds | group_by: 'year' | sort: 'name desc' %}
{% for year in cds_by_year %}
**{{ year.name }}**
{% assign cds = year.items | sort: 'artist' %}
{% for cd in cds %}
* **{{ cd.title }}** by *{{ cd.artist }}*
{% endfor %}
{% endfor %}