-- INSERT NEW SKILLS
-- ============================================================

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Mempool Analysis', 'mempool-analysis', 'technical', 'Analyzing pending transactions and MEV opportunities in blockchain mempools')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('DeFi Protocol Internals', 'defi-protocol-internals', 'domain', 'Deep understanding of how DeFi protocols work at the code level')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Python', 'python', 'technical', 'General-purpose programming language used widely in data, ML, and automation')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Transaction Simulation', 'transaction-simulation', 'technical', 'Simulating blockchain transactions to predict outcomes and test strategies')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Flashbots / MEV-Boost', 'flashbots-mev-boost', 'tool', 'MEV infrastructure tools for fair transaction ordering')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Product Strategy', 'product-strategy', 'soft', 'Defining product vision, goals, and roadmap to maximize value')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('User Research', 'user-research', 'soft', 'Understanding user needs through interviews, surveys, and observation')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Roadmap Management', 'roadmap-management', 'soft', 'Planning and maintaining product roadmaps aligned with strategy')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('On-Chain Analytics', 'on-chain-analytics', 'domain', 'Analyzing blockchain data for product and protocol insights')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('A/B Testing', 'ab-testing', 'technical', 'Running controlled experiments to optimize product and marketing decisions')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Stakeholder Communication', 'stakeholder-communication', 'soft', 'Effectively communicating with stakeholders across functions and seniority levels')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Agile Methodology', 'agile-methodology', 'soft', 'Iterative development practices including Scrum, Kanban, and sprint planning')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Technical Writing', 'technical-writing', 'soft', 'Writing clear documentation, specs, and technical explanations')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Public Speaking', 'public-speaking', 'soft', 'Presenting ideas and knowledge to audiences at conferences and meetups')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('SDK Development', 'sdk-development', 'technical', 'Building software development kits for developer platforms')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Tutorial Creation', 'tutorial-creation', 'soft', 'Creating step-by-step educational content for developers and users')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Community Building', 'community-building', 'soft', 'Growing and nurturing engaged communities around products or brands')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('ZK-SNARKs / STARKs', 'zk-snarks-starks', 'technical', 'Zero-knowledge proof systems for privacy and scalability')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Circuit Design (Circom / Halo2)', 'circuit-design', 'technical', 'Designing arithmetic circuits for zero-knowledge proof systems')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Cryptography', 'cryptography', 'technical', 'Applied cryptographic techniques including hashing, encryption, and proofs')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Mathematical Proofs', 'mathematical-proofs', 'technical', 'Formal mathematical reasoning for protocol and proof system verification')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Protocol Design', 'protocol-design', 'technical', 'Designing distributed protocols for consensus, messaging, and computation')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Multi-Chain Architecture', 'multi-chain-architecture', 'technical', 'Designing systems that work across multiple blockchain networks')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Bridge Protocol Design', 'bridge-protocol-design', 'technical', 'Building protocols that move assets and data between blockchains')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Cross-Chain Messaging', 'cross-chain-messaging', 'technical', 'Implementing cross-chain communication using LayerZero, Wormhole, and similar protocols')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Security Engineering', 'security-engineering', 'technical', 'Building secure systems and implementing security best practices')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Consensus Mechanisms', 'consensus-mechanisms', 'domain', 'Understanding blockchain consensus algorithms like PoS, PoW, and BFT variants')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Prompt Design & Testing', 'prompt-design-testing', 'technical', 'Crafting and systematically testing prompts for large language models')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('LLM APIs', 'llm-apis', 'tool', 'Working with LLM APIs from OpenAI, Anthropic, and other providers')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Evaluation Frameworks', 'evaluation-frameworks', 'technical', 'Building systematic frameworks to evaluate AI model outputs')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Few-Shot / Chain-of-Thought', 'few-shot-chain-of-thought', 'technical', 'Advanced prompting techniques for improving LLM reasoning')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('RAG Architecture', 'rag-architecture', 'technical', 'Retrieval-augmented generation systems combining search with LLMs')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('ML Model Evaluation', 'ml-model-evaluation', 'technical', 'Assessing machine learning model performance, accuracy, and reliability')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Data-Driven Decision Making', 'data-driven-decision-making', 'soft', 'Making business and product decisions informed by quantitative data')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('AI Ethics Awareness', 'ai-ethics-awareness', 'domain', 'Understanding ethical implications and responsible AI deployment')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('PyTorch / TensorFlow', 'pytorch-tensorflow', 'tool', 'Deep learning frameworks for building and training neural networks')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Model Training & Fine-Tuning', 'model-training-fine-tuning', 'technical', 'Training and adapting ML models on custom datasets')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('MLOps Tools', 'mlops-tools', 'tool', 'ML operations tools like MLflow, Weights & Biases for experiment tracking')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Distributed Computing', 'distributed-computing', 'technical', 'Running computation across multiple machines for scale')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Data Pipeline Engineering', 'data-pipeline-engineering', 'technical', 'Building reliable data pipelines for ML training and inference')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('GPU Optimization', 'gpu-optimization', 'technical', 'Optimizing code and models for efficient GPU utilization')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('ML Research', 'ml-research', 'technical', 'Conducting original machine learning research and experiments')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Alignment Theory', 'alignment-theory', 'domain', 'Research on aligning AI systems with human values and intentions')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Red Teaming / Adversarial Testing', 'red-teaming-adversarial-testing', 'technical', 'Testing AI systems for vulnerabilities through adversarial approaches')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Interpretability Methods', 'interpretability-methods', 'technical', 'Techniques for understanding how AI models make decisions')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Evaluation Design', 'evaluation-design', 'technical', 'Designing comprehensive evaluation suites for AI systems')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Content Strategy', 'content-strategy', 'soft', 'Planning content that attracts and retains audiences')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('AI Writing Tools', 'ai-writing-tools', 'tool', 'AI-powered writing assistants like ChatGPT, Claude, and Jasper')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('SEO Optimization', 'seo-optimization', 'technical', 'Optimizing content and websites for search engine visibility')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Brand Voice Guidelines', 'brand-voice-guidelines', 'soft', 'Defining and maintaining consistent brand voice across channels')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Content Analytics', 'content-analytics', 'tool', 'Measuring content performance with analytics tools')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Workflow Automation', 'workflow-automation', 'technical', 'Automating repetitive processes using Zapier, Make, n8n, and similar tools')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('CNN / Vision Transformer Architectures', 'cnn-vision-transformers', 'technical', 'Neural network architectures for image and visual data processing')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Image Processing (OpenCV)', 'image-processing-opencv', 'tool', 'Computer vision library for image and video processing')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Object Detection', 'object-detection', 'technical', 'Detecting and localizing objects in images using YOLO, DETR, and similar models')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Data Augmentation', 'data-augmentation', 'technical', 'Techniques for expanding training datasets through transformations')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Model Optimization / ONNX', 'model-optimization-onnx', 'technical', 'Optimizing ML models for deployment using ONNX and quantization')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Transformer Architectures', 'transformer-architectures', 'technical', 'Understanding and implementing transformer-based neural networks')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Hugging Face', 'hugging-face', 'tool', 'ML platform for sharing models, datasets, and NLP pipelines')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Fine-Tuning / RLHF', 'fine-tuning-rlhf', 'technical', 'Adapting language models through fine-tuning and reinforcement learning from human feedback')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Text Classification & NER', 'text-classification-ner', 'technical', 'Classifying text and extracting named entities from documents')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Vector Databases', 'vector-databases', 'tool', 'Databases optimized for storing and querying vector embeddings')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('RAG Systems', 'rag-systems', 'technical', 'Building retrieval-augmented generation pipelines for production')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Evaluation Metrics (NLP)', 'evaluation-metrics-nlp', 'technical', 'Measuring NLP model quality with BLEU, ROUGE, and custom metrics')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Bias Auditing', 'bias-auditing', 'technical', 'Detecting and measuring bias in AI systems and datasets')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Fairness Metrics', 'fairness-metrics', 'technical', 'Quantitative metrics for measuring fairness in ML model outputs')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('AI Governance Frameworks', 'ai-governance-frameworks', 'domain', 'Frameworks for governing AI development and deployment responsibly')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Regulatory Compliance (AI)', 'regulatory-compliance-ai', 'domain', 'Compliance with AI regulations including the EU AI Act')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Impact Assessment', 'impact-assessment', 'soft', 'Assessing the social, ethical, and business impact of AI systems')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('AI API Integration', 'ai-api-integration', 'technical', 'Integrating AI APIs into applications and business workflows')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Process Mapping', 'process-mapping', 'soft', 'Documenting and analyzing business processes for improvement')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Python Scripting', 'python-scripting', 'technical', 'Writing Python scripts for automation and data processing')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('No-Code/Low-Code Platforms', 'no-code-low-code', 'tool', 'Visual development platforms for building apps without code')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Business Process Analysis', 'business-process-analysis', 'soft', 'Analyzing business workflows to find efficiency improvements')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Model Fine-Tuning (LoRA, QLoRA)', 'model-fine-tuning-lora', 'technical', 'Efficient fine-tuning techniques for large language models')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Dataset Curation', 'dataset-curation', 'technical', 'Collecting, cleaning, and organizing training datasets')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('GPU Infrastructure', 'gpu-infrastructure', 'technical', 'Managing GPU clusters and compute infrastructure for ML training')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Prompt Engineering', 'prompt-engineering', 'technical', 'Designing effective prompts to get optimal outputs from LLMs')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('RLHF / DPO', 'rlhf-dpo', 'technical', 'Reinforcement learning from human feedback and direct preference optimization')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Agent Frameworks', 'agent-frameworks', 'tool', 'AI agent orchestration tools like LangChain, CrewAI, and AutoGen')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Tool Integration & Function Calling', 'tool-integration-function-calling', 'technical', 'Enabling AI agents to use external tools and APIs via function calling')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Workflow Orchestration', 'workflow-orchestration', 'technical', 'Orchestrating complex multi-step workflows and pipelines')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Docker / Kubernetes', 'docker-kubernetes', 'tool', 'Container orchestration for deploying and scaling applications')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('ML Pipeline Tools', 'ml-pipeline-tools', 'tool', 'Tools like Kubeflow and Airflow for ML pipeline automation')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Model Serving', 'model-serving', 'technical', 'Deploying and serving ML models in production using TensorRT, Triton, etc.')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Monitoring & Observability', 'monitoring-observability', 'tool', 'Tools and practices for monitoring system health and performance')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('CI/CD for ML', 'ci-cd-ml', 'technical', 'Continuous integration and deployment pipelines for machine learning')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Cloud Platforms', 'cloud-platforms', 'tool', 'Cloud infrastructure services from AWS, GCP, and Azure')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('React / Next.js', 'react-nextjs', 'technical', 'Building web applications with React framework and Next.js')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('TypeScript', 'typescript', 'technical', 'Typed superset of JavaScript for safer, scalable code')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('CSS / Tailwind', 'css-tailwind', 'technical', 'Styling web applications with CSS and Tailwind utility classes')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('State Management', 'state-management', 'technical', 'Managing application state with Zustand, Redux, or other libraries')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Performance Optimization', 'performance-optimization', 'technical', 'Optimizing application speed, bundle size, and rendering performance')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Accessibility (a11y)', 'accessibility', 'technical', 'Building accessible web applications following WCAG standards')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Testing (Jest, Playwright)', 'testing-jest-playwright', 'tool', 'Unit and E2E testing frameworks for web applications')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Node.js', 'nodejs', 'technical', 'Server-side JavaScript runtime for building backend services')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('REST & GraphQL APIs', 'rest-graphql-apis', 'technical', 'Building and consuming RESTful and GraphQL APIs')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('PostgreSQL', 'postgresql', 'technical', 'Relational database system for structured data storage')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Authentication & Authorization', 'authentication-authorization', 'technical', 'Implementing secure user authentication and role-based access control')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Docker / Cloud Deployment', 'docker-cloud-deployment', 'tool', 'Containerizing and deploying applications to cloud environments')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Caching (Redis)', 'caching-redis', 'technical', 'In-memory caching with Redis for improved application performance')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Message Queues', 'message-queues', 'technical', 'Asynchronous messaging with RabbitMQ, SQS, or similar systems')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Git / CI/CD', 'git-ci-cd', 'tool', 'Version control with Git and continuous integration/deployment pipelines')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('React Native / Flutter', 'react-native-flutter', 'tool', 'Cross-platform mobile development frameworks')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Swift / Kotlin', 'swift-kotlin', 'technical', 'Native iOS and Android programming languages')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Mobile UI Patterns', 'mobile-ui-patterns', 'domain', 'Design patterns specific to mobile user interfaces')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('App Store Deployment', 'app-store-deployment', 'domain', 'Publishing and managing apps on Apple App Store and Google Play')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Push Notifications', 'push-notifications', 'technical', 'Implementing push notification systems for mobile applications')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Offline Storage', 'offline-storage', 'technical', 'Local data persistence for offline-capable mobile applications')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Mobile Performance', 'mobile-performance', 'technical', 'Optimizing mobile app performance, startup time, and battery usage')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('AWS / GCP / Azure', 'aws-gcp-azure', 'tool', 'Major cloud platforms for hosting, compute, and managed services')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Terraform / Infrastructure as Code', 'terraform-iac', 'tool', 'Managing cloud infrastructure through declarative code')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('CI/CD Pipelines', 'ci-cd-pipelines', 'tool', 'Automated build, test, and deployment pipelines')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Monitoring (Datadog, Grafana)', 'monitoring-datadog-grafana', 'tool', 'Application and infrastructure monitoring tools')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Linux Administration', 'linux-administration', 'technical', 'Managing Linux servers, services, and system configuration')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Security Best Practices', 'security-best-practices', 'domain', 'Application security practices including OWASP, secrets management, and hardening')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('REST API Design', 'rest-api-design', 'technical', 'Designing clean, consistent RESTful API interfaces')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('GraphQL', 'graphql', 'technical', 'Query language for APIs offering flexible data retrieval')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('OpenAPI / Swagger', 'openapi-swagger', 'tool', 'API specification and documentation standards')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Authentication (OAuth, JWT)', 'authentication-oauth-jwt', 'technical', 'Token-based authentication protocols for API security')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Rate Limiting & Caching', 'rate-limiting-caching', 'technical', 'Protecting APIs with rate limits and optimizing with caching')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('API Documentation', 'api-documentation', 'soft', 'Writing clear, comprehensive API documentation for developers')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('System Design', 'system-design', 'technical', 'Designing scalable, reliable, and maintainable software architectures')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Microservices Architecture', 'microservices-architecture', 'technical', 'Designing distributed systems as independent, deployable services')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Database Design', 'database-design', 'technical', 'Designing database schemas, relationships, and indexing strategies')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Cloud Architecture', 'cloud-architecture', 'technical', 'Designing cloud-native architectures for scalability and reliability')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Performance Engineering', 'performance-engineering', 'technical', 'Systematic approach to improving system performance and capacity')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Technical Documentation', 'technical-documentation', 'soft', 'Creating comprehensive technical documents and architecture records')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Mentoring', 'mentoring', 'soft', 'Coaching and developing junior engineers and team members')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Test Automation', 'test-automation', 'technical', 'Automated testing with Playwright, Cypress, and similar frameworks')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Unit Testing', 'unit-testing', 'technical', 'Writing unit tests with Jest, Vitest, and similar frameworks')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('CI/CD Integration', 'ci-cd-integration', 'tool', 'Integrating automated tests into CI/CD pipelines')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('API Testing', 'api-testing', 'tool', 'Testing APIs with Postman, Insomnia, and automated tools')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Performance Testing', 'performance-testing', 'technical', 'Load and stress testing to verify system performance')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Test Strategy Design', 'test-strategy-design', 'soft', 'Designing comprehensive testing strategies for software projects')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Content Creation', 'content-creation', 'soft', 'Creating engaging content across formats for audiences')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Developer Experience', 'developer-experience', 'domain', 'Improving the experience of developers using a platform or tool')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Code Review', 'code-review', 'technical', 'Reviewing code for quality, correctness, and best practices')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Release Management', 'release-management', 'soft', 'Planning, coordinating, and executing software releases')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Software Architecture', 'software-architecture', 'technical', 'High-level structural decisions for software systems')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Git Advanced', 'git-advanced', 'tool', 'Advanced Git workflows including rebasing, bisect, and complex merge strategies')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Figma', 'figma', 'tool', 'Collaborative design tool for UI/UX design and prototyping')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Wireframing & Prototyping', 'wireframing-prototyping', 'tool', 'Creating wireframes and interactive prototypes for user testing')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Visual Design', 'visual-design', 'technical', 'Creating aesthetically pleasing and functional visual interfaces')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Design Systems', 'design-systems', 'technical', 'Building and maintaining reusable component libraries and design tokens')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Responsive Design', 'responsive-design', 'technical', 'Designing interfaces that adapt to different screen sizes and devices')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Usability Testing', 'usability-testing', 'soft', 'Conducting tests with real users to validate design decisions')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Interaction Design', 'interaction-design', 'technical', 'Designing how users interact with digital interfaces and products')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Product Thinking', 'product-thinking', 'soft', 'Thinking strategically about product problems and user outcomes')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Cross-Functional Collaboration', 'cross-functional-collaboration', 'soft', 'Working effectively across design, engineering, and product teams')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Design Strategy', 'design-strategy', 'soft', 'Strategic approach to design that aligns with business objectives')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('After Effects / Lottie', 'after-effects-lottie', 'tool', 'Motion graphics and animation tools for web and app animations')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Figma Motion / Protopie', 'figma-motion-protopie', 'tool', 'Advanced prototyping tools for interactive animation design')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('CSS Animations', 'css-animations', 'technical', 'Creating web animations using CSS transitions and keyframes')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Framer Motion / GSAP', 'framer-motion-gsap', 'tool', 'JavaScript animation libraries for rich web interactions')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Storyboarding', 'storyboarding', 'soft', 'Visual planning of animation sequences and user flows')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Animation Principles', 'animation-principles', 'domain', 'Core principles of animation including timing, easing, and motion design')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Blender / Cinema 4D', 'blender-cinema4d', 'tool', 'Professional 3D modeling, sculpting, and rendering software')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('3D Modeling & Sculpting', '3d-modeling-sculpting', 'technical', 'Creating three-dimensional models and sculpted assets')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Texturing & Materials', 'texturing-materials', 'technical', 'Applying textures and materials to 3D models for realistic rendering')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Lighting & Rendering', 'lighting-rendering', 'technical', 'Setting up lighting and rendering 3D scenes for final output')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Three.js / WebGL', 'threejs-webgl', 'technical', 'Web-based 3D graphics programming for interactive experiences')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Animation', 'animation', 'technical', 'Creating animated content for 3D, motion, and interactive media')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Logo Design', 'logo-design', 'technical', 'Designing memorable logos and brand marks')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Visual Identity Systems', 'visual-identity-systems', 'technical', 'Creating comprehensive visual brand identity systems')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Typography', 'typography', 'domain', 'Selecting and applying typefaces for effective communication')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Color Theory', 'color-theory', 'domain', 'Principles of color selection, harmony, and application in design')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Brand Strategy', 'brand-strategy', 'soft', 'Strategic positioning and messaging for brand differentiation')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Adobe Creative Suite', 'adobe-creative-suite', 'tool', 'Professional design tools including Photoshop, Illustrator, and InDesign')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Presentation Design', 'presentation-design', 'soft', 'Designing compelling visual presentations and pitch decks')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('React Component Development', 'react-component-development', 'technical', 'Building reusable, accessible React components')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Design Tokens', 'design-tokens', 'technical', 'Managing design values as code tokens for consistency across platforms')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Storybook', 'storybook', 'tool', 'Component documentation and visual testing tool')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Figma API', 'figma-api', 'tool', 'Programmatic access to Figma designs for automation')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Documentation Writing', 'documentation-writing', 'soft', 'Writing clear documentation for systems, APIs, and processes')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('User Interviews', 'user-interviews', 'soft', 'Conducting structured interviews to understand user needs')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Survey Design', 'survey-design', 'soft', 'Designing effective surveys and questionnaires for research')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Data Analysis', 'data-analysis', 'technical', 'Analyzing quantitative and qualitative data for insights')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Research Synthesis', 'research-synthesis', 'soft', 'Synthesizing research findings into actionable insights')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Presentation Skills', 'presentation-skills', 'soft', 'Delivering clear and persuasive presentations to stakeholders')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Creative Strategy', 'creative-strategy', 'soft', 'Developing creative direction and strategy for brands and campaigns')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Team Leadership', 'team-leadership', 'soft', 'Leading, motivating, and managing teams effectively')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Brand Direction', 'brand-direction', 'soft', 'Setting and maintaining artistic direction for brand identity')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Design Review', 'design-review', 'soft', 'Reviewing and providing constructive feedback on design work')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Client Presentation', 'client-presentation', 'soft', 'Presenting creative work and strategy to clients')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Trend Forecasting', 'trend-forecasting', 'domain', 'Identifying and predicting upcoming design and industry trends')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Premiere Pro / DaVinci Resolve', 'premiere-pro-davinci', 'tool', 'Professional video editing software for content production')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Color Grading', 'color-grading', 'technical', 'Adjusting color and tone of video footage for mood and consistency')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Sound Design', 'sound-design', 'technical', 'Creating and editing audio for video, podcasts, and interactive media')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Motion Graphics', 'motion-graphics', 'technical', 'Creating animated graphics for video and digital media')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Thumbnail Design', 'thumbnail-design', 'technical', 'Designing click-worthy thumbnails for video platforms')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Platform Optimization', 'platform-optimization', 'domain', 'Optimizing content for specific platforms like YouTube, TikTok, and Instagram')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Excel / Google Sheets', 'excel-google-sheets', 'tool', 'Spreadsheet tools for data analysis, modeling, and reporting')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Tableau / Looker / Power BI', 'tableau-looker-powerbi', 'tool', 'Business intelligence and data visualization platforms')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Python Data Science', 'python-data-science', 'technical', 'Python with Pandas, NumPy, and related libraries for data analysis')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Statistical Analysis', 'statistical-analysis', 'technical', 'Applying statistical methods to analyze data and draw conclusions')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Business Communication', 'business-communication', 'soft', 'Communicating data findings clearly to business stakeholders')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('ETL/ELT Pipelines', 'etl-elt-pipelines', 'technical', 'Building data extraction, transformation, and loading pipelines')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Data Warehousing', 'data-warehousing', 'technical', 'Managing data warehouses like Snowflake, BigQuery, and Redshift')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Spark / Distributed Computing', 'spark-distributed', 'tool', 'Apache Spark and distributed computing frameworks for large datasets')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Data Modeling', 'data-modeling', 'technical', 'Designing data models and schemas for analytics and applications')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Data Quality Frameworks', 'data-quality-frameworks', 'technical', 'Implementing automated data quality checks and validation')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Statistical Modeling', 'statistical-modeling', 'technical', 'Building statistical models for prediction and inference')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Machine Learning (scikit-learn)', 'machine-learning-sklearn', 'technical', 'Classical machine learning algorithms with scikit-learn')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Experiment Design', 'experiment-design', 'technical', 'Designing controlled experiments and A/B tests with statistical rigor')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Jupyter Notebooks', 'jupyter-notebooks', 'tool', 'Interactive computing environment for data exploration and analysis')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('KPI Framework Design', 'kpi-framework-design', 'soft', 'Defining and organizing key performance indicators for business tracking')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Report Automation', 'report-automation', 'technical', 'Automating recurring reports and dashboards')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('dbt (data build tool)', 'dbt', 'tool', 'SQL-based transformation tool for analytics engineering')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('SQL (Advanced)', 'sql-advanced', 'technical', 'Advanced SQL including window functions, CTEs, and performance tuning')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Data Quality Testing', 'data-quality-testing', 'technical', 'Writing automated tests to validate data integrity and freshness')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Metrics Layers', 'metrics-layers', 'technical', 'Defining consistent metric definitions across an organization')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Git Version Control', 'git-version-control', 'tool', 'Using Git for version control in data and code projects')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Funnel Analysis', 'funnel-analysis', 'technical', 'Analyzing user conversion funnels to identify drop-off points')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Cohort Analysis', 'cohort-analysis', 'technical', 'Tracking user groups over time to measure retention and behavior')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Marketing Analytics', 'marketing-analytics', 'tool', 'Analyzing marketing campaign performance across channels')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Product Analytics', 'product-analytics', 'tool', 'Product analytics tools like Amplitude, Mixpanel, and PostHog')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('R Programming', 'r-programming', 'technical', 'Statistical programming language for data analysis and visualization')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Time Series Analysis', 'time-series-analysis', 'technical', 'Analyzing time-ordered data for patterns, trends, and forecasting')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Stochastic Calculus', 'stochastic-calculus', 'technical', 'Mathematical framework for modeling random processes in finance')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Backtesting Frameworks', 'backtesting-frameworks', 'tool', 'Tools for testing trading strategies against historical data')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Risk Modeling', 'risk-modeling', 'technical', 'Quantitative risk analysis and modeling for financial systems')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Growth Experimentation', 'growth-experimentation', 'soft', 'Running structured growth experiments to drive acquisition and retention')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Funnel Optimization', 'funnel-optimization', 'technical', 'Optimizing conversion funnels for better user acquisition')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Paid Acquisition', 'paid-acquisition', 'tool', 'Running paid ad campaigns on Google, Meta, and other platforms')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Analytics (GA4, Mixpanel)', 'analytics-ga4-mixpanel', 'tool', 'Web and product analytics platforms for tracking user behavior')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Email Marketing', 'email-marketing', 'soft', 'Designing and managing email campaigns for engagement and conversion')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Landing Page Optimization', 'landing-page-optimization', 'technical', 'Designing and testing landing pages for maximum conversion')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Keyword Research', 'keyword-research', 'tool', 'Finding and analyzing search keywords using Ahrefs, SEMrush, etc.')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('On-Page SEO', 'on-page-seo', 'technical', 'Optimizing page content, structure, and metadata for search engines')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Technical SEO', 'technical-seo', 'technical', 'Fixing crawl errors, site speed, and technical search engine issues')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Link Building', 'link-building', 'soft', 'Building high-quality backlinks through outreach and content')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Google Search Console', 'google-search-console', 'tool', 'Google tool for monitoring search performance and technical SEO')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Analytics', 'analytics-general', 'tool', 'General analytics tools for tracking performance and metrics')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Editorial Planning', 'editorial-planning', 'soft', 'Planning content calendars and editorial workflows')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('SEO Content Writing', 'seo-content-writing', 'soft', 'Writing content optimized for search engine visibility')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Analytics & ROI Tracking', 'analytics-roi-tracking', 'tool', 'Tracking and measuring return on investment for content and campaigns')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Team Management', 'team-management', 'soft', 'Managing teams, delegating work, and ensuring productivity')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Distribution Strategy', 'distribution-strategy', 'soft', 'Planning how content reaches audiences across channels')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Platform Strategy', 'platform-strategy', 'soft', 'Developing strategy for audience growth on specific platforms')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Community Engagement', 'community-engagement', 'soft', 'Building engagement and interaction within online communities')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Social Analytics', 'social-analytics', 'tool', 'Analyzing social media performance and audience metrics')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Paid Social Advertising', 'paid-social-advertising', 'tool', 'Running paid campaigns on social media platforms')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Email Platforms', 'email-platforms', 'tool', 'Email marketing platforms like Mailchimp, Klaviyo, and Resend')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Automation Sequences', 'automation-sequences', 'technical', 'Building automated email and marketing sequences')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Segmentation & Personalization', 'segmentation-personalization', 'technical', 'Segmenting audiences and personalizing marketing content')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Deliverability Optimization', 'deliverability-optimization', 'technical', 'Ensuring emails reach inboxes and avoid spam filters')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Google Ads', 'google-ads', 'tool', 'Running search, display, and video ad campaigns on Google')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Meta Ads Manager', 'meta-ads-manager', 'tool', 'Facebook and Instagram advertising platform')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Campaign Optimization', 'campaign-optimization', 'technical', 'Optimizing ad campaigns for better performance and lower costs')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Ad Copywriting', 'ad-copywriting', 'soft', 'Writing compelling ad copy that drives clicks and conversions')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Audience Targeting', 'audience-targeting', 'technical', 'Defining and reaching target audiences through advertising platforms')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('ROAS / CPA Optimization', 'roas-cpa-optimization', 'technical', 'Maximizing return on ad spend and minimizing cost per acquisition')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Multi-Channel Campaign Management', 'multi-channel-campaigns', 'soft', 'Managing coordinated marketing campaigns across multiple channels')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Attribution Modeling', 'attribution-modeling', 'technical', 'Understanding which marketing touchpoints drive conversions')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Budget Allocation', 'budget-allocation', 'soft', 'Allocating marketing budgets across channels for maximum ROI')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Conversion Rate Optimization', 'conversion-rate-optimization', 'technical', 'Systematically improving the rate at which visitors convert')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Marketing Automation', 'marketing-automation', 'tool', 'Automating marketing workflows and lead nurturing')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Event Planning & Hosting', 'event-planning-hosting', 'soft', 'Planning and hosting community events, workshops, and meetups')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Member Onboarding', 'member-onboarding', 'soft', 'Designing and executing onboarding experiences for new community members')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Engagement Programs', 'engagement-programs', 'soft', 'Creating programs that drive ongoing community participation')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Platform Management', 'platform-management', 'tool', 'Managing community platforms like Discord, Slack, and Circle')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Community Analytics', 'community-analytics', 'tool', 'Measuring community health, engagement, and growth metrics')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('A/B Testing Tools', 'ab-testing-tools', 'tool', 'Tools like Optimizely and VWO for running conversion experiments')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('User Behavior Analysis', 'user-behavior-analysis', 'tool', 'Analyzing user behavior with heatmaps and session recordings (Hotjar)')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Copywriting for Conversion', 'copywriting-conversion', 'soft', 'Writing copy specifically designed to drive user action and conversion')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Statistical Significance', 'statistical-significance', 'technical', 'Understanding when experiment results are statistically reliable')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Stakeholder Management', 'stakeholder-management', 'soft', 'Managing relationships and expectations with stakeholders')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('PRD Writing', 'prd-writing', 'soft', 'Writing product requirements documents that guide development')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Technical Specifications', 'technical-specifications', 'soft', 'Writing detailed technical specs for engineering teams')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('API Design Understanding', 'api-design-understanding', 'domain', 'Understanding API design principles for technical product decisions')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('System Architecture Understanding', 'system-architecture-understanding', 'domain', 'Understanding system architecture to guide product decisions')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Developer Empathy', 'developer-empathy', 'soft', 'Understanding developer needs and pain points for platform products')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('SQL / Basic Coding', 'sql-basic-coding', 'technical', 'Basic SQL and coding skills for data analysis and technical communication')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Product Metrics', 'product-metrics', 'domain', 'Key product metrics like DAU, retention, and engagement rates')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Scrum Framework', 'scrum-framework', 'domain', 'Scrum methodology for iterative software development')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Sprint Facilitation', 'sprint-facilitation', 'soft', 'Leading sprint ceremonies including planning, reviews, and retrospectives')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Blocker Resolution', 'blocker-resolution', 'soft', 'Identifying and removing impediments that slow team progress')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Agile Coaching', 'agile-coaching', 'soft', 'Coaching teams on agile practices and continuous improvement')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Jira / Linear', 'jira-linear', 'tool', 'Project management tools for tracking sprints and backlogs')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Retrospective Facilitation', 'retrospective-facilitation', 'soft', 'Leading team retrospectives for continuous improvement')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Team Metrics', 'team-metrics', 'domain', 'Tracking team velocity, throughput, and engineering metrics')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Markdown / docs-as-code', 'markdown-docs-as-code', 'tool', 'Writing documentation in Markdown with version control')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Information Architecture', 'information-architecture', 'soft', 'Organizing and structuring information for findability and usability')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Code Reading Ability', 'code-reading', 'technical', 'Reading and understanding code to write accurate documentation')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('User Guides & Tutorials', 'user-guides-tutorials', 'soft', 'Creating user-facing guides and tutorials for product features')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Cross-Team Coordination', 'cross-team-coordination', 'soft', 'Coordinating work across multiple teams and dependencies')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Risk Management', 'risk-management', 'soft', 'Identifying, assessing, and mitigating project and program risks')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Milestone Tracking', 'milestone-tracking', 'soft', 'Tracking project milestones and deliverables against timelines')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Process Design', 'process-design', 'soft', 'Designing efficient processes and workflows for teams')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Program Reporting', 'program-reporting', 'soft', 'Creating executive-level reports on program status and health')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Dependency Management', 'dependency-management', 'soft', 'Managing cross-team dependencies in complex programs')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Requirements Gathering', 'requirements-gathering', 'soft', 'Gathering and documenting business and technical requirements')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Stakeholder Interviews', 'stakeholder-interviews', 'soft', 'Conducting structured interviews with business stakeholders')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('User Stories / Acceptance Criteria', 'user-stories-acceptance-criteria', 'soft', 'Writing user stories with clear acceptance criteria for developers')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Documentation', 'documentation', 'soft', 'Creating and maintaining project and process documentation')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Bubble / Webflow', 'bubble-webflow', 'tool', 'No-code web application and website builders')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Airtable / Retool', 'airtable-retool', 'tool', 'No-code database and internal tool building platforms')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Zapier / Make Automations', 'zapier-make', 'tool', 'No-code automation platforms for connecting apps and workflows')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('UI/UX Fundamentals', 'ui-ux-fundamentals', 'domain', 'Core principles of user interface and experience design')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('API Integration', 'api-integration', 'technical', 'Connecting applications through REST APIs and webhooks')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('CRM Systems', 'crm-systems', 'tool', 'Customer relationship management tools like HubSpot and Salesforce')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('ROI Analysis', 'roi-analysis', 'soft', 'Measuring return on investment for projects and initiatives')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Client Consulting', 'client-consulting', 'soft', 'Consulting with clients to understand needs and deliver solutions')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Newsletter Platforms', 'newsletter-platforms', 'tool', 'Email newsletter platforms like Substack, Beehiiv, and ConvertKit')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Audience Growth', 'audience-growth', 'soft', 'Strategies for growing audiences across platforms and channels')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Sponsorship Sales', 'sponsorship-sales', 'soft', 'Selling sponsorship opportunities to brands and advertisers')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Email Deliverability', 'email-deliverability', 'technical', 'Ensuring emails reach inboxes with proper authentication and reputation')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Content Curation', 'content-curation', 'soft', 'Discovering and organizing relevant content for audiences')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Video Production', 'video-production', 'technical', 'Planning, filming, and producing video content')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Scripting & Storytelling', 'scripting-storytelling', 'soft', 'Writing scripts and narrative structures for video content')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Video Editing', 'video-editing', 'tool', 'Editing video with Premiere Pro, DaVinci Resolve, or similar tools')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('YouTube SEO & Algorithm', 'youtube-seo-algorithm', 'domain', 'Understanding YouTube search, recommendations, and growth strategies')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Monetization Strategy', 'monetization-strategy', 'domain', 'Strategies for monetizing content through ads, sponsors, and products')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Curriculum Design', 'curriculum-design', 'soft', 'Designing structured learning experiences and course curricula')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Course Platforms', 'course-platforms', 'tool', 'Online course platforms like Teachable, Udemy, and Kajabi')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Marketing & Sales Funnels', 'marketing-sales-funnels', 'soft', 'Building funnels that convert audiences into customers')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Learning Experience Design', 'learning-experience-design', 'soft', 'Designing engaging and effective educational experiences')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Audio Editing', 'audio-editing', 'tool', 'Editing audio with Descript, Adobe Audition, or similar tools')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Guest Booking & Research', 'guest-booking-research', 'soft', 'Researching and booking guests for podcasts and events')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Show Notes & SEO', 'show-notes-seo', 'soft', 'Writing show notes and optimizing podcast episodes for search')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Podcast Distribution', 'podcast-distribution', 'domain', 'Distributing podcasts across platforms and directories')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Sponsorship Management', 'sponsorship-management', 'soft', 'Managing sponsor relationships and delivering sponsored content')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('SEO for Developers', 'seo-for-developers', 'technical', 'SEO optimization tailored for technical content and developer audiences')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Code Examples & Tutorials', 'code-examples-tutorials', 'soft', 'Creating clear code examples and step-by-step technical tutorials')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Blog Platforms', 'blog-platforms', 'tool', 'Developer blogging platforms like Hashnode, Dev.to, and Medium')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Content Marketing', 'content-marketing', 'soft', 'Marketing through valuable content that attracts target audiences')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Audience Building', 'audience-building', 'soft', 'Building loyal audiences through consistent content and engagement')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Full-Stack Development', 'full-stack-development', 'technical', 'Building complete applications across frontend and backend')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Product Validation', 'product-validation', 'soft', 'Validating product ideas through research, prototyping, and user testing')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Landing Page Design', 'landing-page-design', 'technical', 'Designing high-converting landing pages for products and services')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Growth Marketing', 'growth-marketing', 'soft', 'Marketing focused on measurable user acquisition and retention')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Stripe / Payment Integration', 'stripe-payment-integration', 'tool', 'Integrating payment processing with Stripe and similar providers')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Customer Support', 'customer-support', 'soft', 'Providing helpful customer support and managing user relationships')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Notion Advanced Features', 'notion-advanced', 'tool', 'Advanced Notion features including databases, relations, and formulas')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Template Building', 'template-building', 'soft', 'Creating reusable templates for productivity and workflow tools')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Workflow Optimization', 'workflow-optimization', 'soft', 'Optimizing business workflows for efficiency and clarity')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('AI Tool Evaluation', 'ai-tool-evaluation', 'domain', 'Systematically evaluating and comparing AI tools and platforms')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Comparative Analysis', 'comparative-analysis', 'soft', 'Analyzing and comparing products, tools, or strategies objectively')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('SEO & Audience Growth', 'seo-audience-growth', 'soft', 'Combining SEO with audience building for sustainable growth')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Affiliate Marketing', 'affiliate-marketing', 'domain', 'Earning commissions by promoting products through affiliate programs')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Product Testing Methodology', 'product-testing-methodology', 'soft', 'Systematic approaches to testing and reviewing products')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Social Media Strategy', 'social-media-strategy', 'soft', 'Developing strategic plans for social media presence and growth')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('SEO', 'seo', 'technical', 'Search engine optimization fundamentals for web content')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Newsletter Management', 'newsletter-management', 'tool', 'Managing email newsletters including growth and engagement')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Growth Hacking', 'growth-hacking', 'soft', 'Creative and data-driven strategies for rapid user growth')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Campaign Management', 'campaign-management', 'soft', 'Planning, executing, and measuring marketing campaigns')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Influencer Outreach', 'influencer-outreach', 'soft', 'Building relationships with influencers for partnerships and promotion')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Analytics & KPIs', 'analytics-kpis', 'tool', 'Tracking key performance indicators with analytics tools')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Brand Positioning', 'brand-positioning', 'soft', 'Positioning a brand strategically in its market and audience')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Token Launch Strategy', 'token-launch-strategy', 'domain', 'Planning and executing token launches and distribution events')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Agile/Scrum', 'agile-scrum', 'soft', 'Agile software development using Scrum methodology')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Roadmap Planning', 'roadmap-planning', 'soft', 'Creating and maintaining product and project roadmaps')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Testing (Foundry)', 'testing-foundry', 'tool', 'Smart contract testing using the Foundry framework')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('ethers.js / wagmi', 'ethersjs-wagmi', 'tool', 'JavaScript libraries for interacting with Ethereum and EVM chains')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Wallet Integration', 'wallet-integration', 'technical', 'Integrating cryptocurrency wallets into web applications')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Subgraph / Indexing', 'subgraph-indexing', 'technical', 'Building and querying blockchain data indexes using The Graph')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('UI/UX for Web3', 'ui-ux-web3', 'domain', 'Design patterns and UX best practices specific to Web3 applications')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Solidity Security', 'solidity-security', 'technical', 'Identifying and preventing security vulnerabilities in Solidity code')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Fuzzing (Echidna/Medusa)', 'fuzzing-echidna-medusa', 'tool', 'Automated fuzzing tools for finding smart contract vulnerabilities')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Formal Verification', 'formal-verification', 'technical', 'Mathematically proving correctness of smart contracts')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Exploit Writing', 'exploit-writing', 'technical', 'Writing proof-of-concept exploits for identified vulnerabilities')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Audit Report Writing', 'audit-report-writing', 'soft', 'Writing comprehensive security audit reports for protocols')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Node Operations', 'node-operations', 'technical', 'Running and maintaining blockchain nodes for network participation')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Monitoring & Alerting', 'monitoring-alerting', 'tool', 'Setting up monitoring and alerting systems for infrastructure')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Networking / RPC', 'networking-rpc', 'technical', 'Network protocols and RPC infrastructure for blockchain nodes')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Database Management', 'database-management', 'technical', 'Managing and maintaining database systems in production')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Financial Analysis', 'financial-analysis', 'domain', 'Analyzing financial data, markets, and investment opportunities')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Cryptography Basics', 'cryptography-basics', 'domain', 'Fundamental cryptographic concepts used in blockchain technology')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Mechanism Design', 'mechanism-design', 'domain', 'Designing incentive structures and economic mechanisms')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Bug Reporting', 'bug-reporting', 'soft', 'Writing clear, reproducible bug reports for development teams')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Security Basics', 'security-basics', 'domain', 'Fundamental security concepts for software and blockchain')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Edge Case Thinking', 'edge-case-thinking', 'soft', 'Identifying edge cases and unusual scenarios that could cause failures')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Economic Modeling', 'economic-modeling', 'technical', 'Building mathematical models of economic systems and incentives')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Spreadsheet Simulation', 'spreadsheet-simulation', 'tool', 'Using spreadsheets to simulate economic models and scenarios')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Incentive Design', 'incentive-design', 'domain', 'Designing incentive structures that drive desired behavior')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Governance Frameworks', 'governance-frameworks', 'domain', 'Frameworks for decentralized governance and decision-making')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Governance Tools (Snapshot, Tally)', 'governance-tools', 'tool', 'Tools for DAO governance including Snapshot and Tally')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Treasury Management', 'treasury-management', 'domain', 'Managing DAO and organizational treasury funds')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Contributor Coordination', 'contributor-coordination', 'soft', 'Coordinating distributed contributors in decentralized organizations')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Multisig Operations', 'multisig-operations', 'tool', 'Operating multisignature wallets for secure treasury management')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Dune / Flipside', 'dune-flipside', 'tool', 'On-chain analytics platforms for building data dashboards')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Dashboard Design', 'dashboard-design', 'tool', 'Designing data dashboards for business intelligence and monitoring')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Business Intelligence', 'business-intelligence', 'domain', 'Turning data into actionable business insights and strategy')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Regulatory Knowledge', 'regulatory-knowledge', 'domain', 'Understanding regulatory frameworks for crypto and financial services')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('KYC/AML Procedures', 'kyc-aml-procedures', 'domain', 'Know Your Customer and Anti-Money Laundering compliance procedures')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Policy Writing', 'policy-writing', 'soft', 'Writing compliance policies and internal procedures')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Legal Research', 'legal-research', 'domain', 'Researching laws, regulations, and legal precedents')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Audit Preparation', 'audit-preparation', 'soft', 'Preparing documentation and processes for regulatory audits')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Digital Art', 'digital-art', 'technical', 'Creating digital artwork using tools like Procreate, Photoshop, and tablets')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Marketplace Strategy', 'marketplace-strategy', 'domain', 'Strategy for selling and promoting on digital marketplaces')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Brand Building', 'brand-building', 'soft', 'Building a recognizable brand identity and reputation')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Smart Contract Basics', 'smart-contract-basics', 'domain', 'Fundamental understanding of how smart contracts work')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Wallet UX Patterns', 'wallet-ux-patterns', 'domain', 'UX patterns for wallet connections, signing, and transaction flows')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Prototyping', 'prototyping', 'tool', 'Creating interactive prototypes for user testing and validation')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Game Design', 'game-design', 'domain', 'Designing game mechanics, progression systems, and player experiences')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Economy Balancing', 'economy-balancing', 'domain', 'Balancing in-game economies and reward systems')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Player Psychology', 'player-psychology', 'domain', 'Understanding player motivation, engagement, and behavioral patterns')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('NFT Integration', 'nft-integration', 'domain', 'Integrating NFTs into games, apps, and digital experiences')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Narrative Design', 'narrative-design', 'domain', 'Crafting stories and narrative structures for games and experiences')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('3D Modeling', '3d-modeling', 'technical', 'Creating three-dimensional digital models for games and visualization')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Unity / Unreal Engine', 'unity-unreal', 'tool', 'Major game engines for building 3D and 2D games')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Spatial Design', 'spatial-design', 'domain', 'Designing 3D spaces and environments for virtual worlds')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Virtual World Platforms', 'virtual-world-platforms', 'tool', 'Metaverse platforms like Decentraland, The Sandbox, and VRChat')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Interactive Storytelling', 'interactive-storytelling', 'domain', 'Creating branching narratives and interactive story experiences')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.skills (name, slug, category, description)
VALUES ('Critical Thinking', 'critical-thinking', 'soft', 'Evaluating information objectively and making reasoned judgments')
ON CONFLICT (slug) DO NOTHING;

-- ============================================================