Feature: Moving forward

Scenario: Moving forward when facing North

Given A rover with position (x=0, y=0) facing North

When rover goes forward

Then The Rover position is (x=0, y=1) facing North


Feature: Moving forward

Scenario: Moving forward when facing South

Given A rover with position (x=0, y=0) facing North

When rover goes forward

Then The Rover position is (x=0, y=-1) facing North

