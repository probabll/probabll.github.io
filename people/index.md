---
layout: single
title: People
---

We are

{% for person in site.data.probabll %}
{% include person.html person=person %}
{% endfor %}

by the way, we are [looking for a postdoc](https://www.uva.nl/shared-content/uva/en/vacancies/2019/03/19-171-postdoctoral-researcher-in-neural-machine-translation.html)!

And we often collaborate with some great people

{% for person in site.data.friends %}
{% include friend.html person=person %}
{% endfor %}

