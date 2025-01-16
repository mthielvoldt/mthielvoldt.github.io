# Firment
[Live][1] / [code][2]

Accessible UIs and end-to-end test support for firmware projects.

## Guiding principles
- To build high-ROI tests, you need stable, flexible interfaces.
- GUIs beat CLIs because they advertise system capabilities.
- Building GUIs in the browser improves both user and developer experiences.

## Architecture
Firment is essentially a collection of open-source tools knit together with a git, bash, python, C, and TypeScript to deliver a firmware framework that's greater than the sum of its parts.  You define your project's messages in a .proto file, and it builds essentially all of the code that pipes that message between your firmware and a Web UI. 

Below is a list of the major underlying tech. 

### ESP32 MQTT bridge
Not all MCUs have an ability to talk to the internet.  For those, firment provides code for an ESP32-S3 that can handle the job of translating SPI frames to/from MQTT messages over Wifi. 

### Protobufs + Python plugins
Google Protocol Buffers (protobufs) is a tried-and-true way to both define structured messages, and serialize / deserialize them.  Using a tool that has many users from diverse projects means there is probably a way to handle any situation we might encounter. 

I take protobufs a little farther and write plugins both for generating some firmware in C and some UI components.  

The firmware side generates code for the edge device that calls the message handlers.  This means you take over at the point of writing the handler, not before.

The UI side generates widgets for either sending messages to, or displaying telemetry from the edge device.  You take over to locate the widget in a logical spot on the webpage. 

### React 
The choice to use a Web UI is central.  It alleviates the headaches of native GUIs. 

| Drawback                         | Answer                    |
| --------                         | ------                    |
| Need build computers for each supported OS | Build in Linux | 
| Users need to download each new version | User just refreshes page |
| Encourages assumption of USB connection | Inherently supports remote access |
| Awkward to build tests that cover UI | Great end-to-end test ecosystem |

React allows the web UI's source to be modularized, which is critical for leveraging code-generation from message definitions.  Fundamentally, any front-end framework that offers modularized components and dynamic re-rendering could be used, but React has great documentation and a large community.

### Vite
Vite is just awesomeness for making websites - you're looking at a VitePress site.  It takes the pain out of the bundling, previewing and building-for-production stuff.  Firment interfaces only need to be static sites, which means free hosting, and Vite just crushes at this without imposing a bunch of Server-side-Rendering and routing literacy.  

### CMake 
Cmake lets us cross-compile however we like, without being locked into some specific host OS / IDE / toolchain.  It also gives us some flexibility to switch processors, and build for unit-testing on the host.

### CMSIS
CMSIS is an abstraction layer for ARM-based embedded microcontrollers.  This lets us deliver firmware code that is portable to a variety of projects. For example, firment can provide libraries for doing common tasks like:
- setting or getting parameter values
- reporting the value one or more variables at a configurable frequency

## Origin
My experiences at both Gradient and Lunar taught and re-taught me certain lessons.
1. Without automated tests, progress eventually stalls.
1. Automated testing is hard to do well.
1. Your teammates need an understandable interface.
1. Maintaining that interface can be a massive pain.

### Observations about Testing

After leaving Lunar, I felt unsettled about these lessons because they didn't offer any solutions.  I had tried twice, and failed twice, to instigate an automated testing program Lunar.  I had help, and even some buy-in (more like non-interference), but the systems my colleagues and I built never seemed to deliver on the promise; the juice never felt worth the squeeze.  

Through reflection and searching for answers on the internet and in books, I came to this awesome piece of wisdom from Dave Farley of [Continuous Delivery][3]: designing tests is *actually designing interfaces*.  The corollary: tests are only as solid as the interfaces they're built atop.  At Lunar in particular, and for a variety of reasons, our interfaces were quite unstable.  The tests I wrote would all need fixing every time our interface would change.  I was making myself and others more work, not less.  So my search for answers moved upstream.  How do we build solid interfaces even at project beginnings when uncertainty is high?

This led me to look at what made an interface likely to need revision.  Here's what I noticed:

#### 1. Optimization is an enemy
If you are deciding your variable won't need more than 10 bits, your'e more likely to be wrong than deciding it won't need more than 32 bits.  If you end up needing more resolution, you're facing a protocol change if you didn't leave some headroom.  Some protocols encourage us to define tight upper limits, CAN for example. 

#### 2. We need both screws and steering columns
I came to this realization when I reflected on a CLI I had whipped up for tuning a complex control system.  Maybe this sounds familiar: you need an easy way to change parameters or call functions on the fly.  There is a procedure for defining new messages in your system, but that feels too cumbersome, so you fashion a single message for your purposes that contains something like `{command, value}` and you enumerate the things you want to access in the `command` field.  It made sense, but still felt redundant.  Was I just being lazy?  Or was I discovering a better way to pass data around our system?  Did we really need both?

Eventually I found an analogy for what had happened.  Our "legit" messages were like steering wheels.  They are purpose-built for frequent use in a structured way, and they're no good for much else.  There are relatively few of these, generally one or *maybe* two for each intended function of the system.  That's because they are expensive to create: you generally converse with other people about how they should look.

The CLI commands I built were like screws.  There are many, each only touching a small internal portion of the system.  They're cheap to make, (you just decide), but less easy to use, often being somewhat concealed and requiring a special script and maybe a few "help" calls to invoke them - analogous to a screwdriver.  

Do we really need both?  We do if we want to develop efficiently.  Consider which is good to build a test on.  The screws touch system internals, and you don't talk to anyone else about their format, so they're more likely to disappear or change as the internals get worked on or you think of a better name.  That makes them a terrible foundation for tests.  The purpose-built, agreed upon steering wheels are much more stable, and since they're expected to be used frequently, the system might be optimized to handle that input quickly, which speed up tests.  

#### 3. Code generation is appropriate
There's a great deal of code for handling data, and it all looks pretty similar.  This includes serialization / deserialization, and can go even a little farther to the de-multiplexing and generation of interface components.

#### 4. You get what you pay attention to
To design an interface that requires minimal revision as a project progresses, folks need to put in some effort.  We know what works: when a diverse group of informed people write proposals and circulate requests for comments, we get things like TCP that really hold up.  Choosing reliable lower layers also lets us focus on the application layer, improving our chances at making good decisions. 

#### 5. It requires the right culture
It takes time to develop awareness about when you're affecting other parts of the system.  This awareness is deadened if your bosses hammer the message that you're mainly accountable for making your piece work.

### Observations about User Interfaces
Testing was not the only source of wisdom about interfaces.  The firmware teams I was on also built and maintained GUIs for other teams to use in running the product.  The GUIs were native apps (Mac, Win, Lin) and they were difficult to build and maintain.  
- They weren't part of our firmware CI pipeline
  - GUI regressions often got past us into releases.
  - Adding the GUI executables to Firmware releases was laborious and labor-prone
- Manually downloading, saving and organizing GUI versions was a pain point for users.  
- When our data interface changed, about half the work was updating the GUIs.

On other projects, my team avoided GUIs; our internal customers interacted with a CLI using a standard serial terminal.  While this was much easier for the firmware team to maintain, it had downsides too.  
- We received less feedback because when something was wrong, users assumed they had made a mistake.
- Our technical colleagues depended more on firmware assistance when running the system or resolving issues. 
- The diagnostics tools we built in CLIs delivered less value. 



[1]: https://mthielvoldt.github.io/firment
[2]: https://github.com/mthielvoldt/firment
[3]: https://www.youtube.com/@ContinuousDelivery