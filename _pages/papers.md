---
layout: single
permalink: /papers/
title: Papers
---

This is what we have been up to recently

{% assign papers = site.data.papers | where: "selected", "y" %}
{% for paper in papers %}
{% include paper.html paper=paper %}
{% endfor %}

And this is some of the good stuff we were up to prior to Probrab*ll*

{% assign prior = site.data.prior | where: "selected", "y" %}
{% for paper in prior %}
{% include paper.html paper=paper %}
{% endfor %}
