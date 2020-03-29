import React from 'react';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import { Feather } from "@expo/vector-icons";

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Caso() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text>
          Total de <Text style={styles.headerTextBold}>0 casos</Text>.
        </Text>
      </View>

      <Text style={styles.title}>Bem vindo!</Text>
      <Text style={styles.title}>Escolha um dos casos!</Text>

      <FlatList
        data={[1, 2, 3]}
      />

      <View style={styles.casos}>
        <View style={styles.caso}>
          <Text style={styles.casoProperty}>ONG:</Text>
          <Text style={styles.casoValue}>Apad</Text>

          <Text style={styles.casoProperty}>Caso:</Text>
          <Text style={styles.casoValue}>Cadelinha lasarenta</Text>

          <Text style={styles.casoProperty}>Valor:</Text>
          <Text style={styles.casoValue}>R$ 500,0</Text>

          <TouchableOpacity
            style={styles.detailsButton}
            onPress={() => { }}>
            <Text style={styles.criarbutton}>
              Ver mais detalhes
            </Text>
            <Feather name="arrow-right" size={16} color="#E02041" />
          </TouchableOpacity>
        </View><View style={styles.caso}>
          <Text style={styles.casoProperty}>ONG:</Text>
          <Text style={styles.casoValue}>Apad</Text>

          <Text style={styles.casoProperty}>Caso:</Text>
          <Text style={styles.casoValue}>Cadelinha lasarenta</Text>

          <Text style={styles.casoProperty}>Valor:</Text>
          <Text style={styles.casoValue}>R$ 500,0</Text>

          <TouchableOpacity
            style={styles.detailsButton}
            onPress={() => { }}>
            <Text style={styles.criarbutton}>
              Ver mais detalhes
            </Text>
            <Feather name="arrow-right" size={16} color="#E02041" />
          </TouchableOpacity>
        </View><View style={styles.caso}>
          <Text style={styles.casoProperty}>ONG:</Text>
          <Text style={styles.casoValue}>Apad</Text>

          <Text style={styles.casoProperty}>Caso:</Text>
          <Text style={styles.casoValue}>Cadelinha lasarenta</Text>

          <Text style={styles.casoProperty}>Valor:</Text>
          <Text style={styles.casoValue}>R$ 500,0</Text>

          <TouchableOpacity
            style={styles.detailsButton}
            onPress={() => { }}>
            <Text style={styles.criarbutton}>
              Ver mais detalhes
            </Text>
            <Feather name="arrow-right" size={16} color="#E02041" />
          </TouchableOpacity>
        </View><View style={styles.caso}>
          <Text style={styles.casoProperty}>ONG:</Text>
          <Text style={styles.casoValue}>Apad</Text>

          <Text style={styles.casoProperty}>Caso:</Text>
          <Text style={styles.casoValue}>Cadelinha lasarenta</Text>

          <Text style={styles.casoProperty}>Valor:</Text>
          <Text style={styles.casoValue}>R$ 500,0</Text>

          <TouchableOpacity
            style={styles.detailsButton}
            onPress={() => { }}>
            <Text style={styles.detailsButtonText}>
              Ver mais detalhes
            </Text>
            <Feather name="arrow-right" size={16} color="#E02041" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}