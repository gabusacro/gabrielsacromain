-- Run this in Supabase SQL Editor after applying 001_create_projects.sql
-- to populate sample projects (optional)

INSERT INTO public.projects (slug, title, description, long_description, tags, link_url, repo_url, featured, sort_order)
VALUES
  ('enterprise-dashboard', 'Enterprise Order Management System', 'Full-stack SaaS for order lifecycle, inventory, and analytics. Built for scale with real-time sync.', 'A modern order management platform with role-based access, real-time inventory, and Stripe integration. Serves 50+ teams with sub-second latency.', ARRAY['Next.js', 'Supabase', 'Stripe', 'TypeScript'], 'https://example.com', 'https://github.com', true, 0),
  ('design-system', 'Design System & Component Library', 'Accessible, themable component library with Figma sync and design tokens.', 'Design system used across 3 products. Includes React components, Storybook, and automated Figma–code sync.', ARRAY['React', 'Tailwind', 'Figma', 'Storybook'], 'https://example.com', null, true, 1),
  ('ml-experiments', 'ML Experiments Platform', 'Experiment tracking and model registry for ML teams. Reproducible runs and dashboards.', 'Internal tool for tracking PyTorch/TensorFlow experiments, hyperparameters, and metrics. Integrated with existing data pipelines.', ARRAY['Python', 'PyTorch', 'PostgreSQL', 'FastAPI'], null, 'https://github.com', false, 2),
  ('mobile-wallet', 'Mobile Wallet & Payments', 'Cross-platform wallet app with biometric auth and instant P2P transfers.', 'React Native app with 100k+ downloads. Secure key storage, QR payments, and push notifications.', ARRAY['React Native', 'Node.js', 'Biometrics'], 'https://example.com', null, true, 3),
  ('api-gateway', 'API Gateway & Rate Limiting', 'High-performance gateway with auth, rate limits, and observability.', 'Custom gateway handling 10M+ req/day. JWT validation, per-tenant limits, and OpenTelemetry tracing.', ARRAY['Go', 'Redis', 'OpenTelemetry'], null, 'https://github.com', false, 4),
  ('analytics-dashboard', 'Analytics Dashboard', 'Real-time product analytics with funnels, retention, and custom events.', 'Internal analytics product with SQL-backed funnels, cohort retention, and export to BigQuery.', ARRAY['Next.js', 'ClickHouse', 'd3.js'], 'https://example.com', null, false, 5)
ON CONFLICT (slug) DO NOTHING;
