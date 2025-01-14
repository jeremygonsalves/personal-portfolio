import React, { useState } from 'react';
import { Quote, RefreshCw } from 'lucide-react';

const stoicQuotes = [
  {
    text: "Waste no more time arguing what a good man should be. Be one.",
    author: "Marcus Aurelius"
  },
  {
    text: "The happiness of your life depends upon the quality of your thoughts.",
    author: "Marcus Aurelius"
  },
  {
    text: "You have power over your mind - not outside events. Realize this, and you will find strength.",
    author: "Marcus Aurelius"
  },
  {
    text: "The best revenge is not to be like your enemy.",
    author: "Marcus Aurelius"
  },
  {
    text: "Accept the things to which fate binds you, and love the people with whom fate brings you together, but do so with all your heart.",
    author: "Marcus Aurelius"
  },
  {
    text: "When you arise in the morning think of what a privilege it is to be alive, to think, to enjoy, to love.",
    author: "Marcus Aurelius"
  },
  {
    text: "We suffer more often in imagination than in reality.",
    author: "Seneca"
  },
  {
    text: "If a man knows not which port he sails, no wind is favorable.",
    author: "Seneca"
  },
  {
    text: "The greatest power we have is the power of choice.",
    author: "Seneca"
  },
  {
    text: "First say to yourself what you would be; then do what you have to do.",
    author: "Epictetus"
  },
{
  text: "He who fears death will never do anything worth of a man who is alive.",
  author: "Seneca"
},
{
  text: "Luck is what happens when preparation meets opportunity.",
  author: "Seneca"
},
{
  text: "Difficulties strengthen the mind, as labor does the body.",
  author: "Seneca"
},
{
  text: "It is not the man who has too little, but the man who craves more, that is poor.",
  author: "Seneca"
},
{
  text: "Wealth consists not in having great possessions, but in having few wants.",
  author: "Epictetus"
},
{
  text: "Man is not worried by real problems so much as by his imagined anxieties about real problems.",
  author: "Epictetus"
},
{
  text: "Don't explain your philosophy. Embody it.",
  author: "Epictetus"
},
{
  text: "The key is to keep company only with people who uplift you, whose presence calls forth your best.",
  author: "Epictetus"
},
{
  text: "No man is free who is not master of himself.",
  author: "Epictetus"
},
{
  text: "If you want to improve, be content to be thought foolish and stupid.",
  author: "Epictetus"
},
{
  text: "He who laughs at himself never runs out of things to laugh at.",
  author: "Epictetus"
},
{
  text: "To be even minded is the greatest virtue.",
  author: "Heraclitus"
},
{
  text: "Character is destiny.",
  author: "Heraclitus"
},
{
  text: "There is nothing permanent except change.",
  author: "Heraclitus"
},
{
  text: "The soul is dyed the color of its thoughts.",
  author: "Marcus Aurelius"
},
{
  text: "The best answer to anger is silence.",
  author: "Marcus Aurelius"
},
{
  text: "The only wealth which you will keep forever is the wealth you have given away.",
  author: "Marcus Aurelius"
},
{
  text: "The art of living is more like wrestling than dancing.",
  author: "Marcus Aurelius"
},
{
  text: "The universe is change; our life is what our thoughts make it.",
  author: "Marcus Aurelius"
},
{
  text: "The happiness of your life depends upon the quality of your thoughts.",
  author: "Marcus Aurelius"
},
{
  text: "You have power over your mind - not outside events. Realize this, and you will find strength.",
  author: "Marcus Aurelius"
},
{
  text: "The best revenge is not to be like your enemy.",
  author: "Marcus Aurelius"
},
{
  text: "Accept the things to which fate binds you, and love the people with whom fate brings you together, but do so with all your heart.",
  author: "Marcus Aurelius"
},
{
  text: "When you arise in the morning think of what a privilege it is to be alive, to think, to enjoy, to love.",
  author: "Marcus Aurelius"
},
{
  text: "We suffer more often in imagination than in reality.",
  author: "Seneca"
},
{
  text: "If a man knows not which port he sails, no wind is favorable.",
  author: "Seneca"
},
{
  text: "The greatest power we have is the power of choice.",
  author: "Seneca"
},
{
  text: "First say to yourself what you would be; then do what you have to do.",
  author: "Epictetus"
},
{
  text: "He who fears death will never do anything worth of a man who is alive.",
  author: "Seneca"
},
{
  text: "Luck is what happens when preparation meets opportunity.",
  author: "Seneca"
}
];

const DailyStoicQuote = () => {
  const [quote, setQuote] = useState(() => {
    const randomIndex = Math.floor(Math.random() * stoicQuotes.length);
    return stoicQuotes[randomIndex];
  });
  const [isRotating, setIsRotating] = useState(false); 

  const generateNewQuote = () => {
    setIsRotating(true);
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * stoicQuotes.length);
    } while (stoicQuotes[newIndex].text === quote.text);
    
    setQuote(stoicQuotes[newIndex]);
    setTimeout(() => setIsRotating(false), 500);
  };

  return (
    <div className="py-16 bg-black/30 backdrop-blur-sm mt-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Quote className="w-6 h-6 text-blue-600" />
            Daily Stoic Wisdom
          </h2>
          
          <div className="bg-black/20 backdrop-blur-sm p-8 rounded-lg border border-blue-800/30 mb-8 max-w-2xl">
            <blockquote className="text-xl md:text-2xl text-white mb-4 italic min-h-[80px]">
              "{quote.text}"
            </blockquote>
            <cite className="text-blue-500 font-medium not-italic block">
              — {quote.author}
            </cite>
          </div>

          <button
            onClick={generateNewQuote}
            className="flex items-center gap-2 px-6 py-3 bg-blue-900/30 hover:bg-blue-800/40 text-white rounded-lg transition-all duration-300 backdrop-blur-sm border border-blue-700/30"
          >
            <RefreshCw className={`w-5 h-5 ${isRotating ? 'animate-spin' : ''}`} />
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default DailyStoicQuote;