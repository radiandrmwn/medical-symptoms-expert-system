import { conditions } from '../data/medicalKnowledge';

export const diagnoseConditions = (selectedSymptoms) => {
  const results = [];
  
  for (const [conditionId, condition] of Object.entries(conditions)) {
    const matchingSymptoms = condition.symptoms.filter(symptom => 
      selectedSymptoms.includes(symptom)
    );
    
    const matchPercentage = (matchingSymptoms.length / condition.symptoms.length) * 100;
    
    if (matchPercentage > 50) {
      results.push({
        condition: condition.name,
        percentage: matchPercentage,
        description: condition.description,
        recommendations: condition.recommendations,
        matchingSymptoms: matchingSymptoms
      });
    }
  }
  
  return results.sort((a, b) => b.percentage - a.percentage);
};