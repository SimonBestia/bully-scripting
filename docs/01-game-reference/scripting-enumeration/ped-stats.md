---
description: Ped status are used to determine how a ped behaves in the game. They can be used to change the way a ped acts, or to override the default behavior of a ped.
---

# Ped Stats

Ped stats are initially determined by the ped's stat type, which is set by their ped object. They can be changed for each instance of a ped. It is worth pointing out that some stats (like 8) are continually overridden by the game itself.

The descriptions for each stat come from pedstats.dat, and have only been slightly cleaned up for readability.

Related functions: [`GameGetPedStat`](/docs/game-reference/global-functions/GameGetPedStat), [`GameSetPedStat`](/docs/game-reference/global-functions/GameSetPedStat), [`PedOverrideStat`](/docs/game-reference/global-functions/PedOverrideStat).

| Stat ID | Description                                                                                                    |
| ------: | :------------------------------------------------------------------------------------------------------------- |
|       0 | Id of pickup def (c. Pickups.dat)                                                                              |
|       1 | Likelihood (n/100) of dropping an item                                                                         |
|       2 | Vision Yaw (in degrees) - note this is total yaw and not angle from facing direction (which is this value / 2) |
|       3 | Vision Range (in metres)                                                                                       |
|       4 | Max Health (n/100)                                                                                             |
|       5 | Health regeneration rate - percentage of maximum rate (n/100)                                                  |
|       6 | Fear (n/100)                                                                                                   |
|       7 | Chicken (n/100) (chance of tattling/ yelling for help)                                                         |
|       8 | Attack Frequency (n/100)                                                                                       |
|       9 | Bike Attack Frequency (n/100)                                                                                  |
|      10 | Projectile Attack Accuracy (n/100)                                                                             |
|      11 | Projectile Attack Frequency (n/100)                                                                            |
|      12 | Block Frequency (n/100)                                                                                        |
|      13 | Evade Frequency (n/100)                                                                                        |
|      14 | Aggresion (n/100) (how likely are they to initiate a fight, and how likely they are to contnue it)             |
|      15 | Criminality                                                                                                    |
|      16 | Sprint Meter                                                                                                   |
|      17 | Character Class                                                                                                |
|      18 | Preferred Combat Zone (0/1/2 = short/medium/long)                                                              |
|      19 | Preferred Orientation (Bit field: 0001 front, 0010 side, 0100 back. So front+side = 011 = 3, and 111 = 7)      |
|      20 | Animation Speed factor (100 = 100% speed)                                                                      |
|      21 | Zone Promote                                                                                                   |
|      22 | Special Meter                                                                                                  |
|      23 | Special Points                                                                                                 |
|      24 | Bike Cruise Speed                                                                                              |
|      25 | Bike Top Speed                                                                                                 |
|      26 | Bike Wait Speed                                                                                                |
|      27 | Bike Flee Distance                                                                                             |
|      28 | Bike Catchup Distance                                                                                          |
|      29 | Bike Wait Distance                                                                                             |
|      30 | Bike Projectile Usage (n/100)                                                                                  |
|      31 | Damage_Scale                                                                                                   |
|      32 | Dive probability                                                                                               |
|      33 | Tenacity (n/100), indicates how tough they are to knock down or off a bike                                     |
|      34 | Evasion (n/100)                                                                                                |
|      35 | Bike Flee Speed                                                                                                |
|      36 | Bike Follow Speed                                                                                              |
|      37 | Bike Catchup Speed                                                                                             |
|      38 | Grap1Reversal (Strikes)                                                                                        |
|      39 | Grap2Reversal (Grapples)                                                                                       |
|      40 | Night weapon                                                                                                   |
|      41 | Name of the bike model which the ped can ride ("None" if the ped can't ride any bike)                          |
|      42 | Name of the bike model which the ped can ride ("None" if the ped can't ride any bike)                          |
|      43 | Name of the bike model which the ped can ride ("None" if the ped can't ride any bike)                          |
|      44 | Likelihood (n/100) of having a weapon                                                                          |
|      45 | Weapon slot 1: Type of melee/projectile                                                                        |
|      46 | Weapon slot 1: Amount of Ammo                                                                                  |
|      47 | Weapon slot 1: Selection weight for melee/projectile weapon - HIGHEST NUMBER WINS                              |
|      48 | Weapon slot 1: Available after mission (use "init" to signify start of game)                                   |
|      49 | Weapon slot 2: Type of melee/projectile                                                                        |
|      50 | Weapon slot 2: Amount of Ammo                                                                                  |
|      51 | Weapon slot 2: Selection weight for melee/projectile weapon                                                    |
|      52 | Weapon slot 2: Available after mission (use "init" to signify start of game)                                   |
|      53 | Weapon slot 3: Type of melee/projectile                                                                        |
|      54 | Weapon slot 3: Amount of Ammo                                                                                  |
|      55 | Weapon slot 3: Selection weight for melee/projectile weapon                                                    |
|      56 | Weapon slot 3: Available after mission (use "init" to signify start of game)                                   |
|      57 | Weapon slot 4: Type of melee/projectile                                                                        |
|      58 | Weapon slot 4: Amount of Ammo                                                                                  |
|      59 | Weapon slot 4: Selection weight for melee/projectile weapon                                                    |
|      60 | Weapon slot 4: Available after mission (use "init" to signify start of game)                                   |
|      61 | Stun Resistance (n/100) how resistant a ped is to stunning                                                     |
|      62 | Ped can be knocked down (0 = no, 1+ = yes)                                                                     |
|      63 | Percent health at which the ped can be humiliated in combat                                                    |
