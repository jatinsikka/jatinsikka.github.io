---
layout: page
title: Whole Body Control - Stand and Balance
description: Whole Body Control (WBC) formulation for humanoid balancing using optimization-based control that minimizes joint acceleration and reaction forces.
img: 
importance: 3
category: research
---

Atlas Whole-Body Control project implementing a QP-based whole-body controller integrated with a DCM walking planner to generate stable locomotion trajectories for the Atlas humanoid.

## Overview

I implemented a Quadratic Programming (QP)-based whole-body controller and integrated a Dynamic Capture Point (DCM) walking planner to generate stable locomotion trajectories for the Atlas humanoid robot. This approach enables stable and dynamic balancing while allowing the robot to perform complex tasks.

## Technical Details

- **Controller Type**: QP-based Whole-Body Control
- **Planner**: DCM (Dynamic Capture Point) Walking Planner
- **Robot Platform**: Atlas Humanoid
- **Capabilities**: Stable locomotion trajectory generation and whole-body control

<!-- Add your images here -->
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/wbc_balancing.jpg" title="Humanoid balancing with WBC" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Humanoid balancing with Whole Body Control.
</div>

## Implementation

The WBC controller computes optimal joint accelerations and contact forces to maintain balance while following desired trajectories.

## Results

<!-- Add your results, videos, or additional content here -->

