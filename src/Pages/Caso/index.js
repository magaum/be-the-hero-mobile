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
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  function navigateToDetalhe(caso) {
    navigation.navigate('Detalhes', { caso });
  }

  async function loadCasos() {

    if (loading)
      return;

    console.log(casos.length)
    if (total > 0 && casos.length === total)
      return;

    setLoading(true);
    console.log(page);
    const response = await api.get('casos', {
      params: { page }
    });

    setCasos([...casos, ...response.data]);
    setTotal(response.headers['x-total-count']);
    setPage(page + 1);
    setLoading(false);
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
        onEndReached={loadCasos}
        onEndReachedThreshold={0.2}
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