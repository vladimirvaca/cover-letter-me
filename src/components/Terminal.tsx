import React from 'react';

const Terminal: React.FC = () => {
  return (
    <div className="w-full max-w-[960px] px-4 md:px-10 mb-20 hidden md:block opacity-90 hover:opacity-100 transition-opacity">
      <div className="rounded-xl bg-[#0e1210] border border-black/5 dark:border-white/10 p-4 shadow-2xl font-mono text-sm overflow-hidden ring-1 ring-black/5">
        <div className="flex gap-2 mb-4">
          <div className="size-3 rounded-full bg-red-500"></div>
          <div className="size-3 rounded-full bg-yellow-500"></div>
          <div className="size-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-gray-400">
          <span className="text-purple-400">class</span>{' '}
          <span className="text-yellow-300">FullStackDeveloper</span>{' '}
          <span className="text-purple-400">extends</span>{' '}
          <span className="text-yellow-300">Engineer</span> {'{'}
          <br />
          &nbsp;&nbsp;<span className="text-purple-400">constructor</span>() {'{'}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">this</span>.
          <span className="text-blue-300">skills</span> = [
          <span className="text-green-400">'React'</span>,{' '}
          <span className="text-green-400">'Spring Boot'</span>,{' '}
          <span className="text-green-400">'AWS'</span>];
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">this</span>.
          <span className="text-blue-300">experience</span> ={' '}
          <span className="text-orange-400">10</span>;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">this</span>.
          <span className="text-blue-300">passion</span> ={' '}
          <span className="text-green-400">'Building scalable systems'</span>;<br />
          &nbsp;&nbsp;{'}'}
          <br />
          {'}'}
        </div>
      </div>
    </div>
  );
};

export default Terminal;
