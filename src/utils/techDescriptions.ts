// Tech badge descriptions
export const getTechDescription = (tech: string): string => {
  const descriptions: Record<string, string> = {
    'AI Expert': 'Specialized in artificial intelligence and machine learning solutions, with expertise in neural networks and deep learning.',
    'Full Stack': 'End-to-end development capabilities across frontend, backend, and infrastructure.',
    'React Native': 'Mobile app development using React Native for cross-platform solutions.',
    'Node.js': 'Server-side JavaScript runtime for building scalable network applications.',
    'Python': 'Versatile programming language for AI, data science, and backend development.',
    'AWS': 'Amazon Web Services cloud platform expertise for scalable infrastructure.',
    'ChatGPT': 'Integration and development of AI-powered conversational interfaces.',
    'TensorFlow': 'Machine learning framework for building and deploying AI models.',
    'Swift': 'iOS app development using Apple\'s modern programming language.'
  };

  return descriptions[tech] || `Expert in ${tech} development`;
};