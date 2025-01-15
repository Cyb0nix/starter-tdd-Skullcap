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



Feature: Moving backward

Scenario: Moving backward when facing North

Given A rover with position (x=0, y=0) facing North

When rover goes backward

Then The Rover position is (x=0, y=-1) facing North


Scenario: Moving backward when facing South

Given A rover with position (x=0, y=0) facing South

When rover goes backward

Then The Rover position is (x=0, y=1) facing South


Scenario: Moving backward when facing East

Given A rover with position (x=0, y=0) facing East

When rover goes backward

Then The Rover position is (x=-1, y=0) facing East


Scenario: Moving backward when facing West

Given A rover with position (x=0, y=0) facing West

When rover goes backward

Then The Rover position is (x=1, y=0) facing West



Feature: Turning right

Scenario: Turning right when facing North

Given A rover with position (x=0, y=0) facing North

When rover turns right

Then The Rover position is (x=0, y=0) facing East


Scenario: Turning right when facing South

Given A rover with position (x=0, y=0) facing South

When rover turns right

Then The Rover position is (x=0, y=0) facing West


Scenario: Turning right when facing East

Given A rover with position (x=0, y=0) facing East

When rover turns right

Then The Rover position is (x=0, y=0) facing South


Scenario: Turning right when facing West

Given A rover with position (x=0, y=0) facing West

When rover turns right

Then The Rover position is (x=0, y=0) facing North



Feature: Turning left

Scenario: Turning left when facing North

Given A rover with position (x=0, y=0) facing North

When rover turns left

Then The Rover position is (x=0, y=0) facing West


Scenario: Turning left when facing South

Given A rover with position (x=0, y=0) facing South

When rover turns left

Then The Rover position is (x=0, y=0) facing East


Scenario: Turning left when facing East

Given A rover with position (x=0, y=0) facing East

When rover turns left

Then The Rover position is (x=0, y=0) facing North


Scenario: Turning left when facing West

Given A rover with position (x=0, y=0) facing West

When rover turns left

Then The Rover position is (x=0, y=0) facing South


Feature: Move and turn together

Scenario: Move and turn together

