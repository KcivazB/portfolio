# 1. Présentation de mon Homelab
_Un Homelab, pourquoi et quel intérêt ?_

## Introduction

Commençons par le commencement. 

Vous vous demandez sans doute ce qu'est un homelab, si ce n'est pas le cas, vous pouvez passer directement à la section suivante, sinon je vous invite fortement à lire le passage ci-dessous. 

> Un homelab, ou **serveur domestique**, est un environnement informatique, permettant de **tester**, d'**expérimenter** et de **développer des technologies** sans risquer d'affecter un environnement de production. Il est souvent utilisé par les passionnés de technologies, les étudiants ou les professionnels du secteur pour **se former**, **explorer de nouvelles solutions** ou **créer des configurations uniques**.

Le concept de homelab repose sur une idée simple : tout le monde peut créer son propre environnement d'expérimentation, quel que soit le matériel à disposition. Qu'il s'agisse d'un serveur professionnel, d'un mini-pc, d'un ancien PC, ou encore d'un Raspberry Pi, chaque machine peut devenir un homelab fonctionnel. L'idée étant que l'on peut expérimenter et tester de nombreux outils sans investir massivement dès le départ. Attention tout de même à ne pas tomber accroc, l'expérience est si plaisante que l'on peut vite perdre la notion du temps ! 

Il faut cependant garder à l'esprit que, bien que l'on puisse utiliser quasiment tout type de matériel pour créer notre propre homelab, il sera nécessaire d'adapter la machine aux besoins. 

En effet, utiliser un Raspberry Pi pour faire tourner un modèle de génération d'image peut sembler compliqué, tout comme utiliser un serveur professionnel pour héberger un simple site web peut paraître surdimensionné. 

## Mon homelab

Actuellement, je dispose de **deux machines** dans mon homelab : 

1. **Dell Optiplex 3050**
    - **Processeur** : Intel I5-6500 (4c/4t)
    - **RAM** : 2 x 8 GB DDR4
    - **Stockage** : SSD 256GB 

Le Dell Optiplex est un petit ordinateur de bureau que j'ai trouvé sur eBay à un prix très raisonnable (**65€ livré**), moins cher qu'un Raspberry Pi. Bien que ce modèle soit principalement destiné à un usage bureautique, il est tout de même assez puissant pour jouer des rôles simples dans un homelab.

Il s'agit de ma **première machine**, j'ai remplacé l'OS par **ProxmoxOS**, que l'on découvrira plus en détail dans un prochain article, afin de créer des **machines virtuelles** et gérer un cluster **Kubernetes**.

Toutefois, il est important de garder à l'esprit que son évolutivité est limitée. La carte mère limite à 2 les slots de RAM disponibles et n'accepte que les processeurs Intel de 6<sup>ème</sup> et 7<sup>ème</sup> génération. Avec son faible coût et son encombrement réduit, l'Optiplex est idéal pour démarrer un homelab sans trop investir. 

2. **Dell Precision Tower 5810**
    - **Processeur** : Xeon E5-2660 (8c/16t)
    - **RAM** : 2 x 32 GB DDR4 ECC
    - **Stockage** : SSD 256GB + HDD 1TB
    - **Carte graphique** : Nvidia Geforce GT 530

Ce second ordinateur est bien plus puissant et est destiné à un usage professionnel. Il existe également avec des cartes-mères acceptant 2 processeurs. 

J'ai eu l'opportunité d'acheter la tour avec la carte-mère, le processeur, l'alimentation, un disque dur HDD 1TB et une carte graphique (Asus EN7500LE) que j'ai remplacée par la **GT530** que j'avais sous la main et qui possède une sortie HDMI, contrairement à la Asus. Cette tour m'a coûté **62€ livrée**, auxquels il a fallu rajouter **75€ pour 64GB de RAM** et **15€ pour un SSD 256GB**.

J'ai également craqué sur une offre de **4 HDD Western Digital 1TB**, état neuf, pour **57€**. Cependant, ces disques ne seront pas tous installés immédiatement dans le Dell Precision, du moins pas dans un premier temps. Dans un second temps, j'avais l'intention de mettre en place un **RAID logiciel** pour mieux tolérer les pannes.

En résumé, cela nous fait donc un **budget total de 209€ pour le Dell Precision**, ce qui reste un coût relativement faible. 

J'ai encore une fois remplacé l'OS par **ProxmoxOS**. Ce dernier ne pouvant s'installer en WiFi, j'ai également dû m'équiper d'un **switch 10/100/1000 5 ports**.
