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