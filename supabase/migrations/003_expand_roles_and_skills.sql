-- ============================================================
-- 003: Expand roles and skills (75+ roles, 400+ skills)
-- ============================================================

-- ============================================================
-- INSERT NEW ROLES
-- ============================================================

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'MEV Researcher',
  'mev-researcher',
  'technical',
  'Study and optimize maximal extractable value strategies',
  'MEV Researchers analyze transaction ordering, arbitrage opportunities, and value extraction on blockchains. You''ll study mempool dynamics, build simulation frameworks, design MEV-resistant protocols, and publish research on fair ordering. Requires deep knowledge of DeFi, cryptography, and distributed systems.',
  150000,
  400000,
  'high',
  'very_high',
  '["Mempool Analysis","DeFi Protocol Internals","Python / Rust","Transaction Simulation","Game Theory","Flashbots / MEV-Boost"]'::jsonb,
  '["analytical","competitive","quantitative","persistent","intellectually curious"]'::jsonb,
  'Morning: Analyze overnight MEV activity, review searcher competition. Midday: Build simulation models for new arbitrage paths. Afternoon: Write research on fair ordering mechanisms, peer review. Evening: Monitor protocol upgrades that affect MEV landscape.',
  'Junior Researcher → MEV Researcher → Senior Researcher → Research Lead → Chief Scientist / Protocol Founder'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'Web3 Product Manager',
  'web3-product-manager',
  'semi-technical',
  'Define product vision and roadmaps for crypto products',
  'Web3 Product Managers bridge the gap between technical blockchain teams and user needs. You''ll define product requirements, prioritize features, manage roadmaps, and ensure that DeFi, NFT, or infrastructure products deliver real value. Requires understanding of both traditional product management and on-chain mechanics.',
  100000,
  200000,
  'very_high',
  'high',
  '["Product Strategy","User Research","Roadmap Management","On-Chain Analytics","A/B Testing","Stakeholder Communication","Agile Methodology"]'::jsonb,
  '["strategic","empathetic","decisive","communicative","data-driven"]'::jsonb,
  'Morning: Review product metrics and user feedback. Midday: Sprint planning with engineering, prioritize backlog items. Afternoon: User interviews, draft PRD for next feature. Evening: Analyze competitor launches, prepare roadmap update for stakeholders.',
  'Associate PM → Product Manager → Senior PM → Director of Product → VP of Product / CPO'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'Blockchain Developer Relations',
  'blockchain-devrel',
  'semi-technical',
  'Help developers build on your protocol through docs and tools',
  'Blockchain DevRel professionals are the bridge between protocols and the developer community. You''ll write documentation, create tutorials, build sample apps, speak at conferences, and gather developer feedback. Requires coding ability plus strong communication skills and genuine passion for teaching.',
  90000,
  190000,
  'high',
  'medium',
  '["Technical Writing","Public Speaking","SDK Development","Tutorial Creation","Community Building","JavaScript / Solidity","Developer Experience"]'::jsonb,
  '["communicative","patient","technical","community-oriented","creative"]'::jsonb,
  'Morning: Respond to developer questions on Discord, review new SDK issues. Midday: Write integration tutorial, record demo video. Afternoon: Host developer workshop, gather feedback on API changes. Evening: Prepare conference talk, update documentation.',
  'DevRel Engineer → Senior DevRel → DevRel Lead → Head of Developer Relations → VP of Ecosystem'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'ZK Engineer',
  'zk-engineer',
  'technical',
  'Build privacy-preserving systems with zero-knowledge proofs',
  'ZK Engineers design and implement zero-knowledge proof systems for blockchain scalability and privacy. You''ll work with ZK-SNARKs, STARKs, and circuit design to build rollups, private transactions, and verifiable computation. One of the most mathematically demanding and highest-paying roles in crypto.',
  150000,
  350000,
  'very_high',
  'very_high',
  '["ZK-SNARKs / STARKs","Circuit Design (Circom / Halo2)","Rust / C++","Cryptography","Mathematical Proofs","Protocol Design"]'::jsonb,
  '["mathematical","rigorous","patient","abstract thinker","detail-oriented"]'::jsonb,
  'Morning: Review circuit optimizations, benchmark proof generation times. Midday: Implement new ZK circuit for rollup state transition. Afternoon: Collaborate with cryptography team on proof system upgrades. Evening: Read latest ZK research papers, experiment with new proving systems.',
  'Junior ZK Dev → ZK Engineer → Senior ZK Engineer → ZK Research Lead → Chief Cryptographer'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'Cross-Chain Developer',
  'cross-chain-developer',
  'technical',
  'Build bridges and protocols that connect different blockchains',
  'Cross-Chain Developers build the infrastructure that allows assets and data to move between different blockchains. You''ll work on bridge protocols, cross-chain messaging systems, and interoperability standards. Requires deep understanding of multiple blockchain architectures and strong security awareness.',
  120000,
  280000,
  'high',
  'high',
  '["Multi-Chain Architecture","Bridge Protocol Design","Solidity / Rust / Move","Cross-Chain Messaging (LayerZero, Wormhole)","Security Engineering","Consensus Mechanisms"]'::jsonb,
  '["systems-thinker","security-minded","adaptable","methodical","collaborative"]'::jsonb,
  'Morning: Monitor bridge health metrics, review cross-chain transactions. Midday: Implement new chain integration, write relay logic. Afternoon: Security review of message passing code, fuzz testing. Evening: Research new chain launches, evaluate integration feasibility.',
  'Junior Dev → Cross-Chain Dev → Senior Engineer → Interoperability Architect → Protocol Lead'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'Prompt Engineer',
  'prompt-engineer',
  'semi-technical',
  'Design and optimize prompts that make AI systems perform',
  'Prompt Engineers craft, test, and optimize the instructions given to large language models. You''ll design prompt templates, build evaluation frameworks, fine-tune system messages, and ensure AI outputs are accurate, consistent, and safe. A fast-growing role as companies integrate LLMs into products.',
  80000,
  180000,
  'very_high',
  'high',
  '["Prompt Design & Testing","LLM APIs (OpenAI, Anthropic)","Evaluation Frameworks","Python","Few-Shot / Chain-of-Thought","RAG Architecture"]'::jsonb,
  '["creative","analytical","iterative","detail-oriented","curious"]'::jsonb,
  'Morning: Review prompt performance metrics, identify failure cases. Midday: Design new prompt templates for product feature, A/B test variants. Afternoon: Build evaluation dataset, benchmark against baseline. Evening: Research new prompting techniques, experiment with model updates.',
  'Junior Prompt Engineer → Prompt Engineer → Senior Prompt Engineer → AI Product Lead → Head of AI'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'AI Product Manager',
  'ai-product-manager',
  'semi-technical',
  'Shape products that use AI to solve real user problems',
  'AI Product Managers define the strategy and roadmap for AI-powered products. You''ll work with ML engineers, designers, and data scientists to translate AI capabilities into user-facing features. Requires understanding of model capabilities, data pipelines, and the unique challenges of shipping AI products like hallucination and latency.',
  120000,
  220000,
  'very_high',
  'high',
  '["Product Strategy","ML Model Evaluation","User Research","Data-Driven Decision Making","Roadmap Planning","Stakeholder Management","AI Ethics Awareness"]'::jsonb,
  '["strategic","curious","communicative","data-driven","user-focused"]'::jsonb,
  'Morning: Review AI feature metrics, check model accuracy dashboards. Midday: Sprint planning with ML team, prioritize model improvements. Afternoon: User interviews to test AI feature concepts, write product spec. Evening: Analyze competitor AI products, plan next quarter''s AI roadmap.',
  'Associate PM → AI Product Manager → Senior AI PM → Director of AI Product → VP of Product'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'ML Engineer',
  'ml-engineer',
  'technical',
  'Build, train, and deploy machine learning models at scale',
  'ML Engineers bridge the gap between data science research and production systems. You''ll design model architectures, build training pipelines, optimize inference performance, and deploy models that serve millions of users. Requires strong software engineering skills plus deep understanding of machine learning algorithms.',
  130000,
  280000,
  'very_high',
  'very_high',
  '["Python / PyTorch / TensorFlow","Model Training & Fine-Tuning","MLOps (MLflow, Weights & Biases)","Distributed Computing","Data Pipeline Engineering","GPU Optimization"]'::jsonb,
  '["analytical","methodical","persistent","detail-oriented","systems-thinker"]'::jsonb,
  'Morning: Check overnight training runs, review model metrics. Midday: Optimize training pipeline, debug data preprocessing issue. Afternoon: Deploy updated model to staging, run A/B test. Evening: Read latest ML papers, prototype new architecture ideas.',
  'Junior ML Engineer → ML Engineer → Senior ML Engineer → Staff ML Engineer → ML Architect / Director of ML'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'AI Safety Researcher',
  'ai-safety-researcher',
  'technical',
  'Ensure AI systems are aligned, safe, and beneficial',
  'AI Safety Researchers work on making AI systems reliable, interpretable, and aligned with human values. You''ll study failure modes, develop safety benchmarks, research alignment techniques, and publish findings. Increasingly critical as AI capabilities advance rapidly. Combines deep technical ML knowledge with philosophical rigor.',
  120000,
  300000,
  'high',
  'high',
  '["ML Research","Alignment Theory","Red Teaming / Adversarial Testing","Interpretability Methods","Python / PyTorch","Technical Writing","Evaluation Design"]'::jsonb,
  '["rigorous","ethical","intellectual","persistent","collaborative"]'::jsonb,
  'Morning: Read latest safety research papers, review team experiments. Midday: Design adversarial evaluation suite, run red-team tests on new model. Afternoon: Write research report on alignment findings, discuss with policy team. Evening: Attend safety research seminar, brainstorm new research directions.',
  'Research Intern → AI Safety Researcher → Senior Researcher → Research Lead → Director of AI Safety'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'AI Content Strategist',
  'ai-content-strategist',
  'non-technical',
  'Use AI tools to create and scale content strategies',
  'AI Content Strategists leverage AI tools to plan, create, and optimize content at scale. You''ll build AI-augmented content workflows, manage AI writing tools, ensure brand voice consistency, and measure content performance. The intersection of traditional content marketing and AI productivity.',
  65000,
  140000,
  'high',
  'medium',
  '["Content Strategy","AI Writing Tools (ChatGPT, Claude)","SEO Optimization","Brand Voice Guidelines","Content Analytics","Workflow Automation"]'::jsonb,
  '["creative","strategic","organized","adaptable","quality-focused"]'::jsonb,
  'Morning: Review content performance dashboards, plan weekly editorial calendar. Midday: Use AI tools to draft content briefs, edit AI-generated articles. Afternoon: Optimize existing content for SEO, coordinate with design team. Evening: Research new AI content tools, plan A/B tests for headlines.',
  'Content Writer → AI Content Strategist → Senior Strategist → Head of Content → VP of Marketing'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'Computer Vision Engineer',
  'computer-vision-engineer',
  'technical',
  'Build systems that understand and process visual data',
  'Computer Vision Engineers develop AI systems that interpret images and video. You''ll build object detection, image classification, segmentation, and video analysis pipelines. Applications range from autonomous vehicles to medical imaging to AR/VR. Requires strong ML foundations plus specialized knowledge of visual processing.',
  130000,
  270000,
  'high',
  'high',
  '["Python / PyTorch","CNN / Vision Transformer Architectures","Image Processing (OpenCV)","Object Detection (YOLO, DETR)","Data Augmentation","Model Optimization / ONNX"]'::jsonb,
  '["analytical","visual thinker","patient","detail-oriented","experimental"]'::jsonb,
  'Morning: Review model training results, analyze failure cases on edge images. Midday: Annotate training data, tune hyperparameters for detection model. Afternoon: Deploy updated model to edge devices, benchmark inference speed. Evening: Read latest computer vision papers, prototype new augmentation pipeline.',
  'Junior CV Engineer → Computer Vision Engineer → Senior CV Engineer → CV Research Lead → Director of AI / CTO'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'NLP Engineer',
  'nlp-engineer',
  'technical',
  'Build systems that understand and generate human language',
  'NLP Engineers develop systems for text understanding, generation, translation, and analysis. You''ll work with transformer models, build text classification pipelines, implement search and retrieval systems, and fine-tune language models for specific domains. Critical role as LLMs reshape every industry.',
  130000,
  270000,
  'very_high',
  'high',
  '["Transformer Architectures","Python / Hugging Face","Fine-Tuning / RLHF","Text Classification & NER","Vector Databases","RAG Systems","Evaluation Metrics (BLEU, ROUGE)"]'::jsonb,
  '["analytical","language-oriented","methodical","curious","detail-oriented"]'::jsonb,
  'Morning: Evaluate model outputs, review annotation quality. Midday: Fine-tune language model on domain-specific data. Afternoon: Build retrieval pipeline for RAG system, run benchmarks. Evening: Experiment with new model architectures, read NLP research.',
  'Junior NLP Engineer → NLP Engineer → Senior NLP Engineer → NLP Research Lead → Director of AI'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'AI Ethics Consultant',
  'ai-ethics-consultant',
  'semi-technical',
  'Guide organizations in responsible and fair AI deployment',
  'AI Ethics Consultants help organizations deploy AI responsibly. You''ll audit AI systems for bias, develop ethical guidelines, conduct impact assessments, and advise on regulatory compliance. Requires understanding of both technical ML concepts and social/legal implications of AI systems.',
  90000,
  190000,
  'high',
  'low',
  '["Bias Auditing","Fairness Metrics","AI Governance Frameworks","Regulatory Compliance (EU AI Act)","Impact Assessment","Stakeholder Communication"]'::jsonb,
  '["ethical","analytical","communicative","empathetic","principled"]'::jsonb,
  'Morning: Review AI audit findings, prepare client presentation. Midday: Conduct bias testing on client''s ML model, document results. Afternoon: Draft ethical AI policy for organization, meet with legal team. Evening: Research new AI regulations, attend ethics roundtable.',
  'Ethics Analyst → AI Ethics Consultant → Senior Consultant → Head of AI Ethics → Chief Ethics Officer'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'AI Automation Specialist',
  'ai-automation-specialist',
  'semi-technical',
  'Automate business workflows using AI and no-code tools',
  'AI Automation Specialists design and implement automated workflows using AI tools. You''ll connect APIs, build AI-powered automations, optimize business processes, and train teams on new tools. Perfect for people who love efficiency and see opportunities to eliminate repetitive work everywhere.',
  70000,
  150000,
  'very_high',
  'medium',
  '["Workflow Automation (Zapier, Make, n8n)","AI API Integration","Process Mapping","Python Scripting","No-Code/Low-Code Platforms","Business Process Analysis"]'::jsonb,
  '["efficiency-driven","creative","systematic","curious","pragmatic"]'::jsonb,
  'Morning: Monitor automated workflows, fix any failed runs. Midday: Map out new automation opportunity with operations team. Afternoon: Build and test new AI-powered workflow, document process. Evening: Explore new AI tools and integrations, plan optimization sprints.',
  'Automation Analyst → AI Automation Specialist → Senior Specialist → Head of Automation → Director of Operations'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'Fine-Tuning Specialist',
  'fine-tuning-specialist',
  'technical',
  'Customize AI models for specific domains and use cases',
  'Fine-Tuning Specialists adapt pre-trained AI models for specific business needs. You''ll curate training datasets, run fine-tuning experiments, evaluate model performance, and deploy customized models. Requires understanding of transfer learning, data quality, and model evaluation techniques.',
  110000,
  220000,
  'high',
  'medium',
  '["Model Fine-Tuning (LoRA, QLoRA)","Dataset Curation","Python / Hugging Face","Evaluation & Benchmarking","GPU Infrastructure","Prompt Engineering","RLHF / DPO"]'::jsonb,
  '["methodical","experimental","patient","data-driven","detail-oriented"]'::jsonb,
  'Morning: Review fine-tuning run results, compare against baseline. Midday: Curate and clean training dataset, fix labeling issues. Afternoon: Launch new fine-tuning experiment, optimize hyperparameters. Evening: Benchmark model on evaluation suite, document findings.',
  'ML Engineer → Fine-Tuning Specialist → Senior ML Engineer → ML Research Lead → Head of AI'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'AI Agent Developer',
  'ai-agent-developer',
  'technical',
  'Build autonomous AI agents that reason and take actions',
  'AI Agent Developers build autonomous systems that can reason, plan, and take actions using LLMs. You''ll design agent architectures, implement tool-use frameworks, build memory systems, and create multi-agent workflows. One of the fastest-growing specializations as AI moves from chatbots to autonomous agents.',
  120000,
  250000,
  'very_high',
  'high',
  '["LLM APIs (OpenAI, Anthropic)","Agent Frameworks (LangChain, CrewAI)","Tool Integration & Function Calling","Python / TypeScript","Vector Databases","Workflow Orchestration"]'::jsonb,
  '["systems-thinker","creative","experimental","persistent","pragmatic"]'::jsonb,
  'Morning: Debug agent behavior, review failure logs from overnight runs. Midday: Implement new tool integration, test agent reasoning chains. Afternoon: Design multi-agent collaboration workflow, benchmark reliability. Evening: Experiment with new agent architectures, read latest research on planning.',
  'Junior Developer → AI Agent Developer → Senior Agent Engineer → AI Architect → Head of AI Engineering'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'MLOps Engineer',
  'mlops-engineer',
  'technical',
  'Build infrastructure that deploys and monitors ML models',
  'MLOps Engineers build the infrastructure and pipelines that take ML models from research to production. You''ll manage model versioning, build CI/CD pipelines for ML, monitor model performance in production, and ensure reliable scaling. The DevOps equivalent for machine learning teams.',
  120000,
  240000,
  'very_high',
  'medium',
  '["Docker / Kubernetes","ML Pipeline Tools (Kubeflow, Airflow)","Model Serving (TensorRT, Triton)","Monitoring & Observability","Python / Bash","Cloud Platforms (AWS, GCP)","CI/CD for ML"]'::jsonb,
  '["systematic","reliable","detail-oriented","pragmatic","collaborative"]'::jsonb,
  'Morning: Check model serving dashboards, investigate latency spikes. Midday: Build automated retraining pipeline, update model registry. Afternoon: Optimize GPU utilization, review infrastructure costs. Evening: Set up A/B testing framework for new model version, write runbooks.',
  'Junior MLOps → MLOps Engineer → Senior MLOps → ML Platform Lead → Director of ML Infrastructure'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'Frontend Developer',
  'frontend-developer',
  'technical',
  'Build beautiful, fast user interfaces for web applications',
  'Frontend Developers create the visual and interactive layer of web applications. You''ll work with React, TypeScript, and CSS to build responsive UIs, implement design systems, optimize performance, and ensure accessibility. The most in-demand web development specialization with clear paths into any industry.',
  70000,
  180000,
  'very_high',
  'very_high',
  '["React / Next.js","TypeScript","CSS / Tailwind","State Management","Performance Optimization","Accessibility (a11y)","Testing (Jest, Playwright)"]'::jsonb,
  '["visual","detail-oriented","user-focused","creative","collaborative"]'::jsonb,
  'Morning: Fix UI bugs, review pull requests from teammates. Midday: Implement new feature component, write unit tests. Afternoon: Pair with designer on responsive layout, optimize bundle size. Evening: Refactor shared component, update Storybook documentation.',
  'Junior Frontend → Frontend Developer → Senior Frontend → Staff Engineer → Frontend Architect'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'Backend Developer',
  'backend-developer',
  'technical',
  'Build APIs, databases, and server-side logic that power apps',
  'Backend Developers build the server-side logic, APIs, and data layers that power applications. You''ll design database schemas, build REST and GraphQL APIs, handle authentication, and ensure systems scale. Requires strong problem-solving skills and understanding of distributed systems.',
  80000,
  200000,
  'very_high',
  'high',
  '["Node.js / Python / Go","REST & GraphQL APIs","PostgreSQL / MongoDB","Authentication & Authorization","Docker / Cloud Deployment","Caching (Redis)","Message Queues"]'::jsonb,
  '["logical","systematic","detail-oriented","reliable","analytical"]'::jsonb,
  'Morning: Review overnight error logs, fix critical API bug. Midday: Design database schema for new feature, write migration. Afternoon: Build new API endpoint, write integration tests. Evening: Optimize slow database query, review security practices.',
  'Junior Backend → Backend Developer → Senior Backend → Staff Engineer → Backend Architect / CTO'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'Full-Stack Developer',
  'full-stack-developer',
  'technical',
  'Build complete web applications from database to UI',
  'Full-Stack Developers work across the entire application stack, from database and API to frontend UI. You''ll build features end-to-end, deploy applications, and make architectural decisions. The most versatile developer role, ideal for startups and small teams where you need to do everything.',
  80000,
  200000,
  'very_high',
  'very_high',
  '["React / Next.js","Node.js / Python","TypeScript","PostgreSQL","REST APIs","Git / CI/CD","Cloud Platforms (AWS/Vercel)"]'::jsonb,
  '["versatile","pragmatic","fast learner","independent","resourceful"]'::jsonb,
  'Morning: Deploy hotfix, review PRs across frontend and backend. Midday: Build new feature end-to-end including API and UI. Afternoon: Set up database migration, write E2E tests. Evening: Research new framework features, plan next sprint''s architecture.',
  'Junior Dev → Full-Stack Developer → Senior Full-Stack → Tech Lead → CTO / Engineering Manager'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'Mobile Developer',
  'mobile-developer',
  'technical',
  'Build native and cross-platform mobile applications',
  'Mobile Developers build applications for iOS and Android platforms. You''ll work with React Native, Swift, or Kotlin to create smooth mobile experiences, handle offline storage, push notifications, and platform-specific features. Mobile usage dominates internet traffic, making this a consistently high-demand role.',
  85000,
  200000,
  'high',
  'high',
  '["React Native / Flutter","Swift / Kotlin","Mobile UI Patterns","App Store Deployment","Push Notifications","Offline Storage","Mobile Performance"]'::jsonb,
  '["detail-oriented","user-focused","patient","platform-aware","quality-driven"]'::jsonb,
  'Morning: Fix crash reported in production, review app store reviews. Midday: Implement new screen with animations, handle edge cases. Afternoon: Test across device sizes, optimize app startup time. Evening: Prepare beta release, update platform SDK versions.',
  'Junior Mobile Dev → Mobile Developer → Senior Mobile → Mobile Lead → Mobile Architect / Engineering Manager'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'DevOps / Cloud Engineer',
  'devops-cloud-engineer',
  'technical',
  'Build and manage cloud infrastructure and CI/CD pipelines',
  'DevOps and Cloud Engineers build the infrastructure that keeps applications running. You''ll manage cloud resources, create CI/CD pipelines, implement monitoring, handle security, and ensure high availability. As companies move to the cloud, this role is critical for every engineering team.',
  100000,
  220000,
  'very_high',
  'medium',
  '["AWS / GCP / Azure","Docker / Kubernetes","Terraform / Infrastructure as Code","CI/CD (GitHub Actions, Jenkins)","Monitoring (Datadog, Grafana)","Linux Administration","Security Best Practices"]'::jsonb,
  '["systematic","reliable","security-minded","calm under pressure","methodical"]'::jsonb,
  'Morning: Check infrastructure dashboards, review overnight alerts. Midday: Update Terraform configs, deploy new service. Afternoon: Optimize CI/CD pipeline, reduce build times. Evening: Set up monitoring for new microservice, review security patches.',
  'Junior DevOps → DevOps Engineer → Senior DevOps → Platform Lead → Director of Infrastructure / SRE'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'API Developer',
  'api-developer',
  'technical',
  'Design and build APIs that connect systems and services',
  'API Developers design, build, and maintain the interfaces that allow different software systems to communicate. You''ll create RESTful and GraphQL APIs, write comprehensive documentation, handle versioning, and ensure reliability. APIs are the backbone of modern software, making this a foundational role.',
  85000,
  190000,
  'high',
  'medium',
  '["REST API Design","GraphQL","OpenAPI / Swagger","Authentication (OAuth, JWT)","Rate Limiting & Caching","API Documentation","Node.js / Python"]'::jsonb,
  '["systematic","detail-oriented","standards-driven","collaborative","pragmatic"]'::jsonb,
  'Morning: Review API error logs, fix broken endpoint. Midday: Design new API endpoints for product feature, write OpenAPI spec. Afternoon: Implement endpoints, write integration tests. Evening: Update API documentation, review partner integration requests.',
  'Junior API Dev → API Developer → Senior API Engineer → API Architect → Director of Platform Engineering'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'Systems Architect',
  'systems-architect',
  'technical',
  'Design scalable, reliable software systems and architectures',
  'Systems Architects design the high-level structure of complex software systems. You''ll make technology choices, define service boundaries, plan for scalability, and guide engineering teams on best practices. A senior role that requires broad experience across frontend, backend, infrastructure, and data systems.',
  150000,
  300000,
  'high',
  'high',
  '["System Design","Microservices Architecture","Database Design","Cloud Architecture","Performance Engineering","Technical Documentation","Mentoring"]'::jsonb,
  '["strategic","systems-thinker","communicative","experienced","principled"]'::jsonb,
  'Morning: Review architecture proposals from teams, provide feedback. Midday: Design system architecture for new product initiative. Afternoon: Lead architecture review meeting, mentor senior engineers. Evening: Evaluate new technologies, update architecture decision records.',
  'Senior Engineer → Staff Engineer → Systems Architect → Principal Architect → VP of Engineering / CTO'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'QA / Test Automation Engineer',
  'qa-test-automation',
  'technical',
  'Ensure software quality through automated testing strategies',
  'QA and Test Automation Engineers ensure software works correctly through comprehensive testing. You''ll design test strategies, write automated test suites, build CI/CD test pipelines, and catch bugs before users do. Essential for any team shipping quality software at speed.',
  70000,
  160000,
  'high',
  'medium',
  '["Test Automation (Playwright, Cypress)","Unit Testing (Jest, Vitest)","CI/CD Integration","API Testing (Postman)","Performance Testing","Test Strategy Design","Python / TypeScript"]'::jsonb,
  '["meticulous","systematic","skeptical","patient","quality-focused"]'::jsonb,
  'Morning: Review test results from nightly runs, investigate failures. Midday: Write new E2E test suite for feature release. Afternoon: Fix flaky tests, optimize test pipeline speed. Evening: Review QA process, update test coverage reports.',
  'Junior QA → QA Engineer → Senior QA → QA Lead → Director of Quality Engineering'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'Developer Relations Engineer',
  'developer-relations',
  'semi-technical',
  'Grow developer communities and improve developer experience',
  'Developer Relations Engineers are the bridge between a platform and its developer community. You''ll create tutorials, build sample apps, speak at conferences, gather feedback, and advocate for developer needs internally. Requires genuine coding skills plus strong communication and community-building abilities.',
  90000,
  190000,
  'high',
  'medium',
  '["Technical Writing","Public Speaking","Content Creation","Community Building","SDK Usage & Feedback","JavaScript / Python","Developer Experience"]'::jsonb,
  '["communicative","empathetic","technical","community-oriented","energetic"]'::jsonb,
  'Morning: Respond to developer questions on forums, review SDK issues. Midday: Write tutorial blog post, record demo video. Afternoon: Give conference talk, gather feedback from developers. Evening: Build sample application, plan developer meetup.',
  'DevRel Engineer → Senior DevRel → DevRel Lead → Head of Developer Relations → VP of Developer Experience'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'Open Source Maintainer',
  'open-source-maintainer',
  'technical',
  'Lead open source projects and build contributor communities',
  'Open Source Maintainers lead public software projects used by developers worldwide. You''ll review contributions, triage issues, write documentation, manage releases, and grow contributor communities. Can be a full-time role at companies that fund open source or a path to consulting and sponsorship income.',
  70000,
  180000,
  'medium',
  'low',
  '["Git / GitHub Advanced","Code Review","Release Management","Technical Writing","Community Management","CI/CD Pipelines","Software Architecture"]'::jsonb,
  '["collaborative","patient","principled","communicative","quality-focused"]'::jsonb,
  'Morning: Triage new issues, review community pull requests. Midday: Fix critical bug, write regression test. Afternoon: Update documentation, prepare release notes. Evening: Engage with community on Discord, mentor new contributors.',
  'Contributor → Core Maintainer → Project Lead → Foundation Member → Open Source Director / CTO'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'UI/UX Designer',
  'ui-ux-designer',
  'creative',
  'Design intuitive interfaces that users love to interact with',
  'UI/UX Designers create the visual design and user experience for digital products. You''ll conduct user research, build wireframes, design pixel-perfect interfaces in Figma, and collaborate with developers to ship polished products. One of the most versatile creative roles in tech.',
  70000,
  170000,
  'very_high',
  'high',
  '["Figma / Sketch","User Research","Wireframing & Prototyping","Visual Design","Design Systems","Responsive Design","Usability Testing"]'::jsonb,
  '["empathetic","visual","detail-oriented","user-focused","collaborative"]'::jsonb,
  'Morning: Review user feedback and analytics, sketch solutions for pain points. Midday: Design new feature screens in Figma, iterate on interaction patterns. Afternoon: Usability test with real users, present designs to engineering. Evening: Update design system components, study design trends.',
  'Junior Designer → UI/UX Designer → Senior Designer → Lead Designer → Head of Design / Design Director'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'Product Designer',
  'product-designer',
  'creative',
  'Own the end-to-end design of digital products and features',
  'Product Designers own the complete design process from user research to shipped product. You''ll define user flows, create prototypes, run experiments, and collaborate closely with product managers and engineers. More strategic than UI/UX, focused on solving business problems through design.',
  90000,
  200000,
  'very_high',
  'high',
  '["Figma / Design Tools","User Research & Interviews","Interaction Design","Product Thinking","A/B Testing","Cross-Functional Collaboration","Design Strategy"]'::jsonb,
  '["strategic","empathetic","data-driven","creative","communicative"]'::jsonb,
  'Morning: Analyze experiment results, review user session recordings. Midday: Lead design sprint for new feature, create user flows. Afternoon: Build interactive prototype, get stakeholder feedback. Evening: Write design brief for next project, sync with PM on priorities.',
  'Junior Designer → Product Designer → Senior Product Designer → Staff Designer → VP of Design'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'Motion Designer',
  'motion-designer',
  'creative',
  'Create animations and micro-interactions that delight users',
  'Motion Designers bring interfaces to life through animation, transitions, and micro-interactions. You''ll create loading animations, page transitions, onboarding sequences, and brand animations. Combines artistic sensibility with technical understanding of animation performance and implementation.',
  65000,
  150000,
  'high',
  'medium',
  '["After Effects / Lottie","Figma Motion / Protopie","CSS Animations","Framer Motion / GSAP","Storyboarding","Animation Principles"]'::jsonb,
  '["creative","detail-oriented","timing-sensitive","collaborative","visual"]'::jsonb,
  'Morning: Review animation specs with developer, refine easing curves. Midday: Create loading animation sequence, export Lottie files. Afternoon: Prototype page transitions, test across devices. Evening: Study motion design trends, create animation library documentation.',
  'Junior Motion Designer → Motion Designer → Senior Motion → Motion Lead → Creative Director'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  '3D Artist',
  '3d-artist',
  'creative',
  'Create 3D models, environments, and visual experiences',
  '3D Artists create three-dimensional models, environments, textures, and animations for games, web experiences, and marketing. You''ll work with tools like Blender, Cinema 4D, and Three.js to build immersive visual content. Growing demand as 3D becomes standard in web design and product visualization.',
  55000,
  140000,
  'high',
  'medium',
  '["Blender / Cinema 4D","3D Modeling & Sculpting","Texturing & Materials","Lighting & Rendering","Three.js / WebGL","Animation"]'::jsonb,
  '["creative","patient","visual","technical","detail-oriented"]'::jsonb,
  'Morning: Work on 3D model, refine geometry and topology. Midday: Apply textures and materials, set up lighting. Afternoon: Render final output, optimize for web delivery. Evening: Learn new 3D techniques, build personal portfolio pieces.',
  'Junior 3D Artist → 3D Artist → Senior 3D Artist → Lead 3D → Art Director / Studio Lead'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'Brand Designer',
  'brand-designer',
  'creative',
  'Create visual identities that define how companies are perceived',
  'Brand Designers create the complete visual identity for companies and products. You''ll design logos, color systems, typography, brand guidelines, and marketing assets. Requires strong graphic design skills plus strategic thinking about how visual identity communicates values and differentiates in the market.',
  60000,
  150000,
  'high',
  'high',
  '["Logo Design","Visual Identity Systems","Typography","Color Theory","Brand Strategy","Adobe Creative Suite","Presentation Design"]'::jsonb,
  '["creative","strategic","detail-oriented","communicative","trend-aware"]'::jsonb,
  'Morning: Research brand positioning, create mood boards for client. Midday: Design logo concepts, iterate on color palette. Afternoon: Build brand guidelines document, present to stakeholders. Evening: Create social media templates, review marketing materials for brand consistency.',
  'Junior Designer → Brand Designer → Senior Brand Designer → Brand Lead → Creative Director / Brand Director'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'Design Systems Engineer',
  'design-systems-engineer',
  'creative',
  'Build and maintain reusable component libraries for products',
  'Design Systems Engineers bridge design and engineering by building reusable component libraries. You''ll code design tokens, create accessible components, write documentation, and ensure consistency across products. A hybrid role requiring both strong design sensibility and frontend coding skills.',
  100000,
  200000,
  'high',
  'low',
  '["React Component Development","Design Tokens","Storybook","Accessibility (WCAG)","CSS / Tailwind","Figma API","Documentation Writing"]'::jsonb,
  '["systematic","detail-oriented","collaborative","quality-focused","organized"]'::jsonb,
  'Morning: Review component requests from product teams, triage bugs. Midday: Build new accessible component, write unit tests. Afternoon: Update Storybook documentation, sync design tokens with Figma. Evening: Audit component usage across products, plan deprecation of legacy components.',
  'Frontend Dev → Design Systems Engineer → Senior DS Engineer → DS Lead → Head of Design Systems'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'UX Researcher',
  'ux-researcher',
  'creative',
  'Uncover user needs through research and usability testing',
  'UX Researchers discover what users need, want, and struggle with through systematic research. You''ll conduct interviews, run usability tests, analyze survey data, and present insights that drive product decisions. Critical for building products people actually use and love.',
  75000,
  170000,
  'high',
  'medium',
  '["User Interviews","Usability Testing","Survey Design","Data Analysis","Research Synthesis","Presentation Skills","A/B Test Analysis"]'::jsonb,
  '["empathetic","curious","analytical","patient","observant"]'::jsonb,
  'Morning: Prepare interview guide, recruit participants. Midday: Conduct moderated usability tests with real users. Afternoon: Synthesize research findings, create affinity maps. Evening: Write research report, present key insights to product team.',
  'Junior Researcher → UX Researcher → Senior Researcher → Research Lead → Head of UX Research'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'Creative Director',
  'creative-director',
  'creative',
  'Lead creative vision and strategy for brands and products',
  'Creative Directors set the artistic vision and lead creative teams across design, content, and marketing. You''ll define brand aesthetics, review all creative output, mentor designers, and ensure consistent quality. A senior leadership role requiring years of design experience plus strong management skills.',
  120000,
  250000,
  'medium',
  'high',
  '["Creative Strategy","Team Leadership","Brand Direction","Design Review","Client Presentation","Cross-Functional Management","Trend Forecasting"]'::jsonb,
  '["visionary","decisive","inspiring","communicative","quality-obsessed"]'::jsonb,
  'Morning: Review creative briefs, provide direction to design team. Midday: Lead brand review meeting, approve campaign assets. Afternoon: Present creative strategy to leadership, mentor junior designer. Evening: Research industry trends, plan creative direction for next quarter.',
  'Senior Designer → Art Director → Creative Director → VP of Creative → Chief Creative Officer'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'Video Editor',
  'video-editor',
  'creative',
  'Edit and produce video content for digital platforms',
  'Video Editors craft compelling video content for YouTube, social media, ads, and product demos. You''ll edit raw footage, add effects and sound design, create thumbnails, and optimize content for different platforms. Video dominates online engagement, making this a high-demand creative skill.',
  45000,
  120000,
  'very_high',
  'high',
  '["Premiere Pro / DaVinci Resolve","Color Grading","Sound Design","Motion Graphics (After Effects)","Thumbnail Design","Platform Optimization (YouTube, TikTok)"]'::jsonb,
  '["creative","detail-oriented","patient","storyteller","deadline-driven"]'::jsonb,
  'Morning: Review raw footage, plan edit structure and narrative. Midday: Edit main video sequence, sync audio and music. Afternoon: Add motion graphics and color grade, create thumbnail. Evening: Export for multiple platforms, review analytics on published content.',
  'Junior Editor → Video Editor → Senior Editor → Lead Editor → Head of Video / Creative Director'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'Data Analyst',
  'data-analyst',
  'semi-technical',
  'Turn raw data into actionable insights for business decisions',
  'Data Analysts extract insights from data to drive business decisions. You''ll write SQL queries, build dashboards, analyze trends, and present findings to stakeholders. One of the most accessible data roles, perfect for people who love finding patterns and telling stories with numbers.',
  60000,
  130000,
  'very_high',
  'high',
  '["SQL","Excel / Google Sheets","Data Visualization (Tableau, Looker)","Python / Pandas","Statistical Analysis","Business Communication"]'::jsonb,
  '["analytical","curious","detail-oriented","communicative","methodical"]'::jsonb,
  'Morning: Check dashboards, investigate data anomalies. Midday: Write SQL queries for weekly metrics report. Afternoon: Build new dashboard for marketing team, present findings. Evening: Explore new data patterns, prepare analysis for stakeholder meeting.',
  'Junior Analyst → Data Analyst → Senior Analyst → Lead Analyst → Head of Analytics / Director of Data'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'Data Engineer',
  'data-engineer',
  'technical',
  'Build pipelines that move and transform data at scale',
  'Data Engineers build and maintain the infrastructure that moves, transforms, and stores data. You''ll design ETL/ELT pipelines, manage data warehouses, ensure data quality, and make data accessible to analysts and scientists. The backbone of every data-driven organization.',
  100000,
  220000,
  'very_high',
  'medium',
  '["SQL & Python","ETL/ELT Pipelines (dbt, Airflow)","Data Warehousing (Snowflake, BigQuery)","Spark / Distributed Computing","Data Modeling","Cloud Platforms","Data Quality Frameworks"]'::jsonb,
  '["systematic","reliable","detail-oriented","patient","logical"]'::jsonb,
  'Morning: Monitor pipeline health, investigate failed jobs. Midday: Build new data pipeline for product analytics. Afternoon: Optimize slow transformations, update data models. Evening: Implement data quality checks, review infrastructure costs.',
  'Junior Data Engineer → Data Engineer → Senior Data Engineer → Staff Engineer → Head of Data Engineering'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'Data Scientist',
  'data-scientist',
  'technical',
  'Apply statistics and ML to extract insights and build models',
  'Data Scientists combine statistics, programming, and domain expertise to solve complex problems. You''ll build predictive models, run experiments, conduct statistical analyses, and communicate findings to drive business strategy. Requires strong math foundation plus practical coding skills.',
  100000,
  220000,
  'high',
  'very_high',
  '["Python / R","Statistical Modeling","Machine Learning (scikit-learn)","SQL","Experiment Design (A/B Testing)","Data Visualization","Jupyter Notebooks"]'::jsonb,
  '["analytical","curious","rigorous","communicative","experimental"]'::jsonb,
  'Morning: Review experiment results, check model performance metrics. Midday: Build feature engineering pipeline, train classification model. Afternoon: Present analysis to product team, recommend next experiments. Evening: Read research papers, explore new modeling techniques.',
  'Junior Data Scientist → Data Scientist → Senior Data Scientist → Staff Scientist → Director of Data Science'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'BI Analyst',
  'bi-analyst',
  'semi-technical',
  'Build dashboards and reports that drive business strategy',
  'Business Intelligence Analysts create the reporting infrastructure that helps companies make data-driven decisions. You''ll build executive dashboards, design KPI frameworks, automate reports, and translate business questions into data queries. More business-focused than data analysts, with emphasis on strategic reporting.',
  65000,
  140000,
  'high',
  'medium',
  '["BI Tools (Tableau, Power BI, Looker)","SQL","KPI Framework Design","Data Modeling","Stakeholder Management","Report Automation"]'::jsonb,
  '["analytical","organized","communicative","business-minded","detail-oriented"]'::jsonb,
  'Morning: Update executive dashboard, check data freshness. Midday: Meet with department heads to understand reporting needs. Afternoon: Build new Looker dashboard, write documentation. Evening: Automate recurring report, optimize query performance.',
  'Junior BI Analyst → BI Analyst → Senior BI Analyst → BI Lead → Director of Business Intelligence'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'Analytics Engineer',
  'analytics-engineer',
  'technical',
  'Build the data models that power analytics and reporting',
  'Analytics Engineers sit between data engineering and data analysis. You''ll build data models using dbt, define metrics layers, ensure data quality, and make data self-serve for business users. A relatively new role that has become essential for scaling analytics in modern data teams.',
  100000,
  200000,
  'very_high',
  'medium',
  '["dbt (data build tool)","SQL (advanced)","Data Modeling","Data Quality Testing","Git Version Control","Metrics Layers","Documentation"]'::jsonb,
  '["systematic","quality-focused","collaborative","detail-oriented","pragmatic"]'::jsonb,
  'Morning: Review data model pull requests, check test results. Midday: Build new dbt models for product analytics. Afternoon: Write data documentation, train analysts on new metrics. Evening: Optimize model performance, implement data quality tests.',
  'Data Analyst → Analytics Engineer → Senior Analytics Engineer → Lead Analytics Engineer → Head of Analytics Engineering'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'Growth Analyst',
  'growth-analyst',
  'semi-technical',
  'Use data to find and optimize user growth opportunities',
  'Growth Analysts use data to find, test, and optimize growth opportunities. You''ll analyze user funnels, run A/B tests, build growth models, and identify the levers that drive user acquisition and retention. Combines analytical skills with marketing intuition and product thinking.',
  70000,
  150000,
  'high',
  'medium',
  '["Funnel Analysis","A/B Testing & Experimentation","SQL / Python","Cohort Analysis","Marketing Analytics","Product Analytics (Amplitude, Mixpanel)"]'::jsonb,
  '["analytical","creative","growth-minded","data-driven","experimental"]'::jsonb,
  'Morning: Review experiment results, analyze conversion funnel changes. Midday: Build cohort retention analysis, identify drop-off points. Afternoon: Present growth findings to team, propose new experiments. Evening: Research growth strategies, model impact of proposed changes.',
  'Junior Analyst → Growth Analyst → Senior Growth Analyst → Head of Growth Analytics → VP of Growth'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'Quantitative Researcher',
  'quantitative-researcher',
  'technical',
  'Build mathematical models for trading and financial analysis',
  'Quantitative Researchers build mathematical and statistical models for trading strategies, risk management, and financial analysis. You''ll work with large datasets, develop pricing models, backtest strategies, and optimize portfolio allocation. Highly mathematical and one of the highest-paying analytical roles.',
  150000,
  400000,
  'high',
  'very_high',
  '["Python / R / C++","Statistical Modeling","Time Series Analysis","Stochastic Calculus","Backtesting Frameworks","Risk Modeling","Machine Learning"]'::jsonb,
  '["mathematical","rigorous","competitive","analytical","detail-oriented"]'::jsonb,
  'Morning: Review overnight strategy performance, check risk metrics. Midday: Develop new alpha signal, run backtests. Afternoon: Optimize execution algorithm, present research to portfolio manager. Evening: Read academic papers, prototype new modeling approaches.',
  'Junior Quant → Quantitative Researcher → Senior Quant → Lead Researcher → Head of Quantitative Research / Partner'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'Growth Marketer',
  'growth-marketer',
  'non-technical',
  'Drive user acquisition and retention through experiments',
  'Growth Marketers combine marketing creativity with data-driven experimentation to drive user acquisition and retention. You''ll run growth experiments, optimize funnels, manage paid and organic channels, and find scalable growth levers. The most data-driven marketing role, focused on measurable results.',
  65000,
  150000,
  'very_high',
  'high',
  '["Growth Experimentation","Funnel Optimization","Paid Acquisition (Google, Meta)","Analytics (GA4, Mixpanel)","Email Marketing","Landing Page Optimization"]'::jsonb,
  '["data-driven","creative","experimental","resourceful","persistent"]'::jsonb,
  'Morning: Review experiment results, check acquisition metrics. Midday: Launch new landing page variant, set up A/B test. Afternoon: Analyze paid ad performance, optimize campaigns. Evening: Brainstorm growth experiment ideas, plan next sprint.',
  'Marketing Associate → Growth Marketer → Senior Growth → Head of Growth → VP of Growth / CMO'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'SEO Specialist',
  'seo-specialist',
  'non-technical',
  'Drive organic traffic through search engine optimization',
  'SEO Specialists optimize websites and content to rank higher in search engines. You''ll conduct keyword research, optimize on-page content, build link strategies, manage technical SEO, and track ranking performance. As organic search remains a top traffic source, skilled SEOs are consistently in demand.',
  50000,
  120000,
  'high',
  'high',
  '["Keyword Research (Ahrefs, SEMrush)","On-Page SEO","Technical SEO","Link Building","Content Strategy","Google Search Console","Analytics"]'::jsonb,
  '["analytical","patient","detail-oriented","strategic","persistent"]'::jsonb,
  'Morning: Check ranking changes, review Search Console data. Midday: Conduct keyword research for new content, optimize existing pages. Afternoon: Audit technical SEO issues, fix crawl errors. Evening: Analyze competitor rankings, plan link-building outreach.',
  'Junior SEO → SEO Specialist → Senior SEO → SEO Lead → Head of SEO / Director of Organic Growth'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'Content Marketing Manager',
  'content-marketing-manager',
  'non-technical',
  'Plan and execute content strategies that drive business growth',
  'Content Marketing Managers plan and execute content strategies that attract, educate, and convert audiences. You''ll manage editorial calendars, coordinate writers, measure content performance, and align content with business goals. Combines creative storytelling with strategic marketing thinking.',
  70000,
  150000,
  'high',
  'high',
  '["Content Strategy","Editorial Planning","SEO Content Writing","Analytics & ROI Tracking","Team Management","Distribution Strategy"]'::jsonb,
  '["strategic","creative","organized","communicative","quality-focused"]'::jsonb,
  'Morning: Review content performance metrics, plan editorial calendar. Midday: Brief writers on upcoming pieces, edit draft articles. Afternoon: Coordinate content distribution, analyze top-performing posts. Evening: Research industry trends, plan next month''s content themes.',
  'Content Writer → Content Marketing Manager → Senior Manager → Director of Content → VP of Marketing'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'Social Media Manager',
  'social-media-manager',
  'non-technical',
  'Build brand presence and engagement across social platforms',
  'Social Media Managers build and maintain brand presence across platforms like Twitter/X, LinkedIn, Instagram, and TikTok. You''ll create content, engage with audiences, manage brand voice, run paid social campaigns, and track engagement metrics. Requires creativity, cultural awareness, and strong writing skills.',
  45000,
  110000,
  'high',
  'very_high',
  '["Content Creation","Platform Strategy (Twitter, LinkedIn, TikTok)","Community Engagement","Social Analytics","Copywriting","Paid Social Advertising"]'::jsonb,
  '["creative","responsive","trend-aware","communicative","adaptable"]'::jsonb,
  'Morning: Check notifications, respond to comments and DMs. Midday: Create and schedule posts for the week, design visual assets. Afternoon: Monitor trending topics, engage in relevant conversations. Evening: Analyze engagement metrics, plan content for emerging trends.',
  'Social Media Coordinator → Social Media Manager → Senior SMM → Head of Social → Director of Brand / VP of Marketing'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'Email Marketing Specialist',
  'email-marketing-specialist',
  'non-technical',
  'Design email campaigns that nurture leads and drive revenue',
  'Email Marketing Specialists design and optimize email campaigns that nurture leads, retain customers, and drive revenue. You''ll build automated sequences, write compelling copy, segment audiences, A/B test subject lines, and analyze campaign performance. Email remains one of the highest-ROI marketing channels.',
  50000,
  110000,
  'high',
  'medium',
  '["Email Platforms (Mailchimp, Klaviyo, Resend)","Copywriting","Automation Sequences","Segmentation & Personalization","A/B Testing","Deliverability Optimization"]'::jsonb,
  '["detail-oriented","analytical","creative","data-driven","organized"]'::jsonb,
  'Morning: Check campaign metrics, review open and click rates. Midday: Write email copy for new nurture sequence, design template. Afternoon: Set up A/B test for subject lines, segment audience list. Evening: Analyze campaign results, optimize underperforming sequences.',
  'Email Coordinator → Email Marketing Specialist → Senior Specialist → Email Marketing Lead → Head of Lifecycle Marketing'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'Paid Ads Specialist',
  'paid-ads-specialist',
  'non-technical',
  'Manage paid advertising campaigns across digital platforms',
  'Paid Ads Specialists manage advertising campaigns across Google, Meta, LinkedIn, and other platforms. You''ll set up campaigns, write ad copy, manage budgets, optimize targeting, and maximize return on ad spend. Requires analytical thinking and creative testing to find winning ad combinations.',
  50000,
  120000,
  'high',
  'high',
  '["Google Ads","Meta Ads Manager","Campaign Optimization","Ad Copywriting","Audience Targeting","ROAS / CPA Optimization","Landing Page Optimization"]'::jsonb,
  '["analytical","detail-oriented","creative","data-driven","budget-conscious"]'::jsonb,
  'Morning: Check campaign performance, pause underperforming ads. Midday: Launch new ad creatives, set up audience targeting. Afternoon: Analyze conversion data, optimize bidding strategy. Evening: Research competitor ads, plan next week''s creative tests.',
  'Ads Coordinator → Paid Ads Specialist → Senior Ads Specialist → Paid Media Lead → Director of Performance Marketing'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'Performance Marketer',
  'performance-marketer',
  'non-technical',
  'Optimize marketing spend for maximum measurable ROI',
  'Performance Marketers focus on driving measurable business outcomes from marketing spend. You''ll manage multi-channel campaigns, build attribution models, optimize conversion funnels, and allocate budgets based on data. More senior and strategic than paid ads specialists, with ownership of the full acquisition funnel.',
  75000,
  160000,
  'high',
  'medium',
  '["Multi-Channel Campaign Management","Attribution Modeling","Budget Allocation","Conversion Rate Optimization","Analytics (GA4, Segment)","Marketing Automation"]'::jsonb,
  '["data-driven","strategic","analytical","results-oriented","adaptable"]'::jsonb,
  'Morning: Review cross-channel performance dashboard, adjust budgets. Midday: Analyze attribution data, reallocate spend to top channels. Afternoon: Plan new campaign strategy with creative team. Evening: Build performance forecast, prepare monthly report for leadership.',
  'Marketing Analyst → Performance Marketer → Senior Performance → Head of Performance → VP of Marketing / CMO'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'Community Builder',
  'community-builder',
  'non-technical',
  'Create and grow engaged communities around products and brands',
  'Community Builders create thriving online and offline communities around products, brands, and causes. You''ll design community strategies, host events, create engagement programs, onboard new members, and measure community health. Different from community management in its focus on strategic community growth.',
  55000,
  130000,
  'high',
  'medium',
  '["Community Strategy","Event Planning & Hosting","Member Onboarding","Engagement Programs","Platform Management (Discord, Slack)","Community Analytics"]'::jsonb,
  '["empathetic","energetic","organized","creative","community-oriented"]'::jsonb,
  'Morning: Welcome new members, check community health metrics. Midday: Plan and promote upcoming community event. Afternoon: Host workshop or office hours, facilitate member introductions. Evening: Analyze engagement data, design new member retention program.',
  'Community Associate → Community Builder → Senior Community → Head of Community → VP of Community / Growth'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'CRO Specialist',
  'cro-specialist',
  'non-technical',
  'Optimize websites and funnels to maximize conversion rates',
  'Conversion Rate Optimization Specialists improve the percentage of website visitors who take desired actions. You''ll run A/B tests, analyze user behavior, optimize landing pages, and find friction points in conversion funnels. Highly data-driven role that directly impacts revenue.',
  65000,
  140000,
  'high',
  'medium',
  '["A/B Testing (Optimizely, VWO)","User Behavior Analysis (Hotjar)","Landing Page Optimization","Funnel Analysis","Copywriting for Conversion","Statistical Significance"]'::jsonb,
  '["analytical","detail-oriented","experimental","data-driven","persistent"]'::jsonb,
  'Morning: Review A/B test results, document winning variants. Midday: Analyze heatmaps and user recordings, identify friction points. Afternoon: Design new test hypothesis, create landing page variant. Evening: Build conversion report for stakeholders, plan next experiments.',
  'Marketing Analyst → CRO Specialist → Senior CRO → CRO Lead → Head of Growth / Director of CRO'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'Product Manager',
  'product-manager',
  'non-technical',
  'Define what to build and why to maximize user and business value',
  'Product Managers define product strategy, prioritize features, and coordinate cross-functional teams to ship products users love. You''ll conduct user research, write requirements, manage backlogs, and make tough tradeoff decisions. Often called the ''CEO of the product,'' this role sits at the intersection of business, technology, and design.',
  90000,
  200000,
  'very_high',
  'very_high',
  '["Product Strategy","User Research","Roadmap Management","Stakeholder Communication","Data Analysis","Agile Methodology","PRD Writing"]'::jsonb,
  '["strategic","empathetic","decisive","communicative","data-driven"]'::jsonb,
  'Morning: Review product metrics, triage new feature requests. Midday: Lead sprint planning, prioritize backlog items. Afternoon: Conduct user interviews, write product requirements. Evening: Analyze competitor products, prepare quarterly roadmap update.',
  'Associate PM → Product Manager → Senior PM → Director of Product → VP of Product / CPO'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'Technical Product Manager',
  'technical-product-manager',
  'semi-technical',
  'Manage technical products with deep engineering understanding',
  'Technical Product Managers specialize in products that require deep technical understanding — APIs, developer tools, infrastructure, and platforms. You''ll write technical specifications, work directly with engineers on architecture decisions, and translate complex technical capabilities into user value. Requires coding background or strong technical literacy.',
  110000,
  220000,
  'high',
  'high',
  '["Technical Specifications","API Design Understanding","System Architecture","Data Analysis","Agile / Sprint Management","Developer Empathy","SQL / Basic Coding"]'::jsonb,
  '["technical","strategic","communicative","analytical","collaborative"]'::jsonb,
  'Morning: Review engineering metrics, check API usage dashboards. Midday: Write technical spec for new platform feature. Afternoon: Architecture review with engineering, prioritize tech debt. Evening: Analyze developer feedback, plan API versioning strategy.',
  'Engineer / PM → Technical PM → Senior TPM → Director of Product (Platform) → VP of Product'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'Product Analyst',
  'product-analyst',
  'semi-technical',
  'Use data to measure and improve product performance',
  'Product Analysts provide the data foundation for product decisions. You''ll define product metrics, build dashboards, analyze feature adoption, run A/B tests, and surface insights that guide the product roadmap. Sits between data analysis and product management, focused specifically on product performance.',
  75000,
  150000,
  'high',
  'medium',
  '["Product Analytics (Amplitude, Mixpanel)","SQL","A/B Test Analysis","Funnel & Cohort Analysis","Data Visualization","Product Metrics (DAU, Retention)"]'::jsonb,
  '["analytical","curious","communicative","detail-oriented","product-minded"]'::jsonb,
  'Morning: Check product health metrics, investigate unusual patterns. Midday: Analyze new feature adoption, build retention cohorts. Afternoon: Present experiment results to product team, recommend next steps. Evening: Build self-serve dashboard, document metric definitions.',
  'Junior Analyst → Product Analyst → Senior Product Analyst → Lead Analyst → Head of Product Analytics'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'Scrum Master',
  'scrum-master',
  'non-technical',
  'Facilitate agile processes and remove team blockers',
  'Scrum Masters facilitate agile processes that help development teams deliver software effectively. You''ll run sprint ceremonies, remove blockers, coach teams on agile practices, and continuously improve team workflows. Requires strong facilitation skills and deep understanding of agile methodologies.',
  80000,
  150000,
  'high',
  'medium',
  '["Scrum Framework","Sprint Facilitation","Blocker Resolution","Agile Coaching","Jira / Linear","Retrospective Facilitation","Team Metrics"]'::jsonb,
  '["facilitative","patient","organized","empathetic","diplomatic"]'::jsonb,
  'Morning: Lead daily standup, update sprint board. Midday: One-on-one with developer to resolve blocker, update stakeholders. Afternoon: Facilitate sprint review, demo completed work. Evening: Prepare retrospective, analyze team velocity trends.',
  'Scrum Master → Senior Scrum Master → Agile Coach → Director of Agile → VP of Engineering Operations'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'Technical Writer',
  'technical-writer',
  'semi-technical',
  'Create clear documentation that helps users and developers',
  'Technical Writers create documentation that helps users and developers understand and use products effectively. You''ll write API docs, user guides, tutorials, release notes, and internal knowledge bases. Requires ability to understand technical concepts and explain them clearly to different audiences.',
  65000,
  140000,
  'high',
  'low',
  '["Technical Writing","API Documentation","Markdown / docs-as-code","Information Architecture","User Guides & Tutorials","Code Reading Ability","Version Control (Git)"]'::jsonb,
  '["clear communicator","detail-oriented","empathetic","organized","patient"]'::jsonb,
  'Morning: Review documentation tickets, update API reference for new release. Midday: Interview engineer about new feature, draft user guide. Afternoon: Edit and review docs PR, test code samples. Evening: Audit documentation for outdated content, improve information architecture.',
  'Junior Technical Writer → Technical Writer → Senior Writer → Lead Writer → Head of Documentation / Director of Developer Education'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'Program Manager',
  'program-manager',
  'non-technical',
  'Coordinate complex cross-team initiatives and programs',
  'Program Managers coordinate complex initiatives that span multiple teams, timelines, and dependencies. You''ll manage cross-team roadmaps, track milestones, mitigate risks, and ensure large-scale projects deliver on time. More strategic and broader in scope than project management.',
  100000,
  200000,
  'high',
  'medium',
  '["Cross-Team Coordination","Risk Management","Milestone Tracking","Stakeholder Communication","Process Design","Program Reporting","Dependency Management"]'::jsonb,
  '["organized","strategic","communicative","calm under pressure","detail-oriented"]'::jsonb,
  'Morning: Review program status across teams, update risk register. Midday: Lead cross-team sync meeting, resolve dependency conflicts. Afternoon: Prepare executive status report, meet with stakeholders. Evening: Update program timeline, plan mitigation for at-risk deliverables.',
  'Project Manager → Program Manager → Senior Program Manager → Director of Program Management → VP of Operations'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'Business Analyst',
  'business-analyst',
  'non-technical',
  'Translate business needs into technical requirements',
  'Business Analysts bridge the gap between business stakeholders and technical teams. You''ll gather requirements, document workflows, analyze processes, and ensure that what gets built actually solves the business problem. Requires strong communication skills and ability to think both strategically and tactically.',
  65000,
  130000,
  'high',
  'medium',
  '["Requirements Gathering","Process Mapping","Stakeholder Interviews","User Stories / Acceptance Criteria","Data Analysis (SQL, Excel)","Documentation"]'::jsonb,
  '["analytical","communicative","organized","detail-oriented","diplomatic"]'::jsonb,
  'Morning: Review requirements from stakeholder meeting, draft user stories. Midday: Map current business process, identify improvement opportunities. Afternoon: Present requirements to engineering team, clarify acceptance criteria. Evening: Update requirements document, prepare for next stakeholder session.',
  'Junior BA → Business Analyst → Senior BA → Lead BA → Director of Business Analysis / Product Manager'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'No-Code Developer',
  'no-code-developer',
  'semi-technical',
  'Build applications and automations without writing code',
  'No-Code Developers build functional web applications, internal tools, and automations using visual development platforms. You''ll work with Bubble, Webflow, Retool, and Airtable to create solutions that would traditionally require full development teams. Fast-growing field as no-code tools become increasingly powerful.',
  50000,
  120000,
  'very_high',
  'medium',
  '["Bubble / Webflow","Airtable / Retool","Zapier / Make Automations","Database Design","UI/UX Fundamentals","API Integration"]'::jsonb,
  '["resourceful","creative","pragmatic","fast learner","entrepreneurial"]'::jsonb,
  'Morning: Review client feedback, fix bugs in Bubble app. Midday: Build new feature using visual components, connect API. Afternoon: Set up automation workflow in Zapier, test edge cases. Evening: Learn new no-code tool features, plan next client project.',
  'No-Code Builder → No-Code Developer → Senior No-Code Dev → No-Code Agency Owner → Technical Founder'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'Automation Consultant',
  'automation-consultant',
  'semi-technical',
  'Help businesses automate repetitive processes and workflows',
  'Automation Consultants help businesses identify and automate repetitive processes. You''ll map workflows, design automation solutions using tools like Zapier, Make, and n8n, implement integrations, and measure time and cost savings. High-value freelance niche with recurring revenue potential.',
  60000,
  150000,
  'very_high',
  'low',
  '["Zapier / Make / n8n","Process Mapping","API Integration","Python Scripting","CRM Systems (HubSpot, Salesforce)","ROI Analysis"]'::jsonb,
  '["systematic","efficiency-driven","consultative","curious","client-focused"]'::jsonb,
  'Morning: Audit client workflows, identify automation opportunities. Midday: Build automation in Make, connect CRM to email platform. Afternoon: Test and document new automation, train client team. Evening: Prepare ROI report for client, scope next automation project.',
  'Automation Builder → Automation Consultant → Senior Consultant → Automation Agency Owner → Ops Tech Advisor'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'Newsletter Creator',
  'newsletter-creator',
  'creative',
  'Build and monetize email newsletters in your niche',
  'Newsletter Creators build audience-driven businesses through email content. You''ll choose a niche, write compelling content, grow subscriber lists, monetize through sponsorships and paid subscriptions, and build a media brand. One of the most accessible creator economy paths with proven monetization models.',
  20000,
  200000,
  'medium',
  'high',
  '["Newsletter Platforms (Substack, Beehiiv)","Copywriting","Audience Growth","Sponsorship Sales","Email Deliverability","Content Curation"]'::jsonb,
  '["consistent","entrepreneurial","creative","communicative","persistent"]'::jsonb,
  'Morning: Research and curate content for next issue. Midday: Write newsletter draft, edit for clarity and engagement. Afternoon: Negotiate with sponsors, manage subscriber growth campaigns. Evening: Analyze open rates and click data, plan content calendar.',
  'Solo Newsletter → Established Creator → Media Brand → Newsletter Network Owner → Media Company Founder'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'YouTube Creator',
  'youtube-creator',
  'creative',
  'Create and grow a YouTube channel in tech or education',
  'YouTube Creators build audiences through video content on topics like tech, education, tutorials, and reviews. You''ll script, film, edit, optimize for search, build community, and monetize through ads, sponsors, and products. High ceiling for both income and impact in the creator economy.',
  15000,
  300000,
  'medium',
  'very_high',
  '["Video Production","Scripting & Storytelling","Video Editing (Premiere, DaVinci)","YouTube SEO & Algorithm","Thumbnail Design","Audience Building","Monetization Strategy"]'::jsonb,
  '["creative","persistent","charismatic","entrepreneurial","adaptable"]'::jsonb,
  'Morning: Research video topic, write script outline. Midday: Film video, record voiceover and B-roll. Afternoon: Edit video, create thumbnail and write title/description. Evening: Engage with comments, analyze analytics, plan next video.',
  'Solo Creator → Established YouTuber → Multi-Platform Creator → Media Brand → Education Company Founder'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'Course Creator',
  'course-creator',
  'creative',
  'Build and sell online courses that teach valuable skills',
  'Course Creators design, produce, and sell educational content online. You''ll identify in-demand topics, design curriculum, record video lessons, build learning experiences, and market courses to your audience. Combines teaching ability with entrepreneurial skills for a scalable education business.',
  20000,
  250000,
  'high',
  'high',
  '["Curriculum Design","Video Production","Course Platforms (Teachable, Udemy)","Marketing & Sales Funnels","Community Building","Learning Experience Design"]'::jsonb,
  '["educational","structured","entrepreneurial","patient","communicative"]'::jsonb,
  'Morning: Review student feedback, answer course questions. Midday: Record new module lessons, create practice exercises. Afternoon: Optimize sales page, manage launch campaign. Evening: Engage with student community, plan next course topic.',
  'Solo Course Creator → Established Educator → Course Platform → Education Brand → Online School Founder'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'Podcast Producer',
  'podcast-producer',
  'creative',
  'Produce and grow podcasts that build audiences and brands',
  'Podcast Producers manage the end-to-end production of podcasts. You''ll book guests, plan episodes, record and edit audio, write show notes, manage distribution, and grow listenership. Can work as a freelancer for multiple shows or build your own podcast brand.',
  40000,
  120000,
  'medium',
  'medium',
  '["Audio Editing (Descript, Audition)","Guest Booking & Research","Show Notes & SEO","Podcast Distribution","Audience Growth","Sponsorship Management"]'::jsonb,
  '["organized","creative","detail-oriented","communicative","consistent"]'::jsonb,
  'Morning: Edit last week''s episode, add intro and outro. Midday: Research and reach out to potential guests. Afternoon: Record episode, write show notes and timestamps. Evening: Schedule distribution, plan social media clips for promotion.',
  'Audio Editor → Podcast Producer → Senior Producer → Executive Producer → Podcast Network Founder'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'Technical Blogger',
  'technical-blogger',
  'creative',
  'Write in-depth technical content that educates developers',
  'Technical Bloggers write in-depth articles about programming, tools, and technology. You''ll create tutorials, explain complex concepts, review tools, and build an audience of developers. Can monetize through sponsorships, affiliate income, paid content, or use it as a springboard to DevRel and consulting.',
  30000,
  150000,
  'high',
  'medium',
  '["Technical Writing","SEO for Developers","Code Examples & Tutorials","Blog Platforms (Hashnode, Dev.to)","Content Marketing","Audience Building"]'::jsonb,
  '["curious","clear communicator","persistent","educational","detail-oriented"]'::jsonb,
  'Morning: Research trending technical topics, outline new post. Midday: Write tutorial with code examples, test all snippets. Afternoon: Edit and publish, share on social media. Evening: Respond to reader comments, plan next week''s content.',
  'Blogger → Established Technical Writer → Thought Leader → DevRel / Consultant → Author / Course Creator'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'Indie Hacker',
  'indie-hacker',
  'semi-technical',
  'Build and launch profitable software products independently',
  'Indie Hackers build small, profitable software products independently or with tiny teams. You''ll identify problems, build MVPs, launch products, acquire customers, and grow revenue — all without venture capital. Requires a mix of technical skills, marketing savvy, and entrepreneurial grit.',
  10000,
  300000,
  'medium',
  'high',
  '["Full-Stack Development","Product Validation","Landing Page Design","Growth Marketing","Stripe / Payment Integration","Customer Support","Ship Fast Mentality"]'::jsonb,
  '["entrepreneurial","resourceful","persistent","independent","pragmatic"]'::jsonb,
  'Morning: Check MRR dashboard, respond to customer support tickets. Midday: Build new feature based on user feedback. Afternoon: Write marketing content, optimize landing page. Evening: Research new product ideas, engage with indie hacker community.',
  'Side Project Builder → Indie Hacker → Serial Indie Hacker → Micro-SaaS Portfolio Owner → Startup Founder / Advisor'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'Notion Consultant',
  'notion-consultant',
  'non-technical',
  'Design custom Notion workspaces and systems for teams',
  'Notion Consultants design custom workspaces, templates, and systems for individuals and teams using Notion. You''ll build project management systems, knowledge bases, CRMs, and operational dashboards. A niche freelance role with growing demand as Notion becomes a standard business tool.',
  40000,
  120000,
  'medium',
  'low',
  '["Notion Advanced Features","Database Design","Template Building","Process Design","Client Consulting","Workflow Optimization"]'::jsonb,
  '["organized","systematic","client-focused","creative","detail-oriented"]'::jsonb,
  'Morning: Client discovery call, understand their workflow needs. Midday: Design Notion workspace structure, build database relations. Afternoon: Build and test custom templates, record walkthrough video. Evening: Create template for marketplace, write setup documentation.',
  'Notion Power User → Notion Consultant → Senior Consultant → Notion Agency Owner → Productivity SaaS Founder'
) ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)
VALUES (
  'AI Tool Reviewer',
  'ai-tool-reviewer',
  'creative',
  'Review and compare AI tools to help people choose wisely',
  'AI Tool Reviewers test, compare, and review AI products for audiences looking to adopt new tools. You''ll evaluate AI tools across categories, create comparison content, write detailed reviews, and build an audience that trusts your recommendations. Monetize through affiliates, sponsorships, and your own AI-focused media brand.',
  25000,
  150000,
  'high',
  'medium',
  '["AI Tool Evaluation","Content Creation (Video/Written)","Comparative Analysis","SEO & Audience Growth","Affiliate Marketing","Product Testing Methodology"]'::jsonb,
  '["curious","thorough","communicative","objective","early adopter"]'::jsonb,
  'Morning: Test new AI tool, document features and limitations. Midday: Write or film comparison review, create screenshots. Afternoon: Publish review, optimize for search. Evening: Engage with audience, track affiliate performance, scout upcoming AI launches.',
  'Solo Reviewer → Established AI Reviewer → AI Media Brand → AI Newsletter / Community → AI Consultancy Founder'
) ON CONFLICT (slug) DO NOTHING;

