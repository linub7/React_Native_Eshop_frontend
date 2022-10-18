import { useEffect, useState } from 'react';
import { View, Dimensions, Image, ScrollView, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

const Banner = () => {
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    setBannerData([
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmyGfkTJcD2oI52hbXQ8OaPTqQTBUQIP9Bg1sJ3Jy6Jum5iSXOoUi_LlnI4iwwEqlxG4g&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvIFNXi6KQuLHFDznLU-CYjQKpNWTeybaGG6lv3aEXqJmAqqXfObwiD2BicuRTr-Sp9Ow&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDtJjYzH7Hj2Nj8J4Ei13RMUPW34O57hA7HEqQYCz91SZj73XkC60GLi_QespOykU0vws&usqp=CAU',
    ]);

    return () => {
      setBannerData([]);
    };
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.swiper}>
          <Swiper
            style={{ height: width / 2 }}
            showsButtons={false}
            autoplay={true}
            autoplayTimeout={2}
            showsPagination={false}
          >
            {bannerData.map((item, i) => (
              <Image
                key={i}
                source={{ uri: item }}
                resizeMode="contain"
                style={styles.bannerImage}
              />
            ))}
          </Swiper>

          <View style={{ height: 20 }}></View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  swiper: {
    width: width,
    alignItems: 'center',
    marginTop: 10,
  },
  bannerImage: {
    height: width / 2,
    width: width - 40,
    borderRadius: 10,
    marginHorizontal: 10,
  },
});

export default Banner;
