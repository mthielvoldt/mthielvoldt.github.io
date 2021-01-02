---
layout: single
title: "Spreading the Word of Git"
date: 2020-12-29 21:31:27 -0800
categories: 
  - "education"
---
## You know you need version control when... 
I think we have all been here.  Maybe you do this to yourself, maybe you are solely the victim.  Either way you are facing a directory that looks like this: 

| Packet #7--Greg 11.1 (QR #4 and QR #32 UPDATED).pdf |
| Packet #7--Greg 11.1 (QR #4 AND QR #32 still need revision.pdf)|
| Packet #5 Greg Edit1.pdf |
| Packet #5 Greg Edit1_Rick Edits.pdf |
| Packet #4C Greg.pdf |
| Packet #4C Greg EDIT.pdf |
| Packet #4B.pdf |
| Packet #4.pdf |
| Packet #4 Greg Edit 1.pdf |
| Packet #1 |
| Packet #1 ADD VR and RC - with text.pdf|
| Packet #1 ADD VR and RC - with text-RWS.pdf|
| Packet #1 Final 0619.pdf
| COPY Packet #1 Final 0619 copy.pdf | 

Intelligent, conscientious, careful people will steward data into a mangled state like this.  I have done this too.  How?  Why?  What are we to do? 

## A social problem
Last week, I inherited a project that looked as above.  Beginning work, it was obvious that productivity was approaching a full roadblock without version control.  But it was also obvious that I needed to convince the rest of the team to embrace the change.  Just putting a project on GitHub would do more harm than good if the old files were still used or if the old habits persisted. 

But let's get one thing right:  git is **not** easy to learn.  It was originally built to support Linux kernel development, and there is still an assumed background knowledge in much of the literature about it.  Part of that assumption is that the user knows what challenges face a team of programmers.  If you have never tried to find a bug in a set of changes, you probably don't yet realize the virtue in grouping your changes logically, so the git's staging area (a.k.a. index) might seem quite unnecessary.  

So how do you convince a team to fully embrace a new tool and workflow paradigm with the attendant learning curve?  This is how I pulled it off last month.  

## Right time, right project
Not every business needs to use version control (VC).  If the projects have few contributors or are short-lived, the time commitment to learn a powerful tool like git is hard to justify.  It is easiest to motivate the paradigm shift, if the cost of doing nothing is obvious.  Also, git may be enormously popular, but it is not suited to every project.  The company I work for already used google drive extensively, which allows past file versions to be saved, and google docs is great for live collaboration.  So the first question I had to answer was, "what would be the tangible benefit of adding git and GitHub?"

Git offers many things, which sounds like a boon, but is actually a challenge for the proselytizer.  If you emphasize a benefit that your audience doesn't care about, you lose credibility.  I realized that branching was the new component my company desperately needed.  The file-name mangling began with preserving access to "released" versions for presentation to clients as we collaborated on editing work-in-progress versions.  To make a proper introduction that included a branching workflow, I settled on a 90-minute class with a 15-minute pre-class homework assignment to install software. 

## Choose one way to present it
I dry-ran the class on my partner prior to the actual class.  In this dry-run I taught git as I had learned it: by switching between the GitHub Desktop application and the git cli, using GitHub Desktop to contextualize what was happening in the cli.  My partner's feedback: I came across like [the scarecrow](https://www.youtube.com/watch?v=8H_3SahMLR0) in The Wizard of Oz: presenting all valid options but never a straight answer, and ultimately failing to demonstrate value.  

I completely retooled for the actual class, electing to work only the GitHub Desktop interface because it was better at advertising what it could do, and cutting all material that didn't push us through cloning, branching, making organized commits, and creating pull requests.  By presenting a single set of tools and a main-line process, I got across how things look and feel when git really works.  In the dry-run I had failed to convince my audience, in the class I would succeed. 

## Give them wins! 
But it is not enough to simply show something working, my coworkers had to operationalize this new knowledge for themselves.  After going through a code contribution together, the class divided up and produced their own changes to a sample repository.  I had prepared issues on GitHub that were easy to address for people new to coding (which much of my class was).  The issues were all focused in scope, but some were designed to produce merge conflicts.  By having everyone divide and conquer, the class got to experience the feeling of being "covered" by git and free to make changes and experiment, even in an unfamiliar language.  The reviews I got from my coworkers were exactly what I had been hoping for.  

## Into the deep end (with support)
With an introduction behind us, the new skills had to be solidified.  The company had just decided to migrate a portion of its client-facing materials to a new format, which was the perfect opportunity.  Normally, this task would have fallen to either myself or one other who were the designated, "LaTeX" people.  But with the branching workflow we had just discussed, it was now much less risky for more "junior" coders to contribute to client-facing documents.  I broke our work into issues and set up a new repository for these materials with a the directory structure and template files in-place. 

Each new contributor assigned themselves to an issue to claim it then made their own branches and did the work.  I created two new slack channels, one for edit-related questions and another for general coding and git guidance and paid close attention to these channels, answering questions and highlighting important answers or practices.  I took every little opportunity I saw to make our Q&A welcoming and helpful.  I also modeled our new workflow in writing my own hotfixes. 

It was two weeks of spending a little over half of my time just answering questions, fixing problems that others uncovered and reviewing work.  This was rewarding though, because the work quality got observably better very fast, and things wer getting done!

## Be patient, positive and transparent
There were mistakes.  Sometimes, the mistakes were mine.  At one point I faltered on following the workflow I had been emphasizing and it caused confusion.  To handle that mistake, I simply owned that this had been a mistake, explained what I had done to make it, and why it had not been the right call.  In review, this worked well to communicate that the process we were adopting was not about what I wanted, but what actually worked best.  

And the same went for when I had to correct a contributor.  If something they did was minor, but wrong, I tried to be as clear as possible why I was correcting them.  "Inconsistent casing in branch names just makes your friendly integration manager, who switches branches frequently, have to guess each time what case was used."

And to balance all that mistake-calling, when a new topic branch got merged and an issue closed, you better bet we said, "Great job!" and broke out the celebration emoji! 

## Share ownership
The final deliberate move I made in this process was to promote some of my new contributors to the integration manager role early.  This was, of course, a bit of a risk, but the documents we were creating didn't have the capacity to hide a dangerous bug.  In sharing the integration manager role with those who seemed interested, my goal was to fully de-mystify the complete process, revealing the "why" behind my guidance, recruit my coworkers to continue teaching each-other, and to quickly dissolve the dependence on me as a "key person".  

## Conclusion
Overall, I had more success with this effort than I had originally expected given the complexity of git, and the previous state of our document organization efforts.  The driving thought here was to consider carefully what the experience of learning the thing will be, and actively shape that experience towards the positive.  I will be leaning into this approach even more.