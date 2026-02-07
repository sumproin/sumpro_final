import { 
  Code2, 
  Server, 
  Users, 
  ShieldCheck, 
  Cloud, 
  FileCheck, 
  Target, 
  Eye, 
  HeartHandshake 
} from 'lucide-react';
import { ServiceItem, NavItem, JobPosition, ValueItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  // { label: 'Corporate Training', path: '/training' },
  { label: 'Careers', path: '/careers' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact Us', path: '/contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'software',
    title: 'IT Software Development & Healthcare IT',
    description: 'Custom software solutions tailored for enterprise needs, specializing in robust healthcare IT support and management systems.',
    longDescription: 'In an era driven by digital transformation, our Software Development division focuses on building scalable, secure, and high-performance applications. We specialize in the Healthcare sector, creating Hospital Management Systems (HMS), Telemedicine platforms, and EHR solutions that comply with global standards like HIPAA. Our agile development process ensures that your business requirements are met with precision, delivering software that evolves with your company.',
    icon: Code2,
    image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop',
    features: [
      'Custom Enterprise Resource Planning (ERP)',
      'Healthcare Information Systems (HIS)',
      'Mobile App Development (iOS & Android)',
      'Legacy System Modernization',
      'API Integration & Microservices Architecture'
    ],
    benefits: [
      { title: 'Operational Efficiency', detail: 'Automate workflows and reduce manual errors with tailored software.' },
      { title: 'Data Interoperability', detail: 'Seamlessly connect disparate systems for a unified view of business data.' },
      { title: 'Scalability', detail: 'Architecture designed to grow alongside your user base and data volume.' }
    ]
  },
  {
    id: 'datacenter',
    title: 'Datacenter Operations',
    description: 'Comprehensive server setup, structured cabling, and Operations & Maintenance (O&M) for mission-critical infrastructure.',
    longDescription: 'Your data is your most valuable asset. sumPRO provides end-to-end datacenter lifecycle management. From the initial design of structured cabling to the installation of high-density server racks and 24/7 Operations & Maintenance (O&M), we ensure your physical infrastructure is robust. We handle cooling optimization, power redundancy planning, and physical security, guaranteeing maximum uptime for your critical applications.',
    icon: Server,
    image: '../assets/datacenter.jpg',
    features: [
      'Server Rack Installation & Configuration',
      'Structured Cabling (Fiber & Copper)',
      'Power & Cooling Management',
      '24/7 Monitoring & Incident Response',
      'Hardware Maintenance & Upgrades'
    ],
    benefits: [
      { title: '99.9% Uptime', detail: 'Redundant systems design ensuring business continuity.' },
      { title: 'Cost Reduction', detail: 'Optimized energy consumption and hardware utilization.' },
      { title: 'Future Proofing', detail: 'Scalable infrastructure ready for high-performance computing.' }
    ]
  },
  {
    id: 'hr',
    title: 'HR Consultancy & Payroll',
    description: 'Trusted HR partner for verified talent, smarter hiring, and compliant workforce management.',
    longDescription: 'sumPRO is a hybrid HR consulting company delivering verified, experienced, and job-ready talent across India. We reduce hiring risk and interview overload by validating candidates before they reach you. Build great teams with confidence — we bring only genuine, suitable talent. Trusted HR partner for verified talent, smarter hiring, and compliant workforce management.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop',
    features: [
      'Multi-level candidate verification through social profile checks, references, and background insights',
      'First-round technical screening conducted by our team to save client time and effort',
      'Hiring solutions for permanent, contract, and freelance workforce',
      'People management support with workforce security fundamentals',
      'End-to-end HR services including payroll, statutory compliance (PF, ESIC, PT), and employee lifecycle management'
    ],
    benefits: [
      { title: 'Verified Talent', detail: 'We reduce hiring risk by validating candidates through multi-level checks before they reach you.' },
      { title: 'Smarter Hiring', detail: 'Save time with our first-round technical screenings and focused candidate selection.' },
      { title: 'Total Compliance', detail: 'Full lifecycle management including payroll and statutory compliance (PF, ESIC, PT).' }
    ]
  },
  {
    id: 'security',
    title: 'Surveillance & Network Security',
    description: 'Advanced CCTV installation, remote monitoring, and hardened network security protocols to protect your assets.',
    longDescription: 'Security is paramount in the modern corporate landscape. sumPRO delivers a dual-layer security approach: physical and digital. Our physical security solutions include IP-based CCTV surveillance, biometric access control, and perimeter intrusion detection. On the digital front, we implement next-gen firewalls, intrusion prevention systems (IPS), and secure VPN architectures to safeguard your proprietary data from cyber threats.',
    icon: ShieldCheck,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop',
    features: [
      'IP CCTV & Remote Monitoring Command Center',
      'Biometric & RFID Access Control',
      'Next-Gen Firewall Implementation',
      'Vulnerability Assessment (VAPT)',
      'Endpoint Security Solutions'
    ],
    benefits: [
      { title: 'Asset Protection', detail: 'Comprehensive monitoring of physical and digital assets.' },
      { title: 'Threat Mitigation', detail: 'Proactive detection of security breaches before they escalate.' },
      { title: 'Audit Readiness', detail: 'Detailed logs and reports for security audits and compliance.' }
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud Infrastructure & Migration',
    description: 'Seamless cloud setup, migration strategies, and ongoing management for AWS, Azure, and Google Cloud environments.',
    longDescription: 'Transition to the cloud with confidence. sumPRO specializes in cloud architecture, helping businesses migrate from on-premise legacy systems to flexible cloud environments (AWS, Azure, GCP). We don\'t just move data; we optimize applications for the cloud (refactoring), ensuring you get the benefits of auto-scaling, load balancing, and serverless computing. Our FinOps approach ensures you only pay for the resources you actually use.',
    icon: Cloud,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    features: [
      'Cloud Migration Strategy (Lift & Shift / Refactor)',
      'Hybrid Cloud Architecture',
      'DevOps & CI/CD Pipeline Setup',
      'Cloud Security Posture Management',
      'Disaster Recovery as a Service (DRaaS)'
    ],
    benefits: [
      { title: 'Agility', detail: 'Deploy new resources in minutes rather than weeks.' },
      { title: 'Cost Efficiency', detail: 'Shift from CAPEX to OPEX with pay-as-you-go models.' },
      { title: 'Global Reach', detail: 'Deploy applications closer to your users via content delivery networks.' }
    ]
  },
  {
    id: 'compliance',
    title: 'Statutory Registrations & Licensing',
    description: 'Expert assistance with Pvt Ltd, LLP, OPC registrations, GST, MSME, FSSAI, and other regulatory compliances.',
    longDescription: 'Navigating the regulatory landscape can be daunting for startups and established enterprises alike. sumPRO provides a "Business in a Box" compliance service. We handle everything from Company Incorporation (Pvt Ltd, LLP) to complex licensing like FSSAI, Import Export Code (IEC), and Shop & Establishment Acts. Our legal experts ensure your business filings are accurate and timely, protecting directors from liabilities.',
    icon: FileCheck,
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop',
    features: [
      'Company Incorporation & ROC Filings',
      'GST Registration & Monthly Returns',
      'Trademark & IP Registration',
      'FSSAI, ISO, and MSME Certifications',
      'Annual Compliance & Audit Support'
    ],
    benefits: [
      { title: 'Peace of Mind', detail: 'Operate knowing you are fully compliant with local laws.' },
      { title: 'Speed to Market', detail: 'Fast-track registrations to start business operations sooner.' },
      { title: 'Legal Safety', detail: 'Avoid penalties and legal notices with timely filings.' }
    ]
  },
];

export const CORE_VALUES: ValueItem[] = [
  {
    title: 'Integrity',
    description: 'We uphold the highest standards of honesty and transparency in all our dealings.',
    icon: ShieldCheck,
  },
  {
    title: 'Innovation',
    description: 'Constantly adopting new technologies to deliver cutting-edge solutions.',
    icon: Target,
  },
  {
    title: 'Excellence',
    description: 'Commitment to superior quality in every project we undertake.',
    icon: Eye,
  },
  {
    title: 'Client-Centricity',
    description: 'Your success is our priority. We build long-lasting partnerships.',
    icon: HeartHandshake,
  },
];

export const JOBS: JobPosition[] = [
  {
    id: '1',
    title: 'Senior Full Stack Developer',
    location: 'Bangalore (Hybrid)',
    type: 'Full-time',
    description: 'Seeking an experienced developer proficient in React, Node.js, and Cloud technologies.',
  },
  {
    id: '2',
    title: 'Network Security Engineer',
    location: 'Mumbai (On-site)',
    type: 'Full-time',
    description: 'Responsible for maintaining secure network infrastructure and surveillance systems.',
  },
  {
    id: '3',
    title: 'HR Manager',
    location: 'Delhi (Remote)',
    type: 'Full-time',
    description: 'Lead recruitment drives and manage payroll operations for enterprise clients.',
  },
];

// MOCK DATA FOR ADMIN DASHBOARD
export const MOCK_INQUIRIES = [
  { id: 1, name: "Rahul Verma", email: "rahul.v@techstart.in", subject: "Partnership Proposal", date: "2024-05-15", status: "New" },
  { id: 2, name: "Sarah Jenkins", email: "sarah.j@globalcorp.com", subject: "Cloud Migration Services", date: "2024-05-14", status: "In Progress" },
  { id: 3, name: "Amit Shah", email: "amit.s@retailking.com", subject: "POS Software Inquiry", date: "2024-05-12", status: "Resolved" },
  { id: 4, name: "Priya Sharma", email: "priya.s@edu.org", subject: "Training for Interns", date: "2024-05-10", status: "New" },
  { id: 5, name: "John Doe", email: "john.doe@email.com", subject: "General Question", date: "2024-05-08", status: "Resolved" },
];

export const MOCK_APPLICATIONS = [
  { id: 101, name: "Vikram Singh", position: "Senior Full Stack Developer", email: "vikram.s@email.com", experience: "5 Years", date: "2024-05-16", status: "Interview" },
  { id: 102, name: "Anjali Gupta", position: "HR Manager", email: "anjali.g@email.com", experience: "8 Years", date: "2024-05-15", status: "Pending" },
  { id: 103, name: "Rohan Das", position: "Network Security Engineer", email: "rohan.d@email.com", experience: "3 Years", date: "2024-05-14", status: "Rejected" },
  { id: 104, name: "Meera Reddy", position: "Senior Full Stack Developer", email: "meera.r@email.com", experience: "6 Years", date: "2024-05-12", status: "Pending" },
];