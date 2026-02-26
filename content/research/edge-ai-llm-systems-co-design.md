## EdgeLLM Transformer Accelerator (Published@CICC'26)

Large language models (LLM) have permeated many aspects of our lives. Edge deployment has attracted strong interest from industry, driven by benefits in privacy, reliability, and cost. However, there are three main challenges.

* EMA-Limited Prefill and Decode Efficiency
* Bottlenecks in Multi-Request Inference
* Underutilization from Non-MAC Operations

We design a rDXE (ring-based Decoder eXecution Engine) system to tackle these challenges.

![Alt text](/images/research/circuit4ai/rDXE.png)

Our tapeout in Intel 16nm.

![Alt text](/images/research/circuit4ai/edgellm_chip.png)

## Transformer SW-HW Co-Exploration

We co-explore edge Transformer architectures and a custom systolic-array accelerator to balance accuracy, time-to-first-token, energy, and area. For each candidate design, we map model parameters onto hardware configurations and evaluate performance, timing, power, and area with an analytic loop and OpenROAD. The resulting design space highlights trade-offs between speed, efficiency, and area to guide practical choices.

![Alt text](/images/research/circuit4ai/sw_hw_coop.png)

