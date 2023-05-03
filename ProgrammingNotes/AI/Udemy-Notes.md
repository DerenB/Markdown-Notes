# Udemy AI

# Bellman Equation

- S - State
- a - action
- R - reward
- $\gamma$ - Discount
- Equation: $V(s)=max_{a}(R(s,a) + \gamma V(s'))$

# Markov Decision Process (MDP)

- Deterministic Search
  - If AI decides to go up 100% chance it will go up
- Non-Deterministic Search
  - if AI decides to go up, it might decide to go somewhere else
  - Something that is out of control of the agent
- Equation:
  - $V(s)=max_{a}(R(s,a)+\gamma \space \sum_{s'}P(s,a,s')V(s'))$

### Markov Property

- a stochastic process has the Markov property if the conditional probability distribution of future states of the process depends only upon the present state
- Future actions only depends where you are now, does not matter how you got there



