---
layout: single
title: People
---

We are

{% for person in site.data.probabll %}
{% include person.html person=person %}
{% endfor %}

{% for person in site.data.guests %}
{% include person.html person=person %}
{% endfor %}

And we often collaborate with some great people

{% for person in site.data.friends %}
{% include friend.html person=person %}
{% endfor %}

