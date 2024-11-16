---
layout: page
title: Gaming
permalink: /gaming/
---
{% include toggle.html %}

{% assign games = site.games | sort: 'order' %}
{% for game in games %}
<div class="toggle-enabled">
<h3>{{ game.title }}</h3>
{{ game.content | markdownify }}
</div>
{% endfor %}