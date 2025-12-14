---
layout: page
title: DCM Planner - Trajectory Generation
description: Dynamic Capture Point (DCM) Planner for generating walking patterns using Virtual Repellent Point (VRP) in Cartesian space.
img: 
importance: 4
category: research
---

The DCM (Dynamic Capture Point) Planner generates walking patterns for humanoid robots using the Virtual Repellent Point (VRP), which encodes both direction and magnitude of external forces acting on the robot.

## Overview

While DCM is a quantity in Cartesian space related to the Center of Mass (COM) position and velocity, the DCM Planner generates walking patterns using the Virtual Repellent Point (VRP). The VRP is a point in Cartesian space that encodes both direction and magnitude of the external forces acting on the robot.

## Key Concepts

**DCM (Dynamic Capture Point)**: A quantity in Cartesian space related to COM position and velocity.

**VRP (Virtual Repellent Point)**: A point in Cartesian space that encodes both direction and magnitude of external forces. The COM tends to converge to DCM while VRP repels DCM.

<!-- Add your images here -->
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/dcm_vrp.jpg" title="DCM and VRP visualization" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    DCM and VRP: COM tends to converge to DCM while VRP repels DCM.
</div>

## DCM Planner Steps

### Step 1

<!-- Add DCM Planner Step 1 image -->
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/dcm_step1.jpg" title="DCM Planner Step 1" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

### Step 2

<!-- Add DCM Planner Step 2 image -->
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/dcm_step2.jpg" title="DCM Planner Step 2" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## Walking Trajectories

The DCM Planner can generate various walking patterns:

<!-- Add walking trajectory images -->
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/forward_walking.jpg" title="Forward Walking Trajectory" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/backward_walking.jpg" title="Backward Walking Trajectory" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Forward Walking Trajectory (Top) and Backward Walking Trajectory (Bottom).
</div>

## Results

The DCM Planner successfully generates stable walking patterns for forward, backward, and sideways walking.

