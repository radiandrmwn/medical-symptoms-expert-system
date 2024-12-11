export const conditions = {
    "common_cold": {
      name: "Common Cold",
      symptoms: ["runny_nose", "sore_throat", "cough", "mild_fever"],
      description: "A viral infection of the upper respiratory tract.",
      recommendations: [
        "Rest and sleep",
        "Stay hydrated",
        "Use over-the-counter cold medications"
      ]
    },
    "flu": {
      name: "Influenza",
      symptoms: ["high_fever", "body_aches", "fatigue", "cough", "headache"],
      description: "A viral infection that attacks your respiratory system.",
      recommendations: [
        "Rest and sleep",
        "Take fever-reducing medication",
        "Consult a healthcare provider if symptoms are severe"
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
    { id: "headache", label: "Headache" }
  ];