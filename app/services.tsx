// app/services.tsx
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const services = [
  {
    icon: 'phone-portrait-outline',
    title: 'Mobile App Development',
    description: 'Cross-platform mobile applications using React Native and Expo. I build performant, scalable apps that work seamlessly on both iOS and Android.',
    features: [
      'iOS & Android App Development',
      'React Native & Expo',
      'Performance Optimization', 
      'App Store Deployment',
      'Offline Functionality',
      'Push Notifications',
      'Biometric Authentications'
    ],
    technologies: ['React Native', 'Expo', 'TypeScript', 'Flutter','JavaScript'],
    price: 'Starting at $240'
  },
  {
    icon: 'earth',
    title: 'Web Development',
    description: 'Modern, responsive web applications built with cutting-edge technologies. From landing pages to complex web apps with better user experiences.',
    features: [
      'Responsive Web Design',
      'React.js & Next.js',
      'API Integration',
      'Progressive Web Apps',
      'E-commerce Solutions',
      'SEO Optimization'
    ],
    technologies: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js','PHP','Laravel',],
    price: 'Starting at $160'
  },
  {
    icon: 'brush-outline',
    title: 'UI/UX Design',
    description: 'User-centered design that converts visitors into customers. I create intuitive interfaces that are both beautiful and functional.',
    features: [
      'User Research & Analysis',
      'Wireframing & Prototyping',
      'Visual Design Systems',
      'User Testing',
      'Design Handoff',
      'Design System Creation'
    ],
    technologies: [ 'Adobe XD', 'User Research', 'Prototyping', 'Design Systems'],
    price: 'Starting at $150'
  },
  {
    icon: 'settings-outline',
    title: 'Consultation & Maintenance',
    description: 'Ongoing support and maintenance to keep your applications running smoothly. I provide technical guidance and code reviews.',
    features: [
      'Code Review & Audit',
      'Performance Optimization',
      'Bug Fixing & Updates',
      'Technical Consultation',
      'Project Planning',
      'Team Mentoring'
    ],
    technologies: ['Code Review', 'Performance', 'Best Practices', 'Architecture'],
    price: '$105'
  }
];

export default function ServicesScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>My Services</Text>
      <Text style={styles.subtitle}>
        For comprehensive solutions to bring your digital ideas to life, You're in right place!
      </Text>

      {/* Services Grid */}
      <View style={styles.servicesGrid}>
        {services.map((service, index) => (
          <View key={index} style={styles.serviceCard}>
            {/* Service Header */}
            <View style={styles.serviceHeader}>
              <View style={styles.serviceIconContainer}>
                <Ionicons name={service.icon} size={32} color="#007AFF" />
              </View>
              <View style={styles.serviceTitleContainer}>
                <Text style={styles.serviceTitle}>{service.title}</Text>
                <Text style={styles.servicePrice}>{service.price}</Text>
              </View>
            </View>

            {/* Service Description */}
            <Text style={styles.serviceDescription}>{service.description}</Text>

            {/* Technologies */}
            <View style={styles.technologiesSection}>
              <Text style={styles.sectionLabel}>Technologies:</Text>
              <View style={styles.technologiesContainer}>
                {service.technologies.map((tech, techIndex) => (
                  <View key={techIndex} style={styles.technologyTag}>
                    <Text style={styles.technologyText}>{tech}</Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Features */}
            <View style={styles.featuresSection}>
              <Text style={styles.sectionLabel}>What's Included:</Text>
              <View style={styles.featuresList}>
                {service.features.map((feature, featureIndex) => (
                  <View key={featureIndex} style={styles.featureItem}>
                    <Ionicons name="checkmark-circle-outline" size={18} color="#28a745" />
                    <Text style={styles.featureText}>{feature}</Text>
                  </View>
                ))}
              </View>
            </View>

            {/* CTA Button */}
            <Link href="/contactme" asChild>
              <TouchableOpacity style={styles.inquireButton}>
                <Text style={styles.inquireButtonText}>Get Quote</Text>
                <Ionicons name="arrow-forward" size={18} color="#fff" />
              </TouchableOpacity>
            </Link>
          </View>
        ))}
      </View>

      {/* Bottom CTA */}
      <View style={styles.bottomCTASection}>
        <Text style={styles.bottomCTATitle}>Not Sure What You Need?</Text>
        <Text style={styles.bottomCTASubtitle}>
          Let's discuss your project and find the perfect solution together
        </Text>
        <Link href="/contactme" asChild>
          <TouchableOpacity style={styles.primaryCTAButton}>
            <Ionicons name="chatbubble-ellipses-outline" size={20} color="#fff" />
            <Text style={styles.primaryCTAText}>Free Consultation</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 122, 255, 0.05)',
    padding: 24,
       maxWidth: 600,
    alignSelf: 'center', 
    width: '100%', 
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#1a1a1a',
    textAlign: 'center',
    marginBottom: 12,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 40,
  },
  servicesGrid: {
    gap: 24,
    marginBottom: 40,
  },
  serviceCard: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(0, 122, 255, 0.1)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  serviceHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  serviceIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  serviceTitleContainer: {
    flex: 1,
  },
  serviceTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  servicePrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#007AFF',
  },
  serviceDescription: {
    fontSize: 15,
    color: '#555',
    lineHeight: 22,
    marginBottom: 20,
  },
  technologiesSection: {
    marginBottom: 20,
  },
  sectionLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  technologiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  technologyTag: {
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(0, 122, 255, 0.2)',
  },
  technologyText: {
    fontSize: 12,
    color: '#007AFF',
    fontWeight: '500',
  },
  featuresSection: {
    marginBottom: 24,
  },
  featuresList: {
    gap: 10,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  featureText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    marginLeft: 8,
    flex: 1,
  },
  inquireButton: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  inquireButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginRight: 8,
  },
  bottomCTASection: {
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    padding: 32,
    borderRadius: 20,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(0, 122, 255, 0.2)',
    marginBottom: 20,
  },
  bottomCTATitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 8,
    textAlign: 'center',
  },
  bottomCTASubtitle: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 22,
  },
  primaryCTAButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6,
  },
  primaryCTAText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});