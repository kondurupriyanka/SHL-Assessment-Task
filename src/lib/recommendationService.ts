
import { Assessment, RecommendationResponse } from "./types";
import { shlAssessments } from "./mockData";

// Simple recommendation algorithm based on keyword matching and duration filtering
export const getRecommendations = (query: string, maxResults: number = 10): RecommendationResponse => {
  // Convert query to lowercase for case-insensitive matching
  const lowerQuery = query.toLowerCase();
  
  // Extract duration constraints if any
  const durationMatch = lowerQuery.match(/(\d+)\s*minutes?|(\d+)\s*mins?/i);
  let maxDuration: number | null = null;
  
  if (durationMatch) {
    const minutes = parseInt(durationMatch[1] || durationMatch[2]);
    if (!isNaN(minutes)) {
      maxDuration = minutes;
    }
  }
  
  // Score each assessment based on keyword matches
  const scoredAssessments = shlAssessments.map(assessment => {
    let score = 0;
    
    // Check if duration constraint is met
    if (maxDuration) {
      const assessmentDuration = parseInt(assessment.duration.replace(/\D/g, ''));
      if (assessmentDuration > maxDuration) {
        return { assessment, score: -1 }; // Exclude from results
      }
    }
    
    // Score based on name and description match
    if (assessment.name.toLowerCase().includes(lowerQuery)) score += 5;
    if (assessment.description.toLowerCase().includes(lowerQuery)) score += 3;
    
    // Score based on keyword match
    for (const keyword of assessment.keywords) {
      if (lowerQuery.includes(keyword)) score += 2;
    }
    
    // Score based on skills match
    for (const skill of assessment.skills) {
      if (lowerQuery.includes(skill.toLowerCase())) score += 3;
    }
    
    // Check for specific test types in the query
    const testTypes = ["cognitive", "technical", "personality", "behavioral"];
    for (const type of testTypes) {
      if (lowerQuery.includes(type) && assessment.testType.toLowerCase().includes(type)) {
        score += 4;
      }
    }
    
    // Check for specific programming languages
    const languages = ["java", "python", "javascript", "sql"];
    for (const lang of languages) {
      if (lowerQuery.includes(lang) && 
          (assessment.name.toLowerCase().includes(lang) || 
           assessment.skills.some(skill => skill.toLowerCase() === lang))) {
        score += 6;
      }
    }
    
    return { assessment, score };
  });
  
  // Filter out assessments with negative scores and sort by score
  const filteredAndSorted = scoredAssessments
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxResults);
  
  return {
    recommendations: filteredAndSorted.map(item => item.assessment),
    query
  };
};

// API endpoint simulation - would be replaced with actual API call in production
export const fetchRecommendations = async (query: string): Promise<RecommendationResponse> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 800));
  return getRecommendations(query);
};
