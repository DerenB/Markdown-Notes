# 522 Networking

- Fall 2022
- Elsa Poh

# Table of Contents

- [522 Networking](#522-networking)
- [Table of Contents](#table-of-contents)
- [10/19 Class Notes](#1019-class-notes)

# 10/19 Class Notes

- Binary Exponential Backoff
  - If a station's frame collides, the random amount of time it will wait to try again is given by:
    - After *n* collisions, wait anywhere from 0 to $2^{n}-1$ slots if $n \le 10$
      - 1st collision: wait 0 or 1 slots
      - 2nd collision: wait 0, 1, 2, or 3 slots
      - 3rd collision: wait 0, 1, 2, 3, 4, 5, 6, or 7 slots
    - If $n \ge 10$, wait between 0 and $2^{10}$ slots
- **Example:**
  - Suppose two devices using CSMA/CD and the binary exponential backoff algorithm have just sent transmissions that have each experienced collision **twice**. What is the probability that both devices will transmit successfully during the next two time slots?
  - Binary Exponential Backoff:
  - Given:
    - 2 devices
    - 2 collisions each 
    - (collisions are associated per frame, not per device)
  - Find:
    - Probability (success in slots 0, 1)
  - Solve:
    - Pr = Probability
    - = Pr(device1 chooses 0) * Pr(device2 chooses 1) + Pr(device1 chooses 1) * Pr(device2 chooses 0)
    - = 0.25(0.25) + 0.25(0.25)
    - = 0.125
  - Pr(no collision in next slot(0)):
    - = Pr(neither chooses 0 ) + Pr(exactly 1 device chooses 0)
    - = [Pr(dev1 chooses 1 or 2 or 3) * Pr(dev2 chooses 1 or 2 or 3)] + [Pr(dev1 chooses 0) * Pr(dev2 chooses 1,2 or 3)] + [Pr(dev2 chooses 0) * Pr(dev1 chooses 1, 2, or 3)]
    - = 0.75(0.75) + 0.25(0.75) + 0.25(0.75)
    - = 0.9375
  - Pr(collision in next slot):
    - = Pr(both choose 0)
    - = 0.25 * 0.25
    - = 0.0625
- **Example:**
  - Let A and B be two stations attempting to transmit on a CSMA/CD network. Each has a steady queue of frames ready to send: A's frames will be numbered A1, A2, etc. B's frames similarly. Let T be the exponential backoff base unit, that is, the duration of one slot.
  - Suppose A and B simultaneously attempt to send frame 1, collide, and happen to choose backoff times of 0'T or 1'T, respectively, meaning A wins the race and transmits A1 while B waits. At the end of this transmission, B will attempt to retransmit B1 while A will attempt to transmit A2. These first attempts will collide, but now A backs off for either 0'T or 1'T, while B backs off for time equal to one of 0'T, 1'T, 2'T, or 3'T.
  - What is the probability that A wins this second backoff race immediately after this first collision; that is, A's first choice of backoff time k'51.2 is less that B's?
  - Given:
    - A1 choose 0 | A2 chooses between {0,1}
    - B1 choose 1 | B1 chooses between {0,1,2,3}
  - Solve:
    - Pr(A wins second backoff race) = Pr(A2 will choose slot < B1)
    - = Pr(A2 chooses 0) * Pr(B1 chooses 1,2,3) + Pr(A2 chooses 1) * Pr(B1 chooses 2, 3)
    - = 0.5(0.75) + 0.5(0.5)
    - = 0.625 





















