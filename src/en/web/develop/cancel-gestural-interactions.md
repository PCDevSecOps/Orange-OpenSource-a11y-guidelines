---
title: "Allow to cancel the triggering of gestural interactions"
---

# Allow to cancel the triggering of gestural interactions

**Target: ** Everyone, especially people with motor or visual disabilities and mobility.  
**When: ** during development.

**Description: **  
During a single-point gesture interaction, at least one condition is true:
- the down event of the pointer (MouseDown) is not used to perform part of the function
- Abort or cancel, the function is terminated on the up event (MouseUp) and a mechanism is available to abort the function before the end or to cancel the function when finished
- Ability on the up event to reverse any result of the previous down event
- Finish the function on the event is essential. Note: Functions that emulate a keyboard or numeric keypad are considered as essential.

**Reference <abbr>WCAG</abbr>&nbsp;:**  
- <a href="https://www.w3.org/TR/WCAG21/#pointer-gestures">2.5.1 Pointer Gestures</a>
- <a href="https://www.w3.org/TR/WCAG21/#pointer-cancellation">2.5.2 Pointer Cancellation</a>
- <a href="https://www.w3.org/TR/WCAG21/#motion-actuation">2.5.4 Motion Actuation</a>