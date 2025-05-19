---
layout: default
title: Peoples
---

<div class="studentkonter"> 
<h1> People </h1>
<p> This is a list of People in the course</p>

<ol>
  {% for student in site.students %}
    <li>
        <a href="{{ student.url }}">{{ student.name }}</a>
    </li>
  {% endfor %}
</ol>
  </div>