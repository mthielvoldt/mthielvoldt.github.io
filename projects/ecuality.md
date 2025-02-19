# ECUality ![Arduino van hotrod](/images/ecuality192.svg)
[Hackaday Page][1] / [Code][2]

An Electronic Fuel Injection (EFI) system open-source and from scratch for a 1984 Volkswagen van. 

## Origin Story
In high school, my dad and I installed a fuel-injected engine in my mom's 1973 El Camino, which originally had carbureted engine.  It was my first real encounter with embedded systems, and it went pretty poorly.  My dad and I had no hands-on experience in this domain, and only the documentation provided by small business we had bought a wiring harness from.  We painstakingly navigated fixing wiring errors and proving that the vehicle anti-theft system was still preventing the engine from running, despite the hacking service we had bought.

When we finally got the engine to run, we were both exhausted.  The engine wasn't getting the improved mileage we had been expecting, but the car was finally drivable again.  Something was preventing the ECU from entering closed-loop with O2 sensor feedback and we never figured out the issue - we had depleted our energy for the project, and accepted sub-optimal performance.

Since that project, I had been dreaming about re-building an ECU myself so that I would have unfettered control of the whole system.  I was filing away knowledge that would help in that aim.  

15 years later, my VW van failed an emissions inspection for what I decided would be the last time.  I had been muddling through the biennial emissions checks with a mix of blindly replacing components, random tweaks, fuel treatments and arcane rituals.  I decided it was time to put my ideas to the test and build an EFI system myself.  

I wanted to pave the way for others like me, so I decided to base my system off an Arduino because that would make it more approachable, reducing setup cost and complexity. 

About 6 weeks after beginning the project, I drove around the block with my system.  A week later, I re-took and passed the emissions check. 

[1]: https://hackaday.io/project/4622-ecuality1
[2]: https://github.com/ECUality/ECUality