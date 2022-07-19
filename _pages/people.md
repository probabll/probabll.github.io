---
layout: single
permalink: /people/
title: People
---

We are

{% assign persons = site.data.probabll | where: "selected", "y" %}
{% for person in persons %}
{% include person.html person=person %}
{% endfor %}

Past members

{% assign guests = site.data.former | where: "selected", "y" %}
{% for person in guests %}
{% include former.html person=person %}
{% endfor %}

</br>

And we often collaborate with some great people

{% assign friends = site.data.friends | where: "selected", "y" %}
{% for person in friends %}
{% include friend.html person=person %}
{% endfor %}

