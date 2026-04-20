/**
 * ============================================================
 * Central data file for Eduardo Neres's portfolio.
 * Edit this file to update content across the site.
 * ============================================================
 */

// -------------------- STACK --------------------
// Icon slugs follow Simple Icons catalog: https://simpleicons.org
// Use `customIcon: true` for techs without an official Simple Icons entry
// (rendered as a text-badge fallback).

export type TechItem = {
  name: string;
  slug: string;
  customIcon?: boolean;
};

export type StackCategory = {
  id: string;
  label: { pt: string; en: string };
  daily: TechItem[];
  workedWith: TechItem[];
};

export const stack: StackCategory[] = [
  {
    id: 'languages',
    label: { pt: 'Linguagens', en: 'Languages' },
    daily: [
      { name: 'C#', slug: 'csharp', customIcon: true },       // C# has no official Simple Icons entry
      { name: '.NET', slug: 'dotnet' },
      { name: 'Python', slug: 'python' },
      { name: 'TypeScript', slug: 'typescript' },
      { name: 'JavaScript', slug: 'javascript' },
    ],
    workedWith: [
      { name: 'C++', slug: 'cplusplus' },
      { name: 'Java', slug: 'openjdk' },
    ],
  },
  {
    id: 'cloud-devops',
    label: { pt: 'Cloud & DevOps', en: 'Cloud & DevOps' },
    daily: [
      { name: 'AWS', slug: 'amazonwebservices', customIcon: true }, // avoid issues, use fallback
      { name: 'Docker', slug: 'docker' },
      { name: 'Kubernetes', slug: 'kubernetes' },
      { name: 'Git', slug: 'git' },
    ],
    workedWith: [
      { name: 'Azure', slug: 'microsoftazure', customIcon: true },
      { name: 'Azure DevOps', slug: 'azuredevops', customIcon: true },
      { name: 'SonarQube', slug: 'sonarqube', customIcon: true },
      { name: 'OpenShift', slug: 'redhatopenshift', customIcon: true },
    ],
  },
  {
    id: 'data-messaging',
    label: { pt: 'Dados & Mensageria', en: 'Data & Messaging' },
    daily: [
      { name: 'PostgreSQL', slug: 'postgresql' },
      { name: 'MongoDB', slug: 'mongodb' },
      { name: 'SQL', slug: 'mysql' },
    ],
    workedWith: [
      { name: 'Kafka', slug: 'apachekafka' },
      { name: 'Redis', slug: 'redis' },
      { name: 'InfluxDB', slug: 'influxdb' },
      { name: 'Grafana', slug: 'grafana' },
    ],
  },
  {
    id: 'iot-embedded',
    label: { pt: 'IoT & Embarcados', en: 'IoT & Embedded' },
    daily: [],
    workedWith: [
      { name: 'MQTT', slug: 'mqtt' },
      { name: 'CAN Bus', slug: 'canbus', customIcon: true },
      { name: 'Linux Embedded', slug: 'linux' },
      { name: 'ARM', slug: 'arm', customIcon: true },
    ],
  },
  {
    id: 'frontend',
    label: { pt: 'Frontend', en: 'Frontend' },
    daily: [
      { name: 'Angular', slug: 'angular' },
      { name: 'HTML', slug: 'html5' },
      { name: 'CSS', slug: 'css', customIcon: true }, // simpleicons uses "css" slug; render as fallback for safety
    ],
    workedWith: [
      { name: 'React', slug: 'react' },
    ],
  },
];

// -------------------- TIMELINE --------------------

export type Experience = {
  id: string;
  company: string;
  companyUrl?: string;
  role: { pt: string; en: string };
  period: { start: string; end: string | 'present' }; // YYYY-MM format
  location: { pt: string; en: string };
  current?: boolean;
  description: { pt: string[]; en: string[] };
  tech?: string[]; // tech highlights shown as badges
};