-- ============================================================
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
-- INSERT ROLE-SKILL MAPPINGS
-- ============================================================

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'community-manager' AND s.slug = 'discord-management'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'community-manager' AND s.slug = 'content-writing'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'community-manager' AND s.slug = 'community-strategy'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'community-manager' AND s.slug = 'event-planning'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'community-manager' AND s.slug = 'conflict-resolution'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'community-manager' AND s.slug = 'analytics-general'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'web3-content-creator' AND s.slug = 'copywriting'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'web3-content-creator' AND s.slug = 'technical-writing'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'web3-content-creator' AND s.slug = 'social-media-strategy'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'web3-content-creator' AND s.slug = 'seo'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'web3-content-creator' AND s.slug = 'newsletter-management'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'web3-content-creator' AND s.slug = 'storytelling'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'web3-marketing-strategist' AND s.slug = 'growth-hacking'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'web3-marketing-strategist' AND s.slug = 'campaign-management'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'web3-marketing-strategist' AND s.slug = 'influencer-outreach'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'web3-marketing-strategist' AND s.slug = 'analytics-kpis'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'web3-marketing-strategist' AND s.slug = 'brand-positioning'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'web3-marketing-strategist' AND s.slug = 'token-launch-strategy'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'web3-project-manager' AND s.slug = 'agile-scrum'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'web3-project-manager' AND s.slug = 'roadmap-planning'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'web3-project-manager' AND s.slug = 'stakeholder-management'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'web3-project-manager' AND s.slug = 'risk-management'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'web3-project-manager' AND s.slug = 'documentation'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'web3-project-manager' AND s.slug = 'cross-team-coordination'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'smart-contract-developer' AND s.slug = 'solidity'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'smart-contract-developer' AND s.slug = 'rust'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'smart-contract-developer' AND s.slug = 'security-auditing'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'smart-contract-developer' AND s.slug = 'defi-protocols'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'smart-contract-developer' AND s.slug = 'testing-foundry'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'smart-contract-developer' AND s.slug = 'gas-optimization'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'protocol-researcher' AND s.slug = 'whitepaper-analysis'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'protocol-researcher' AND s.slug = 'game-theory'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'protocol-researcher' AND s.slug = 'mechanism-design'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'protocol-researcher' AND s.slug = 'cryptography-basics'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'protocol-researcher' AND s.slug = 'technical-writing'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'protocol-researcher' AND s.slug = 'governance-systems'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'fullstack-dapp-developer' AND s.slug = 'react-nextjs'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'fullstack-dapp-developer' AND s.slug = 'typescript'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'fullstack-dapp-developer' AND s.slug = 'ethersjs-wagmi'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'fullstack-dapp-developer' AND s.slug = 'wallet-integration'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'fullstack-dapp-developer' AND s.slug = 'subgraph-indexing'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'fullstack-dapp-developer' AND s.slug = 'ui-ux-web3'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'smart-contract-auditor' AND s.slug = 'solidity-security'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'smart-contract-auditor' AND s.slug = 'fuzzing-echidna-medusa'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'smart-contract-auditor' AND s.slug = 'formal-verification'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'smart-contract-auditor' AND s.slug = 'exploit-writing'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'smart-contract-auditor' AND s.slug = 'audit-report-writing'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'smart-contract-auditor' AND s.slug = 'defi-protocol-internals'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'blockchain-infra-engineer' AND s.slug = 'node-operations'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'blockchain-infra-engineer' AND s.slug = 'docker-kubernetes'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'blockchain-infra-engineer' AND s.slug = 'linux-administration'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'blockchain-infra-engineer' AND s.slug = 'monitoring-alerting'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'blockchain-infra-engineer' AND s.slug = 'networking-rpc'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'blockchain-infra-engineer' AND s.slug = 'database-management'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'defi-analyst' AND s.slug = 'financial-analysis'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'defi-analyst' AND s.slug = 'tokenomics'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'defi-analyst' AND s.slug = 'risk-assessment'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'defi-analyst' AND s.slug = 'data-analysis'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'defi-analyst' AND s.slug = 'defi-protocols'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'defi-analyst' AND s.slug = 'spreadsheet-modeling'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'on-chain-researcher' AND s.slug = 'dune-analytics'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'on-chain-researcher' AND s.slug = 'sql'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'on-chain-researcher' AND s.slug = 'blockchain-data'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'on-chain-researcher' AND s.slug = 'research-writing'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'on-chain-researcher' AND s.slug = 'data-visualization'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'on-chain-researcher' AND s.slug = 'critical-thinking'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'blockchain-qa-tester' AND s.slug = 'test-writing'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'blockchain-qa-tester' AND s.slug = 'bug-reporting'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'blockchain-qa-tester' AND s.slug = 'security-basics'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'blockchain-qa-tester' AND s.slug = 'foundry-hardhat'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'blockchain-qa-tester' AND s.slug = 'edge-case-thinking'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'blockchain-qa-tester' AND s.slug = 'documentation'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'tokenomics-designer' AND s.slug = 'economic-modeling'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'tokenomics-designer' AND s.slug = 'game-theory'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'tokenomics-designer' AND s.slug = 'spreadsheet-simulation'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'tokenomics-designer' AND s.slug = 'incentive-design'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'tokenomics-designer' AND s.slug = 'governance-frameworks'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'tokenomics-designer' AND s.slug = 'data-analysis'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'dao-operations-lead' AND s.slug = 'governance-tools'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'dao-operations-lead' AND s.slug = 'treasury-management'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'dao-operations-lead' AND s.slug = 'contributor-coordination'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'dao-operations-lead' AND s.slug = 'process-design'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'dao-operations-lead' AND s.slug = 'documentation'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'dao-operations-lead' AND s.slug = 'multisig-operations'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'web3-data-analyst' AND s.slug = 'sql'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'web3-data-analyst' AND s.slug = 'python-data-science'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'web3-data-analyst' AND s.slug = 'dune-flipside'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'web3-data-analyst' AND s.slug = 'dashboard-design'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'web3-data-analyst' AND s.slug = 'data-visualization'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'web3-data-analyst' AND s.slug = 'business-intelligence'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'crypto-compliance-specialist' AND s.slug = 'regulatory-knowledge'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'crypto-compliance-specialist' AND s.slug = 'kyc-aml-procedures'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'crypto-compliance-specialist' AND s.slug = 'risk-assessment'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'crypto-compliance-specialist' AND s.slug = 'policy-writing'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'crypto-compliance-specialist' AND s.slug = 'legal-research'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'crypto-compliance-specialist' AND s.slug = 'audit-preparation'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'nft-creator' AND s.slug = 'digital-art'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'nft-creator' AND s.slug = 'nft-minting'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'nft-creator' AND s.slug = 'marketplace-strategy'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'nft-creator' AND s.slug = 'community-building'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'nft-creator' AND s.slug = 'brand-building'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'nft-creator' AND s.slug = 'smart-contract-basics'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'web3-ux-designer' AND s.slug = 'figma'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'web3-ux-designer' AND s.slug = 'user-research'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'web3-ux-designer' AND s.slug = 'interaction-design'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'web3-ux-designer' AND s.slug = 'design-systems'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'web3-ux-designer' AND s.slug = 'prototyping'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'web3-ux-designer' AND s.slug = 'wallet-ux-patterns'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'web3-game-designer' AND s.slug = 'game-design'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'web3-game-designer' AND s.slug = 'economy-balancing'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'web3-game-designer' AND s.slug = 'player-psychology'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'web3-game-designer' AND s.slug = 'nft-integration'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'web3-game-designer' AND s.slug = 'narrative-design'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'web3-game-designer' AND s.slug = 'prototyping'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'metaverse-architect' AND s.slug = '3d-modeling'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'metaverse-architect' AND s.slug = 'unity-unreal'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'metaverse-architect' AND s.slug = 'spatial-design'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'metaverse-architect' AND s.slug = 'threejs-webgl'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'metaverse-architect' AND s.slug = 'virtual-world-platforms'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'metaverse-architect' AND s.slug = 'interactive-storytelling'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'mev-researcher' AND s.slug = 'mempool-analysis'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'mev-researcher' AND s.slug = 'defi-protocol-internals'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'mev-researcher' AND s.slug = 'python'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'mev-researcher' AND s.slug = 'transaction-simulation'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'mev-researcher' AND s.slug = 'game-theory'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'mev-researcher' AND s.slug = 'flashbots-mev-boost'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'web3-product-manager' AND s.slug = 'product-strategy'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'web3-product-manager' AND s.slug = 'user-research'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'web3-product-manager' AND s.slug = 'roadmap-management'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'web3-product-manager' AND s.slug = 'on-chain-analytics'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'web3-product-manager' AND s.slug = 'ab-testing'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'web3-product-manager' AND s.slug = 'stakeholder-communication'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'web3-product-manager' AND s.slug = 'agile-methodology'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'blockchain-devrel' AND s.slug = 'technical-writing'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'blockchain-devrel' AND s.slug = 'public-speaking'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'blockchain-devrel' AND s.slug = 'sdk-development'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'blockchain-devrel' AND s.slug = 'tutorial-creation'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'blockchain-devrel' AND s.slug = 'community-building'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'blockchain-devrel' AND s.slug = 'javascript-typescript'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'blockchain-devrel' AND s.slug = 'developer-experience'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'zk-engineer' AND s.slug = 'zk-snarks-starks'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'zk-engineer' AND s.slug = 'circuit-design'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'zk-engineer' AND s.slug = 'rust'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'zk-engineer' AND s.slug = 'cryptography'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'zk-engineer' AND s.slug = 'mathematical-proofs'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'zk-engineer' AND s.slug = 'protocol-design'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'cross-chain-developer' AND s.slug = 'multi-chain-architecture'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'cross-chain-developer' AND s.slug = 'bridge-protocol-design'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'cross-chain-developer' AND s.slug = 'solidity'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'cross-chain-developer' AND s.slug = 'cross-chain-messaging'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'cross-chain-developer' AND s.slug = 'security-engineering'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'cross-chain-developer' AND s.slug = 'consensus-mechanisms'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'prompt-engineer' AND s.slug = 'prompt-design-testing'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'prompt-engineer' AND s.slug = 'llm-apis'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'prompt-engineer' AND s.slug = 'evaluation-frameworks'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'prompt-engineer' AND s.slug = 'python'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'prompt-engineer' AND s.slug = 'few-shot-chain-of-thought'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'prompt-engineer' AND s.slug = 'rag-architecture'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'ai-product-manager' AND s.slug = 'product-strategy'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'ai-product-manager' AND s.slug = 'ml-model-evaluation'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'ai-product-manager' AND s.slug = 'user-research'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'ai-product-manager' AND s.slug = 'data-driven-decision-making'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'ai-product-manager' AND s.slug = 'roadmap-planning'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'ai-product-manager' AND s.slug = 'stakeholder-management'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'ai-product-manager' AND s.slug = 'ai-ethics-awareness'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'ml-engineer' AND s.slug = 'pytorch-tensorflow'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'ml-engineer' AND s.slug = 'model-training-fine-tuning'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'ml-engineer' AND s.slug = 'mlops-tools'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'ml-engineer' AND s.slug = 'distributed-computing'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'ml-engineer' AND s.slug = 'data-pipeline-engineering'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'ml-engineer' AND s.slug = 'gpu-optimization'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'ai-safety-researcher' AND s.slug = 'ml-research'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'ai-safety-researcher' AND s.slug = 'alignment-theory'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'ai-safety-researcher' AND s.slug = 'red-teaming-adversarial-testing'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'ai-safety-researcher' AND s.slug = 'interpretability-methods'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'ai-safety-researcher' AND s.slug = 'pytorch-tensorflow'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'ai-safety-researcher' AND s.slug = 'technical-writing'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'ai-safety-researcher' AND s.slug = 'evaluation-design'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'ai-content-strategist' AND s.slug = 'content-strategy'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'ai-content-strategist' AND s.slug = 'ai-writing-tools'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'ai-content-strategist' AND s.slug = 'seo-optimization'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'ai-content-strategist' AND s.slug = 'brand-voice-guidelines'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'ai-content-strategist' AND s.slug = 'content-analytics'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'ai-content-strategist' AND s.slug = 'workflow-automation'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'computer-vision-engineer' AND s.slug = 'pytorch-tensorflow'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'computer-vision-engineer' AND s.slug = 'cnn-vision-transformers'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'computer-vision-engineer' AND s.slug = 'image-processing-opencv'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'computer-vision-engineer' AND s.slug = 'object-detection'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'computer-vision-engineer' AND s.slug = 'data-augmentation'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'computer-vision-engineer' AND s.slug = 'model-optimization-onnx'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'nlp-engineer' AND s.slug = 'transformer-architectures'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'nlp-engineer' AND s.slug = 'hugging-face'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'nlp-engineer' AND s.slug = 'fine-tuning-rlhf'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'nlp-engineer' AND s.slug = 'text-classification-ner'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'nlp-engineer' AND s.slug = 'vector-databases'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'nlp-engineer' AND s.slug = 'rag-systems'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'nlp-engineer' AND s.slug = 'evaluation-metrics-nlp'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'ai-ethics-consultant' AND s.slug = 'bias-auditing'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'ai-ethics-consultant' AND s.slug = 'fairness-metrics'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'ai-ethics-consultant' AND s.slug = 'ai-governance-frameworks'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'ai-ethics-consultant' AND s.slug = 'regulatory-compliance-ai'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'ai-ethics-consultant' AND s.slug = 'impact-assessment'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'ai-ethics-consultant' AND s.slug = 'stakeholder-communication'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'ai-automation-specialist' AND s.slug = 'workflow-automation'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'ai-automation-specialist' AND s.slug = 'ai-api-integration'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'ai-automation-specialist' AND s.slug = 'process-mapping'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'ai-automation-specialist' AND s.slug = 'python-scripting'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'ai-automation-specialist' AND s.slug = 'no-code-low-code'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'ai-automation-specialist' AND s.slug = 'business-process-analysis'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'fine-tuning-specialist' AND s.slug = 'model-fine-tuning-lora'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'fine-tuning-specialist' AND s.slug = 'dataset-curation'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'fine-tuning-specialist' AND s.slug = 'hugging-face'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'fine-tuning-specialist' AND s.slug = 'evaluation-frameworks'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'fine-tuning-specialist' AND s.slug = 'gpu-infrastructure'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'fine-tuning-specialist' AND s.slug = 'prompt-engineering'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'fine-tuning-specialist' AND s.slug = 'rlhf-dpo'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'ai-agent-developer' AND s.slug = 'llm-apis'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'ai-agent-developer' AND s.slug = 'agent-frameworks'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'ai-agent-developer' AND s.slug = 'tool-integration-function-calling'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'ai-agent-developer' AND s.slug = 'typescript'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'ai-agent-developer' AND s.slug = 'vector-databases'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'ai-agent-developer' AND s.slug = 'workflow-orchestration'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'mlops-engineer' AND s.slug = 'docker-kubernetes'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'mlops-engineer' AND s.slug = 'ml-pipeline-tools'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'mlops-engineer' AND s.slug = 'model-serving'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'mlops-engineer' AND s.slug = 'monitoring-observability'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'mlops-engineer' AND s.slug = 'python'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'mlops-engineer' AND s.slug = 'cloud-platforms'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'mlops-engineer' AND s.slug = 'ci-cd-ml'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'frontend-developer' AND s.slug = 'react-nextjs'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'frontend-developer' AND s.slug = 'typescript'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'frontend-developer' AND s.slug = 'css-tailwind'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'frontend-developer' AND s.slug = 'state-management'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'frontend-developer' AND s.slug = 'performance-optimization'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'frontend-developer' AND s.slug = 'accessibility'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'frontend-developer' AND s.slug = 'testing-jest-playwright'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'backend-developer' AND s.slug = 'nodejs'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'backend-developer' AND s.slug = 'rest-graphql-apis'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'backend-developer' AND s.slug = 'postgresql'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'backend-developer' AND s.slug = 'authentication-authorization'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'backend-developer' AND s.slug = 'docker-cloud-deployment'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'backend-developer' AND s.slug = 'caching-redis'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'backend-developer' AND s.slug = 'message-queues'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'full-stack-developer' AND s.slug = 'react-nextjs'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'full-stack-developer' AND s.slug = 'nodejs'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'full-stack-developer' AND s.slug = 'typescript'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'full-stack-developer' AND s.slug = 'postgresql'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'full-stack-developer' AND s.slug = 'rest-graphql-apis'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'full-stack-developer' AND s.slug = 'git-ci-cd'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'full-stack-developer' AND s.slug = 'cloud-platforms'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'mobile-developer' AND s.slug = 'react-native-flutter'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'mobile-developer' AND s.slug = 'swift-kotlin'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'mobile-developer' AND s.slug = 'mobile-ui-patterns'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'mobile-developer' AND s.slug = 'app-store-deployment'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'mobile-developer' AND s.slug = 'push-notifications'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'mobile-developer' AND s.slug = 'offline-storage'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'mobile-developer' AND s.slug = 'mobile-performance'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'devops-cloud-engineer' AND s.slug = 'aws-gcp-azure'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'devops-cloud-engineer' AND s.slug = 'docker-kubernetes'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'devops-cloud-engineer' AND s.slug = 'terraform-iac'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'devops-cloud-engineer' AND s.slug = 'ci-cd-pipelines'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'devops-cloud-engineer' AND s.slug = 'monitoring-datadog-grafana'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'devops-cloud-engineer' AND s.slug = 'linux-administration'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'devops-cloud-engineer' AND s.slug = 'security-best-practices'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'api-developer' AND s.slug = 'rest-api-design'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'api-developer' AND s.slug = 'graphql'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'api-developer' AND s.slug = 'openapi-swagger'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'api-developer' AND s.slug = 'authentication-oauth-jwt'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'api-developer' AND s.slug = 'rate-limiting-caching'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'api-developer' AND s.slug = 'api-documentation'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'api-developer' AND s.slug = 'nodejs'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'systems-architect' AND s.slug = 'system-design'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'systems-architect' AND s.slug = 'microservices-architecture'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'systems-architect' AND s.slug = 'database-design'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'systems-architect' AND s.slug = 'cloud-architecture'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'systems-architect' AND s.slug = 'performance-engineering'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'systems-architect' AND s.slug = 'technical-documentation'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'systems-architect' AND s.slug = 'mentoring'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'qa-test-automation' AND s.slug = 'test-automation'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'qa-test-automation' AND s.slug = 'unit-testing'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'qa-test-automation' AND s.slug = 'ci-cd-integration'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'qa-test-automation' AND s.slug = 'api-testing'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'qa-test-automation' AND s.slug = 'performance-testing'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'qa-test-automation' AND s.slug = 'test-strategy-design'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'qa-test-automation' AND s.slug = 'typescript'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'developer-relations' AND s.slug = 'technical-writing'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'developer-relations' AND s.slug = 'public-speaking'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'developer-relations' AND s.slug = 'content-creation'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'developer-relations' AND s.slug = 'community-building'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'developer-relations' AND s.slug = 'sdk-development'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'developer-relations' AND s.slug = 'python'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'developer-relations' AND s.slug = 'developer-experience'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'open-source-maintainer' AND s.slug = 'git-advanced'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'open-source-maintainer' AND s.slug = 'code-review'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'open-source-maintainer' AND s.slug = 'release-management'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'open-source-maintainer' AND s.slug = 'technical-writing'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'open-source-maintainer' AND s.slug = 'community-building'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'open-source-maintainer' AND s.slug = 'ci-cd-pipelines'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'open-source-maintainer' AND s.slug = 'software-architecture'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'ui-ux-designer' AND s.slug = 'figma'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'ui-ux-designer' AND s.slug = 'user-research'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'ui-ux-designer' AND s.slug = 'wireframing-prototyping'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'ui-ux-designer' AND s.slug = 'visual-design'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'ui-ux-designer' AND s.slug = 'design-systems'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'ui-ux-designer' AND s.slug = 'responsive-design'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'ui-ux-designer' AND s.slug = 'usability-testing'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'product-designer' AND s.slug = 'figma'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'product-designer' AND s.slug = 'user-research'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'product-designer' AND s.slug = 'interaction-design'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'product-designer' AND s.slug = 'product-thinking'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'product-designer' AND s.slug = 'ab-testing'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'product-designer' AND s.slug = 'cross-functional-collaboration'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'product-designer' AND s.slug = 'design-strategy'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'motion-designer' AND s.slug = 'after-effects-lottie'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'motion-designer' AND s.slug = 'figma-motion-protopie'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'motion-designer' AND s.slug = 'css-animations'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'motion-designer' AND s.slug = 'framer-motion-gsap'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'motion-designer' AND s.slug = 'storyboarding'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'motion-designer' AND s.slug = 'animation-principles'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = '3d-artist' AND s.slug = 'blender-cinema4d'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = '3d-artist' AND s.slug = '3d-modeling-sculpting'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = '3d-artist' AND s.slug = 'texturing-materials'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = '3d-artist' AND s.slug = 'lighting-rendering'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = '3d-artist' AND s.slug = 'threejs-webgl'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = '3d-artist' AND s.slug = 'animation'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'brand-designer' AND s.slug = 'logo-design'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'brand-designer' AND s.slug = 'visual-identity-systems'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'brand-designer' AND s.slug = 'typography'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'brand-designer' AND s.slug = 'color-theory'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'brand-designer' AND s.slug = 'brand-strategy'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'brand-designer' AND s.slug = 'adobe-creative-suite'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'brand-designer' AND s.slug = 'presentation-design'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'design-systems-engineer' AND s.slug = 'react-component-development'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'design-systems-engineer' AND s.slug = 'design-tokens'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'design-systems-engineer' AND s.slug = 'storybook'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'design-systems-engineer' AND s.slug = 'accessibility'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'design-systems-engineer' AND s.slug = 'css-tailwind'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'design-systems-engineer' AND s.slug = 'figma-api'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'design-systems-engineer' AND s.slug = 'documentation-writing'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'ux-researcher' AND s.slug = 'user-interviews'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'ux-researcher' AND s.slug = 'usability-testing'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'ux-researcher' AND s.slug = 'survey-design'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'ux-researcher' AND s.slug = 'data-analysis'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'ux-researcher' AND s.slug = 'research-synthesis'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'ux-researcher' AND s.slug = 'presentation-skills'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'ux-researcher' AND s.slug = 'ab-testing'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'creative-director' AND s.slug = 'creative-strategy'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'creative-director' AND s.slug = 'team-leadership'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'creative-director' AND s.slug = 'brand-direction'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'creative-director' AND s.slug = 'design-review'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'creative-director' AND s.slug = 'client-presentation'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'creative-director' AND s.slug = 'cross-functional-collaboration'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'creative-director' AND s.slug = 'trend-forecasting'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'video-editor' AND s.slug = 'premiere-pro-davinci'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'video-editor' AND s.slug = 'color-grading'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'video-editor' AND s.slug = 'sound-design'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'video-editor' AND s.slug = 'motion-graphics'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'video-editor' AND s.slug = 'thumbnail-design'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'video-editor' AND s.slug = 'platform-optimization'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'data-analyst' AND s.slug = 'sql'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'data-analyst' AND s.slug = 'excel-google-sheets'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'data-analyst' AND s.slug = 'tableau-looker-powerbi'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'data-analyst' AND s.slug = 'python-data-science'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'data-analyst' AND s.slug = 'statistical-analysis'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'data-analyst' AND s.slug = 'business-communication'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'data-engineer' AND s.slug = 'sql'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'data-engineer' AND s.slug = 'etl-elt-pipelines'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'data-engineer' AND s.slug = 'data-warehousing'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'data-engineer' AND s.slug = 'spark-distributed'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'data-engineer' AND s.slug = 'data-modeling'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'data-engineer' AND s.slug = 'cloud-platforms'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'data-engineer' AND s.slug = 'data-quality-frameworks'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'data-scientist' AND s.slug = 'r-programming'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'data-scientist' AND s.slug = 'statistical-modeling'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'data-scientist' AND s.slug = 'machine-learning-sklearn'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'data-scientist' AND s.slug = 'sql'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'data-scientist' AND s.slug = 'experiment-design'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'data-scientist' AND s.slug = 'data-visualization'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'data-scientist' AND s.slug = 'jupyter-notebooks'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'bi-analyst' AND s.slug = 'tableau-looker-powerbi'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'bi-analyst' AND s.slug = 'sql'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'bi-analyst' AND s.slug = 'kpi-framework-design'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'bi-analyst' AND s.slug = 'data-modeling'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'bi-analyst' AND s.slug = 'stakeholder-management'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'bi-analyst' AND s.slug = 'report-automation'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'analytics-engineer' AND s.slug = 'dbt'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'analytics-engineer' AND s.slug = 'sql-advanced'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'analytics-engineer' AND s.slug = 'data-modeling'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'analytics-engineer' AND s.slug = 'data-quality-testing'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'analytics-engineer' AND s.slug = 'git-version-control'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'analytics-engineer' AND s.slug = 'metrics-layers'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'analytics-engineer' AND s.slug = 'documentation'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'growth-analyst' AND s.slug = 'funnel-analysis'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'growth-analyst' AND s.slug = 'ab-testing'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'growth-analyst' AND s.slug = 'sql'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'growth-analyst' AND s.slug = 'cohort-analysis'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'growth-analyst' AND s.slug = 'marketing-analytics'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'growth-analyst' AND s.slug = 'product-analytics'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'quantitative-researcher' AND s.slug = 'python'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'quantitative-researcher' AND s.slug = 'statistical-modeling'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'quantitative-researcher' AND s.slug = 'time-series-analysis'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'quantitative-researcher' AND s.slug = 'stochastic-calculus'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'quantitative-researcher' AND s.slug = 'backtesting-frameworks'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'quantitative-researcher' AND s.slug = 'risk-modeling'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'quantitative-researcher' AND s.slug = 'machine-learning-sklearn'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'growth-marketer' AND s.slug = 'growth-experimentation'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'growth-marketer' AND s.slug = 'funnel-optimization'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'growth-marketer' AND s.slug = 'paid-acquisition'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'growth-marketer' AND s.slug = 'analytics-ga4-mixpanel'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'growth-marketer' AND s.slug = 'email-marketing'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'growth-marketer' AND s.slug = 'landing-page-optimization'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'seo-specialist' AND s.slug = 'keyword-research'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'seo-specialist' AND s.slug = 'on-page-seo'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'seo-specialist' AND s.slug = 'technical-seo'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'seo-specialist' AND s.slug = 'link-building'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'seo-specialist' AND s.slug = 'content-strategy'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'seo-specialist' AND s.slug = 'google-search-console'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'seo-specialist' AND s.slug = 'analytics-general'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'content-marketing-manager' AND s.slug = 'content-strategy'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'content-marketing-manager' AND s.slug = 'editorial-planning'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'content-marketing-manager' AND s.slug = 'seo-content-writing'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'content-marketing-manager' AND s.slug = 'analytics-roi-tracking'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'content-marketing-manager' AND s.slug = 'team-management'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'content-marketing-manager' AND s.slug = 'distribution-strategy'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'social-media-manager' AND s.slug = 'content-creation'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'social-media-manager' AND s.slug = 'platform-strategy'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'social-media-manager' AND s.slug = 'community-engagement'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'social-media-manager' AND s.slug = 'social-analytics'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'social-media-manager' AND s.slug = 'copywriting'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'social-media-manager' AND s.slug = 'paid-social-advertising'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'email-marketing-specialist' AND s.slug = 'email-platforms'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'email-marketing-specialist' AND s.slug = 'copywriting'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'email-marketing-specialist' AND s.slug = 'automation-sequences'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'email-marketing-specialist' AND s.slug = 'segmentation-personalization'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'email-marketing-specialist' AND s.slug = 'ab-testing'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'email-marketing-specialist' AND s.slug = 'deliverability-optimization'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'paid-ads-specialist' AND s.slug = 'google-ads'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'paid-ads-specialist' AND s.slug = 'meta-ads-manager'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'paid-ads-specialist' AND s.slug = 'campaign-optimization'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'paid-ads-specialist' AND s.slug = 'ad-copywriting'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'paid-ads-specialist' AND s.slug = 'audience-targeting'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'paid-ads-specialist' AND s.slug = 'roas-cpa-optimization'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'paid-ads-specialist' AND s.slug = 'landing-page-optimization'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'performance-marketer' AND s.slug = 'multi-channel-campaigns'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'performance-marketer' AND s.slug = 'attribution-modeling'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'performance-marketer' AND s.slug = 'budget-allocation'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'performance-marketer' AND s.slug = 'conversion-rate-optimization'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'performance-marketer' AND s.slug = 'analytics-ga4-mixpanel'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'performance-marketer' AND s.slug = 'marketing-automation'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'community-builder' AND s.slug = 'community-strategy'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'community-builder' AND s.slug = 'event-planning-hosting'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'community-builder' AND s.slug = 'member-onboarding'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'community-builder' AND s.slug = 'engagement-programs'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'community-builder' AND s.slug = 'platform-management'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'community-builder' AND s.slug = 'community-analytics'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'cro-specialist' AND s.slug = 'ab-testing-tools'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'cro-specialist' AND s.slug = 'user-behavior-analysis'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'cro-specialist' AND s.slug = 'landing-page-optimization'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'cro-specialist' AND s.slug = 'funnel-analysis'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'cro-specialist' AND s.slug = 'copywriting-conversion'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'cro-specialist' AND s.slug = 'statistical-significance'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'product-manager' AND s.slug = 'product-strategy'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'product-manager' AND s.slug = 'user-research'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'product-manager' AND s.slug = 'roadmap-management'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'product-manager' AND s.slug = 'stakeholder-communication'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'product-manager' AND s.slug = 'data-analysis'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'product-manager' AND s.slug = 'agile-methodology'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'product-manager' AND s.slug = 'prd-writing'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'technical-product-manager' AND s.slug = 'technical-specifications'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'technical-product-manager' AND s.slug = 'api-design-understanding'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'technical-product-manager' AND s.slug = 'system-architecture-understanding'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'technical-product-manager' AND s.slug = 'data-analysis'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'technical-product-manager' AND s.slug = 'agile-methodology'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'technical-product-manager' AND s.slug = 'developer-empathy'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'technical-product-manager' AND s.slug = 'sql-basic-coding'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'product-analyst' AND s.slug = 'product-analytics'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'product-analyst' AND s.slug = 'sql'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'product-analyst' AND s.slug = 'ab-testing'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'product-analyst' AND s.slug = 'funnel-analysis'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'product-analyst' AND s.slug = 'data-visualization'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'product-analyst' AND s.slug = 'product-metrics'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'scrum-master' AND s.slug = 'scrum-framework'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'scrum-master' AND s.slug = 'sprint-facilitation'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'scrum-master' AND s.slug = 'blocker-resolution'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'scrum-master' AND s.slug = 'agile-coaching'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'scrum-master' AND s.slug = 'jira-linear'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'scrum-master' AND s.slug = 'retrospective-facilitation'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'scrum-master' AND s.slug = 'team-metrics'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'technical-writer' AND s.slug = 'technical-writing'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'technical-writer' AND s.slug = 'api-documentation'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'technical-writer' AND s.slug = 'markdown-docs-as-code'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'technical-writer' AND s.slug = 'information-architecture'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'technical-writer' AND s.slug = 'user-guides-tutorials'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'technical-writer' AND s.slug = 'code-reading'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'technical-writer' AND s.slug = 'git-version-control'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'program-manager' AND s.slug = 'cross-team-coordination'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'program-manager' AND s.slug = 'risk-management'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'program-manager' AND s.slug = 'milestone-tracking'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'program-manager' AND s.slug = 'stakeholder-communication'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'program-manager' AND s.slug = 'process-design'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'program-manager' AND s.slug = 'program-reporting'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'program-manager' AND s.slug = 'dependency-management'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'business-analyst' AND s.slug = 'requirements-gathering'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'business-analyst' AND s.slug = 'process-mapping'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'business-analyst' AND s.slug = 'stakeholder-interviews'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'business-analyst' AND s.slug = 'user-stories-acceptance-criteria'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'business-analyst' AND s.slug = 'data-analysis'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'business-analyst' AND s.slug = 'documentation'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'no-code-developer' AND s.slug = 'bubble-webflow'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'no-code-developer' AND s.slug = 'airtable-retool'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'no-code-developer' AND s.slug = 'zapier-make'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'no-code-developer' AND s.slug = 'database-design'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'no-code-developer' AND s.slug = 'ui-ux-fundamentals'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'no-code-developer' AND s.slug = 'api-integration'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'automation-consultant' AND s.slug = 'zapier-make'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'automation-consultant' AND s.slug = 'process-mapping'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'automation-consultant' AND s.slug = 'api-integration'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'automation-consultant' AND s.slug = 'python-scripting'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'automation-consultant' AND s.slug = 'crm-systems'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'automation-consultant' AND s.slug = 'roi-analysis'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'newsletter-creator' AND s.slug = 'newsletter-platforms'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'newsletter-creator' AND s.slug = 'copywriting'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'newsletter-creator' AND s.slug = 'audience-growth'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'newsletter-creator' AND s.slug = 'sponsorship-sales'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'newsletter-creator' AND s.slug = 'email-deliverability'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'newsletter-creator' AND s.slug = 'content-curation'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'youtube-creator' AND s.slug = 'video-production'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'youtube-creator' AND s.slug = 'scripting-storytelling'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'youtube-creator' AND s.slug = 'video-editing'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'youtube-creator' AND s.slug = 'youtube-seo-algorithm'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'youtube-creator' AND s.slug = 'thumbnail-design'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'youtube-creator' AND s.slug = 'audience-building'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'youtube-creator' AND s.slug = 'monetization-strategy'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'course-creator' AND s.slug = 'curriculum-design'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'course-creator' AND s.slug = 'video-production'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'course-creator' AND s.slug = 'course-platforms'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'course-creator' AND s.slug = 'marketing-sales-funnels'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'course-creator' AND s.slug = 'community-building'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'course-creator' AND s.slug = 'learning-experience-design'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'podcast-producer' AND s.slug = 'audio-editing'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'podcast-producer' AND s.slug = 'guest-booking-research'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'podcast-producer' AND s.slug = 'show-notes-seo'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'podcast-producer' AND s.slug = 'podcast-distribution'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'podcast-producer' AND s.slug = 'audience-growth'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'podcast-producer' AND s.slug = 'sponsorship-management'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'technical-blogger' AND s.slug = 'technical-writing'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'technical-blogger' AND s.slug = 'seo-for-developers'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'technical-blogger' AND s.slug = 'code-examples-tutorials'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'technical-blogger' AND s.slug = 'blog-platforms'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'technical-blogger' AND s.slug = 'content-marketing'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'technical-blogger' AND s.slug = 'audience-building'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'indie-hacker' AND s.slug = 'full-stack-development'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'indie-hacker' AND s.slug = 'product-validation'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'indie-hacker' AND s.slug = 'landing-page-design'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'indie-hacker' AND s.slug = 'growth-marketing'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'indie-hacker' AND s.slug = 'stripe-payment-integration'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'indie-hacker' AND s.slug = 'customer-support'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'indie-hacker' AND s.slug = 'product-validation'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'notion-consultant' AND s.slug = 'notion-advanced'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'notion-consultant' AND s.slug = 'database-design'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'notion-consultant' AND s.slug = 'template-building'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'notion-consultant' AND s.slug = 'process-design'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'notion-consultant' AND s.slug = 'client-consulting'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'notion-consultant' AND s.slug = 'workflow-optimization'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'ai-tool-reviewer' AND s.slug = 'ai-tool-evaluation'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'essential'
FROM public.roles r, public.skills s
WHERE r.slug = 'ai-tool-reviewer' AND s.slug = 'content-creation'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'ai-tool-reviewer' AND s.slug = 'comparative-analysis'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'important'
FROM public.roles r, public.skills s
WHERE r.slug = 'ai-tool-reviewer' AND s.slug = 'seo-audience-growth'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'ai-tool-reviewer' AND s.slug = 'affiliate-marketing'
ON CONFLICT (role_id, skill_id) DO NOTHING;

INSERT INTO public.role_skills (role_id, skill_id, importance)
SELECT r.id, s.id, 'nice_to_have'
FROM public.roles r, public.skills s
WHERE r.slug = 'ai-tool-reviewer' AND s.slug = 'product-testing-methodology'
ON CONFLICT (role_id, skill_id) DO NOTHING;
