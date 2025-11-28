// app/projects.tsx
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { Link } from 'expo-router';
import { portfolioData } from './data/portifolioData';

export default function ProjectsScreen() {
  const handleProjectPress = (githubUrl?: string) => {
    if (githubUrl) {
      Linking.openURL(githubUrl);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Projects</Text>
      
      <ScrollView style={styles.scrollView}>
        {portfolioData.projects.map((project) => (
          <TouchableOpacity
            key={project.id}
            style={styles.projectCard}
            onPress={() => handleProjectPress(project.githubUrl)}
          >
            <Text style={styles.projectTitle}>{project.title}</Text>
            <Text style={styles.projectDescription}>{project.description}</Text>
            
            <View style={styles.technologiesContainer}>
              {project.technologies.map((tech, index) => (
                <View key={index} style={styles.techTag}>
                  <Text style={styles.techText}>{tech}</Text>
                </View>
              ))}
            </View>
            
            {project.githubUrl && (
              <Text style={styles.githubLink}>View on GitHub →</Text>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Link href="/" asChild>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>Back Home</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor: '#fff',
    padding: 20,
    paddingTop: 60,
       maxWidth: 600,
    alignSelf: 'center', 
    width: '100%', 
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scrollView: {
    flex: 1,
  },
  projectCard: {
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
  },
  projectTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  projectDescription: {
    fontSize: 16,
    color: '#666',
    lineHeight: 22,
    marginBottom: 12,
  },
  technologiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  techTag: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 6,
    marginBottom: 6,
  },
  techText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
  githubLink: {
    color: '#007AFF',
    fontWeight: '600',
  },
  backButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});