export const experiences: Experience[] = [
  {
    id: 'guidewire',
    company: 'Guidewire Software',
    companyUrl: 'https://www.guidewire.com',
    role: {
      pt: 'Software Engineer — IPE (Insights Platform Engineering)',
      en: 'Software Engineer — IPE (Insights Platform Engineering)',
    },
    period: { start: '2026-03', end: 'present' },
    location: { pt: 'Remoto', en: 'Remote' },
    current: true,
    description: {
      pt: [
        'Descrição em breve — recém-chegado à equipe IPE, trabalhando com dashboards e AWS para a plataforma de insights de seguros P&C da Guidewire.',
      ],
      en: [
        'Description coming soon — recently joined the IPE team, working with dashboards and AWS for Guidewire\'s P&C insurance insights platform.',
      ],
    },
    tech: ['AWS', 'Dashboards'],
  },
  {
    id: 'bosch',
    company: 'Robert Bosch',
    companyUrl: 'https://www.bosch.com.br',
    role: {
      pt: 'Software Development Analyst',
      en: 'Software Development Analyst',
    },
    period: { start: '2022-09', end: '2026-03' },
    location: { pt: 'Remoto', en: 'Remote' },
    description: {
      pt: [
        'Desenvolvi software embarcado em C++ para Linux ARM, responsável por telemetria automotiva em tempo real via protocolos CAN (J1939, XCP, CCP).',
        'Desenvolvi um Tool Management System em C# (.NET) integrado à API do SAP, gerenciando ferramentas e recursos de chão de fábrica.',
        'Construí interfaces web em Angular com TypeScript para visualização de dados e gerenciamento do sistema.',
        'Arquitetei microsserviços com Apache Kafka para comunicação assíncrona, orquestrados em Kubernetes via Azure CI/CD.',
      ],
      en: [
        'Developed embedded software in C++ for ARM Linux, responsible for real-time automotive telemetry via CAN bus protocols (J1939, XCP, CCP).',
        'Built a Tool Management System in C# (.NET) integrated with SAP APIs, handling shop-floor tools and resources.',
        'Developed web interfaces in Angular with TypeScript for data visualization and system management.',
        'Architected microservices with Apache Kafka for async communication, orchestrated on Kubernetes via Azure CI/CD.',
      ],
    },
    tech: ['C++', 'C#', '.NET', 'Angular', 'TypeScript', 'Kafka', 'Kubernetes', 'Azure', 'CAN Bus', 'ARM Linux'],
  },
  {
    id: 'hilab',
    company: 'Hilab Technologies',
    companyUrl: 'https://www.hilab.com.br',
    role: {
      pt: 'Java Developer (Embedded Systems)',
      en: 'Java Developer (Embedded Systems)',
    },
    period: { start: '2021-09', end: '2022-09' },
    location: { pt: 'Presencial — Curitiba, PR', en: 'On-site — Curitiba, PR' },
    description: {
      pt: [
        'Desenvolvi software embarcado para dispositivos médicos em Java, Python e JavaScript.',
        'Implementei gerenciamento persistente de filas de arquivos e comunicação HTTP REST.',
        'Trabalhei em sistemas Linux embarcados baseados em ARM, integrando leitura de QR Code via câmera.',
        'Gerenciei bancos de dados NoSQL (MongoDB) e garanti a confiabilidade do código com testes unitários e pipelines CI/CD.',
      ],
      en: [
        'Developed embedded software for medical devices in Java, Python and JavaScript.',
        'Implemented persistent file queue management and HTTP REST communication.',
        'Worked on ARM-based embedded Linux systems, integrating QR Code reading via camera.',
        'Managed NoSQL databases (MongoDB) and ensured code reliability through unit tests and CI/CD pipelines.',
      ],
    },
    tech: ['Java', 'Python', 'MongoDB', 'Linux Embedded', 'ARM'],
  },
];

// -------------------- CERTIFICATIONS --------------------

export type Certification = {
  id: string;
  name: string;
  issuer: string;
  year: string;
  url?: string; // verification URL if available
  featured?: boolean; // highlight at the top
};

export const certifications: Certification[] = [
  {
    id: 'aws-cp',
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: '2026',
    url: 'https://aws.amazon.com/verification',
    featured: true,
  },
  {
    id: 'azure-devops',
    name: 'Azure DevOps: CI/CD with Visual Studio',
    issuer: 'Coursera',
    year: '2023',
  },
  {
    id: 'containers',
    name: 'Docker, Kubernetes & OpenShift: Introduction to Containers',
    issuer: 'IBM',
    year: '2023',
  },
  {
    id: 'scrum',
    name: 'Scrum Fundamentals Professional',
    issuer: 'CertiProf',
    year: '2022',
  },
  {
    id: 'cpp-ds',
    name: 'C++ Object-Oriented Data Structures',
    issuer: 'University of Illinois',
    year: '2022',
  },
  {
    id: 'xcp',
    name: 'XCP Fundamentals',
    issuer: 'VECTOR Informatik',
    year: '2023',
  },
];

// -------------------- PERSONAL INFO --------------------

export const personal = {
  name: 'Eduardo Neres',
  handle: 'neresdu',
  location: { pt: 'Curitiba, PR, Brasil', en: 'Curitiba, PR, Brazil' },
  timezone: 'UTC-3',
  email: 'eduardoneress12@gmail.com',
  github: 'https://github.com/neresdu',
  linkedin: 'https://linkedin.com/in/eduardoneres-029955123',
  yearsOfExperience: 4,
};

// Helper to format periods like "Sept 2022 — Present"
export function formatPeriod(period: Experience['period'], lang: 'pt' | 'en'): string {
  const monthsPt = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  const monthsEn = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const months = lang === 'pt' ? monthsPt : monthsEn;
  const present = lang === 'pt' ? 'Presente' : 'Present';

  const fmt = (ym: string) => {
    const [y, m] = ym.split('-');
    return `${months[parseInt(m, 10) - 1]} ${y}`;
  };

  const start = fmt(period.start);
  const end = period.end === 'present' ? present : fmt(period.end);
  return `${start} — ${end}`;
}
