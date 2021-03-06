---
layout: single
author_profile: true
title: About
---

We are a new research group led by [Wilker Aziz](http://wilkeraziz.github.io) within [ILLC](http://www.illc.uva.nl) working on probabilistic models for natural language processing. 




{% capture news %}
* 2020
    * [Is MAP Decoding All You Need? The Inadequacy of the Mode in Neural Machine Translation](https://www.aclweb.org/anthology/2020.coling-main.398/) is Coling2020's best paper!
    * [Efficient Marginalization of Discrete and Structured Latent Variables via Sparsity](https://papers.nips.cc/paper/2020/hash/887caadc3642e304ede659b734f79b00-Abstract.html) is a NeurIPS2020 spotlight!
    * [How do Decisions Emerge in Neural Models?](https://www.aclweb.org/anthology/2020.emnlp-main.262/) has been accepted at EMNL2020!
    * [The Power Spherical Distribution](https://arxiv.org/pdf/2006.04437.pdf) accepted at INNF+2020!
    * [Effective Estimation of DGLMs](https://www.aclweb.org/anthology/2020.acl-main.646.pdf) accepted at ACL2020!
    * [Latent morphology NMT](https://openreview.net/forum?id=BJxSI1SKDH) is an ICRL2020 spotlight!
    * VI tutorial is going to Alicante
* **Code** 
    * [auto-encoding variational neural machine translation](https://github.com/Roxot/AEVNMT.pt)
    * [interpretable predictions](https://github.com/bastings/interpretable_predictions)
    * [extensions to pytorch distributions](https://github.com/probabll/dists.pt) for pytorch
    * [DGM components](https://github.com/probabll/dgm.pt) for pytorch
    * [MDR helper for torch](https://github.com/EelcovdW/pytorch-constrained-opt)
* `January 2019` We are born!
{% endcapture %}

<h3 class="archive__subtitle">{{ site.data.ui-text[site.locale].recent_posts | default: "News" }}</h3>
<div class="notice--info">{{ news | markdownify }}</div>
