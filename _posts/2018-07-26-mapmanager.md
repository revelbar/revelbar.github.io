---
layout: post
title: "First Python Package: mapManager"
categories: data_science, python
---

I finally made my own Python package after three years of using it on data analysis! It's titled mapManager and it's for image
processing specifically for geographic maps.

I've been interning in a lab affiliated with my school that deals with studying natural disaster risk management, and one of the 
projects they assigned to me was to conduct a land classification study on a city using a very high resolution satellite image of 
the area. Very juicy stuff, and it was a nice change of pace from my thesis. Over the month, I used Python to read, process, and
segment said image, and eventually I found myself having to copy-paste scripts from one file to another, so I thought, "You know
what, I might as well just learn how to make a module out of this". Now here I am with a bundle of classes and functions I can
share to the world!

The mapManager package derives its core algorithms from scikit-image and streamlines the process of raster calculation, segmentation,
mask application, and area-labelling. It calls for matplotlib.pyplot for plotting and showing images as well as scikit-image.external's
tifffile functions. I also added functions that can save the data contained in class instances for future sessions.

At the start of my project, I was encouraged by one of my supervisors to use ArcGIS for my 
analysis, so that's what I did until I had to segment the map. ArcGIS has its own native tools for segmenting, but I couldn't 
find any papers or documentation that explained the algorithms it used. I felt iffy on using tools I don't understand (especially
after my thesis adviser drilled the "no black box" rule into me), so I defaulted to Python, whose packages document where they get
their algorithms from. 

Scikit-image turned out to be the most useful in learning such algorithms. It had both region-based segmentation and edge-finding
algorithms straight out of the box. region-based segmentation cluster neighboring pixels which have similar enough color values. 
Meanwhile, edge-finding algorithms look for areas that have discontinuous gradients (aka areas where the color of the image changed 
rapidly) and mark those as edges. This technique can be used to segment images, but it was not as effective as region-based 
segmentation algorithms were on my dataset; however, it was really useful for trimming the background!

I was able to deepen my understanding of the object oriented programming process of Python. Magic functions really made my code 
more manageable and compact. These functions turned the data-retrieval process more intuitive as I could treat instances as dictionaries
if I add the magic functions iter and next. I could control the behavior of my objects more finely now! 

Another thing I learned was object serialization and pickling. Handling VHR images was really a pain. One file had more than 16 million
pixels in it! Calculations became a tedious chore of watching and waiting for my computer to finish executing, so to save time, I
looked for ways to save dictionary files easily, and I found the package pickle, which can save objects run on Python for future 
use! I didn't have to keep rerunning my jupyter notebook everytime and wait for my laptop to unfreeze.

This package I made is still in progress, so I'll be updating it for many more moons. Here's a link to it! https://github.com/revelbar/mapManager

I'm really glad I got to sharpen my programming skills over our school break. I think I'm gonna apply the same treatment on my Python
scripts for my own thesis. Stay tuned for that!
