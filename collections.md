---
layout: page
title: Collections
permalink: /collections/
---
## CDs
A list of CDs I own. Very WIP. Currently added everything bought in: 2019.

{% assign cds = site.cds | sort: 'artist' %}
{% for cd in cds %}
* **{{ cd.title }}** by *{{ cd.artist }}* in {{ cd.year }}
{% endfor %}