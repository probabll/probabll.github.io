---
marp: true
html: true
title: Sampling-Based MBR for NMT
description: "What's sampling-based minimum Bayes risk and why it matters for neural machine translation."
author: Bryan Eikema and Wilker Aziz
keywords: mbr,nmt,gourmet
url: https://arxiv.org/pdf/2108.04718.pdf
header: 'Sampling-based MBR for NMT'
paginate: true
footer: 'Bryan Eikema and Wilker Aziz'
---

<!-- _header: '' -->
<!-- _paginate: false -->
<!-- _footer: 'Check the [pre-print on arXiv](https://arxiv.org/pdf/2108.04718.pdf) and a demo on [github](https://github.com/probabll/demo-mbr-nmt) or [Colab](https://colab.research.google.com/github/probabll/demo-mbr-nmt/blob/main/German-English.ipynb).' -->

# Sampling-Based Minimum Bayes Risk Decoding for Neural Machine Translation


 Bryan Eikema and Wilker Aziz


---

<!-- accessible blue and red: #005AB5 #DC3220 -->

# Neural Machine Translation


We give an NMT model some source-language text $x$, and it predicts the probability that any target-language text $y$ is a translation of $x$.

<div data-marpit-fragment>

Another way of saying this is: <span style='text-align: center; color: #005AB5'>given a source sentence, NMT predicts a probability distribution over translation candidates</span>.

</div>

---

# Distribution over Translation Candidates

You can imagine such an object as a *bar plot*: 


<style>
img {
  display: block;
  margin: 0 auto;
}
</style>

![The 10 most probable translation candidates of a given sentence order by probability. The 3 most probable candidates are clearly inadequate, essentially incomplete translations. Although these are the most probable candidates, they only account for less than 10 percent of the probability mass. It is fair to conclude they are rather rare, despite being the most probable options available.](img/mt-p.png "10 most probable candidates for the source sentence: a moda não é adequada")
<span style="float:right; color: gray; font-size: smaller">Most probable candidates and their probabilities</span>

* For NMT, any sequence $y$ made of known target-language tokens and ending in a special end-of-sequence symbol is a valid translation candidate.

---

# Quiz

Let's analyse this example for a bit longer:
![The 10 most probable translation candidates of a given sentence order by probability. The 3 most probable candidates are clearly inadequate, essentially incomplete translations. Although these are the most probable candidates, they only account for less than 10 percent of the probability mass. It is fair to conclude they are rather rare, despite being the most probable options available.](img/mt-p.png "10 most probable candidates for the source sentence: a moda não é adequada")

* What is the most probable translation (i.e., the *mode* of the distribution)? 
* What is the probability that a translation should be non-empty?
* What is the probability that a translation should contain the word `mode`?

---

# Deciding under Uncertainty


We tend to think of NMT models as predicting **the correct translation** of $x$, but, as far as the model is concerned, there is no such a thing as a *single correct translation*.


<div data-marpit-fragment>

NMT packs its knowledge in an entire distribution over candidates. To pick a translation, **we** (*not the model*) decide to place all of ours bets on a single outcome (e.g., the mode).

</div>

* To decide under uncertainty, we need a criterion (i.e., a *decision rule*).
* An NMT model is not a decision rule, it cannot tell you how to decide.
* But we can use the uncertainty NMT quantifies to make an informed decision.

---

<!-- _footer: MAP decoding is a misnomer in NMT's context for NMT does not employ a prior over translations and, thus, does not require posterior inference.-->

# MAP Decoding
 
The most common decision rule in NMT is known as *maximum-a-posteriori (MAP) decoding*. It tells us to pick the mode of the distribution, no matter how unprobable it is.

![The 10 most probable translation candidates of a given sentence order by probability. The 3 most probable candidates are clearly inadequate, essentially incomplete translations. Although these are the most probable candidates, they only account for less than 10 percent of the probability mass. It is fair to conclude they are rather rare, despite being the most probable options available.](img/mt-p.png "10 most probable candidates for the source sentence: a moda não é adequada")

* MAP decoding: `</s>`


---


# Inadequacy of the Mode 

The *mode* of the distribution is the single most probable outcome. Yet, in a large enough sample space, the mode may be extremely rare.  


* Modes in NMT are oftentimes as rare as 1 in millions.
* NMT models store statistics/patterns they learn from training data in the distributions they predict, not in any one specific outome.
* The mode can only be a good summary of an entire distribution, when an NMT model has no reason to be uncertain.
  * Uncertainty is unavoidable: ambiguity in natural language, lack of context, change in domain, lack of training data, etc.

