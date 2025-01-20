# 1. Presentation of My Homelab
_A Homelab, Why and What’s the Interest?_

## Introduction

Let’s start from the beginning. 

You’re probably wondering what a homelab is. If not, feel free to skip ahead to the next section. Otherwise, I highly encourage you to read the passage below.

> A homelab, or **home server**, is a computing environment designed to **test**, **experiment**, and **develop technologies** without the risk of affecting a production environment. It is often used by tech enthusiasts, students, or professionals to **learn**, **explore new solutions**, or **create unique setups**.

The concept of a homelab is simple: anyone can create their own experimental environment regardless of the available hardware. Whether it’s a professional server, a mini-PC, an old desktop, or even a Raspberry Pi, every machine can become a functional homelab. The idea is that you can experiment and test many tools without needing to make a massive initial investment. However, be careful not to get addicted; the experience is so enjoyable that you can easily lose track of time!

It’s important to keep in mind that, while you can use almost any type of hardware to build your own homelab, you will need to adapt the machine to meet your specific needs.

For example, running an image generation model on a Raspberry Pi might be tricky, just as using a professional server to host a simple website may seem overkill. 

## My Homelab

Currently, I have **two machines** in my homelab:

1. **Dell Optiplex 3050**
    - **Processor**: Intel I5-6500 (4c/4t)
    - **RAM**: 2 x 8 GB DDR4
    - **Storage**: 256GB SSD

The Dell Optiplex is a small desktop computer I found on eBay at a very reasonable price (**€65 shipped**), cheaper than a Raspberry Pi. While this model is primarily intended for office use, it’s still powerful enough for simple roles in a homelab.

This is my **first machine**, and I replaced the OS with **ProxmoxOS**, which we’ll explore in detail in a future article, in order to create **virtual machines** and manage a **Kubernetes** cluster.

However, it’s important to note that its scalability is limited. The motherboard has only 2 available RAM slots and only supports Intel processors from the 6<sup>th</sup> and 7<sup>th</sup> generations. With its low cost and small footprint, the Optiplex is perfect for starting a homelab without investing too much upfront.

2. **Dell Precision Tower 5810**
    - **Processor**: Xeon E5-2660 (8c/16t)
    - **RAM**: 2 x 32 GB DDR4 ECC
    - **Storage**: 256GB SSD + 1TB HDD
    - **Graphics Card**: Nvidia Geforce GT 530

This second computer is much more powerful and intended for professional use. It also comes with motherboards that support dual processors.

I had the opportunity to buy the tower with the motherboard, processor, power supply, a 1TB HDD, and a graphics card (Asus EN7500LE) which I replaced with the **GT530** I had on hand, as it has an HDMI output, unlike the Asus card. This tower cost me **€62 shipped**, and I added **€75 for 64GB of RAM** and **€15 for a 256GB SSD**.

I also snagged an offer for **4 Western Digital 1TB HDDs**, brand new, for **€57**. However, I won’t be installing all these drives in the Dell Precision right away. At some point, I plan to set up a **software RAID** to better tolerate failures.

In summary, the **total cost for the Dell Precision is €209**, which is still a relatively low price.

Once again, I replaced the OS with **ProxmoxOS**. Since this OS doesn’t support WiFi installation, I also had to get a **5-port 10/100/1000 switch**.
