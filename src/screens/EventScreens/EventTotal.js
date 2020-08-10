import React from 'react';
import {
    Text, View, ScrollView, Image, Dimensions, StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { texts, size } from '../../constant/CommonStyles';
import { PRIMARY_COLOR, GRAY_FONTCOLOR, WHITE } from '../../constant/Colors';
import { scale } from '../../constant/Scale';

const containerW = Dimensions.get('window').width;
const containerH = Dimensions.get('window').height;

class EventTotal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    _renderEventMonth(month, image, data) {
        return (
            <View style={styles.monthContainer}>
                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        resizeMode={'contain'}
                        style={{ width: containerH, height: scale(150) }}
                        source={{
                            uri: image,
                        }} />
                </View>
                <View style={{ width: '100%', paddingRight: scale(10) }}>
                    {data.map((item, index) => {
                        return this._oneDay(item.day, item.date, item.events, item.theme)
                    })}
                </View>
            </View>
        )
    }
    _oneDay(day, date, events, theme) {
        return (
            <View style={styles.dayContainer}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={[texts.h5, { color: PRIMARY_COLOR, marginBottom: scale(5) }]}>{day}</Text>
                    <View style={[size.xsm, { backgroundColor: theme, justifyContent: 'center', borderRadius: scale(999), alignItems: 'center' }]}>
                        <Text>{date}</Text>
                    </View>
                </View>
                <View style={{ flex: 3.5 }}>
                    {
                        events.map((item, index) => {
                            return (
                                <View style={[styles.eventsContainer, { backgroundColor: item.themeEvent, flexDirection: (!item.timeStart && !item.timeEnd) ? 'row' : 'column' }]}>
                                    <Text
                                        style={[texts.xsm, { color: WHITE }]}
                                    >
                                        {item.name}
                                    </Text>
                                    {
                                        !item.timeStart && !item.timeEnd ? <Text
                                            style={[texts.xsm, { color: WHITE, marginLeft: scale(5) }]}
                                        >(Cả ngày)</Text> : null
                                    }
                                    {
                                        item.timeStart ? <Text
                                            style={[texts.xsm, { color: WHITE }]}
                                        >Bắt đầu: {item.timeStart}</Text> : null
                                    }

                                    {
                                        item.timeEnd ? <Text
                                            style={[texts.xsm, { color: WHITE }]}
                                        >Kết thúc: {item.timeEnd}</Text> : null
                                    }

                                </View>
                            )
                        })
                    }
                </View>
            </View>
        )
    }
    render() {
        let dataEventTotal = [
            {
                month: 7,
                image: 'https://banner2.cleanpng.com/20180807/ola/kisspng-clip-art-chesterbrook-academy-preschool-image-july-july-2015-newsletter-ccs-new-england-5b697fe4ca4b42.7090749715336406768286.jpg',
                data: [
                    {
                        date: '21',
                        day: 'Thứ 4',
                        theme: PRIMARY_COLOR,
                        events: [
                            {
                                name: 'Lễ bế giảng',
                                timeStart: '8:00 AM',
                                themeEvent: 'blue'
                            },
                            {
                                name: 'Sinh nhật B',
                                timeStart: '8:00 AM',
                                themeEvent: 'green'
                            },
                            {
                                name: 'Lễ bế giảng',
                                timeStart: '8:00 AM',
                                themeEvent: 'blue'
                            },
                            {
                                name: 'Sinh nhật B',
                                timeStart: '8:00 AM',
                                themeEvent: 'green'
                            },
                            {
                                name: 'Lễ bế giảng',
                                timeStart: '8:00 AM',
                                themeEvent: 'blue'
                            },
                            {
                                name: 'Sinh nhật B',
                                timeStart: '8:00 AM',
                                themeEvent: 'green'
                            },
                        ],

                    },
                    {
                        date: '22',
                        day: 'Thứ 5',
                        theme: PRIMARY_COLOR,
                        events: [
                            {
                                name: 'Lễ bế giảng',
                                themeEvent: 'blue'

                            },
                            {
                                name: 'Sinh nhật B',
                                timeEnd: '16:00PM',
                                themeEvent: 'green'
                            }
                        ]
                    },
                    {
                        date: '23',
                        day: 'Thứ 6',
                        theme: PRIMARY_COLOR,
                        events: [
                            {
                                name: 'Lễ bế giảng',
                                timeEnd: '20:00PM',
                                themeEvent: 'blue'
                            },

                        ]
                    },

                ]
            },

            {
                month: 8,
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRgZb8W3WwUfNana6HkGjhcg1bAAIx_bmqPjA&usqp=CAU',
                data: [
                    {
                        date: '21',
                        day: 'Thứ 4',
                        theme: PRIMARY_COLOR,
                        events: [
                            {
                                name: 'Sinh nhật B',
                                timeStart: '8:00 AM',
                                themeEvent: 'green'
                            },
                        ],

                    },
                    {
                        date: '22',
                        day: 'Thứ 5',
                        theme: PRIMARY_COLOR,
                        events: [
                            {
                                name: 'Lễ bế giảng',
                                themeEvent: 'blue'

                            },
                            {
                                name: 'Sinh nhật B',
                                timeEnd: '16:00PM',
                                themeEvent: 'green'
                            }
                        ]
                    },
                    {
                        date: '23',
                        day: 'Thứ 6',
                        theme: PRIMARY_COLOR,
                        events: [
                            {
                                name: 'Lễ bế giảng',
                                timeEnd: '20:00PM',
                                themeEvent: 'blue'
                            },

                        ]
                    },

                ]
            },

       


        ]
        return (
            <ScrollView
            contentContainerStyle={{backgroundColor:WHITE}}
                showsVerticalScrollIndicator={false}
            >
                {
                    dataEventTotal.map((item, index) => {
                        return this._renderEventMonth(item.month, item.image, item.data)
                    })
                }
                <View style={{ marginBottom: scale(30) }}></View>
            </ScrollView>
        )

    }
}
const styles = StyleSheet.create({
    monthContainer: {
        width: '100%',
        marginTop: scale(20),
        justifyContent: 'center',
        alignItems: 'center'
    },
    dayContainer: {
        width: '100%',
        marginTop: scale(10),
        marginBottom: scale(10),
        flexDirection: 'row',
        alignItems: 'center'
    },
    eventsContainer: {
        marginTop: scale(15),
        padding: scale(10),
        borderRadius: scale(5),
    }
})
export default EventTotal;
