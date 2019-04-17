---
layout: single
title: Papers
---

This is what we have been up to recently

{% for paper in site.data.papers %}
{% include paper.html paper=paper %}
{% endfor %}

And this is some the good stuff we were up to prior to Probrab*ll*

{% for paper in site.data.prior %}
{% include paper.html paper=paper %}
{% endfor %}
