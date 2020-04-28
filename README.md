# VanillaJS Static SPA
```

```
---
## [Live Verison of SPA](https://markcmurphy.github.io/planview-SPA/index.html)
---
## 🔨 Built With 

- HTML 
- CSS / CSS Grid 
- Vanilla JavaScript

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
