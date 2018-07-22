---
layout: post
title: "Research Topic Proposal for 'Data Management and Visualization'"
categories: data_science, coursera
---

# Assignment 1: Research Topic Proposal

Part of the course material the professors added were five datasets, each addressing different topics. The dataset that interested
me the most was that of the Gapminder, which collects data metrics for different countries to see how their performance measures up
to the United Nations Millenium Development Goals. 

For this project, I would like to look into the correlation between internet usage and income per person and employment rate. 
I got a lot of benefits from my access to (free!!!!) online resources. I don't think I would've survived my college education 
without its help, and plenty of the skills I self-learned from it certainly got me farther in both my thesis and personal life. As 
such, I want to see whether access to internet is a big ingredient to social mobility. 

I've added, as part of my personal code book, the following variables:

| Variable Name | Description | Source |
|---|---|---|
|Internetuserate|2010 Internet users (per 100 people)- Internet users are people with access to the worldwide network.|World Bank|
|incomeperperson|"2010 Gross Domestic Product per capita in constant 2000 US$. The inflation but not the differences in the cost of living between countries has been taken into account."|World Bank Work Development Indicators|
|employrate|2007 total employees age 15+ (% of population)- Percentage of total population, age above 15, that has been employed during the given year.|International Labour Organization| 

## Literature Review

Amiri and Reif 2013 [1] conducted a study on the relationship between internet penetration and the GDP among Nordic countries and concluded that they are likely "one of the root causes of the increased benefits that resulted in GDP growth". Looking into the World Bank 2011 dataset on 126 countries shows that there is a clear correlation between GDP and internet penetration (R squared = 0.69), with the five Nordic countries showing the most effect. These results are not surprising as said countries have the highest internet penetration rate, with the top country being Iceland at 96%, and are also among the top 20 countries with the highest GDP. The highest increase in internet penetration precluded the highest increase of GDP, so the study was able to conclude that internet penetration was indeed the cause rather than an effect of said GDP growth. 

Education has long been an oft-touted key to social mobility and links between internet usage and education have been studied before. Kim et al 2017 [2] conducted a nation-wide cross-sectional survey on South Korean students from 7th to 12th grade, asking for the amount of time they spend in internet usage, sleep, and study time among others. They found that positive high school performace was associated with internet usage, with households in relatively low income groups showing the strongest association. The paper pointed out that the internet gave students acces to a vast array of information as well as enabled them to "participate and collaborate in their own learning process". However, this benefit is highly dependent on the purpose of their internet usage as well as the time alloted. Internet addiction has been shown to have negative impact on school performance [3].

## Reference

1. Amiri, S., Reif, B. (2013). Internet penetration and its correlation to gross domestic product: an analysis of the Nordic countries. International Journal of Business, Humanities and Technology 3(2).
2. Kim, Y., Kim, S., et al. (2017). The associations between internet use time and school performance among Korean adolescents differ according to the purpose of internet use. PLoS One 12(4).
3. Chou, C., Hsiao, M. Internet addiction, usage, gratification, and pleasure experience: the Taiwan college students’ case. Computers & Education 35(1): 65-80.


