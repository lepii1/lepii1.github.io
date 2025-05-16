---
layout: default
title: Peoples
---

<div class="peoplekonter">

<h1>Peoples</h1>
<p>This is a list of peoples in the course</p>
<ol>
  {% for people in site.peoples %}
    <li>
        <a href="{{ people.url }}">{{ people.name }}</a> ({{ people.class }})
    </li>
  {% endfor %}
</ol>
