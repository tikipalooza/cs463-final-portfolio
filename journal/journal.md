## Intro - 

### Initial decisions

I used a single-page layout with anchor links in the navbar so each navigation item jumps to a matching section ID.

I chose to use CSS/HTML/JS for my project. I do use a CDN import of bootstrap and only use it for the .container class for max-width/centering. I considered using more Bootstrap components, but as the design developed, I decided to keep the layout mostly custom and only rely on Bootstrap for basic container spacing.
I still use custom CSS everywhere. .

## Technical Concepts Used

This project uses semantic HTML, custom CSS, and JavaScript to build a responsive single-page portfolio website.

Some of the main web development concepts used include:

- Semantic HTML elements such as `header`, `nav`, `main`, `section`, `article`, and `form`.
- Anchor-based navigation using section IDs for `#about`, `#experience`, `#projects`, and `#contact`.
- CSS custom properties in `:root` for theme colors, font settings, and repeated design values.
- Flexbox for navbar alignment, buttons, tag lists, and card content.
- CSS Grid for the About, Experience, Projects, and Contact section layouts.
- Media queries to collapse multi-column layouts into single-column layouts on smaller screens.
- Hover and focus states for links, buttons, form fields, and interactive cards.
- JavaScript event listeners for project filtering and contact form validation.
- `data-*` attributes to connect filter buttons with matching project cards.
- Client-side form validation using DOM updates and inline error messages.
- `aria-live` on the form status message so dynamic validation feedback is more accessible.

## Commit Log 

### Commit - 1-3 `9d94b3b` - forgot to give basic boilerplate to index
These three commits initializes the repo, the structure of the repo, and the boilerplate of the 
index.html file used for this website. 

### Commit 4 - `08a8272` - feat: Basic structure for the nav bar
The initial very basic shape of the website was built. I decided to use sections here. I kept it
very minimal for this first commit as I was still just building the bones. Had a small typo with contract vs contact typo, this was fixed in the next commit. 

### Commit 5 - `cdfdbb3` - feat: style additions
For this commit, I added the styles.css file and added custom properties in :root that I used for font, theme colors, and design values. I then went through the html file and adjusted to match what I currently had. 

I also built the very beginning of the "Hero section", which is main facing portion of the website. I kept it minimal for now and decided to add bootstrap and use .container. I added an id="experience" to experience sectiona and fixed the bug around the typo from previous commit. 

This was then the merge of `feat/navbar` branch into development. (Commit 6)

## feat/sections branch

### Commit 7 `fda0e77` — feat: updated about section - pre CSS
Added the full HTML structure for the About section: a bio text block covering my background arc (ops -> data engineering) and three `info-card` articles for Data Engineering, Software Development, and Operations Background. No styles yet — layout is unstyled at this point.

For the about section, the main challenge was figuring out how explain my background without making the section too long lol. I kept the first version mostly flat and the sent it off. I also added .gitignore with journal/ at the time. 

### Commit 8 - `1babb28` — feat: more styles added for about section
Added CSS for the About section layout: a two-column `.about-grid` (1.5fr / 1fr), `.about-text` muted prose styles, and a stacked `.about-cards` grid with `info-card` card styles.

I also added a card layout on the right side to summarize the three themes: Data Engineering, Software Engineering, and Operations Background. I felt like this section, while flat visually, was solid for now. Toughest part here was getting it how I wanted it. 

I added `.section-heading` and `.section-heading h2` styles here, which are using clamp-based sizing. And then tried some stuff with the media query to collapse the grid at 900px. I had a weird time at first with the media query, but felt happy about it. 

### Commit 9 - `9eacf76` — feat: Added Lithia Card to Experience section
Built out the Experience section with the Lithia & Driveway work card in HTML (role, description, "Current" tag) and added corresponding CSS for `.work-grid`, `.work-card`, `.featured-work`, `.work-role`, and `.work-tag`.

I wanted this section to have my current role stand out as my current and most relevant expereince. That said, still wanted to acknowledge Q Pacific and Freelance stuff I do for them and how it has contributed to my work as a developer. 

The tricky part about this section was deciding how much information belonged in the portfolio versus what should stay on just the resume. I avoided adding too much detail work projects and focused on my general responsibilities at them. I had to adjust the Lithia card a bit so that it would be the main feature while other work cards acted more as a base to it.

### Commit 10 - `d8089da` — feat: projects checkpoint
Started the Projects section with filter button HTML and initial project card structure using `data-category` attributes. Added minimal CSS scaffolding for the projects layout. This was marked a checkpoint, but ultimately was the finishing of the entire Experience section.

The additional work cards were added and the workgrid changed to a 2-column layout so that the `.featured-work` card (Lithia) could span the full width. I added hover animations here too. 

This section was actually troublesome because I don't use my my personal GitHub very much. Most of everything I have done worth mentioning is either in a work-locked repo, a now locked capstone repo, or local and just not up on GiHub because of time.
For this section I decided to go with three important projects to me, and then decided to added in some filtering in a later. 

### Commit 11 - `7335977` — feat: added CSS and projects section
Completed the Projects section with full card styles and began `main.js` with the filter button click handler — toggling `.hidden` on project cards based on `data-filter` vs `data-category`.

I used data-filter values on the buttons and data-category values on the project cards. This required double-checks on values I was adding. and wired `<script src="js/main.js" defer>` into the HTML head.

I did consider making this something the user could scroll side-to-side on. But with the lack of project to currently jump into, I might save that as a future update I use another time!

### Commit 12 - `b1cb1f0` — feat: contact window
Added the Contact section HTML: a `#contact-form` with name, email, and message inputs, each paired with an `.error-message` span for inline validation feedback.

This was a section I decided to use a simple form with name, email, and message fields, and added JavaScript validation. This section also builds the contact window, the info paragrap is touched and .contact-links with my email address and github link.

The main challenge was making the form interactive without pretending it actually sends a message. The form validates the input and displays a success message when the fields pass validation. It still displays DOM interaction though with event handling and form validation  while staying in scope.

### Commit 13 - `63e3e58` — feat: Initial styles for the contact form
Added 109 lines of CSS styling the contact form — input fields, labels, submit button, and `#form-status` message display. This section styled the entire contact section layout. It also adds a media query for 900px.

This section was more just playing with the different styles and was pretty straight forward. 

### Commit 14 - `db62d8d` — refactor: wow it's prettier^tm
The hero section was substantially touched by this commit. h1 became a clickable resume download link, and a .hero-actions, row was added with "Download Resume" button and a "View Projects" secondary link. Additional CSS styling was added for this section as well. 

Ran Prettier across all files (tabs -> 2-space indent, self-closing void tags). Also added the resume PDF to `assets/` and expanded `main.js` with full form validation logic.

The only tough part in this commit was whether I should add the resume to my name in the "hero" section. I also connected the JavaScript file with defer so it would load after the HTML was parsed. 

Prettier was basically handled by entering the command; no difficulties.

Then the merge of feat/sections (Commit 15) occurs

### Commit 16 - `b9d40e0` - refactor: updated some bugs and gave a resume with less personal info
For this commit I change navbar into site-nav to avoid conflicts with bootstrap. I also forgot 's' for some of the transition values before the word ease.
And I updated my resume to not have my home address and phone number because my stuff is available from anywhere right now lol

### Final Commit - Dev -> Main merge and then launch of GitHub Page:
>https://tikipalooza.github.io/cs463-final-portfolio/

