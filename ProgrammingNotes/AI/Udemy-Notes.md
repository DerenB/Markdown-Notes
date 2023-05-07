# Udemy AI

# Additional Reading

- [AI A-Z Handbook](https://sds-platform-private.s3-us-east-2.amazonaws.com/uploads/P20-AI-AZ-Handbook-Kickstarter.pdf)
- [Markov Decision Process](http://www.cs.uml.edu/ecg/uploads/AIfall14/MDPApplications3.pdf)
- [Q-Learning](https://pdfs.semanticscholar.org/968b/ab782e52faf0f7957ca0f38b9e9078454afe.pdf)
- [Temporal Difference](https://link.springer.com/article/10.1007/BF00115009)

# Equation Intro

### Bellman Equation

- S - State
- a - action
- R - reward
- $\gamma$ - Discount
- Equation: $V(s)=max_{a}(R(s,a) + \gamma V(s'))$

### Markov Decision Process (MDP)

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

### Q-Learning

- $Q(s,a)=R(s,a)+\gamma\sum_{s'}(P(s,a,s')max_{a'}Q(s',a'))$

### Temporal Difference

- $TD(a,s)=R(s,a)+\gamma max_{a'}Q(s',a')-Q_{t-1}(s,a)$
- $Q_{t}(s,a)=Q_{t-1}(s,a)+\alpha TD_{t}(a,s)$
- $Q_{t}(s,a)=Q_{t-1}(s,a)+ \alpha (R(s,a) + \gamma max_{a'} Q(s',a')-Q_{t-1}(s,a))$
