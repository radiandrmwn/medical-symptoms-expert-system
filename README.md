# Disease Detector Expert System

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
This structure allows for:

* Clear mapping between symptoms and conditions
* Storage of condition-specific information
* Easy addition of new conditions and symptoms
* Flexible matching algorithms

## 3. Reasoning
The system employs a rule-based inference engine with the following logic:

  ### 1. Symptom Collection

* Users select experienced symptoms from a predefined list
* Multiple symptoms can be selected to improve accuracy

  ### 2. Matching Algorithm
  
