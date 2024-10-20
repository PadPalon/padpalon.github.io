---
layout: page
title: Music
permalink: /music/
---
All my publicly released musical projects, ordered by when they started or were released, newest first.

I also host an instance of [Faircamp](https://simonrepp.com/faircamp/) on here, which is a free, self-hosted music publishing solution.
Check it out [here](https://music.padpalon.ch/).

{% assign music = site.music | sort: 'order' | reverse %}
{% for project in music %}
## {{ project.title }}
{{ project.content | markdownify }}
{% endfor %}