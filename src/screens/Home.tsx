import {FlatList, SafeAreaView, StyleSheet, Text} from 'react-native';
import {QuizeItem} from '../components';
import {quizzes} from '../constants/mock';
import {COLORS} from '../constants/theme';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sports quizzes ⚽</Text>
      <FlatList
        data={quizzes}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => `${item.id}`}
        renderItem={item => <QuizeItem quiz={item.item} />}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: '500',
    color: COLORS.primaryText,
    textAlign: 'right',
    paddingVertical: 12,
    paddingHorizontal: 24
  },
});

export default Home;
