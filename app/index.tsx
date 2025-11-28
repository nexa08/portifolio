// app/index.tsx
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Linking } from 'react-native';
import { Link } from 'expo-router';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { portfolioData } from './data/portifolioData';

export default function HomeScreen() {
  // Calculate experience years dynamically
  const currentYear = new Date().getFullYear();
  const startYear = 2022; // From your experience data
  const experienceYears = currentYear - startYear;

  // Handle social link presses
  const handleSocialPress = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Profile Picture & Header Section */}
      <View style={styles.header}>
        <View style={styles.profileImageContainer}>
          <Image 
            source={require('../assets/profile.png')} 
            style={styles.profileImage}
          />
          <View style={styles.onlineIndicator} />
        </View>
        <Text style={styles.greeting}>Hello, I'm</Text>
        <Text style={styles.title}>{portfolioData.name}</Text>
        <View style={styles.titleContainer}>
          <Text style={styles.subtitle}>{portfolioData.title}</Text>
        </View>
        
        {/* Availability Badge */}
        <View style={styles.availabilityBadge}>
          <View style={styles.availabilityDot} />
          <Text style={styles.availabilityText}>Available for new projects</Text>
        </View>
      </View>

      {/* Bio Section */}
      <View style={styles.bioCard}>
        <Ionicons name="sparkles" size={24} color="#007AFF" style={styles.bioIcon} />
        <View style={styles.bioContent}>
          <Text style={styles.bio}>{portfolioData.bio}</Text>
          <Text style={styles.bioHighlight}>Let's build something amazing together!</Text>
        </View>
      </View>

      {/* Stats Section */}
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <View style={styles.statIconContainer}>
            <Ionicons name="code-slash" size={24} color="#fff" />
          </View>
          <Text style={styles.statNumber}>{portfolioData.skills.length}+</Text>
          <Text style={styles.statLabel}>Skills</Text>
        </View>
        
        <View style={styles.statDivider} />
        
        <View style={styles.statItem}>
          <View style={styles.statIconContainer}>
            <Ionicons name="folder-open" size={24} color="#fff" />
          </View>
          <Text style={styles.statNumber}>{portfolioData.projects.length}+</Text>
          <Text style={styles.statLabel}>Projects</Text>
        </View>

        <View style={styles.statDivider} />
        
        <View style={styles.statItem}>
          <View style={styles.statIconContainer}>
            <Ionicons name="trophy" size={24} color="#fff" />
          </View>
          <Text style={styles.statNumber}>{experienceYears}+</Text>
          <Text style={styles.statLabel}>Years Exp</Text>
        </View>
      </View>

      {/* Specialization Tags - Using actual skills from data */}
      <View style={styles.specializationSection}>
        <Text style={styles.sectionTitle}>My Expertise</Text>
        <View style={styles.specializationTags}>
          {portfolioData.skills.slice(0, 6).map((skill, index) => (
            <View key={index} style={styles.specializationTag}>
              <Ionicons name="checkmark-circle" size={16} color="#007AFF" />
              <Text style={styles.specializationText}>{skill.name}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Recent Projects Preview */}
      <View style={styles.projectsSection}>
        <Text style={styles.sectionTitle}>Recent Projects</Text>
        <View style={styles.projectsGrid}>
          {portfolioData.projects.slice(0, 3).map((project, index) => (
            <View key={project.id} style={styles.projectCard}>
              <Ionicons name="rocket" size={24} color="#007AFF" />
              <Text style={styles.projectTitle}>{project.title}</Text>
              <Text style={styles.projectTech}>
                {project.technologies.slice(0, 2).join(' • ')}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Call-to-Action Section */}
      <View style={styles.ctaSection}>
        <View style={styles.ctaHeader}>
          <Ionicons name="rocket" size={20} color="#007AFF" style={styles.ctaIcon} />
          <Text style={styles.ctaTitle}>Ready to Start Your Project?</Text>
        </View>
        <Text style={styles.ctaSubtitle}>Let's discuss how we can bring your ideas to life</Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonsContainer}>
        <Link href="/contactme" asChild>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Contact Me</Text>
            <FontAwesome name="external-link" size={16} color="#007AFF" style={styles.externalIcon} />
          </TouchableOpacity>
        </Link>
<Link href="/process" asChild>
  <TouchableOpacity style={styles.primaryButton}>
    <FontAwesome name="tasks" size={20} color="#007AFF" style={styles.buttonIcon} />
    <Text style={styles.primaryButtonText}>My Process</Text>
  </TouchableOpacity>
</Link>
        <View style={styles.secondaryButtons}>
          <Link href="/about" asChild>
            <TouchableOpacity style={styles.secondaryButton}>
              <Ionicons name="person" size={20} color="#007AFF" style={styles.buttonIcon} />
              <Text style={styles.secondaryButtonText}>About Me</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/projects" asChild>
            <TouchableOpacity style={styles.secondaryButton}>
              <Ionicons name="layers" size={20} color="#007AFF" style={styles.buttonIcon} />
              <Text style={styles.secondaryButtonText}>View Projects</Text>
            </TouchableOpacity>
          </Link>

       <Link href="/services" asChild>
     <TouchableOpacity style={styles.secondaryButton}>
     <Ionicons name="construct" size={20} color="#007AFF" style={styles.buttonIcon} />
     <Text style={styles.secondaryButtonText}>My Services</Text>
     </TouchableOpacity>
     </Link>
        </View>

      </View>

      {/* Quick Links */}
      <View style={styles.quickLinks}>
        <Text style={styles.quickLinksTitle}>Let's Connect</Text>
        
        {/* Location */}
        {portfolioData.contact.location && (
          <View style={styles.locationContainer}>
            <FontAwesome name="map-marker" color="red" size={16} />
            <Text style={styles.locationText}> {portfolioData.contact.location}</Text>
          </View>
        )}
        
        <View style={styles.socialLinks}>
          {portfolioData.contact.github && (
            <TouchableOpacity 
              style={[styles.socialLink, styles.github]}
              onPress={() => handleSocialPress(portfolioData.contact.github!)}
            >
              <Ionicons name="logo-github" size={20} color="#fff" />
            </TouchableOpacity>
          )}
          {portfolioData.contact.linkedin && (
            <TouchableOpacity 
              style={[styles.socialLink, styles.linkedin]}
              onPress={() => handleSocialPress(portfolioData.contact.linkedin!)}
            >
              <Ionicons name="logo-linkedin" size={20} color="#fff" />
            </TouchableOpacity>
          )}
          {portfolioData.contact.telegram && (
            <TouchableOpacity 
              style={[styles.socialLink, styles.telegram]}
              onPress={() => handleSocialPress(`https://t.me/${portfolioData.contact.telegram}`)}
            >
              <FontAwesome name="telegram" size={20} color="#fff" />
            </TouchableOpacity>
          )}
          {portfolioData.contact.email && (
            <TouchableOpacity 
              style={[styles.socialLink, styles.email]}
              onPress={() => Linking.openURL(`mailto:${portfolioData.contact.email}`)}
            >
              <Ionicons name="mail" size={20} color="#fff" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Trust Badge */}
      <View style={styles.trustBadge}>
        <Ionicons name="shield-checkmark" size={16} color="#28a745" />
        <Text style={styles.trustText}>Trusted by clients worldwide</Text>
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
  header: {
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 20,
  },
  profileImageContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 4,
    borderColor: '#007AFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
   
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#28a745',
    borderWidth: 3,
    borderColor: '#fff',
  },
  greeting: {
    fontSize: 18,
    color: '#666',
    marginBottom: 8,
    fontWeight: '300',
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 12,
    textAlign: 'center',
  },
  titleContainer: {
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'rgba(0, 122, 255, 0.2)',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: '#007AFF',
    fontWeight: '600',
  },
  availabilityBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(40, 167, 69, 0.2)',
  },
  availabilityDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#28a745',
    marginRight: 8,
  },
  availabilityText: {
    fontSize: 14,
    color: '#28a745',
    fontWeight: '500',
  },
  bioCard: {
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    padding: 24,
    borderRadius: 20,
    marginBottom: 32,
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
    flexDirection: 'row',
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  bioIcon: {
    marginRight: 16,
    marginTop: 2,
  },
  bioContent: {
    flex: 1,
  },
  bio: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    marginBottom: 8,
  },
  bioHighlight: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '600',
    fontStyle: 'italic',
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    padding: 24,
    borderRadius: 20,
    marginBottom: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(0, 122, 255, 0.2)',
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  statDivider: {
    width: 1,
    backgroundColor: 'rgba(0, 122, 255, 0.3)',
    marginHorizontal: 16,
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  specializationSection: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 16,
    textAlign: 'center',
  },
  specializationTags: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 8,
  },
  specializationTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(0, 122, 255, 0.2)',
  },
  specializationText: {
    fontSize: 12,
    color: '#007AFF',
    fontWeight: '500',
    marginLeft: 4,
  },
  projectsSection: {
    marginBottom: 32,
  },
  projectsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 12,
  },
  projectCard: {
    flex: 1,
    minWidth: '30%',
    backgroundColor: 'rgba(0, 122, 255, 0.08)',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0, 122, 255, 0.2)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,

  },
  projectTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
    marginTop: 8,
    textAlign: 'center',
  },
  projectTech: {
    fontSize: 10,
    color: '#666',
    marginTop: 4,
    textAlign: 'center',
  },
  ctaSection: {
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    padding: 24,
    borderRadius: 20,
    marginBottom: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    borderWidth: 2,
    borderColor: 'rgba(0, 122, 255, 0.3)',
  },
  ctaHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  ctaIcon: {
    marginRight: 8,
  },
  ctaTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007AFF',
    textAlign: 'center',
  },
  ctaSubtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  buttonsContainer: {
    marginBottom: 32,
  },
  primaryButton: {
    backgroundColor: 'transparent',
    padding: 20,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#007AFF',
    transform: [{ scale: 1 }],
  },
  secondaryButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: 'transparent',
    padding: 18,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#007AFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ scale: 1 }],
  },
  buttonIcon: {
    marginRight: 8,
  },
  externalIcon: {
    marginLeft: 8,
  },
  primaryButtonText: {
    color: '#007AFF',
    fontSize: 18,
    fontWeight: '600',
  },
  secondaryButtonText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600',
  },
  quickLinks: {
    alignItems: 'center',
    marginBottom: 24,
  },
  quickLinksTitle: {
    fontSize: 18,
    color: '#1a1a1a',
    marginBottom: 12,
    fontWeight: '600',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  locationText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  socialLinks: {
    flexDirection: 'row',
    gap: 12,
  },
  socialLink: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  
    transform: [{ scale: 1 }],
  },
  github: {
    backgroundColor: '#333',
  },
  linkedin: {
    backgroundColor: '#0077b5',
  },
  telegram: {
    backgroundColor: '#0088cc',
  },
  email: {
    backgroundColor: '#ea4335',
  },
  trustBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(40, 167, 69, 0.1)',
    padding: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(40, 167, 69, 0.2)',
    marginBottom: 20,
  },
  trustText: {
    fontSize: 14,
    color: '#28a745',
    fontWeight: '500',
    marginLeft: 8,
  },
});