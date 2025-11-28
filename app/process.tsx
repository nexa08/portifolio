// app/process.tsx
import { View, Text, StyleSheet, ScrollView,TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const processSteps = [
  {
    step: 1,
    icon: 'comments',
    title: 'Discovery & Consultation',
    description: 'We start with a free consultation to understand your project goals, requirements, and vision.',
    duration: '1-2 days',
    deliverables: [
      'Project Requirements Document',
      'Initial Technical Assessment',
      'Project Timeline Estimate',
      'Cost Breakdown'
    ],
    color: '#007AFF'
  },
  {
    step: 2,
    icon: 'list-alt',
    title: 'Planning & Design',
    description: 'I create detailed wireframes, prototypes, and design mockups for your approval before development begins.',
    duration: '3-7 days',
    deliverables: [
      'Wireframes & Prototypes',
      'UI/UX Design Mockups',
      'Technical Architecture',
      'Development Plan'
    ],
    color: '#28a745'
  },
  {
    step: 3,
    icon: 'code',
    title: 'Development & Implementation',
    description: 'Agile development with regular updates. I build your application using best practices and clean code.',
    duration: '2-8 weeks',
    deliverables: [
      'Weekly Progress Updates',
      'Code Repository Access',
      'Quality Assurance Testing',
      'Staging Environment'
    ],
    color: '#6f42c1'
  },
  {
    step: 4,
    icon: 'shield',
    title: 'Testing & Quality Assurance',
    description: 'Comprehensive testing across devices and platforms to ensure everything works perfectly.',
    duration: '3-7 days',
    deliverables: [
      'Bug Fixes & Optimizations',
      'Performance Testing Report',
      'User Acceptance Testing',
      'Security Audit'
    ],
    color: '#fd7e14'
  },
  {
    step: 5,
    icon: 'rocket',
    title: 'Deployment & Launch',
    description: 'Smooth deployment to production with proper monitoring and post-launch support.',
    duration: '1-3 days',
    deliverables: [
      'App Store Deployment',
      'Production Environment',
      'Documentation',
      'Training Session'
    ],
    color: '#e83e8c'
  },
  {
    step: 6,
    icon: 'headphones',
    title: 'Support & Maintenance',
    description: 'Ongoing support, maintenance, and updates to keep your application running smoothly.',
    duration: 'Ongoing',
    deliverables: [
      'Bug Fix Support',
      'Feature Updates',
      'Performance Monitoring',
      'Security Updates'
    ],
    color: '#20c997'
  }
];

export default function ProcessScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>My Development Process</Text>
      <Text style={styles.subtitle}>
        A transparent, collaborative approach to bringing your ideas to life
      </Text>

      {/* Process Overview */}
      <View style={styles.overviewCard}>
        <View style={styles.overviewItem}>
          <FontAwesome name="clock-o" size={20} color="#007AFF" />
          <Text style={styles.overviewNumber}>4-12 Weeks</Text>
          <Text style={styles.overviewLabel}>Typical Project Duration</Text>
        </View>
        <View style={styles.overviewDivider} />
        <View style={styles.overviewItem}>
          <FontAwesome name="refresh" size={20} color="#007AFF" />
          <Text style={styles.overviewNumber}>Agile </Text>
          <Text style={styles.overviewLabel}>Development Methodology</Text>
        </View>
        <View style={styles.overviewDivider} />
        <View style={styles.overviewItem}>
          <FontAwesome name="comments" size={20} color="#007AFF" />
          <Text style={styles.overviewNumber}>Weekly</Text>
          <Text style={styles.overviewLabel}>Progress Updates</Text>
        </View>
      </View>

      {/* Process Steps */}
      <View style={styles.processContainer}>
        {processSteps.map((step, index) => (
          <View key={step.step} style={styles.processStep}>
            {/* Step Header */}
            <View style={styles.stepHeader}>
              <View style={[styles.stepNumber, { backgroundColor: step.color }]}>
                <Text style={styles.stepNumberText}>{step.step}</Text>
              </View>
              <View style={styles.stepTitleContainer}>
                <Text style={styles.stepTitle}>{step.title}</Text>
                <View style={styles.stepDuration}>
                  <FontAwesome name="clock-o" size={12} color="#666" />
                  <Text style={styles.durationText}>{step.duration}</Text>
                </View>
              </View>
              <View style={[styles.stepIcon, { backgroundColor: step.color }]}>
                <FontAwesome name={step.icon} size={20} color="#fff" />
              </View>
            </View>

            {/* Step Description */}
            <Text style={styles.stepDescription}>{step.description}</Text>

            {/* Deliverables */}
            <View style={styles.deliverablesSection}>
              <Text style={styles.deliverablesTitle}>Key Deliverables:</Text>
              <View style={styles.deliverablesList}>
                {step.deliverables.map((deliverable, deliverableIndex) => (
                  <View key={deliverableIndex} style={styles.deliverableItem}>
                    <FontAwesome name="check-circle" size={14} color="#28a745" />
                    <Text style={styles.deliverableText}>{deliverable}</Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Connector Line (except for last step) */}
            {index < processSteps.length - 1 && (
              <View style={styles.connectorLine} />
            )}
          </View>
        ))}
      </View>

      {/* CTA Section */}
      <View style={styles.ctaSection}>
        <Text style={styles.ctaTitle}>Ready to Start Your Project?</Text>
        <Text style={styles.ctaSubtitle}>
          Let's discuss your project and create a customized development plan
        </Text>
        <Link href="/contactme" asChild>
          <TouchableOpacity style={styles.ctaButton}>
            <FontAwesome name="calendar" size={18} color="#fff" />
            <Text style={styles.ctaButtonText}>Schedule Free Consultation</Text>
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
  overviewCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 20,
    marginBottom: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
    borderWidth: 1,
    borderColor: 'rgba(0, 122, 255, 0.1)',
  },
  overviewItem: {
    flex: 1,
    alignItems: 'center',
  },
  overviewDivider: {
    width: 1,
    backgroundColor: 'rgba(0, 122, 255, 0.2)',
    marginHorizontal: 16,
  },
  overviewNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginTop: 8,
    marginBottom: 4,
  },
  overviewLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  processContainer: {
    marginBottom: 40,
  },
  processStep: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: 'rgba(0, 122, 255, 0.1)',
    position: 'relative',
  },
  stepHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  stepNumber: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  stepNumberText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  stepTitleContainer: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  stepDuration: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  durationText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 6,
  },
  stepIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepDescription: {
    fontSize: 15,
    color: '#555',
    lineHeight: 22,
    marginBottom: 20,
  },
  deliverablesSection: {
    marginTop: 16,
  },
  deliverablesTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  deliverablesList: {
    gap: 8,
  },
  deliverableItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  deliverableText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    marginLeft: 8,
    flex: 1,
  },
  connectorLine: {
    position: 'absolute',
    bottom: -12,
    left: 48,
    right: 48,
    height: 2,
    backgroundColor: 'rgba(0, 122, 255, 0.2)',
    zIndex: -1,
  },
  ctaSection: {
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    padding: 32,
    borderRadius: 20,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(0, 122, 255, 0.2)',
    marginBottom: 20,
  },
  ctaTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 8,
    textAlign: 'center',
  },
  ctaSubtitle: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 22,
  },
  ctaButton: {
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
  ctaButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});