<span style="float:right; font-size: smaller">[[Eikema and Aziz, 2020]](https://www.aclweb.org/anthology/2020.coling-main.398/)</span>

---

# Beliefs
 
While no single outcome is more probable than the mode, there are many *patterns* that are far more probable than the mode. 

![The 10 most probable translation candidates of a given sentence order by probability. The 3 most probable candidates are clearly inadequate, essentially incomplete translations. Although these are the most probable candidates, they only account for less than 10 percent of the probability mass. It is fair to conclude they are rather rare, despite being the most probable options available.](img/mt-p.png "10 most probable candidates for the source sentence: a moda não é adequada")


<div data-marpit-fragment>

It's fair to claim that the model does not really want an empty translation, that `mode` is preferred to `fashion`, that we need an adjective, etc.

</div>




---

# A Model as a Representation of What's Known
 
If you had to decide between `me </s>` and `the mode isn't adequate </s>`, and all you knew about language and translation is what an NMT model tells you:
![The 10 most probable translation candidates of a given sentence order by probability. The 3 most probable candidates are clearly inadequate, essentially incomplete translations. Although these are the most probable candidates, they only account for less than 10 percent of the probability mass. It is fair to conclude they are rather rare, despite being the most probable options available.](img/mt-p.png "10 most probable candidates for the source sentence: a moda não é adequada")


<div data-marpit-fragment>

What would you pick and why?

</div>

---

# Utility

If we interpret translation candidates as atomic and unrelated outcomes, all NMT does is to express a preference over complete translations. This preference  is oftentimes very weak.

<div data-marpit-fragment>

Interpreted as combinatorial structures, we can appreciate structural similarity (e.g., some translations are equally long, make similar word choices, use similar word order).

</div>

<div data-marpit-fragment>

A **utility function** quantifies this similarity in a way that matters for a decision maker. 

</div>

* We say that $u(y, h; x)$ quantifies the *benefit* in choosing $h$ as the translation of $x$ when $y$ is known to be a plausible translation of it. 
* Examples: edit distance, ChrF, BEER, TER, COMET, human judgment, etc.

---

# Uncertainty About Utility

When deciding whether or not $h$ is a reasonable translation of $x$, we do not have access to translations we already know to be reasonable choices. 

<div data-marpit-fragment>

But we have NMT models that give an approximate view of what good choices look like. 

</div>


---

```
h                             y                                 p(y|x)    u(y, h;x)    p(y|x) * u(y, h;x)
----------------------------  ------------------------------  --------  -----------  --------------------
</s>                          </s>                              0.0645       100.00                  6.45
                              the mode </s>                     0.0605        29.71                  1.80
                              the mode is </s>                  0.0477        24.93                  1.19
                              the mode is inadequate </s>       0.0469        13.84                  0.65
                              the mode is not adequate </s>     0.0441        13.25                  0.58
                              the mode is awkward </s>          0.0412        15.97                  0.66
                              the mode is empty </s>            0.0397        17.79                  0.71
                              the mode is deficient </s>        0.0390        14.48                  0.56
                              the mode is poor </s>             0.0359        18.87                  0.68
                              the fashion isn't fitting </s>    0.0342        12.21                  0.42
                              [...]
                              [SUM]                                                                 25.92

the mode isn't adequate </s>  </s>                              0.0645        37.93                  2.45
                              the mode </s>                     0.0605        58.62                  3.55
                              the mode is </s>                  0.0477        62.16                  2.96
                              the mode is inadequate </s>       0.0469        77.17                  3.62
                              the mode is not adequate </s>     0.0441        82.98                  3.66
                              the mode is awkward </s>          0.0412        45.80                  1.89
                              the mode is empty </s>            0.0397        49.20                  1.96
                              the mode is deficient </s>        0.0390        44.47                  1.73
                              the mode is poor </s>             0.0359        49.81                  1.79
                              the fashion isn't fitting </s>    0.0342        23.08                  0.79
                              [...]
                              [SUM]                                                                 40.87
```

---

# Expected Utility


If all I know is that $y$ translates $x$ with probability $p(y|x, \theta)$, then my expectation on 
$h$'s utility is the weighted average
$$\mu_u(h; x, \theta) = \underbrace{\sum_{y \in \mathcal Y} p(y|x, \theta)u(y, h; x)}_{\text{also denoted by }\mathbb E[ u(Y, h; x) | \theta]}$$
where, in turn and with some probability, each and every translation candidate is assumed to be a reference translation.


---

# Summarising the Model's Beliefs

The space of *all* translation candidates is unbounded, making it impossible for us to exactly compute the expected utility of any given candidate.

But, expectations can be estimated in a principled manner via *Monte Carlo*.

We use the **sample mean**
$$\hat \mu_u(h; x, \theta) = \frac{1}{S} \sum_{s=1}^S u(y^{(s)}, h; x)$$
where $y^{(s)}$ is sampled from the model with probability $p(y^{(s)}|x, \theta)$.


---

# What's a Sample?

Think of the NMT model as a bag of tokens, each token is a translation, if you put your hand in it and get a token, there's a probability $p(y|x,\theta)$ that you will get $y$.

* Drawing samples like that is easy in NMT because of the way the model decomposes the probability of the total as a product of probability of the parts. 

---

# Example

Let's judge two candidates: `</s>` and `the mode isn't adequate </s>`.

We will estimate each candidate's expected utility using 20 samples from the model. 

For utility, we will use ChrF.

---

```
h                             y ~ Y|x                               u(y, h;x)
----------------------------  ----------------------------------  -----------
</s>                          the mode is very probable </s>            12.71
                              the mode is actually rare </s>            12.71
                              mode </s>unfashionable </s>               12.71
                              the mode </s>                             29.71
                              nada nada nada nada </s>                  15.97
                              nay </s>                                  48.57
                              the mode is </s>                          24.93
                              the is the </s>                           27.11
                              mode mode mode mode </s>                  15.97
                              mode is a mode </s>                       21.48
                              the mode is actually rare </s>            12.71
                              rare rare rare rare </s>                  15.97
                              the mode is deficient </s>                14.48
                              the mode is awkward </s>                  15.97
                              uncool mode </s>                          23.07
                              uncool mode </s>                          23.07
                              nada nada </s>                            27.11
                              I told you so didn't I ? </s>             14.48
                              the is the </s>                           27.11
                              the is </s>                               36.82
                              [AVG]                                     21.63
```


---

```
h                             y ~ Y|x                               u(y, h;x)
----------------------------  ----------------------------------  -----------
the mode isn't adequate </s>  weird mode </s>                           33.37
                              well I told you so didn't I ? </s>        16.69
                              rare rare rare rare </s>                  16.90
                              weird mode </s>                           33.37
                              mode mode mode mode </s>                  28.24
                              the mode is empty </s>                    49.20
                              the mode is deficient </s>                44.47
                              the mode </s>                             58.62
                              uncool </s>                               18.16
                              </s>                                      37.93
                              fashion isn't a thing </s>                29.31
                              mode is weird </s>                        35.96
                              the mode is awkward </s>                  45.80
                              what ? </s>                               21.01
                              </s>                                      37.93
                              </s>                                      37.93
                              meh mode </s>fashionable </s>             21.67
                              the mode is deficient </s>                44.47
                              the mode is </s>                          62.16
                              the mode is strange </s>                  50.25
                              [AVG]                                     36.17
```


---

## Minimum Bayes Risk Decoding

MBR decoding tells us to choose the candidate's whose expected utility is maximum:

$$
\begin{aligned}
y^\star &= \operatorname*{argmax}_{h \in \mathcal Y} ~ \mathbb E\left[u(Y, h; x) \mid \theta \right]
\end{aligned}
$$

* The decision maker chooses a utility function
* The model contributes beliefs
* We search through all possible translations

---

## Sampling-Based MBR


$$
\begin{aligned}
y^\star &= \operatorname*{argmax}_{h \in (y^{(1)}, \ldots, y^{(S)}))} ~ \frac{1}{S} \sum_{s=1}^S u(y^{(s)}, h; x) \qquad y^{(s)} \sim Y|\theta, x
\end{aligned}
$$
* Approximate the space of candidates using a sample
* Approximate expected utility via Monte Carlo
* Share samples across candidates for efficiency


---

## Overview of Pre-Print

* MBR is robust
* but MBR is slow
* we speed it up considerably making it linear in the size of the set of candidates 
* we test various utilities (and BEER comes out best)
* we combine with other approximations such as beam search and nucleus sampling as they find good (and small) hypothesis spaces

---


# Thanks!
