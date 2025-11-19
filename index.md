---
layout: single
author_profile: true
title: About
---

We are a new research group led by [Wilker Aziz](http://wilkeraziz.github.io) within [ILLC](http://www.illc.uva.nl) working on probabilistic models for natural language processing. 


{% capture news %}
* **2025**
  * We are giving a talk on [LM uncertainty and decision making](slides/mercury-2025-uncertainty.pdf) at Booking.com on Nov 18
  * Come to EMNLP and meet us at [UncertaiNLP2](https://uncertainlp.github.io)
  * Bryan will be presenting his work on [adapting MBR decoding to open-ended generation](https://aclanthology.org/2025.emnlp-main.1616/) at EMNLP
  * We are teaching a class on [Decoding](slides/mtm-2025-decoding.pdf) at the [MT Marathon](https://blogs.helsinki.fi/language-technology/mt-marathon-2024/) on Oct 26
  * Pedro received an [outstanding paper award](https://actionable-interpretability.github.io) at Actionable Interpretability (ICML workshop) for his work on [reward hacking in explanations](https://arxiv.org/abs/2504.05294) 
* **2024**
  * Probabll is going to Malta, come talk to us about _uncertainty in NLP_. At EACL (main conference) we will be presenting about [methodology to evaluate LM's calibration against human uncertainty]() and [confidence vs. label variation](). At [UncertaiNLP](https://uncertainlp.github.io/2024/), Bryan will be talking about the inadequacy of the mode in neural text generators and the overlooked role of _generalisation_.
* **2023**
  * EMNLP 2023 paper: [evaluating uncertainty in neural text generators against human production variability](https://arxiv.org/abs/2305.11707)
  * New pre-print on [uncertainty representation in NLP (from theory to applications)](https://arxiv.org/abs/2305.11707), a collaboration out of the [Third ELLIS NLP Workshop](https://www.dagstuhl.de/en/seminars/seminar-calendar/seminar-details/22474) (in Dagstuhl)
* **2022**
  * Two papers accepted at EMNLP 2022: [sampling-based MBR for NMT](https://arxiv.org/abs/2108.04718) and [calibration of text classifiers under human disagreement](https://arxiv.org/abs/2210.16133)
  * ~~We are [hiring](/jobs/), apply by August 21 2022!~~
  * [Gonçalo M. Correia](https://www.goncalomcorreia.com) passed his PhD defence! Congratulations Dr. Correia for your awesome thesis on [Learnable Sparsity and Weak Supervision for Data-Efficient, Transparent, and Compact Neural Models]().
  * Wilker gave a talk at [Structure Prediction for NLP](http://structuredprediction.github.io/SPNLP22) ([slides](https://probabll.github.io/slides/spnlp2022.pdf), [colab demo](https://colab.research.google.com/github/probabll/demo-mbr-nmt/blob/main/German-English.ipynb)).
  * Bryan gave a [talk at the University of Copenhagen](https://ai.ku.dk/events/ai-seminar-by-bryan-eikema/) on Distribution-Aware Decoding for NMT.
  * Our [Deep Learning 2 course](https://uvadl2c.github.io) is ready!
  * [Sparse communication via mixed distributions](https://arxiv.org/pdf/2108.02658.pdf) has been accepted at ICLR2022!
* **2021**
  * 2 EMNLP2021 papers led by Nicola De Cao: [Editing Factual Knowledge in Language Models](https://arxiv.org/abs/2104.08164) and [Highly Parallel Autoregressive Entity Linking with Discriminative Correction]().
  * In [this followup](https://arxiv.org/abs/2108.04718) to our [Coling2020 paper](https://www.aclweb.org/anthology/2020.coling-main.398/) we take MBR decoding from proof-of-concept to a robust and scalable decision rule.
  * Probabll and DeepSPIN team up once more, this time we contribute [a formal account to mixed random variables](https://arxiv.org/abs/2108.02658) and take the first steps towards a theory of communication using sparse continuous random variables.
   * PhD and postdoc positions at the newly established [Mercury Machine Learning Lab](https://icai.ai/mercury-machine-learning-lab/) (a collaboration among Booking.com, TUDelft, and UvA) including [1 PhD position in ML/NLP](https://www.uva.nl/en/content/vacancies/2021/07/21-579-phd-4-and-postdoc-1-position-in-machine-learning.html?origin=FpX8Wqb2Sua7FLtTRS6KDw&cb), together with [Ivan Titov](http://ivan-titov.org). Deadline: August 23, 2021.
* **2020**
    * [Is MAP Decoding All You Need? The Inadequacy of the Mode in Neural Machine Translation](https://www.aclweb.org/anthology/2020.coling-main.398/) is Coling2020's best paper!
    * [Efficient Marginalization of Discrete and Structured Latent Variables via Sparsity](https://papers.nips.cc/paper/2020/hash/887caadc3642e304ede659b734f79b00-Abstract.html) is a NeurIPS2020 spotlight!
    * [How do Decisions Emerge in Neural Models?](https://www.aclweb.org/anthology/2020.emnlp-main.262/) has been accepted at EMNL2020!
    * [The Power Spherical Distribution](https://arxiv.org/pdf/2006.04437.pdf) accepted at INNF+2020!
    * [Effective Estimation of DGLMs](https://www.aclweb.org/anthology/2020.acl-main.646.pdf) accepted at ACL2020!
    * [Latent morphology NMT](https://openreview.net/forum?id=BJxSI1SKDH) is an ICRL2020 spotlight!
    * VI tutorial is going to Alicante
* **Code** 
    * [variational auto-encoders with mixed (continuous/discrete) random variables](https://github.com/probabll/mixed-rv-vae)
    * [auto-encoding variational neural machine translation](https://github.com/Roxot/AEVNMT.pt)
    * [interpretable predictions](https://github.com/bastings/interpretable_predictions)
    * [extensions to pytorch distributions](https://github.com/probabll/dists.pt) for pytorch
    * [DGM components](https://github.com/probabll/dgm.pt) for pytorch
    * [MDR helper for torch](https://github.com/EelcovdW/pytorch-constrained-opt)
* `January 2019` We are born!
{% endcapture %}

<h3 class="archive__subtitle">{{ site.data.ui-text[site.locale].recent_posts | default: "News" }}</h3>
<div class="notice--info">{{ news | markdownify }}</div>
