# Disease Detector Expert System

| Name           | NRP        | Kelas     |
| ---            | ---        | ----------|
| Samuel Josefano Kaloh| 5025221065| RSBP (IUP) |
| Radian Try Darmawan | 5025221097 | RSBP (IUP) |
| Ihsan Adhika Rahadian| 5025221080 | RSBP (IUP) |

A web-based expert system for preliminary medical diagnosis based on user symptoms. This system uses a rule-based approach to suggest possible medical conditions based on reported symptoms.

## 1. Knowledge Acquisition

The medical knowledge in this system was acquired through:

- Analysis of common medical conditions and their associated symptoms
- Structured representation of medical diagnosis patterns
- Collection of symptom-condition relationships
- Integration of basic medical recommendations

The system currently includes knowledge about several common conditions including:
- Common Cold
- Influenza
- And their associated symptoms, descriptions, and recommendations

### Knowledge Sources
- Primary care diagnostic patterns
- Common symptom-condition relationships
- Basic medical recommendations for common conditions

## 2. Knowledge Representation

The system represents medical knowledge through:

### Symptom Repository
```
symptoms = [
  { id: "runny_nose", label: "Runny Nose" },
  { id: "sore_throat", label: "Sore Throat" },
  // ... more symptoms
]
```
### Condition-Symptom Relationships
```
conditions = {
  "common_cold": {
    name: "Common Cold",
    symptoms: ["runny_nose", "sore_throat", "cough", "mild_fever"],
    description: "A viral infection of the upper respiratory tract.",
    recommendations: [
      "Rest and sleep",
      "Stay hydrated",
      "Use over-the-counter cold medications"
    ]
  }
  // ... more conditions
}
```

* Clear mapping between symptoms and conditions
* Storage of condition-specific information
* Easy addition of new conditions and symptoms
* Flexible matching algorithms

## 3. Reasoning
The system employs a rule-based inference engine. The inference process in a rule-based inference engine involves applying rules to facts to derive conclusions or make decisions. we apply it with the following logics:

  ### 1. Symptom Collection

* Users select experienced symptoms from a predefined list
* Multiple symptoms can be selected to improve accuracy

  ### 2. Matching Algorithm
  ```
  const matchingSymptoms = condition.symptoms.filter(symptom => 
  selectedSymptoms.includes(symptom)
  );

  const matchPercentage = (matchingSymptoms.length / condition.symptoms.length) * 100;
  ```

  ### 3. Confidence Calculation

  * Calculates match percentage based on number of matching symptoms
  * Considers the ratio of matched symptoms to total condition symptoms
  * Conditions with >50% match are included in results
 
  ### 4. Result Ranking

  * Results are sorted by confidence percentage
  * Higher matches appear first in recommendations
 
## 4. Evaluation
The system's effectiveness is measured through:

  ### Accuracy Metrics

  * Symptom matching accuracy
  * Condition identification precision
  * Recommendation relevance

  ### System Performance

  * Quick response time for diagnosis
  * Intuitive user interface
  * Clear presentation of results

  ### Limitations

  1. Scope
    * Limited to common conditions
    * Basic symptom matching
    * No consideration of symptom severity
  2. Medical Disclaimer
    * System provides preliminary suggestions only
    * Not a replacement for professional medical diagnosis
    * Should be used as a initial reference tool

  ## Running The Project

  1. Clone the repository
```
git clone https://github.com/yourusername/medical-expert-system.git
```

  2. Install dependencies
```
cd medical-expert-system
npm install
```

  3. Start the development server
```
npm start
```

Visit `http://localhost:3000` to use the system.
