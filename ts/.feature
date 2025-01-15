Feature: Moving forward

Scenario: Moving forward when facing North

Given A rover with position (x=0, y=0) facing North

When rover goes forward

Then The Rover position is (x=0, y=1) facing North


Scenario: Moving forward when facing South

Given A rover with position (x=0, y=0) facing South

When rover goes forward

Then The Rover position is (x=0, y=-1) facing South

Scenario: Moving forward when facing East

Given A rover with position (x=0, y=0) facing East

When rover goes forward

Then The Rover position is (x=1, y=0) facing East

Scenario: Moving forward when facing West

Given A rover with position (x=0, y=0) facing West

When rover goes forward

Then The Rover position is (x=-1, y=0) facing West