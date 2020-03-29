import React from 'react';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import { Feather } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Detalhe() {
  const navigation = useNavigation();
  const message = 'VAI SEGURANDO MANO';

  function navigateBack() {
    navigation.navigate('Casos');
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: 'Herói do caso: Cadelinha atropelada',
      recipients: ['weslei.luiz71@gmail.com'],
      body: message
    })
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=5512981553834&text=${message}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />

        <TouchableOpacity
          onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#E02041" />
        </TouchableOpacity>
      </View >


      <View style={styles.caso}>
        <Text style={[styles.casoProperty, { marginTop: 0 }]}>ONG:</Text>
        <Text style={styles.casoValue}>Apad</Text>

        <Text style={styles.casoProperty}>Caso:</Text>
        <Text style={styles.casoValue}>Cadelinha lasarenta</Text>

        <Text style={styles.casoProperty}>Valor:</Text>
        <Text style={styles.casoValue}>R$ 500,0</Text>

      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o heroi desse caso!</Text>

        <Text style={styles.heroDescription}>Entre em contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity
            onPress={sendWhatsapp}
            style={styles.action}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={sendMail}
            style={styles.action}>
            <Text style={styles.actionText}>Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View >
  )
}