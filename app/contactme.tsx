// app/contact.tsx
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, TextInput } from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';
import { Ionicons,FontAwesome } from '@expo/vector-icons';
import { portfolioData } from './data/portifolioData';
import { triggerLocalNotification } from '../utils/notifications';

export default function ContactScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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
  const handleSubmit = () => {
    if (!name || !email || !message) {
      triggerLocalNotification('Error', 'Please fill in all fields');
      return;
    }

    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    
    Linking.openURL(`mailto:${portfolioData.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    
    setName('');
    setEmail('');
    setMessage('');
    
    triggerLocalNotification('Success', 'Thank you for your message! I will get back to you soon.');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Get In Touch</Text>
      <Text style={styles.subtitle}>
        I'd love to hear from you! Whether you have a project in mind or just want to say hello.
      </Text>

      {/* Contact Form */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Send Me a Message</Text>
        <View style={styles.formCard}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Your Name</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Enter your name"
              placeholderTextColor="#999"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Your Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
              placeholderTextColor="#999"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Your Message</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={message}
              onChangeText={setMessage}
              placeholder="Tell me about your project or just say hello..."
              placeholderTextColor="#999"
              multiline
              numberOfLines={6}
              textAlignVertical="top"
            />
          </View>

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Send Message</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Quick Contact */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Contact</Text>
        
        <TouchableOpacity style={styles.contactCard} onPress={handleEmailPress}>
          <View style={styles.contactIcon}>
            <Ionicons name="mail" size={24} color="orange" />
          </View>
          <View style={styles.contactInfo}>
            <Text style={styles.contactMethod}>Email</Text>
            <Text style={styles.contactDetail}>{portfolioData.contact.email}</Text>
          </View>
        </TouchableOpacity>

        {portfolioData.contact.phone && (
          <TouchableOpacity style={styles.contactCard} onPress={handlePhonePress}>
            <View style={styles.contactIcon}>
              <Ionicons name="call" size={24} color="orange" />
            </View>
            <View style={styles.contactInfo}>
              <Text style={styles.contactMethod}>Phone</Text>
              <Text style={styles.contactDetail}>{portfolioData.contact.phone}</Text>
            </View>
          </TouchableOpacity>
        )}

        {portfolioData.contact.linkedin && (
          <TouchableOpacity style={styles.contactCard} onPress={handleLinkedInPress}>
            <View style={styles.contactIcon}>
              <Ionicons name="logo-linkedin" size={24} color="#0088cc" />
            </View>
            <View style={styles.contactInfo}>
              <Text style={styles.contactMethod}>LinkedIn</Text>
              <Text style={styles.contactDetail}>Connect professionally</Text>
            </View>
          </TouchableOpacity>
        )}

        {portfolioData.contact.github && (
          <TouchableOpacity style={styles.contactCard} onPress={handleGitHubPress}>
            <View style={styles.contactIcon}>
              <Ionicons name="logo-github" size={24} color="black" />
            </View>
            <View style={styles.contactInfo}>
              <Text style={styles.contactMethod}>GitHub</Text>
              <Text style={styles.contactDetail}>View my projects</Text>
            </View>
          </TouchableOpacity>
        )}

        {portfolioData.contact.telegram && (
          <TouchableOpacity style={styles.contactCard} onPress={handleTelegramPress}>
            <View style={styles.contactIcon}>
              <FontAwesome name="telegram" size={24} color="#0088cc" />
            </View>
            <View style={styles.contactInfo}>
              <Text style={styles.contactMethod}>Telegram</Text>
              <Text style={styles.contactDetail}>Message me</Text>
            </View>
          </TouchableOpacity>
        )}
          {portfolioData.contact.location && (
          <TouchableOpacity style={styles.contactCard} onPress={handleLocationPress}>
            <View style={styles.contactIcon}>
              <FontAwesome name="map-marker" size={24} color="orange" />
            </View>
            <View style={styles.contactInfo}>
              <Text style={styles.contactMethod}>Location</Text>
              <Text style={styles.contactDetail}>{portfolioData.contact.location}</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>

      {/* Response Time */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>What to Expect</Text>
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}><Ionicons name="rocket-outline" size={20} color={'red'}/> Quick Response</Text>
          <Text style={styles.infoText}>
            I typically respond to all messages within 24 hours. 
            Feel free to reach out anytime!
          </Text>
          
          <Text style={styles.infoTitle}><Ionicons name="bulb-outline" size={20} color={'#f4d302ff'}/> Let's Collaborate</Text>
          <Text style={styles.infoText}>
            Whether it's a new project, collaboration opportunity, 
            or just tech discussion - I'm always open to interesting conversations.
          </Text>
          
          <Text style={styles.infoTitle}><FontAwesome name="globe" size={20} color={'#0088cc'}/> Availability</Text>
          <Text style={styles.infoText}>
            Available for freelance projects, full-time opportunities, 
            and open-source collaborations.
          </Text>
        </View>
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
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 50,
    textAlign: 'center',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 30,
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
  formCard: {
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    padding: 20,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#333',
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  contactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#007AFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
   
  },
  contactIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  contactInfo: {
    flex: 1,
  },
  contactMethod: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  contactDetail: {
    fontSize: 14,
    color: '#666',
  },
  infoCard: {
    backgroundColor: '#e8f5e8',
    padding: 20,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#28a745',
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2d5016',
    marginBottom: 8,
    marginTop: 12,
  },
  infoText: {
    fontSize: 14,
    color: '#2d5016',
    lineHeight: 20,
    marginBottom: 15,
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