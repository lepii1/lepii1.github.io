---
layout: default
title: Students
---

<div class="studentkonter">

<h1>Students</h1>
<p>This is a list of students in the course</p>
<ol>
  {% for student in site.students %}
    <li>
        <a href="{{ student.url }}">{{ student.name }}</a> ({{ student.class }})
    </li>
  {% endfor %}
</ol>
