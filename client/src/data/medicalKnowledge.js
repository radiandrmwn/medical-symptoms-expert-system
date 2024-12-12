export const conditions = {
    "common_cold": {
      name: "Common Cold",
      symptoms: ["runny_nose", "sore_throat", "cough", "mild_fever", "congestion", "sneezing"],
      description: "A viral infection of the upper respiratory tract.",
      recommendations: [
        "Rest and sleep",
        "Stay hydrated",
        "Use over-the-counter cold medications"
      ]
    },
    "flu": {
      name: "Influenza",
      symptoms: ["high_fever", "body_aches", "fatigue", "cough", "headache", "congestion"],
      description: "A viral infection that attacks your respiratory system.",
      recommendations: [
        "Rest and sleep",
        "Take fever-reducing medication",
        "Consult a healthcare provider if symptoms are severe"
      ]
    },
    "migraine": {
      name: "Migraine",
      symptoms: ["severe_headache", "nausea", "light_sensitivity", "sound_sensitivity", "vomiting"],
      description: "A severe headache disorder causing intense throbbing pain.",
      recommendations: [
        "Rest in a dark, quiet room",
        "Take prescribed migraine medication",
        "Apply cold compress to head or neck",
        "Stay hydrated"
      ]
    },
    "gastritis": {
      name: "Gastritis",
      symptoms: ["nausea", "vomiting", "stomach_pain", "fatigue"],
      description: "Inflammation of the stomach lining causing digestive distress.",
      recommendations: [
        "Eat smaller, frequent meals",
        "Avoid spicy and acidic foods",
        "Take prescribed antacids",
        "Stay hydrated"
      ]
    },
    "food_poisoning": {
      name: "Food Poisoning",
      symptoms: ["nausea", "vomiting", "diarrhea", "stomach_pain", "mild_fever"],
      description: "Illness caused by eating contaminated food.",
      recommendations: [
        "Stay hydrated with clear fluids",
        "Rest your stomach",
        "Gradually reintroduce bland foods",
        "Seek medical attention if symptoms are severe"
      ]
    },
    "seasonal_allergies": {
      name: "Seasonal Allergies",
      symptoms: ["runny_nose", "sneezing", "itchy_eyes", "congestion"],
      description: "Allergic reaction to seasonal environmental triggers like pollen.",
      recommendations: [
        "Take antihistamines",
        "Avoid triggers when possible",
        "Use air purifiers",
        "Consider nasal irrigation"
      ]
    },
    "sinus_infection": {
      name: "Sinus Infection",
      symptoms: ["congestion", "headache", "sore_throat", "cough", "runny_nose"],
      description: "Infection or inflammation of the sinus cavities.",
      recommendations: [
        "Use nasal decongestants",
        "Try nasal irrigation",
        "Get plenty of rest",
        "Consider antibiotics if bacterial (consult doctor)"
      ]
    },
    "stomach_virus": {
      name: "Stomach Virus",
      symptoms: ["nausea", "vomiting", "diarrhea", "stomach_pain", "mild_fever", "fatigue"],
      description: "Viral infection affecting the stomach and intestines.",
      recommendations: [
        "Stay hydrated with clear fluids",
        "Rest",
        "Follow BRAT diet (Bananas, Rice, Applesauce, Toast)",
        "Avoid dairy and fatty foods"
      ]
    },
    "pneumonia": {
        name: "Pneumonia",
        symptoms: ["shortness_breath", "high_fever", "cough", "fatigue", "chest_pain"],
        description: "An infection that inflames the air sacs in one or both lungs.",
        recommendations: [
            "Seek immediate medical attention",
            "Take prescribed antibiotics if bacterial",
            "Get plenty of rest",
            "Stay hydrated"
        ]
    },
    
    "bronchitis": {
        name: "Bronchitis",
        symptoms: ["cough", "shortness_breath", "fatigue", "mild_fever", "chest_pain"],
        description: "Inflammation of the lining of bronchial tubes that carry air to and from the lungs.",
        recommendations: [
            "Rest and stay hydrated",
            "Use a humidifier",
            "Take cough suppressants if prescribed",
            "Avoid smoking and secondhand smoke"
        ]
    },

    "rheumatoid_arthritis": {
        name: "Rheumatoid Arthritis",
        symptoms: ["joint_pain", "muscle_weakness", "fatigue", "body_aches"],
        description: "An autoimmune inflammatory disorder affecting joints.",
        recommendations: [
            "Consult a rheumatologist",
            "Take prescribed medications",
            "Gentle exercise and stretching",
            "Apply hot/cold therapy to affected joints"
        ]
    },

    "allergic_reaction": {
        name: "Allergic Reaction",
        symptoms: ["rash", "shortness_breath", "dizziness", "itchy_eyes", "nausea"],
        description: "An overreaction of the immune system to a substance.",
        recommendations: [
            "Seek immediate medical attention if severe",
            "Take antihistamines if prescribed",
            "Avoid known allergens",
            "Keep an allergy diary"
        ]
    },

    "vertigo": {
        name: "Vertigo",
        symptoms: ["dizziness", "nausea", "headache", "muscle_weakness", "vomiting"],
        description: "A sensation of spinning and dizziness affecting balance.",
        recommendations: [
            "Sit or lie down when dizzy",
            "Avoid sudden movements",
            "Consult a healthcare provider",
            "Try prescribed vestibular exercises"
        ]
    },

    "covid19": {
        name: "COVID-19",
        symptoms: ["shortness_breath", "high_fever", "fatigue", "cough", "chest_pain", "body_aches"],
        description: "A respiratory illness caused by the SARS-CoV-2 virus.",
        recommendations: [
            "Isolate immediately",
            "Contact healthcare provider",
            "Monitor oxygen levels",
            "Stay hydrated and rest",
            "Follow local health guidelines"
        ]
    }
};

export const symptoms = [
    { id: "runny_nose", label: "Runny Nose" },
    { id: "sore_throat", label: "Sore Throat" },
    { id: "cough", label: "Cough" },
    { id: "mild_fever", label: "Mild Fever" },
    { id: "high_fever", label: "High Fever" },
    { id: "body_aches", label: "Body Aches" },
    { id: "fatigue", label: "Fatigue" },
    { id: "headache", label: "Headache" },
    { id: "severe_headache", label: "Severe Headache" },
    { id: "nausea", label: "Nausea" },
    { id: "light_sensitivity", label: "Sensitivity to Light" },
    { id: "sound_sensitivity", label: "Sensitivity to Sound" },
    { id: "sneezing", label: "Sneezing" },
    { id: "itchy_eyes", label: "Itchy Eyes" },
    { id: "congestion", label: "Nasal Congestion" },
    { id: "vomiting", label: "Vomiting" },
    { id: "diarrhea", label: "Diarrhea" },
    { id: "stomach_pain", label: "Stomach Pain" },
    { id: "joint_pain", label: "Joint Pain" },
    { id: "rash", label: "Skin Rash" },
    { id: "shortness_breath", label: "Shortness of Breath" },
    { id: "dizziness", label: "Dizziness" },
    { id: "chest_pain", label: "Chest Pain" },
    { id: "muscle_weakness", label: "Muscle Weakness" }
];
