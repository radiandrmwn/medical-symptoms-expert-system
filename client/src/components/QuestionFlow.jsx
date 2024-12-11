import React, { useState } from 'react';
import { symptoms } from '../data/medicalKnowledge';
import { diagnoseConditions } from '../utils/inferenceEngine';

const QuestionFlow = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [results, setResults] = useState(null);

  const handleSymptomToggle = (symptomId) => {
    setSelectedSymptoms(prev => 
      prev.includes(symptomId)
        ? prev.filter(id => id !== symptomId)
        : [...prev, symptomId]
    );
  };

  const handleDiagnosis = () => {
    const diagnosisResults = diagnoseConditions(selectedSymptoms);
    setResults(diagnosisResults);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Medical Symptom Checker</h1>
        
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {symptoms.map(symptom => (
              <div 
                key={symptom.id} 
                className={`p-3 border rounded-lg cursor-pointer ${
                  selectedSymptoms.includes(symptom.id) 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200'
                }`}
                onClick={() => handleSymptomToggle(symptom.id)}
              >
                {symptom.label}
              </div>
            ))}
          </div>
          
          <button
            onClick={handleDiagnosis}
            disabled={selectedSymptoms.length === 0}
            className={`w-full py-2 rounded-lg font-semibold ${
              selectedSymptoms.length > 0 
                ? 'bg-blue-500 text-white hover:bg-blue-600' 
                : 'bg-gray-200 text-gray-500'
            }`}
          >
            Check Symptoms
          </button>
        </div>

        {results && (
          <div className="mt-6 space-y-4">
            <h2 className="text-xl font-semibold">Possible Conditions:</h2>
            {results.map((result, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h3 className="font-semibold">
                  {result.condition} ({result.percentage.toFixed(1)}% match)
                </h3>
                <p className="mt-2 text-gray-600">{result.description}</p>
                <div className="mt-2">
                  <h4 className="font-medium">Recommendations:</h4>
                  <ul className="list-disc pl-5 text-gray-600">
                    {result.recommendations.map((rec, idx) => (
                      <li key={idx}>{rec}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionFlow;