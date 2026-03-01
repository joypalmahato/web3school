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