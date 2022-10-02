const initialData = {
    header: {
        heading: 'A2Z DSA Course/ Sheet',
        subtitle: 'Learn DSA from scratch ⭐',
        motivationalQuotes: [
            {
                quote: 'Life isn’t about getting and having, it’s about giving and being.',
                author: 'Kevin Kruse',
            },
            {
                quote: 'Whatever the mind of man can conceive and believe, it can achieve.',
                author: 'Napoleon Hill',
            },
            {
                quote: 'Strive not to be a success, but rather to be of value.',
                author: 'Albert Einstein',
            },
            {
                quote: 'Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.',
                author: 'Robert Frost',
            },
            {
                quote: 'I attribute my success to this: I never gave or took any excuse.',
                author: 'Florence Nightingale',
            },
            {
                quote: 'You miss 100% of the shots you don’t take.',
                author: 'Wayne Gretzky',
            },
            {
                quote: 'I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.',
                author: 'Michael Jordan',
            },
            {
                quote: 'The most difficult thing is the decision to act, the rest is merely tenacity.',
                author: 'Amelia Earhart',
            },
            {
                quote: 'Every strike brings me closer to the next home run.',
                author: 'Babe Ruth',
            },
            {
                quote: 'Definiteness of purpose is the starting point of all achievement.',
                author: 'W. Clement Stone',
            },
            {
                quote: 'We must balance conspicuous consumption with conscious capitalism.',
                author: 'Kevin Kruse',
            },
            {
                quote: 'Life is what happens to you while you’re busy making other plans.',
                author: 'John Lennon',
            },
            {
                quote: 'We become what we think about.',
                author: 'Earl Nightingale',
            },
            {
                quote: 'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.',
                author: 'Mark Twain',
            },
            {
                quote: 'Life is 10% what happens to me and 90% of how I react to it.',
                author: 'Charles Swindoll',
            },
            {
                quote: 'The most common way people give up their power is by thinking they don’t have any.',
                author: 'Alice Walker',
            },
            {
                quote: 'The mind is everything. What you think you become.',
                author: 'Buddha',
            },
            {
                quote: 'The best time to plant a tree was 20 years ago. The second best time is now.',
                author: 'Chinese Proverb',
            },
            {
                quote: 'An unexamined life is not worth living.',
                author: 'Socrates',
            },
            {
                quote: 'Eighty percent of success is showing up.',
                author: 'Woody Allen',
            },
            {
                quote: 'Your time is limited, so don’t waste it living someone else’s life.',
                // eslint-disable-next-line sonarjs/no-duplicate-string
                author: 'Steve Jobs',
            },
            {
                quote: 'Winning isn’t everything, but wanting to win is.',
                author: 'Vince Lombardi',
            },
            {
                quote: 'I am not a product of my circumstances. I am a product of my decisions.',
                author: 'Stephen Covey',
            },
            {
                quote: 'Every child is an artist.  The problem is how to remain an artist once he grows up.',
                author: 'Pablo Picasso',
            },
            {
                quote: 'You can never cross the ocean until you have the courage to lose sight of the shore.',
                author: 'Christopher Columbus',
            },
            {
                quote: 'I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.',
                // eslint-disable-next-line sonarjs/no-duplicate-string
                author: 'Maya Angelou',
            },
            {
                quote: 'Either you run the day, or the day runs you.',
                author: 'Jim Rohn',
            },
            {
                quote: 'Whether you think you can or you think you can’t, you’re right.',
                author: 'Henry Ford',
            },
            {
                quote: 'The two most important days in your life are the day you are born and the day you find out why.',
                author: 'Mark Twain',
            },
            {
                quote: 'Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.',
                author: 'Johann Wolfgang von Goethe',
            },
            {
                quote: 'The best revenge is massive success.',
                author: 'Frank Sinatra',
            },
            {
                quote: 'People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily.',
                author: 'Zig Ziglar',
            },
            {
                quote: 'Life shrinks or expands in proportion to one’s courage.',
                author: 'Anais Nin',
            },
            {
                quote: 'If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.',
                author: 'Vincent Van Gogh',
            },
            {
                quote: 'There is only one way to avoid criticism: do nothing, say nothing, and be nothing.',
                author: 'Aristotle',
            },
            {
                quote: 'Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.',
                author: 'Jesus',
            },
            {
                quote: 'The only person you are destined to become is the person you decide to be.',
                author: 'Ralph Waldo Emerson',
            },
            {
                quote: 'Go confidently in the direction of your dreams.  Live the life you have imagined.',
                author: 'Henry David Thoreau',
            },
            {
                quote: 'When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.',
                author: 'Erma Bombeck',
            },
            {
                quote: 'Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.',
                author: 'Booker T. Washington',
            },
            {
                quote: 'Certain things catch your eye, but pursue only those that capture the heart.',
                author: ' Ancient Indian Proverb',
            },
            {
                quote: 'Believe you can and you’re halfway there.',
                author: 'Theodore Roosevelt',
            },
            {
                quote: 'Everything you’ve ever wanted is on the other side of fear.',
                author: 'George Addair',
            },
            {
                quote: 'We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.',
                author: 'Plato',
            },
            {
                quote: 'Teach thy tongue to say, “I do not know,” and thous shalt progress.',
                author: 'Maimonides',
            },
            {
                quote: 'Start where you are. Use what you have.  Do what you can.',
                author: 'Arthur Ashe',
            },
            {
                quote: 'When I was 5 years old, my mother always told me that happiness was the key to life.  When I went to school, they asked me what I wanted to be when I grew up.  I wrote down ‘happy’.  They told me I didn’t understand the assignment, and I told them they didn’t understand life.',
                author: 'John Lennon',
            },
            {
                quote: 'Fall seven times and stand up eight.',
                author: 'Japanese Proverb',
            },
            {
                quote: 'When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.',
                author: 'Helen Keller',
            },
            {
                quote: 'Everything has beauty, but not everyone can see.',
                author: 'Confucius',
            },
            {
                quote: 'How wonderful it is that nobody need wait a single moment before starting to improve the world.',
                author: 'Anne Frank',
            },
            {
                quote: 'When I let go of what I am, I become what I might be.',
                author: 'Lao Tzu',
            },
            {
                quote: 'Life is not measured by the number of breaths we take, but by the moments that take our breath away.',
                author: 'Maya Angelou',
            },
            {
                quote: 'Happiness is not something readymade.  It comes from your own actions.',
                author: 'Dalai Lama',
            },
            {
                quote: 'If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.',
                author: 'Sheryl Sandberg',
            },
            {
                quote: 'First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.',
                author: 'Aristotle',
            },
            {
                quote: 'If the wind will not serve, take to the oars.',
                author: 'Latin Proverb',
            },
            {
                quote: 'You can’t fall if you don’t climb.  But there’s no joy in living your whole life on the ground.',
                author: 'Unknown',
            },
            {
                quote: 'We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.',
                author: 'Marie Curie',
            },
            {
                quote: 'Too many of us are not living our dreams because we are living our fears.',
                author: 'Les Brown',
            },
            {
                quote: 'Challenges are what make life interesting and overcoming them is what makes life meaningful.',
                author: 'Joshua J. Marine',
            },
            {
                quote: 'If you want to lift yourself up, lift up someone else.',
                author: 'Booker T. Washington',
            },
            {
                quote: 'I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.',
                author: 'Leonardo da Vinci',
            },
            {
                quote: 'Limitations live only in our minds.  But if we use our imaginations, our possibilities become limitless.',
                author: 'Jamie Paolinetti',
            },
            {
                quote: 'You take your life in your own hands, and what happens? A terrible thing, no one to blame.',
                author: 'Erica Jong',
            },
            {
                quote: 'What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.',
                author: 'Bob Dylan',
            },
            {
                quote: 'I didn’t fail the test. I just found 100 ways to do it wrong.',
                author: 'Benjamin Franklin',
            },
            {
                quote: 'In order to succeed, your desire for success should be greater than your fear of failure.',
                author: 'Bill Cosby',
            },
            {
                quote: 'A person who never made a mistake never tried anything new.',
                author: ' Albert Einstein',
            },
            {
                quote: 'The person who says it cannot be done should not interrupt the person who is doing it.',
                author: 'Chinese Proverb',
            },
            {
                quote: 'There are no traffic jams along the extra mile.',
                author: 'Roger Staubach',
            },
            {
                quote: 'It is never too late to be what you might have been.',
                author: 'George Eliot',
            },
            {
                quote: 'You become what you believe.',
                author: 'Oprah Winfrey',
            },
            {
                quote: 'I would rather die of passion than of boredom.',
                author: 'Vincent van Gogh',
            },
            {
                quote: 'A truly rich man is one whose children run into his arms when his hands are empty.',
                author: 'Unknown',
            },
            {
                quote: 'It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.',
                author: 'Ann Landers',
            },
            {
                quote: 'If you want your children to turn out well, spend twice as much time with them, and half as much money.',
                author: 'Abigail Van Buren',
            },
            {
                quote: 'Build your own dreams, or someone else will hire you to build theirs.',
                author: 'Farrah Gray',
            },
            {
                quote: 'The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.',
                author: 'Jesse Owens',
            },
            {
                quote: 'Education costs money.  But then so does ignorance.',
                author: 'Sir Claus Moser',
            },
            {
                quote: 'I have learned over the years that when one’s mind is made up, this diminishes fear.',
                author: 'Rosa Parks',
            },
            {
                quote: 'It does not matter how slowly you go as long as you do not stop.',
                author: 'Confucius',
            },
            {
                quote: 'If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.',
                author: 'Oprah Winfrey',
            },
            {
                quote: 'Remember that not getting what you want is sometimes a wonderful stroke of luck.',
                author: 'Dalai Lama',
            },
            {
                quote: 'You can’t use up creativity.  The more you use, the more you have.',
                author: 'Maya Angelou',
            },
            {
                quote: 'Dream big and dare to fail.',
                author: 'Norman Vaughan',
            },
            {
                quote: 'Our lives begin to end the day we become silent about things that matter.',
                author: 'Martin Luther King Jr.',
            },
            {
                quote: 'Do what you can, where you are, with what you have.',
                author: 'Teddy Roosevelt',
            },
            {
                quote: 'If you do what you’ve always done, you’ll get what you’ve always gotten.',
                author: 'Tony Robbins',
            },
            {
                quote: 'Dreaming, after all, is a form of planning.',
                author: 'Gloria Steinem',
            },
            {
                quote: 'It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live.',
                author: 'Mae Jemison',
            },
            {
                quote: 'You may be disappointed if you fail, but you are doomed if you don’t try.',
                author: 'Beverly Sills',
            },
            {
                quote: 'Remember no one can make you feel inferior without your consent.',
                author: 'Eleanor Roosevelt',
            },
            {
                quote: 'Life is what we make it, always has been, always will be.',
                author: 'Grandma Moses',
            },
            {
                quote: 'The question isn’t who is going to let me; it’s who is going to stop me.',
                author: 'Ayn Rand',
            },
            {
                quote: 'When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.',
                author: 'Henry Ford',
            },
            {
                quote: 'It’s not the years in your life that count. It’s the life in your years.',
                author: 'Abraham Lincoln',
            },
            {
                quote: 'Change your thoughts and you change your world.',
                author: 'Norman Vincent Peale',
            },
            {
                quote: 'Either write something worth reading or do something worth writing.',
                author: 'Benjamin Franklin',
            },
            {
                quote: 'Nothing is impossible, the word itself says, “I’m possible!”',
                author: '–Audrey Hepburn',
            },
            {
                quote: 'The only way to do great work is to love what you do.',
                author: 'Steve Jobs',
            },
            {
                quote: 'If you can dream it, you can achieve it.',
                author: 'Zig Ziglar',
            },
            {
                quote: 'People who are crazy enough to think they can change the world are the ones who do',
                author: 'Steve Jobs',
            },
        ],
        darkMode: false,
        totalQuestions: 455,
        completedQuestions: 0,
    },
    content: [
        {
            contentPath: '/learn_the_basics',
            contentHeading: 'Learn the basics',
            contentSubHeading: '',
            contentTotalQuestions: '29',
            contentCompletedQuestions: '0',
            categoryList: [
                {
                    categoryId: 1,
                    categoryName:
                        'Things to know in C++ /Java /Python or any language',
                    categoryTotalQuestions: '9',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: 'User Input/ Output',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                        {
                            questionHeading: 'Data Types',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                        {
                            questionHeading: 'If Else Statements',
                            questionLink: '',
                            gfgLink:
                                'https://practice.geeksforgeeks.org/problems/java-if-else-decision-making0924/0?category%5B%5D=Java&category%5B%5D=Java&difficulty%5B%5D=-2&page=1&query=category%5B%5DJavadifficulty%5B%5D-2page1category%5B%5DJava',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                        {
                            questionHeading: 'Switch Statement',
                            questionLink: '',
                            gfgLink:
                                'https://practice.geeksforgeeks.org/problems/java-switch-case-statement3529/1',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                        {
                            questionHeading: 'What are arrays, strings?',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                        {
                            questionHeading: 'For Loops',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                        {
                            questionHeading: 'While Loops',
                            questionLink: '',
                            gfgLink:
                                'https://practice.geeksforgeeks.org/problems/while-loop-printtable-java/1',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                        {
                            questionHeading:
                                'Functions [Pass by Value and Pass by Reference]',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                        {
                            questionHeading:
                                'Time Complexity [Learn Basics, and then analyse in next Steps]',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
                {
                    categoryId: 2,
                    categoryName: 'Build Up Logical Thinking',
                    categoryTotalQuestions: '0',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: 'Do all these patterns',
                            questionLink:
                                'https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-before-starting-dsa/',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
                {
                    categoryId: 3,
                    categoryName:
                        'Learn STL /Java Collection or similar thing in your language',
                    categoryTotalQuestions: '2',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: 'C++ STL',
                            questionLink:
                                'https://takeuforward.org/c/c-stl-tutorial-most-frequent-used-stl-containers/',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink:
                                'https://www.youtube.com/watch?v=RRVYpIET_RU',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                        {
                            questionHeading: 'Java Collections',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
                {
                    categoryId: 4,
                    categoryName: 'Know Basic Maths',
                    categoryTotalQuestions: '7',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: 'Count Digits',
                            questionLink:
                                'https://takeuforward.org/data-structure/count-digits-in-a-number/',
                            gfgLink:
                                'https://practice.geeksforgeeks.org/problems/count-digits5716/1',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                        {
                            questionHeading: 'Reverse a Number',
                            questionLink: '',
                            gfgLink:
                                'https://practice.geeksforgeeks.org/problems/reverse-bits3556/1',
                            leetCodeLink:
                                'https://leetcode.com/problems/reverse-integer/',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                        {
                            questionHeading: 'Check Palindrome',
                            questionLink:
                                'https://takeuforward.org/data-structure/check-if-a-number-is-palindrome-or-not/',
                            gfgLink:
                                'https://practice.geeksforgeeks.org/problems/palindrome0746/1',
                            leetCodeLink:
                                'https://leetcode.com/problems/palindrome-number/',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                        {
                            questionHeading: 'GCD or HCF',
                            questionLink:
                                'https://takeuforward.org/data-structure/find-gcd-of-two-numbers/',
                            gfgLink:
                                'https://practice.geeksforgeeks.org/problems/lcm-and-gcd4516/1',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                        {
                            questionHeading: 'Armstrong Number',
                            questionLink:
                                'https://takeuforward.org/maths/check-if-a-number-is-armstrong-number-or-not/',
                            gfgLink:
                                'https://practice.geeksforgeeks.org/problems/armstrong-numbers2727/1',
                            leetCodeLink:
                                'https://leetcode.com/problems/armstrong-number/',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                        {
                            questionHeading: 'Print all Divisor',
                            questionLink:
                                'https://takeuforward.org/data-structure/print-all-divisors-of-a-given-number/',
                            gfgLink:
                                'https://practice.geeksforgeeks.org/problems/sum-of-all-divisors-from-1-to-n4738/1',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                        {
                            questionHeading: 'Check for Prime',
                            questionLink:
                                'https://takeuforward.org/data-structure/check-if-a-number-is-prime-or-not/',
                            gfgLink:
                                'https://practice.geeksforgeeks.org/problems/minimum-number-of-jumps-1587115620/1',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
                {
                    categoryId: 5,
                    categoryName: 'Learn Basic Recursion',
                    categoryTotalQuestions: '9',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading:
                                'Understand recursion by print something N times',
                            questionLink: '',
                            gfgLink:
                                'https://practice.geeksforgeeks.org/problems/print-1-to-n-without-using-loops-1587115620/1',
                            leetCodeLink: '',
                            youTubeLink:
                                'https://www.youtube.com/watch?v=yVdKa8dnKiE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                        {
                            questionHeading:
                                'Print name N times using recursion',
                            questionLink: '',
                            gfgLink:
                                'https://practice.geeksforgeeks.org/problems/print-gfg-n-times/1',
                            leetCodeLink: '',
                            youTubeLink:
                                'https://www.youtube.com/watch?v=un6PLygfXrA&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                        {
                            questionHeading: 'Print 1 to N using recursion',
                            questionLink: '',
                            gfgLink:
                                'https://practice.geeksforgeeks.org/problems/print-1-to-n-without-using-loops-1587115620/1',
                            leetCodeLink: '',
                            youTubeLink:
                                'https://www.youtube.com/watch?v=un6PLygfXrA&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                        {
                            questionHeading: 'Print N to 1 using recursion',
                            questionLink: '',
                            gfgLink:
                                'https://practice.geeksforgeeks.org/problems/print-n-to-1-without-loop/1',
                            leetCodeLink: '',
                            youTubeLink:
                                'https://www.youtube.com/watch?v=un6PLygfXrA&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9&index=2',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                        {
                            questionHeading: 'Sum of first N numbers',
                            questionLink:
                                'https://takeuforward.org/data-structure/sum-of-first-n-natural-numbers/',
                            gfgLink:
                                'https://practice.geeksforgeeks.org/problems/sum-of-first-n-terms5843/1',
                            leetCodeLink: '',
                            youTubeLink:
                                'https://www.youtube.com/watch?v=69ZCDFy-OUo&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9&index=3',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                        {
                            questionHeading: 'Factorial of N numbers',
                            questionLink: '',
                            gfgLink:
                                'https://practice.geeksforgeeks.org/problems/find-all-factorial-numbers-less-than-or-equal-to-n3548/0?problemType=functional&difficulty[]=-1&page=1&query=problemTypefunctionaldifficulty[]-1page1',
                            leetCodeLink: '',
                            youTubeLink:
                                'https://www.youtube.com/watch?v=69ZCDFy-OUo&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9&index=3',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                        {
                            questionHeading: 'Reverse and Array',
                            questionLink:
                                'https://takeuforward.org/data-structure/reverse-a-given-array/',
                            gfgLink:
                                'https://practice.geeksforgeeks.org/problems/reverse-an-array/0',
                            leetCodeLink: '',
                            youTubeLink:
                                'https://www.youtube.com/watch?v=twuC1F6gLI8&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9&index=4',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                        {
                            questionHeading:
                                'Check if a string is palindrome or not',
                            questionLink:
                                'https://takeuforward.org/data-structure/check-if-the-given-string-is-palindrome-or-not/',
                            gfgLink:
                                'https://practice.geeksforgeeks.org/problems/palindrome-string0817/1',
                            leetCodeLink:
                                'https://leetcode.com/problems/valid-palindrome/',
                            youTubeLink:
                                'https://www.youtube.com/watch?v=twuC1F6gLI8&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9&index=4',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                        {
                            questionHeading: 'Fibonacci Number',
                            questionLink:
                                'https://takeuforward.org/arrays/print-fibonacci-series-up-to-nth-term/',
                            gfgLink:
                                'https://practice.geeksforgeeks.org/problems/print-first-n-fibonacci-numbers1002/1',
                            leetCodeLink:
                                'https://leetcode.com/problems/fibonacci-number/',
                            youTubeLink:
                                'https://www.youtube.com/watch?v=kvRjNm4rVBE&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9&index=5',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
                {
                    categoryId: 6,
                    categoryName: 'Learn Basic Hashing',
                    categoryTotalQuestions: '2',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading:
                                'Count Frequencies of Array Elements',
                            questionLink:
                                'https://takeuforward.org/data-structure/count-frequency-of-each-element-in-the-array/',
                            gfgLink:
                                'https://practice.geeksforgeeks.org/problems/frequency-of-array-elements-1587115620/0',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                        {
                            questionHeading:
                                'Find the Highest/Lowest Frequency Element',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
            ],
        },
        {
            contentPath: '/learn_important_sorting_techniques',
            contentHeading: 'Learn Important Sorting Techniques',
            contentSubHeading: '',
            contentTotalQuestions: '7',
            contentCompletedQuestions: '0',
            categoryList: [
                {
                    categoryId: 1,
                    categoryName: 'Sorting-I',
                    categoryTotalQuestions: '3',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: '',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
                {
                    categoryId: 2,
                    categoryName: 'Sorting-II',
                    categoryTotalQuestions: '4',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: '',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
            ],
        },
        {
            contentPath: '/solve_problem_on_array',
            contentHeading: 'Solve Problem on Array',
            contentSubHeading: 'Easy -> Medium -> Hard',
            contentTotalQuestions: '41',
            contentCompletedQuestions: '0',
            categoryList: [
                {
                    categoryId: 1,
                    categoryName: 'Easy',
                    categoryTotalQuestions: '16',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: '',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
                {
                    categoryId: 2,
                    categoryName: 'Medium',
                    categoryTotalQuestions: '13',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: '',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
                {
                    categoryId: 3,
                    categoryName: 'Hard',
                    categoryTotalQuestions: '12',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: '',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
            ],
        },
        {
            contentPath: '/binary_search',
            contentHeading: 'Binary Search',
            contentSubHeading: '1D, 2D Arrays, Space Search',
            contentTotalQuestions: '31',
            contentCompletedQuestions: '0',
            categoryList: [
                {
                    categoryId: 1,
                    categoryName: 'Learning BS on 1D Arrays',
                    categoryTotalQuestions: '14',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: '',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
                {
                    categoryId: 2,
                    categoryName: 'Applying BS on 2D Arrays',
                    categoryTotalQuestions: '3',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: '',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
                {
                    categoryId: 3,
                    categoryName: 'Final Answers by BS in Search Space',
                    categoryTotalQuestions: '14',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: '',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
            ],
        },
        {
            contentPath: '/strings_part_1',
            contentHeading: 'Strings',
            contentSubHeading: 'Basic and Medium',
            contentTotalQuestions: '15',
            contentCompletedQuestions: '0',
            categoryList: [
                {
                    categoryId: 1,
                    categoryName: 'Basic and Easy String Problems',
                    categoryTotalQuestions: '7',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: '',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
                {
                    categoryId: 2,
                    categoryName: 'Medium String Problems',
                    categoryTotalQuestions: '8',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: '',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
            ],
        },
        {
            contentPath: '/learn_linked_list',
            contentHeading: 'Learn Linked List',
            contentSubHeading: 'Single/Double LL, Medium, Hard',
            contentTotalQuestions: '31',
            contentCompletedQuestions: '0',
            categoryList: [
                {
                    categoryId: 1,
                    categoryName: 'Learn 1D Linked List',
                    categoryTotalQuestions: '5',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: '',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
                {
                    categoryId: 2,
                    categoryName: 'Learn Doubly Linked List',
                    categoryTotalQuestions: '4',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: '',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
                {
                    categoryId: 3,
                    categoryName: 'Medium Problems on Linked List',
                    categoryTotalQuestions: '15',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: '',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
                {
                    categoryId: 4,
                    categoryName: 'Medium Problems on Doubly Linked List',
                    categoryTotalQuestions: '3',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: '',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
                {
                    categoryId: 5,
                    categoryName: 'Hard Problems on Linked List',
                    categoryTotalQuestions: '4',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: '',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
            ],
        },
        {
            contentPath: '/recursion',
            contentHeading: 'Recursion',
            contentSubHeading: 'Pattern Wise',
            contentTotalQuestions: '25',
            contentCompletedQuestions: '0',
            categoryList: [
                {
                    categoryId: 1,
                    categoryName: 'Get a Strong Hold',
                    categoryTotalQuestions: '5',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading:
                                'Recursive Implementation of atoi()',
                            questionLink: '',
                            gfgLink:
                                'https://practice.geeksforgeeks.org/problems/implement-atoi/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=implement-atoi',
                            leetCodeLink:
                                'https://leetcode.com/problems/string-to-integer-atoi/',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                        {
                            questionHeading: 'Pow(x, n)',
                            questionLink:
                                'https://takeuforward.org/data-structure/implement-powxn-x-raised-to-the-power-n/',
                            gfgLink:
                                'https://practice.geeksforgeeks.org/problems/power-of-numbers-1587115620/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=power-of-numbers',
                            leetCodeLink:
                                'https://leetcode.com/problems/powx-n/',
                            youTubeLink: 'https://youtu.be/l0YC3876qxg',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                        {
                            questionHeading: 'Count Good numbers',
                            questionLink: '',
                            gfgLink:
                                'https://practice.geeksforgeeks.org/problems/good-numbers4629/1',
                            leetCodeLink:
                                'https://leetcode.com/problems/count-good-numbers/',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                        {
                            questionHeading: 'Sort a stack using recursion',
                            questionLink: '',
                            gfgLink:
                                'https://practice.geeksforgeeks.org/problems/sort-a-stack/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=sort-a-stack',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                        {
                            questionHeading: 'Reverse a stack using recursion',
                            questionLink: '',
                            gfgLink:
                                'https://practice.geeksforgeeks.org/problems/reverse-a-stack/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=reverse-a-stack',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
                {
                    categoryId: 2,
                    categoryName: 'Subsequences Pattern',
                    categoryTotalQuestions: '12',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: 'Generate all binary strings',
                            questionLink: '',
                            gfgLink:
                                'https://www.geeksforgeeks.org/generate-binary-strings-without-consecutive-1s/?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=generate-binary-strings-without-consecutive-1s',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                        {
                            questionHeading: 'Generate Paranthesis',
                            questionLink: '',
                            gfgLink:
                                'https://practice.geeksforgeeks.org/problems/generate-all-possible-parentheses/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=generate-all-possible-parentheses',
                            leetCodeLink:
                                'https://leetcode.com/problems/generate-parentheses/',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                        {
                            questionHeading: 'Print all subsequences/Power Set',
                            questionLink:
                                'https://takeuforward.org/data-structure/power-set-print-all-the-possible-subsequences-of-the-string/',
                            gfgLink:
                                'https://practice.geeksforgeeks.org/problems/power-set4302/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=power-set',
                            leetCodeLink:
                                'https://leetcode.com/problems/subsets/',
                            youTubeLink: 'https://youtu.be/b7AYbpM5YrE',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                        {
                            questionHeading:
                                'Learn All Patterns of Subsequences (Theory)',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink:
                                'https://www.youtube.com/watch?v=eQCS_v3bw0Q&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9&index=7',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                        {
                            questionHeading:
                                'Count all subsequences with sum K',
                            questionLink: '',
                            gfgLink:
                                'https://practice.geeksforgeeks.org/problems/perfect-sum-problem5633/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=perfect-sum-problem',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                        {
                            questionHeading:
                                'Check if there exists a subsequence with sum K',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                        {
                            questionHeading: 'Combination Sum',
                            questionLink:
                                'https://takeuforward.org/data-structure/combination-sum-1/',
                            gfgLink:
                                'https://practice.geeksforgeeks.org/problems/combination-sum-1587115620/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=combination-sum',
                            leetCodeLink:
                                'https://leetcode.com/problems/combination-sum/',
                            youTubeLink:
                                'https://www.youtube.com/watch?v=OyZFFqQtu98&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=49',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                        {
                            questionHeading: 'Combination Sum-II',
                            questionLink:
                                'https://takeuforward.org/data-structure/combination-sum-ii-find-all-unique-combinations/',
                            gfgLink: '',
                            leetCodeLink:
                                'https://leetcode.com/problems/combination-sum-ii/',
                            youTubeLink:
                                'https://www.youtube.com/watch?v=G1fRTGRxXU8&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=50',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                        {
                            questionHeading: 'Combination Sum – III',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink:
                                'https://leetcode.com/problems/combination-sum-iii/',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                        {
                            questionHeading: 'Subset Sum-I',
                            questionLink: '',
                            gfgLink:
                                'https://practice.geeksforgeeks.org/problems/subset-sums2234/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=subset-sums',
                            leetCodeLink: '',
                            youTubeLink:
                                'https://www.youtube.com/watch?v=rYkfBRtMJr8&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=52',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                        {
                            questionHeading: 'Subset Sum-II',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink:
                                'https://leetcode.com/problems/subsets-ii/',
                            youTubeLink:
                                'https://www.youtube.com/watch?v=RIn3gOkbhQE&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=53',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                        {
                            questionHeading:
                                'Letter Combinations of a Phone number',
                            questionLink: '',
                            gfgLink:
                                'https://practice.geeksforgeeks.org/problems/possible-words-from-phone-digits-1587115620/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=possible-words-from-phone-digits',
                            leetCodeLink:
                                'https://leetcode.com/problems/letter-combinations-of-a-phone-number/',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
                {
                    categoryId: 3,
                    categoryName: 'Try out all Combos /Hard',
                    categoryTotalQuestions: '8',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: 'Palindrome Partitioning',
                            questionLink:
                                'https://takeuforward.org/data-structure/palindrome-partitioning/',
                            gfgLink:
                                'https://practice.geeksforgeeks.org/problems/palindromic-patitioning4845/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=palindromic-patitioning',
                            leetCodeLink:
                                'https://leetcode.com/problems/palindrome-partitioning/',
                            youTubeLink:
                                'https://www.youtube.com/watch?v=WBgsABoClE0&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=51',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                        {
                            questionHeading: 'Word Search',
                            questionLink:
                                'https://takeuforward.org/data-structure/word-search-leetcode/',
                            gfgLink:
                                'https://practice.geeksforgeeks.org/problems/word-search/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=word-search',
                            leetCodeLink:
                                'https://leetcode.com/problems/word-search/',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                        {
                            questionHeading: 'N Queen',
                            questionLink:
                                'https://takeuforward.org/data-structure/n-queen-problem-return-all-distinct-solutions-to-the-n-queens-puzzle/',
                            gfgLink:
                                'https://practice.geeksforgeeks.org/problems/n-queen-problem0315/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=n-queen-problem',
                            leetCodeLink:
                                'https://leetcode.com/problems/n-queens/',
                            youTubeLink:
                                'https://www.youtube.com/watch?v=i05Ju7AftcM&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=57',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                        {
                            questionHeading: 'Rat in a Maze',
                            questionLink:
                                'https://takeuforward.org/data-structure/rat-in-a-maze/',
                            gfgLink:
                                'https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=rat-in-a-maze-problem',
                            leetCodeLink: '',
                            youTubeLink:
                                'https://www.youtube.com/watch?v=bLGZhJlt4y0&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=60',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                        {
                            questionHeading: 'Word Break',
                            questionLink: '',
                            gfgLink:
                                'https://practice.geeksforgeeks.org/problems/word-break-part-23249/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=word-break-part-2',
                            leetCodeLink:
                                'https://leetcode.com/problems/word-break/',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                        {
                            questionHeading: 'M Coloring Problem',
                            questionLink:
                                'https://takeuforward.org/data-structure/m-coloring-problem/',
                            gfgLink:
                                'https://practice.geeksforgeeks.org/problems/m-coloring-problem-1587115620/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=m-coloring-problem',
                            leetCodeLink: '',
                            youTubeLink:
                                'https://www.youtube.com/watch?v=wuVwUK25Rfc&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=59',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                        {
                            questionHeading: 'Sudoko Solver',
                            questionLink:
                                'https://takeuforward.org/data-structure/sudoku-solver/',
                            gfgLink:
                                'https://practice.geeksforgeeks.org/problems/solve-the-sudoku-1587115621/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=solve-the-sudoku',
                            leetCodeLink:
                                'https://leetcode.com/problems/sudoku-solver/',
                            youTubeLink:
                                'https://www.youtube.com/watch?v=FWAIf_EVUKE&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=58',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                        {
                            questionHeading: 'Expression Add Operators',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink:
                                'https://leetcode.com/problems/expression-add-operators/',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
            ],
        },
        {
            contentPath: '/bit_manipulation',
            contentHeading: 'Bit Manipulation & Advanced Math',
            contentSubHeading: 'Concepts & Problems',
            contentTotalQuestions: '18',
            contentCompletedQuestions: '0',
            categoryList: [
                {
                    categoryId: 1,
                    categoryName: 'Learn Bit Manipulation',
                    categoryTotalQuestions: '8',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: '',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
                {
                    categoryId: 2,
                    categoryName: 'Interview Problems',
                    categoryTotalQuestions: '5',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: '',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
                {
                    categoryId: 3,
                    categoryName: 'Advanced Maths',
                    categoryTotalQuestions: '5',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: '',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
            ],
        },
        {
            contentPath: '/stack_n_queue',
            contentHeading: 'Stack & Queue',
            contentSubHeading: 'Pre-In-Post Fix, Monotonic Stack',
            contentTotalQuestions: '32',
            contentCompletedQuestions: '0',
            categoryList: [
                {
                    categoryId: 1,
                    categoryName: 'Learning',
                    categoryTotalQuestions: '8',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: '',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
                {
                    categoryId: 2,
                    categoryName: 'Prefix, Infix, Postfix Conversion Problems',
                    categoryTotalQuestions: '6',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: '',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
                {
                    categoryId: 3,
                    categoryName: 'Monotonic Stack /Queue Problem [Imp]',
                    categoryTotalQuestions: '12',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: '',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
                {
                    categoryId: 4,
                    categoryName: 'Implementation Problems',
                    categoryTotalQuestions: '6',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: '',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
            ],
        },
        {
            contentPath: '/sliding_window',
            contentHeading: 'Sliding Window & Two Pointers',
            contentSubHeading: 'Combined Problems',
            contentTotalQuestions: '12',
            contentCompletedQuestions: '0',
            categoryList: [
                {
                    categoryId: 1,
                    // eslint-disable-next-line sonarjs/no-duplicate-string
                    categoryName: 'Medium Problems',
                    categoryTotalQuestions: '8',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: '',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
                {
                    categoryId: 2,
                    // eslint-disable-next-line sonarjs/no-duplicate-string
                    categoryName: 'Hard Problems',
                    categoryTotalQuestions: '4',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: '',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
            ],
        },
        {
            contentPath: '/heaps',
            contentHeading: 'Heaps',
            contentSubHeading: 'Learning, Medium, Hard Problems',
            contentTotalQuestions: '17',
            contentCompletedQuestions: '0',
            categoryList: [
                {
                    categoryId: 1,
                    categoryName: 'Learning',
                    categoryTotalQuestions: '4',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: '',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
                {
                    categoryId: 2,
                    categoryName: 'Medium Problems',
                    categoryTotalQuestions: '7',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: '',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
                {
                    categoryId: 3,
                    categoryName: 'Hard Problems',
                    categoryTotalQuestions: '6',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: '',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
            ],
        },
        {
            contentPath: '/greedy',
            contentHeading: 'Greedy Algorithms',
            contentSubHeading: 'Easy -> Medium -> Hard',
            contentTotalQuestions: '16',
            contentCompletedQuestions: '0',
            categoryList: [
                {
                    categoryId: 1,
                    categoryName: 'Easy Problems',
                    categoryTotalQuestions: '5',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: '',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
                {
                    categoryId: 2,
                    categoryName: 'Medium /Hard Problems',
                    categoryTotalQuestions: '11',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: '',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
            ],
        },
        {
            contentPath: '/binary_tree',
            contentHeading: 'Binary Tree',
            contentSubHeading: 'Traversals, Medium and Hard Problems',
            contentTotalQuestions: '39',
            contentCompletedQuestions: '0',
            categoryList: [
                {
                    categoryId: 1,
                    categoryName: 'Traversals',
                    categoryTotalQuestions: '13',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: '',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
                {
                    categoryId: 2,
                    categoryName: 'Medium Problems',
                    categoryTotalQuestions: '12',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: '',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
                {
                    categoryId: 3,
                    categoryName: 'Hard Problems',
                    categoryTotalQuestions: '14',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: '',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
            ],
        },
        {
            contentPath: '/binary_search_tree',
            contentHeading: 'Binary Search Tree',
            contentSubHeading: 'Concept and Problems',
            contentTotalQuestions: '16',
            contentCompletedQuestions: '0',
            categoryList: [
                {
                    categoryId: 1,
                    categoryName: 'Concepts',
                    categoryTotalQuestions: '3',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: '',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
                {
                    categoryId: 2,
                    categoryName: 'Practice Problems',
                    categoryTotalQuestions: '13',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: '',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
            ],
        },
        {
            contentPath: '/graphs',
            contentHeading: 'Graphs',
            contentSubHeading: 'Concepts and Problems',
            contentTotalQuestions: '54',
            contentCompletedQuestions: '0',
            categoryList: [
                {
                    categoryId: 1,
                    categoryName: '',
                    categoryTotalQuestions: '',
                    categoryCompletedQuestions: '',
                    questionList: [
                        {
                            questionHeading: '',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
            ],
        },
        {
            contentPath: '/dp',
            contentHeading: 'Dynamic Programming',
            contentSubHeading: 'Patterns and Problems',
            contentTotalQuestions: '56',
            contentCompletedQuestions: '0',
            categoryList: [
                {
                    categoryId: 1,
                    categoryName: 'Introduction to DP',
                    categoryTotalQuestions: '1',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: '',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
                {
                    categoryId: 2,
                    categoryName: '1D DP',
                    categoryTotalQuestions: '5',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: '',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
                {
                    categoryId: 3,
                    categoryName: '2D /3D DP and DP on Grids',
                    categoryTotalQuestions: '7',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: '',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
                {
                    categoryId: 4,
                    categoryName: 'DP on Subsequence',
                    categoryTotalQuestions: '11',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: '',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
                {
                    categoryId: 5,
                    categoryName: 'DP on Strings',
                    categoryTotalQuestions: '10',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: '',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
                {
                    categoryId: 6,
                    categoryName: 'DP on Stocks',
                    categoryTotalQuestions: '6',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: '',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
                {
                    categoryId: 7,
                    categoryName: 'DP on LIS',
                    categoryTotalQuestions: '7',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: '',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
                {
                    categoryId: 8,
                    categoryName: 'MCM DP | Partition DP',
                    categoryTotalQuestions: '7',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: '',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
                {
                    categoryId: 9,
                    categoryName: 'DP on Squares',
                    categoryTotalQuestions: '2',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: '',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
            ],
        },
        {
            contentPath: '/tries',
            contentHeading: 'Tries',
            contentSubHeading: 'Concepts and Problems',
            contentTotalQuestions: '7',
            contentCompletedQuestions: '0',
            categoryList: [
                {
                    categoryId: 1,
                    categoryName: 'Theory',
                    categoryTotalQuestions: '1',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: '',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
                {
                    categoryId: 2,
                    categoryName: 'Problems',
                    categoryTotalQuestions: '6',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: '',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
            ],
        },
        {
            contentPath: '/strings_part_2',
            contentHeading: 'Strings',
            contentSubHeading: 'Hard Problems and Standard Algorithms',
            contentTotalQuestions: '9',
            contentCompletedQuestions: '0',
            categoryList: [
                {
                    categoryId: 1,
                    categoryName: 'Hard Problems',
                    categoryTotalQuestions: '9',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: '',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
            ],
        },
        {
            contentPath: '/request',
            contentHeading: 'Request From Striver',
            contentSubHeading: '',
            contentTotalQuestions: '0',
            contentCompletedQuestions: '0',
            categoryList: [
                {
                    categoryId: 1,
                    categoryName: 'Request',
                    categoryTotalQuestions: '0',
                    categoryCompletedQuestions: '0',
                    questionList: [
                        {
                            questionHeading: '',
                            questionLink: '',
                            gfgLink: '',
                            leetCodeLink: '',
                            youTubeLink: '',
                            isDone: false,
                            isBookmarked: false,
                            userNotes: '',
                        },
                    ],
                },
            ],
        },
    ],
    footer: {
        gitHubLink: 'https://github.com/aditya-190/A2Z-DSA-Tracker',
        originalDsaSheetLink:
            'https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/',
        originalAuthorLinkedInLink: 'https://in.linkedin.com/in/rajarvp',
    },
}

export default initialData
