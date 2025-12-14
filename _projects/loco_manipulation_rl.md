---
layout: page
title: Loco-manipulation using RL and Pretrained AMO Controller in MuJoCo
description: Combining reinforcement learning with a pretrained AMO (Any Motion) controller for loco-manipulation tasks in MuJoCo physics simulator.
img: 
importance: 2
category: research
---

This project explores long-horizon loco-manipulation for humanoids by building a hybrid control framework that integrates locomotion controllers with RL-based manipulation policies.

## Overview

I am building a hybrid loco-manipulation control framework by integrating a locomotion controller with RL-based PPO-trained manipulation policies, enabling long-horizon factory tasks in MuJoCo with reward design. Additionally, I am training lightweight LLMs for SOP-driven high-level retrieval and planning to generate multi-step task plans and sequence MuJoCo skills with pre/post-condition checks.

## Technical Approach

- **Simulation Environment**: MuJoCo
- **Base Controller**: Locomotion controller integrated with RL policies
- **Learning Method**: Proximal Policy Optimization (PPO)
- **Task**: Long-horizon loco-manipulation for humanoids
- **Additional Components**: Lightweight LLMs for high-level planning and task sequencing

<!-- Add your images here -->
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/loco_manip_1.jpg" title="Loco-manipulation setup" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Robot performing loco-manipulation task in MuJoCo.
</div>

## Results

<!-- Add your results, videos, or additional content here -->

