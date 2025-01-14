---
title: How I Build Momentum
---

# {{$frontmatter.title}}

## Make Firmware Accessible
Firmware is intrinsically more of a black box than many other technologies.  People often feel locked out, afraid to break things, and unsure of how to engage.  Here's how I make things clear.

- I provide GUIs that clue the available commands and make data visible.
- I deliver Draw.io diagrams to convey architecture.
- I adjust explanations to different backgrounds and learning preferences.
- I co-pilot alongside you for hand-offs.  You should feel in-control.

## Maintain Functionality with Tests
Without tests, there's a ceiling on the size and complexity a project can reach, and it's no fun to approach that ceiling.  On the other hand, automated tests take effort to write and maintain.  What's important is using techniques appropriate for the situation.

### End to End
End-to-End tests support product use-cases, including engineering and manufacture use cases.  My favorite solution is to deliver the GUI mentioned above **as a web page**, and write tests in [Playwright][1].  Testing this way covers the UI, so we can release a full solution with confidence. 

### Integration tests
I recommend forgoing this level of testing until after the architecture is relatively settled.  It's difficult to get good return-on-investment from integration tests before that.  One exception is: if simulation is planned for the project, some simulation platforms can support integration tests.  Such a setup could partially validate changes to feedback control code without risking hardware.

### Unit tests
Unit tests are great for proving a code unit does the right things.  I think there's a little too much emphasis on these in some circles, but they certainly give a great ROI for corner cases.  I like [Unity][2] for embedded projects.

## Hardware-friendly approach
Simulation can be a powerful accelerant for progress, but ideas actually get proven and come to life on hardware.  I've also experienced how precious working units of hardware can be.  I have come to understand this duality as meaning: go, but go carefully.  Power systems (motor controllers, inverters, etc.) are the easiest to accidentally damage in my experience.  When I'm testing hardware of that kind, I challenged myself not to damage it for the same reason twice.

To succeed in this, I prioritize creating and validating hardware protection code before starting other testing.  Of course, sometimes a failure gets past my safeguards, so in tandem with writing protections, I also consider a data-capture strategy so if or when a new failure mode crops up, I learn enough about it the first time to improve protections and catch that failure the next time.  

## Phases of a typical project
1. Clarify requirements, intended uses, and pseudo-code end-to-end tests.
1. Identify technical risk areas, and strategize de-risking each. 
1. Set up for development (accounts, toolchain, CI)
1. Build and get feedback on user/data interfaces.
1. Create needed simulations.
1. Prepare for hardware testing (protections / data capture). 
1. Write code, testing on hardware and getting feedback on features frequently. 
1. Pass acceptance tests.
1. Wrap up with a few iterations on the documentation and codebase hand-offs. 

[1]: https://playwright.dev
[2]: https://www.throwtheswitch.org/unity