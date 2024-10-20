---
layout: page
title: Gaming
permalink: /gaming/
---
{% assign games = site.games | sort: 'order' %}
{% for game in games %}
### {{ game.title }}
{{ game.content | markdownify }}
{% endfor %}