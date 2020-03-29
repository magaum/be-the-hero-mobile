import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import { Feather } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo.png';
import styles from './styles';

import api from '../../services/api'

export default function Caso() {
  const navigation = useNavigation();
  const [casos, setCasos] = useState([]);
  const [total, setTotal] = useState(0);

  function navigateToDetalhe(caso) {
    navigation.navigate('Detalhes', { caso });
  }

  async function loadCasos() {
    const response = await api.get('casos');
    setCasos(response.data);
    const total = response.headers['x-total-count'];

    if (total > 0)
      setTotal(total);
  }

  useEffect(() => {
    loadCasos();
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text>
          Total de <Text style={styles.headerTextBold}>{total} casos</Text>.
        </Text>
      </View>

      <Text style={styles.title}>Bem vindo!</Text>
      <Text style={styles.title}>Escolha um dos casos!</Text>

      <FlatList
        data={casos}
        keyExtractor={caso => String(caso.id)}
        showsVerticalScrollIndicator={false}
        style={styles.casos}
        renderItem={({ item: caso }) => (
          <View style={styles.caso}>
            <Text style={styles.casoProperty}>ONG:</Text>
            <Text style={styles.casoValue}>{caso.nome}</Text>

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

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigateToDetalhe(caso)}>
              <Text style={styles.detailsButtonText}>
                Ver mais detalhes
            </Text>
              <Feather name="arrow-right" size={16} color="#E02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
}