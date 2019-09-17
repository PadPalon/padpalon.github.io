---
layout: page
title: Music
permalink: /music/
---
## Projects
{% assign music = site.music | sort: 'order' %}
{% for project in music %}
### {{ project.title }}
{{ project.content | markdownify }}
{% endfor %}