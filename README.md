# Planview Static SPA
```
coding assessment
```
---
## [Live Verison of SPA](https://markcmurphy.github.io/planview-SPA/index.html)
---
## 🔨 Built With 

- HTML 
- CSS / CSS Grid 
- Vanilla JavaScript

**Why vanilla JavaScript?**

Everything else felt like overkill for a static SPA. Even jQuery seemed like it would add unnecessary bloat. I considered using GatsbyJS since I have been wanting to experiment with it, but vanilla JS sounded like a fun challenge. 

**So no libraries or frameworks at all?**

Nope. I likely would have used Bootstrap to save time, but it was mentioned the team doesn't use it. I initially made the UI with Skeleton but then went back and spent time learning CSS Grid and recreating it with that. 

**Is it mobile responsive?**

Yup! Though more time could be spent on refining it, the main navbar breaks into a hamburger with pop-out side-menu. If I had more time, I would likely make the track titles menu collapsable since it takes up a good bit of screen realestate. There is one breakpoint that favors vertical screens, so no dedicated tablet view is in place.  

---

**Issues I Ran Into**

I ran into an issue with CORS when trying to fetch sessions.json from the AWS server. 

<img src="https://i.imgur.com/Yuq3qA7.png">

I added no-cors to the request, but it then came back as opaque:

<img src="https://i.imgur.com/0c3mwSz.png">

I ultimately worked around it by downloading the JSON file locally and fetching from there. 

---

# Thanks! 
