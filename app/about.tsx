// app/about.tsx
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, Image } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons,FontAwesome } from '@expo/vector-icons';
import { portfolioData } from './data/portifolioData';

export default function AboutScreen() {
  // Get skill level colors directly from the data
  const getSkillColor = (level) => {
    switch (level) {
      case 'Beginner': return '#6c757d';
      case 'Intermediate': return '#007AFF';
      case 'Advanced': return '#28a745';
      case 'Expert': return '#dc3545';
      default: return '#6c757d';
    }
  };

  const handleEmailPress = () => {
    Linking.openURL(`mailto:${portfolioData.contact.email}`);
  };

  const handlePhonePress = () => {
    if (portfolioData.contact.phone) {
      Linking.openURL(`tel:${portfolioData.contact.phone}`);
    }
  };

  const handleLinkedInPress = () => {
    if (portfolioData.contact.linkedin) {
      Linking.openURL(portfolioData.contact.linkedin);
    }
  };

  const handleGitHubPress = () => {
    if (portfolioData.contact.github) {
      Linking.openURL(portfolioData.contact.github);
    }
  };

    const handleTelegramPress = () => {
      if (portfolioData.contact.telegram) {
        Linking.openURL(`https://t.me/${portfolioData.contact.telegram}`);
      }
    };
        const handleLocationPress = () => {
      if (portfolioData.contact.location) {
        Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${portfolioData.contact.location}`);
      }
    };

  // Fun facts with Ionicons
  const funFacts = [
    { icon: 'musical-notes-outline', text: 'Love coding with Lo-fi music in the background' },
    { icon: 'cafe-outline', text: 'Coffee enthusiast - can\'t start coding without my morning brew' },
    { icon: 'game-controller-outline', text: 'Casual gamer - enjoy strategy and puzzle games' },
    { icon: 'leaf-outline', text: 'Always learning new technologies and frameworks' },
    { icon: 'library-outline', text: 'Avid reader of comics and programming books' },
    { icon: 'airplane-outline', text: 'Love traveling and exploring different cultures' }
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>About Me</Text>
      
      {/* Profile Picture */}
      <View style={styles.profileSection}>
        <Image 
          source={require('../assets/profile.png')} 
          style={styles.profileImage}
        />
        <Text style={styles.name}>{portfolioData.name}</Text>
        <Text style={styles.subtitle}>{portfolioData.title}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Bio</Text>
        <Text style={styles.description}>
          {portfolioData.bio}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills & Technologies</Text>
        <View style={styles.skillsContainer}>
          {portfolioData.skills.map((skill, index) => (
            <View 
              key={index} 
              style={[
                styles.skillTag,
                { backgroundColor: getSkillColor(skill.level) }
              ]}
            >
              <Text style={styles.skillText}>
                {skill.name}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>
        <View style={styles.experienceCard}>
          <Text style={styles.jobTitle}>Mobile Developer</Text>
          <Text style={styles.company}>Worldx technicians</Text>
          <Text style={styles.duration}>2022 - Present</Text>
          <Text style={styles.jobDescription}>
            • I developed cross-platform mobile applications && Web Apps.{"\n"}
            • Collaborated with design teams to create intuitive user interfaces.{"\n"}
            • Implement solutions and optimized app performance.
          </Text>
        </View>

        <View style={styles.experienceCard}>
          <Text style={styles.jobTitle}>Website Developer</Text>
          <Text style={styles.company}>Worldx technicians</Text>
          <Text style={styles.duration}>2022 - present</Text>
          <Text style={styles.jobDescription}>
            • Built and maintained React Native components.{"\n"}
            • Assisted in API integration and bug fixing.{"\n"}
            • Participated in code reviews and team meetings
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Education Background</Text>
        <View style={styles.educationCard}>
          <Text style={styles.degree}>Bachelor of Science in Computer Science</Text>
          <Text style={styles.school}>Arusha Technical College  (ATC)</Text>
          <Text style={styles.educationDuration}>2022 - 2025</Text>
          <Text style={styles.educationDescription}>
            • Focused on Software Engineering and Mobile Development.{"\n"}
            • Graduated with Second Higher Class Honors.{"\n"}
            • President of Mobile Development && Web App Club.
          </Text>
        </View>

        <View style={styles.educationCard}>
          <Text style={styles.degree}>React Native & Expo Certification</Text>
          <Text style={styles.school}>Meta Advanced Programming</Text>
          <Text style={styles.educationDuration}>2023</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}> Technical Certifications</Text>
        <View style={styles.certificationCard}>
          <Text style={styles.certTitle}>AWS Certified Developer</Text>
          <Text style={styles.certOrg}>Amazon Web Services</Text>
          <Text style={styles.certDuration}>2024</Text>
        </View>

        <View style={styles.certificationCard}>
          <Text style={styles.certTitle}>React Native Professional</Text>
          <Text style={styles.certOrg}>Meta Certification Program</Text>
          <Text style={styles.certDuration}>2024</Text>
        </View>

        <View style={styles.certificationCard}>
          <Text style={styles.certTitle}>TypeScript Mastery</Text>
          <Text style={styles.certOrg}>Microsoft Developer Network</Text>
          <Text style={styles.certDuration}>2023</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Fun Facts</Text>
        <View style={styles.funFactsCard}>
          {funFacts.map((fact, index) => (
            <View key={index} style={styles.funFactItem}>
              <Ionicons name={fact.icon} size={20} color="#0088cc" style={styles.funFactIcon} />
              <Text style={styles.funFact}>{fact.text}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Information</Text>
        
        <TouchableOpacity 
          style={styles.contactItem}
          onPress={handleEmailPress}
        >
           <Ionicons name="mail" size={20} color="orange" style={styles.funFactIcon} />
          <Text style={styles.contactLabel}>Email:</Text>
          <Text style={styles.contactValue}>{portfolioData.contact.email}</Text>
        </TouchableOpacity>

        {portfolioData.contact.phone && (
          <TouchableOpacity 
            style={styles.contactItem}
            onPress={handlePhonePress}
          >
            <Ionicons name="call" size={20} color="orange" style={styles.funFactIcon} />
            <Text style={styles.contactLabel}>Phone:</Text>
            <Text style={styles.contactValue}>{portfolioData.contact.phone}</Text>
          </TouchableOpacity>
        )}

        {portfolioData.contact.linkedin && (
          <TouchableOpacity 
            style={styles.contactItem}
            onPress={handleLinkedInPress}
          >
            <Ionicons name="logo-linkedin" size={20} color="#0088cc" style={styles.funFactIcon} />
            <Text style={styles.contactLabel}>LinkedIn:</Text>
            <Text style={[styles.contactValue, styles.link]}>Let's Connect
            </Text>
          </TouchableOpacity>
        )}

        {portfolioData.contact.github && (
          <TouchableOpacity 
            style={styles.contactItem}
            onPress={handleGitHubPress}
          >
            <Ionicons name="logo-github" size={20} color="#0" style={styles.funFactIcon} />
            <Text style={styles.contactLabel}>GitHub:</Text>
            <Text style={[styles.contactValue, styles.link]}>
              View Profile
            </Text>
          </TouchableOpacity>
        )}
        {portfolioData.contact.telegram && (
          <TouchableOpacity 
            style={styles.contactItem}
            onPress={handleTelegramPress}
          >
           <FontAwesome name="telegram" size={24} color="#0088cc" style={styles.funFactIcon} />
            <Text style={styles.contactLabel}>Telegram:</Text>
            <Text style={[styles.contactValue, styles.link]}>Message Me
            </Text>
          </TouchableOpacity>
        )}
          {portfolioData.contact.github && (
          <TouchableOpacity 
            style={styles.contactItem}
            onPress={handleLocationPress}
          >
           <FontAwesome name="map-marker" size={24} color="orange" style={styles.funFactIcon} />
            <Text style={styles.contactLabel}>Location:</Text>
            <Text style={[styles.contactValue, styles.link]}> {portfolioData.contact.location} 
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <Link href="/" asChild>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>Back Home</Text>
        </TouchableOpacity>
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor: '#fff',
    padding: 20,
    maxWidth: 600,
    alignSelf: 'center', 
    width: '100%', 
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 50,
    textAlign: 'center',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: '#007AFF',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillTag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    margin: 4,
  },
  skillText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  experienceCard: {
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderLeftWidth: 3,
    borderLeftColor: '#007AFF',
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  company: {
    fontSize: 16,
    color: '#007AFF',
    marginBottom: 2,
  },
  duration: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    fontStyle: 'italic',
  },
  jobDescription: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  educationCard: {
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderLeftWidth: 3,
    borderLeftColor: '#28a745',
  },
  degree: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#28a745',
  },
  school: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  educationDuration: {
    fontSize: 12,
    color: '#888',
    marginBottom: 8,
    fontStyle: 'italic',
  },
  educationDescription: {
    fontSize: 13,
    color: '#555',
    lineHeight: 18,
  },
  certificationCard: {
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    padding: 14,
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 3,
    borderLeftColor: '#ffc107',
  },
  certTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#856404',
  },
  certOrg: {
    fontSize: 13,
    color: '#666',
    marginBottom: 2,
  },
  certDuration: {
    fontSize: 12,
    color: '#888',
    fontStyle: 'italic',
  },
  funFactsCard: {
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    padding: 16,
    borderRadius: 8,
    borderLeftWidth: 3,
    borderLeftColor: 'cyan',
  },
  funFactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  funFactIcon: {
    marginRight: 12,
  },
  funFact: {
    fontSize: 14,
    color: '#2d5016',
    lineHeight: 20,
    flex: 1,
  },
  contactItem: {
    flexDirection: 'row',
    marginBottom: 12,
    padding: 12,
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    borderRadius: 8,
    alignItems: 'center',
  },
  contactLabel: {
    fontSize: 16,
    fontWeight: '600',
    width: 80,
    color: '#333',
  },
  contactValue: {
    fontSize: 16,
    color: '#666',
    flex: 1,
  },
  link: {
    color: '#007AFF',
  },
  backButton: {
    backgroundColor: '#0088cc',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 20,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});