import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ActivityIndicator, Text, Button, Dialog, Portal } from 'react-native-paper';

interface StatusHandlerProps {
  isLoading: boolean;
  errorMessage: string | null;
  onRetry: () => void;
  children: React.ReactNode;
}

const StatusHandler: React.FC<StatusHandlerProps> = ({ isLoading, errorMessage, onRetry, children }) => {
  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator animating={true} size="large" />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  if (errorMessage) {
    return (
      <Portal>
        <Dialog visible={true} onDismiss={() => {}}>
          <Dialog.Title style={styles.errorTitle}>Error</Dialog.Title>
          <Dialog.Content>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={onRetry}>Retry</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    );
  }

  return <>{children}</>;
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
  },
  errorTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#D32F2F',
  },
  errorMessage: {
    fontSize: 14,
    marginBottom: 10,
  },
});

export default StatusHandler;
