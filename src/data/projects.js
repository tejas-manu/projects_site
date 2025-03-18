export const projects = [
    {
      id: 1,
      title: "DevOps Automation Pipeline",
      description: "A comprehensive CI/CD pipeline using Jenkins, Docker, and Kubernetes",
      image: "https://via.placeholder.com/400x250",
      tags: ["DevOps", "CI/CD", "Kubernetes", "Docker", "Jenkins"],
      category: "DevOps",
      github: "https://github.com/yourusername/project1",
      webapp: "https://project1.yourdomain.com",
      details: {
        overview: "This project implements a fully automated CI/CD pipeline for containerized applications.",
        features: [
          "Automated build and test processes using Jenkins",
          "Container orchestration with Kubernetes",
          "Infrastructure as Code using Terraform",
          "Monitoring with Prometheus and Grafana",
          "Automated rollbacks on failure detection"
        ],
        technologies: ["Jenkins", "Docker", "Kubernetes", "Terraform", "Prometheus", "Grafana"],
        challenges: "The main challenge was ensuring zero-downtime deployments while maintaining system integrity.",
        outcome: "Reduced deployment time by 70% and eliminated manual deployment errors."
      }
    },
    {
      id: 2,
      title: "Machine Learning Model Pipeline",
      description: "End-to-end ML pipeline for predictive analytics",
      image: "https://via.placeholder.com/400x250",
      tags: ["Python", "TensorFlow", "MLOps", "Data Science"],
      category: "Machine Learning",
      github: "https://github.com/yourusername/project2",
      webapp: "https://project2.yourdomain.com",
      details: {
        overview: "An end-to-end machine learning pipeline that automates data preprocessing, model training, and deployment.",
        features: [
          "Automated data preprocessing and feature engineering",
          "Hyperparameter tuning with cross-validation",
          "Model versioning and experiment tracking",
          "Automated model deployment to production",
          "A/B testing framework for model evaluation"
        ],
        technologies: ["Python", "TensorFlow", "Scikit-learn", "MLflow", "Docker", "Kubernetes"],
        challenges: "Ensuring model reproducibility and managing the ML lifecycle efficiently.",
        outcome: "Improved model accuracy by 15% and reduced time-to-production from weeks to hours."
      }
    },
    {
      id: 3,
      title: "Cloud-Native Microservices Architecture",
      description: "Scalable microservices application deployed on AWS",
      image: "https://via.placeholder.com/400x250",
      tags: ["Microservices", "AWS", "Cloud", "API Gateway"],
      category: "Cloud",
      github: "https://github.com/yourusername/project3",
      webapp: "https://project3.yourdomain.com",
      details: {
        overview: "A cloud-native application built using microservices architecture and deployed on AWS.",
        features: [
          "Event-driven architecture using AWS Lambda",
          "API Gateway for service orchestration",
          "Serverless database with DynamoDB",
          "Automated scaling based on demand",
          "Comprehensive monitoring and alerting"
        ],
        technologies: ["AWS Lambda", "API Gateway", "DynamoDB", "CloudWatch", "Terraform"],
        challenges: "Designing for high availability while maintaining data consistency across services.",
        outcome: "Achieved 99.99% uptime and reduced operational costs by 40%."
      }
    }
  ];