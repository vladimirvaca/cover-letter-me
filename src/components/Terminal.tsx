import React from 'react';

// Indent component for code-like indentation
const Indent: React.FC<{ level?: number }> = ({ level = 1 }) => (
  <span style={{ display: 'inline-block', width: `${level * 2}ch` }} aria-hidden="true" />
);

// BestPracticeLine component for each best practice
const BestPracticeLine: React.FC<{ text: string; isLast?: boolean }> = ({ text, isLast }) => (
  <>
    <Indent level={2} />
    <span className="text-green-400">'{text}'</span>
    {isLast ? '' : ','}
    <br />
  </>
);

const languages = [
  'English',
  'Spanish',
];

const bestPractices = [
  'Clean code',
  'Design patterns',
  'SOLID principles',
  'Linting & formatting',
  'Code reviews',
  'Unit testing',
  'Integration testing',
  'End-to-end testing',
  'Automated testing',
  'CI/CD',
];

const experience = [
  '10+ years in full-stack development',
  'Mentored junior engineers',
  'Worked with international clients',
];

const Terminal: React.FC = () => {
  return (
    <div className="w-full max-w-240 px-4 md:px-10 mb-20 hidden md:block opacity-90 hover:opacity-100 transition-opacity">
      <div className="rounded-xl bg-[#0e1210] border border-black/5 dark:border-white/10 p-5 shadow-2xl font-mono text-sm overflow-hidden ring-1 ring-black/5">
        <div className="flex gap-2 mb-4">
          <div className="size-3 rounded-full bg-red-500"></div>
          <div className="size-3 rounded-full bg-yellow-500"></div>
          <div className="size-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-gray-400">
          <span className="text-purple-400">const</span>{' '}
          <span className="text-yellow-300">engineer</span>{' '}
          <span className="text-purple-400">=</span> &#123;
          <br />
          <Indent />
          <span className="text-blue-300">experience</span>: [<br />
          {experience.map((exp, idx) => (
            <BestPracticeLine key={exp} text={exp} isLast={idx === experience.length - 1} />
          ))}
          <Indent />
          ],<br />
          <Indent />
          <span className="text-blue-300">bestPractices</span>: [<br />
          {bestPractices.map((bp, idx) => (
            <BestPracticeLine key={bp} text={bp} isLast={idx === bestPractices.length - 1} />
          ))}
          <Indent />
          ],<br />
          <Indent />
          <span className="text-blue-300">work</span>: [<span className="text-green-400">'remote'</span>, <span className="text-green-400">'full-time'</span>],<br />
          <Indent />
          <span className="text-blue-300">languages</span>: [<br />
          {languages.map((lang, idx) => (
            <BestPracticeLine key={lang} text={lang} isLast={idx === languages.length - 1} />
          ))}
          <Indent />
          ],<br />
          &#125;;
          <br />
          <br />
          <span className="text-yellow-300">engineer</span>.
          <span className="text-blue-400">start</span>();
          <br />
          <span className="text-purple-400">console</span>.
          <span className="text-blue-400">log</span>(
          <span className="text-green-400">'Engineering in action: Building, testing 🛠️'</span>);
          <br />
          <span className="text-yellow-300">engineer</span>.
          <span className="text-blue-400">deploy</span>();
          <br />
          <span className="text-purple-400">console</span>.
          <span className="text-blue-400">log</span>(
          <span className="text-green-400">
            'Mission accomplished: Code shipped, impact delivered 🚀'
          </span>
          );
          <br />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
