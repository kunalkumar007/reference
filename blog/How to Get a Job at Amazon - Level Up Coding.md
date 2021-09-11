# How to Get a Job at Amazon - Level Up Coding

## And Why You May Not Want One

As a young developer, everyone wants to work at one of the FAANG (Facebook, Amazon, Apple, Netflix, and Google). I did too, but after interviewing and getting an offer I realized what I wanted was to know I could. I will tell you how you can get through your interview and give you several resources to help you be successful. Finally, I will share why I didn't end up going to work for Amazon.

The first step to getting into a FAANG company is getting the interview. There are 4 ways in as far as I can tell to get to a first interview.

1. Online Application (how I got in)
2. In-Person Hiring Event
3. Know Someone In Amazon
4. Have Amazon Head Hunt You

The key to success in any of these steps is to be the type of person Amazon wants to hire. Amazon likes to see people who are engaged as developers and are hungry learners. You don't need to have a superstar GitHub or a crazy resume. You just need to show interest in programming outside work. Don't believe me? Check out my [resume](https://drive.google.com/open?id=1bZFsmeKdVP6wFxRevZAV0JsdFNliEAfr) and [GitHub](https://github.com/dtaivpp) (resume was the one I submitted and GitHub is of course still being updated).

Have some side projects to show interest and a well-formatted resume. One way to check your resume is by using something like [TopResume.com](https://www.topresume.com/career-advice/ask-amanda-resume-ats-readability). I used them to check over my resume and see how companies were viewing me through their ATS (applicant tracking system).

Another part of being the person Amazon wants to hire is matching the job description. If they have 3+ years of software experience you need to have that or any equivalents they have listed. If you don't they will immediately weed you out.

I cannot talk much about some of the other methods because I do not have the experience to share there. I will say however these companies have been known to shop for talent by looking at who contributes to relevant open source or the leader boards on Kaggle.

Here is one of the places I recommend spending the most time. If you do this right you can really set yourself apart from the rest and can even jump out to hiring managers. The coding interview or prequalifying exam will typically be 2 questions you have 90 minutes to solve. Then you will have follow-up sections to describe what you did, why you did it, and its time complexity. You can use the most common languages (C++, Java, C#, Python, C, Ruby, or JS).

To best prepare for this, I would recommend doing the following things:

## 1. Know Data Structures and Algorithms

![img](https://miro.medium.com/max/60/0*V_yYm11jC5qYaYfe.jpg?q=20)

![img](https://miro.medium.com/max/1400/0*V_yYm11jC5qYaYfe.jpg)

Source: [The Crazy Programmer](https://www.thecrazyprogrammer.com/2018/10/types-of-data-structures.html)

This [other article](https://medium.com/@codingfreak/top-algorithms-data-structures-concepts-every-computer-science-student-should-know-e0549c67b4ac) covers much of what you need to know for data structures and algorithms. The common data structures you will need to know are Trees, Stacks, Queues, Lists, Graphs, and Dictionaries. For each of them, you should know how to search, sort, iterate, add and remove. Here is another great resource for learning [these](http://www.codechef.com/).

Using the mentioned data structures and algorithms is a crucial part of the code exam. Here are some places you can practice

- First 100 on [ProjectEuler.](http://projecteuler.net/)net
- [Google Code Contest Examples](http://code.google.com/codejam/contests.html)
- [High Salability Architectures](http://highscalability.com/blog/category/example)

Here is an example of the type of question you can expect on the exam. A company needs to be able to prioritize which features they need to add to a phone. Given a list of words representing interests [“battery”, “waterproof”, “camera”, “storage”] and a list of comments count the number of comments that include each of the words. You should only count the word once per comment and comments may include upper and lower case. Return the top 2 features wanted and the number of comments each was mentioned in.

## 2. Know Big O

![img](https://miro.medium.com/max/60/0*HSM5QC5-T7ZpHnT1?q=20)

![img](https://miro.medium.com/max/1400/0*HSM5QC5-T7ZpHnT1)

Source: [Jessica Yung](https://www.jessicayung.com/big-o-notation-a-common-mistake-and-documentation/)

Time complexity is a big part of the code challenge. It is important to have a solution and know why your solution is good or where your solution could use work. For example, in the problem above there is a way to write it such that it essentially boils down to O(n).

Here is some pseudo-code for a solution.

```
features = dict.fromKeys(feature_list, 0)for comment in comment_list:
    word_set = set()
    for word in comment.split(" "):
        word_set.add(word.lower())
    for feature in features
        if feature in word_set:
            features[feature] += 1sorted(features.items(), key=lambda x: x[1], reverse=True)
```

I would describe this code as an O(n) solution. This is because it is processing the data in place as it iterates through the list. Using a set for the words in a comment helps us to ensure we are only counting each word once and allows us to search long comments in O(1) time as sets have the same time complexity as a dictionary.

In-person is a totally different ballpark. Code cant tell if you are a kind or a quality person. In-person you will need to bring your A-game. Thankfully there are several helpful guides out there to help with this as well. One other playlist I will add is the Tech Dummies system design playlist. This one describes in good detail how scalable systems are built.



In-person you will be asked to solve some code and architecture problems. This can typically be done on either a whiteboard or in some cases you can ask to use a computer. Regardless see the previous section for study materials.

When interviewing it is important to be very familiar with your resume. If you put experience on there you, the interviewer may ask you about it. Speaking of answering questions you should make sure you answer the interviewer's questions using the STAR method. This stands for Situation Task Action Result. Below is a video that explains it very well.



At some point, they will bring in the “Bar Raiser”. Honestly, that would be a wicked name for a WWE wrestler. The bar raiser is there because every new hire should be better than 50% of the people the bar raiser works with. He will ask a bunch of challenging questions designed to see if you will raise the bar at amazon. Below is a set of questions that you should have some sort of answer for. Remember to use the STAR method when answering!



Working for one of the FAANG companies is still a dream of mine even though I turned down the job. The decision for me was simple. I needed to do what was best for my family.

The cost of living in the areas where these jobs are located was a very big consideration. In my case, I had 2 offers on the table. The Amazon one was 30% better than the offer for the position I accepted. This sounds like an easy choice however, the cost of living near the Amazon job was nearly double what the cost of living was where I am currently living. Along with that I would have had to uproot my family right after we had our first child.

I am continuing to study and build things in order to keep up with technology. One day I may work for a FAANG but in the meantime, I am going to enjoy growing my family near all my relatives.