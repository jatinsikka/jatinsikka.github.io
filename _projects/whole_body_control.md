---
layout: page
title: Whole Body Control - Stand and Balance
description: Whole Body Control (WBC) formulation for humanoid balancing using optimization-based control that minimizes joint acceleration and reaction forces.
img: 
importance: 3
category: research
---

Whole Body Control (WBC) for humanoid balancing can be formulated as an optimization problem which minimizes the joint acceleration and reaction forces. This approach enables stable and dynamic balancing for humanoid robots.

## Overview

Whole Body Control is a hierarchical control framework that allows humanoid robots to perform complex tasks while maintaining balance. The optimization-based formulation ensures that the robot can adapt to disturbances and maintain stability.

## Mathematical Formulation

WBC for humanoid balancing can be represented as an optimization problem that minimizes:

- Joint acceleration
- Reaction forces

The formulation allows the robot to maintain balance while executing desired motions.

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

