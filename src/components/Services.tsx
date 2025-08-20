// Template-enhanced component
// Generated: 2025-08-20T02:47:07.080Z
// Section: services
// Category: services
// Template ID: services-c002

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  ArrowRight,
  CheckCircle2,
  Star,
  Code2,
  Palette,
  Globe,
  Shield,
  Rocket,
  Users,
  BarChart3,
  Cpu
} from "lucide-react"

export default function SAP_IntegrationServices() {
  const services = [
    {
      id: "sap-integration",
      title: "SAP Integration Services",
      description: "Seamless integration of your SAP systems with other business applications",
      longDescription: "Our SAP integration services help you unlock the full potential of your SAP investment. We'll connect your SAP systems with other critical business applications, enabling data-driven decision making and streamlined operations.",
      icon: Globe,
      benefits: [
        "Comprehensive SAP integration expertise",
        "Customized integration solutions",
        "Improved data visibility and reporting",
        "Increased operational efficiency"
      ],
      pricing: "Starting at $10,000/month",
      timeline: "3-6 months typical engagement",
      featured: true,
      badge: "Most Popular"
    },
    {
      id: "sap-optimization",
      title: "SAP Process Optimization",
      description: "Streamline your SAP workflows for maximum productivity",
      longDescription: "We'll analyze your existing SAP processes and implement targeted optimizations to boost efficiency, reduce costs, and improve user experience. Our experts will work closely with your team to identify pain points and implement tailored solutions.",
      icon: BarChart3,
      benefits: [
        "Business process re-engineering",
        "Automation and workflow improvements",
        "Change management and user adoption",
        "Ongoing performance monitoring"
      ],
      pricing: "Custom quotes available",
      timeline: "4-12 weeks per project"
    },
    {
      id: "sap-migration",
      title: "SAP Migration and Upgrades",
      description: "Seamless transition to the latest SAP technologies",
      longDescription: "Whether you're moving to the cloud, upgrading to a new version, or consolidating multiple SAP instances, our migration experts will ensure a smooth and successful transition. We'll handle the entire process, from planning to execution, to minimize disruption and maximize your ROI.",
      icon: Rocket,
      benefits: [
        "Comprehensive migration planning",
        "Data migration and validation",
        "User training and change management",
        "Post-migration support and optimization"
      ],
      pricing: "Starting at $15,000/project",
      timeline: "6-12 weeks per migration"
    },
    {
      id: "sap-security",
      title: "SAP Security and Compliance",
      description: "Protect your SAP systems and data with comprehensive security measures",
      longDescription: "Our SAP security and compliance services ensure your critical systems and data are safeguarded against threats. We'll conduct thorough assessments, implement robust security controls, and help you maintain compliance with industry regulations.",
      icon: Shield,
      benefits: [
        "Vulnerability assessment and penetration testing",
        "Access control and user management",
        "Audit logging and compliance reporting",
        "Ongoing security monitoring and incident response"
      ],
      pricing: "Custom quotes available",
      timeline: "2-4 weeks per audit",
      badge: "Essential"
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            SAP Integration Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Unlock the Full Potential of Your
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              SAP Investment
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our comprehensive SAP integration and optimization services help you streamline operations, improve data visibility, and drive business growth.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon
            
            return (
              <div key={service.id}>
                <div className={`
                  group relative overflow-hidden rounded-2xl
                  ${service.featured 
                    ? 'border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent p-8' 
                    : 'border border-border/50 p-8 hover:border-primary/20 transition-colors duration-300'
                  }
                `}>
                  {/* Service Content */}
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className={`
                        size-14 rounded-xl flex items-center justify-center
                        ${service.featured 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-primary/10 text-primary'
                        }
                      `}>
                        <Icon className="size-7" />
                      </div>
                    </div>
                    
                    {/* Main Content */}
                    <div className="flex-grow space-y-4">
                      {/* Title and Badges */}
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-semibold">
                          {service.title}
                        </h3>
                        {service.badge && (
                          <Badge variant={service.featured ? "default" : "secondary"}>
                            {service.badge}
                          </Badge>
                        )}
                        {service.featured && (
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="size-4 fill-yellow-500 text-yellow-500" />
                            ))}
                          </div>
                        )}
                      </div>
                      
                      {/* Descriptions */}
                      <p className="text-lg text-muted-foreground">
                        {service.description}
                      </p>
                      
                      {service.longDescription && (
                        <p className="text-muted-foreground">
                          {service.longDescription}
                        </p>
                      )}
                      
                      {/* Benefits Grid */}
                      <div className="grid sm:grid-cols-2 gap-3 pt-2">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="size-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Pricing and Timeline */}
                      <div className="flex flex-wrap gap-6 pt-4">
                        {service.pricing && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Pricing:</span>
                            <span className="text-sm font-semibold">
                              {service.pricing}
                            </span>
                          </div>
                        )}
                        {service.timeline && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Timeline:</span>
                            <span className="text-sm font-semibold">
                              {service.timeline}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {/* CTA Button */}
                      <div className="pt-4">
                        <Button 
                          variant={service.featured ? "default" : "outline"}
                          className="group/btn"
                        >
                          Get a Free Consultation
                          <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Separator between items */}
                {index < services.length - 1 && (
                  <Separator className="my-8" />
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-muted/50 text-center">
          <h3 className="text-2xl font-semibold mb-3">Unlock the Power of SAP Integration</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our team of SAP experts is ready to help you streamline your operations, improve data visibility, and drive business growth. Schedule a consultation to learn more.
          </p>
          <Button size="lg">
            Schedule a Consultation
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}