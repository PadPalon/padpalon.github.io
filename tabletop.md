---
layout: page
title: Tabletop
permalink: /tabletop/
---
{% include toggle.html %}

This is a work-in-progress page. Shout at me somewhere if you still see this text sometime in 2025.

I've split this into two parts, tabletop role playing games and tabletop strategy games. While they are
clearly related, they are also quite different.

{% assign parts = site.tabletop | sort: 'order' %}
<div class="toggle-enabled">
<h2>Role playing games</h2>
{% for part in parts %}
{% if part.tags contains "rpg" %}
<div class="toggle-enabled">
<h3>{{ part.title }}</h3>
{{ part.content | markdownify }}
</div>
{% endif %}
{% endfor %}
</div>

<div class="toggle-enabled">
<h2>Strategy games</h2>
{% for part in parts %}
{% if part.tags contains "strategy" %}
<div class="toggle-enabled">
<h3>{{ part.title }}</h3>
{{ part.content | markdownify }}
</div>
{% endif %}
{% endfor %}
</div>