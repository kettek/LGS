# Proposal
LGS is a graphical frontend and API for recording and analyzing workout progress. It is useable both online and offline.

It provides 3 optional layers of user storage. The first is an individual user account. The second is a group of accounts. The third is a collection of groups. 

A user may choose to run LGS completely offline, such as an app, in which case the user has an individual and group pairing that is invisible to the user. If a user wishes to run as part of a group, then they synchronize their changes with the group as they are made. A group can synchronize with the collective, effectively backing up all user data and group data.

## Technology Stack
The frontend and various backends all share the same language for ease of allowing offline and online application usage.

  * Typescript as primary language
  * GraphQL for schema definitions and API communication
  * PouchDB for individual->group->collective data replication (maybe -- it might be better to simply implement MongoDB, or another document-based DB, then synchronize by sending the JSON data(+hash?) upstream)

## Data Types
The following is a broad list of general data types so as to determine the best API structure to use.

  * Schedule
    * Exercise
      * Duration
      * Distance
      * Repititions
      * Sets of repititions
      * Amount
      * Somehow support for:
        * "Pyramid", wherein the Amount increase per Set until a peak, then decreases
        * "Drop set", wherein the Amount starts off large, reps are done, amount is decreases, then reps are immediately done -- almost a single set with markers for decreases that have associated amounts. Perhaps the amount of decrease should be implied(such as -5lb per subset) but also recordable?
      * Supersets, wherein multiple Sets are stored.
    * Date/Time
    * Goals (pretty much a desired X that maps to an Excersize)
      * Start & Target Date/Time
      * Duration
      * Distance
      * Repititions
      * Amount

Majority of the schedule fields should be prefilled (within HTML, using the placeholder field) with target amounts. These can be overwritten by a user when they do an instance of the Schedule's Exercise.
