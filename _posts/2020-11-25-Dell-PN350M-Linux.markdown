---
layout: single
title:  "Making the Dell PN350M work in Linux"
date:   2020-11-25 12:31:27 -0800
categories: programming drivers
---
## The Problem
For years, I have been accumulating and ultimately losing countless pages of paper notes, so when I ordered a Dell 2-in-1 laptop, I was beyond ready to enter the digital age of note-taking.  I was, and still am, most excited about being able to search handwritten notes.  Every laptop manufacturer I looked at was selling 2-in-1’s, and it is 24 years since the PalmPilot 1000 debut, so I assumed the software for recognizing handwriting would be pretty functional on all platforms by now.  I would be using Linux. 

It was not quite so easy. The pen that pairs with this laptop, the Dell PN350M, does not presently play nicely with Ubuntu 18.04.  All of the graphics and note-taking apps I installed, including popular apps Gimp and Inkscape, have the same issues: the pen "marks" whenever the pen tip is within about a centimeter of the screen, and tip pressure has no effect on line weights, even in apps that expect to use this data.  I had no success adjusting input device settings in the applications.  This issue basically renders the pen useless in Ubuntu.  Having to lift the pen a centimeter off the screen to break a line makes handwriting illegible. 

For a few months, I tolerated booting to Windows just to use the pen, but as a developer who works primarily in Linux, there was only so much of this I could take.  I wanted to be able to fix and add features in the apps I used.  OneNote, launched in 2003, as of this writing in 2020, still does not have the ability to fill a shape with a color.  

So I am starting down the rabbit hole, and I will be documenting the process here.  

## The "Protocol"
I started by reading up on my hardware on the [Dell website](https://www.delltechnologies.com/resources/en-us/asset/brochures/products/electronics-accessories/Dell_Pen_Compatibility_Brochure.pdf).  I learned that this laptop and pen communicated with the “Microsoft Pen Protocol” (MPP), and does not support Wacom AES.  I did not, however, find a deeper of an understanding than just the name of the protocol, which, to hazard foreshadowed, is arguably not a real “protocol” 
To get a handle on this “Microsoft Pen Protocol” (MPP hereafter), I searched [Microsoft’s developer pages](https://docs.microsoft.com/en-us/windows-hardware/design/component-guidelines/pen-protocol-implementation) and the plot immediately thickened as I noticed that MPP only appears in consumer-facing materials, but not developer-facing materials.  I learned that Microsoft relies on the USB HID specification for communication between MS surface pens and Windows.  

USB HID (short for Human Interface Device class) is a specification, written and maintained by the USB Implementers Forum [(USB-IF)](https://www.usb.org/).  The aim is to support support myriad new input devices while removing the need for each device to have its own driver.  This benefits everyone: OS makers can dispense with the enormous library of drivers; device manufacturers can skip the driver-writing and attendant support headaches; and users can just plug a newfangled device into their computer and expect it to work. (Well, most of the time)

The HID specification defines a broad taxonomy of input devices, and the data that those devices can send to the computer.  Each level in the taxonomy is given a short hexadecimal code (usually a single byte).  These codes are the building blocks for a device descriptor, a series of these codes that, together, tell the computer what type of device is sending the data, and what the data mean.  The hardware device sends this special string of bytes along, (which never changes for a given device) to the computer [when it connects] and thereafter the OS knows exactly what data to expect from the device and how to use it. 

I was heartened that the mysterious MPP is nothing more than a defined sub-set of the USB-HID spec.  I will not have to reverse engineer anything; the specs are right there for anyone to read and learn.  I just have to figure out why the HID specification has failed in its aim for this particular hardware.  To do that, I will attempt to determine how the data appears to the OS.  (To be continued...)