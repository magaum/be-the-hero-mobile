import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Detalhe() {
  const navigation = useNavigation();
  const route = useRoute();

  const caso = route.params.caso;
  const message = `Olá ${caso.nome}, estou entrando em contato pois gostaria de ajudar no caso ${caso.titulo} com o valor de ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(caso.valor)}`;

  function navigateBack() {
    navigation.navigate('Casos');
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${caso.titulo}`,
      recipients: [caso.email],
      body: message
    })
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=55${caso.whatsapp}&text=${message}`);
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
        <Text style={styles.casoValue}>{caso.nome} de {caso.cidade}/{caso.uf}</Text>

        <Text style={styles.casoProperty}>Caso:</Text>
        <Text style={styles.casoValue}>{caso.titulo}</Text>

        <Text style={styles.casoProperty}>Valor:</Text>
        <Text style={styles.casoValue}>{
          Intl.NumberFormat('pt-BR',
            {
              style: 'currency',
              currency: 'BRL'
            })
            .format(caso.valor)}
        </Text>
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