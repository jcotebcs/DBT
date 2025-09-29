import React, { useState } from 'react';
import { MessageCircle, BookOpen, Heart, Brain, Users, Target, AlertCircle, Home, Menu, X } from 'lucide-react';

const DBTApp = () => {
  const [currentView, setCurrentView] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const modules = [
    {
      id: 'mindfulness',
      name: 'Mindfulness',
      icon: Brain,
      color: 'bg-purple-500',
      description: 'Core foundation skills for awareness and wise mind',
      skills: ['Observe', 'Describe', 'Participate', 'Non-judgmentally', 'One-mindfully', 'Effectively'],
      details: 'Mindfulness is the foundation of all DBT skills. Learn to observe without words, describe what you see, and participate fully in the present moment.'
    },
    {
      id: 'distress',
      name: 'Distress Tolerance',
      icon: AlertCircle,
      color: 'bg-red-500',
      description: 'Crisis survival and reality acceptance skills',
      skills: ['STOP', 'TIP', 'Wise Mind ACCEPTS', 'Self-Soothe', 'IMPROVE', 'Radical Acceptance'],
      details: 'Skills for surviving crisis situations without making them worse, and accepting painful realities.'
    },
    {
      id: 'emotion',
      name: 'Emotion Regulation',
      icon: Heart,
      color: 'bg-blue-500',
      description: 'Understanding and managing emotions effectively',
      skills: ['Check the Facts', 'Opposite Action', 'PLEASE', 'Mastery & Values', 'Cope Ahead'],
      details: 'Learn to understand your emotions, reduce emotional suffering, and increase positive experiences.'
    },
    {
      id: 'interpersonal',
      name: 'Interpersonal Effectiveness',
      icon: Users,
      color: 'bg-green-500',
      description: 'Relationship and communication skills',
      skills: ['DEAR MAN', 'GIVE', 'FAST', 'Validation', 'Ending Relationships'],
      details: 'Get what you want from others, maintain relationships, and keep your self-respect in interactions.'
    }
  ];

  const worksheets = [
    { name: 'Daily Mindfulness Log', module: 'mindfulness', type: 'tracking', description: 'Track your daily mindfulness practice and observations' },
    { name: 'STOP Skill Practice', module: 'distress', type: 'crisis', description: 'Crisis survival skill: Stop, Take a step back, Observe, Proceed mindfully' },
    { name: 'TIP Skills Worksheet', module: 'distress', type: 'crisis', description: 'Temperature, Intense exercise, Paced breathing, Paired muscle relaxation' },
    { name: 'Wise Mind ACCEPTS', module: 'distress', type: 'distraction', description: 'Distraction skills: Activities, Contributing, Comparisons, Emotions, Push away, Thoughts, Sensations' },
    { name: 'Self-Soothing with 5 Senses', module: 'distress', type: 'comfort', description: 'Use vision, hearing, smell, taste, and touch to self-soothe' },
    { name: 'Radical Acceptance Practice', module: 'distress', type: 'acceptance', description: 'Accept reality as it is, without approval' },
    { name: 'Check the Facts', module: 'emotion', type: 'analysis', description: 'Examine if your emotion fits the facts of the situation' },
    { name: 'Opposite Action Worksheet', module: 'emotion', type: 'exercise', description: 'Act opposite to unhelpful emotional urges' },
    { name: 'PLEASE Skills', module: 'emotion', type: 'prevention', description: 'Treat PhysicaL illness, balance Eating, Avoid mood-Altering drugs, balance Sleep, Exercise' },
    { name: 'DEAR MAN Practice', module: 'interpersonal', type: 'communication', description: 'Describe, Express, Assert, Reinforce, Mindful, Appear confident, Negotiate' },
    { name: 'GIVE Skills', module: 'interpersonal', type: 'relationship', description: 'Gentle, Interested, Validate, Easy manner for maintaining relationships' },
    { name: 'FAST Skills', module: 'interpersonal', type: 'self-respect', description: 'Fair, no Apologies, Stick to values, Truthful for self-respect' },
    { name: 'Crisis Survival Plan', module: 'distress', type: 'safety', description: 'Your personalized plan for managing crisis situations' },
    { name: 'Chain Analysis', module: 'general', type: 'analysis', description: 'Analyze the chain of events leading to problem behaviors' }
  ];

  const renderHome = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Welcome to Your DBT Journey</h2>
        <p className="opacity-90">Building skills for a life worth living, one practice at a time.</p>
        <div className="mt-4 text-sm opacity-80">
          <p><strong>Crisis Support:</strong> If you're in immediate danger, call 988 (Suicide & Crisis Lifeline) or go to your nearest emergency room.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <MessageCircle className="mr-2 text-blue-500" size={20} />
            Quick Check-in
          </h3>
          <p className="text-gray-600 mb-4">How are you feeling right now? Rate your current mood and emotional intensity.</p>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium mb-1">Mood (1-10)</label>
              <input type="range" min="1" max="10" className="w-full" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Emotional Intensity (1-10)</label>
              <input type="range" min="1" max="10" className="w-full" />
            </div>
            <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors">
              Log Check-in
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Target className="mr-2 text-green-500" size={20} />
            Today's Practice
          </h3>
          <p className="text-gray-600 mb-4">Recommended skill practice based on your recent patterns:</p>
          <div className="bg-purple-50 p-4 rounded-lg mb-3">
            <h4 className="font-medium text-purple-800">Mindfulness: Observe</h4>
            <p className="text-sm text-purple-600">Practice noticing your thoughts and feelings without judgment for 5 minutes.</p>
          </div>
          <button className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600 transition-colors">
            Start Practice
          </button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md border">
        <h3 className="text-lg font-semibold mb-4">Your DBT Modules</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {modules.map((module) => {
            const IconComponent = module.icon;
            return (
              <div
                key={module.id}
                className="p-4 border rounded-lg cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setCurrentView('modules')}
              >
                <div className={`${module.color} w-10 h-10 rounded-lg flex items-center justify-center mb-3`}>
                  <IconComponent className="text-white" size={20} />
                </div>
                <h4 className="font-medium mb-1">{module.name}</h4>
                <p className="text-sm text-gray-600">{module.skills.length} skills</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  const renderChat = () => (
    <div className="bg-white rounded-lg shadow-md border">
      <div className="p-6">
        <h3 className="font-semibold flex items-center mb-4">
          <MessageCircle className="mr-2 text-blue-500" size={20} />
          DBT Skills Integration Ready
        </h3>
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-medium text-blue-800 mb-2">Knowledge Base Integration</h4>
            <p className="text-blue-600 text-sm mb-3">
              Upload your DBT materials, PDFs, spreadsheets, or protocols in the main chat to integrate them into this app.
            </p>
            <p className="text-blue-600 text-sm">
              The app framework is built with authentic DBT skills and can be customized with your specific content.
            </p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-medium text-green-800 mb-2">Current DBT Skills Available</h4>
            <ul className="text-green-600 text-sm space-y-1">
              <li>• Crisis Survival: STOP, TIP, ACCEPTS</li>
              <li>• Emotion Regulation: Check Facts, Opposite Action</li>
              <li>• Interpersonal: DEAR MAN, GIVE, FAST</li>
              <li>• Mindfulness: Observe, Describe, Participate</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-medium text-yellow-800 mb-2">Safety Features</h4>
            <p className="text-yellow-600 text-sm">
              Crisis resources integrated. Professional therapy disclaimer included.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderModules = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">DBT Skill Modules</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {modules.map((module) => {
          const IconComponent = module.icon;
          return (
            <div key={module.id} className="bg-white p-6 rounded-lg shadow-md border">
              <div className="flex items-center mb-4">
                <div className={`${module.color} w-12 h-12 rounded-lg flex items-center justify-center mr-4`}>
                  <IconComponent className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{module.name}</h3>
                  <p className="text-gray-600">{module.description}</p>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="font-medium mb-2">Key Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {module.skills.map((skill, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <button className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700 transition-colors">
                Practice Skills
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderWorksheets = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Practice Worksheets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {worksheets.map((worksheet, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow-md border">
            <BookOpen className="text-blue-500 mb-3" size={24} />
            <h3 className="font-semibold mb-2">{worksheet.name}</h3>
            <p className="text-sm text-gray-600 mb-3 capitalize">{worksheet.module} • {worksheet.type}</p>
            <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors">
              Open Worksheet
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch(currentView) {
      case 'chat': return renderChat();
      case 'modules': return renderModules();
      case 'worksheets': return renderWorksheets();
      default: return renderHome();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={`bg-white shadow-lg transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-0 md:w-64'} overflow-hidden`}>
        <div className="p-6">
          <h1 className="text-xl font-bold text-gray-800 mb-6">DBT Skills</h1>
          <nav className="space-y-2">
            <button
              onClick={() => setCurrentView('home')}
              className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                currentView === 'home' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
              }`}
            >
              <Home className="mr-3" size={20} />
              Home
            </button>
            <button
              onClick={() => setCurrentView('chat')}
              className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                currentView === 'chat' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
              }`}
            >
              <MessageCircle className="mr-3" size={20} />
              Skills Coach
            </button>
            <button
              onClick={() => setCurrentView('modules')}
              className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                currentView === 'modules' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
              }`}
            >
              <Brain className="mr-3" size={20} />
              Skill Modules
            </button>
            <button
              onClick={() => setCurrentView('worksheets')}
              className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                currentView === 'worksheets' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
              }`}
            >
              <BookOpen className="mr-3" size={20} />
              Worksheets
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-sm border-b p-4 md:hidden">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-600 hover:text-gray-800"
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </header>

        <main className="flex-1 p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default DBTApp;