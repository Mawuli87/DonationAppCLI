import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import globalStyle from '../../assets/style/globalStyle';
import Header from '../../components/header/Header';
import Button from '../../components/button/Button';
import Tab from '../../components/tabs/Tab';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title={'Azzahri A.'} type={1} />
      <Tab title={'Highlight'} />
      <Tab title={'Highlight'} isInactive={true} />
    </SafeAreaView>
  );
};

export default Home;
